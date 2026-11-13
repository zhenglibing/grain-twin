# zh 语言基础设施 + 批次①（外壳）实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为 MillOS 增加简体中文（zh）语言：管道、播种、进度计量、门控修正、切换器全部就绪，并完成批次①外壳（顶栏/侧栏/dock/Overview/Settings/LoadingScreen）的中文翻译与浏览器实测。

**Architecture:** zh 与 pt-BR 同等编译期强制（`MessageCatalog` 三语齐备）；一次性 TS-AST codemod 把全部 `defineMessages` 目录的 en 块复制为 zh 占位，之后逐文件替换为中文译文；缺译期间 zh 渲染英文（播种即英文，视觉零变化）；Chronicle 历史记录展示门控改为仅 pt-BR 套用翻译。

**Tech Stack:** TypeScript 5.9 / React 19 / Vite 7 / vitest / typescript 编译器 API（codemod）/ puppeteer（冒烟）。

**范围说明：** 本计划覆盖规格（`docs/superpowers/specs/2026-11-13-zh-locale-design.md`）的管道与批次①。批次②–⑥（SCADA 工作区、生产/安全、长尾、Chronicle、仿真/报警）每批各自出一份计划，沿用本计划的管道、进度脚本与术语表。

## Global Constraints

- 英文渲染输出逐字节不变（项目红线）；pt-BR 行为与文案不做任何改动
- 测试一律以英文运行（`tests run in English`）；现有测试不得因 zh 改动而失败
- 永不翻译清单（`src/i18n/GLOSSARY.md`）：SCADA 点位号（`RM101.TT001.PV`）、设备编号、专有名词、歌词、涂装/铭牌文字、agent 协议、日志
- 文案禁用 emoji，图标用 lucide-react；`npm run format`（prettier）必须在提交前通过
- 每个 commit 必须 `npm run typecheck` 与相关 vitest 绿色
- 中文文案规则（全部批次适用）：
  1. `{name}` 占位符原样保留，名称拼写不变
  2. 函数消息保持函数，参数解构签名与 en 完全一致
  3. 中文全角标点（，。：；！？（）），占位符、点位号、单位符号保持半角
  4. 中文与英文/数字之间加一个半角空格（盘古之白），如 `产量 0 袋/时`
  5. 数字一律半角；百分比写 `73%` 不写 `73％`
  6. 术语以 Task 6 的中文术语表为准
- 开发服务器：`npm run dev` → `http://127.0.0.1:3000/`（本仓库 host 固定 127.0.0.1）
- 提交信息末尾加：`Co-Authored-By: Claude Code <noreply@anthropic.com>`
- 工作分支：`feat/zh-locale`（已建）

---

### Task 1: zh 语言标识与检测

**Files:**
- Modify: `src/i18n/index.ts`
- Test: `src/i18n/__tests__/i18n.test.ts`

**Interfaces:**
- Consumes: 现有 `normalizeLocale` / `detectLocale` / `LOCALES` / `LOCALE_LABELS`（`src/i18n/index.ts:21-42`）
- Produces: `LOCALES = ['en', 'pt-BR', 'zh']`；`normalizeLocale('zh-CN')` → `'zh'`；`LOCALE_LABELS.zh = '简体中文'`。后续所有任务依赖这三个导出的新形态

- [ ] **Step 1: 写失败测试**

在 `src/i18n/__tests__/i18n.test.ts` 的 `describe('locale detection')` 内，紧跟现有 normalizeLocale 测试之后追加：

```ts
  it('treats every zh tag as zh', () => {
    expect(normalizeLocale('zh')).toBe('zh');
    expect(normalizeLocale('zh-CN')).toBe('zh');
    expect(normalizeLocale('zh_tw')).toBe('zh');
    expect(normalizeLocale('zh-Hans-CN')).toBe('zh');
    expect(normalizeLocale('zh-SG')).toBe('zh');
  });
```

并在 `'prefers a shared ?lang= link, then a saved choice, then English for jsdom'` 测试的 `window.localStorage.setItem(LOCALE_STORAGE_KEY, 'pt-BR');` 断言块之后追加：

```ts
    window.localStorage.setItem(LOCALE_STORAGE_KEY, 'zh');
    expect(detectLocale()).toBe('zh');
```

- [ ] **Step 2: 运行测试确认失败**

Run: `npx vitest run src/i18n/__tests__/i18n.test.ts`
Expected: FAIL（`normalizeLocale('zh')` 返回 `null`，期望 `'zh'`）

- [ ] **Step 3: 实现**

`src/i18n/index.ts` 改动（保持其余内容不动）：

第 3-4 行文件头注释改为：

```ts
/**
 * MillOS interface language: English, Brazilian Portuguese and Simplified Chinese.
```

第 21-30 行：

```ts
export const LOCALES = ['en', 'pt-BR', 'zh'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
/** Excluded from Reset Simulation's millos-* sweep: language is a person, not a shift. */
export const LOCALE_STORAGE_KEY = 'millos-locale';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  'pt-BR': 'Português (Brasil)',
  zh: '简体中文',
};
```

第 35-42 行 `normalizeLocale`（含注释）：

```ts
/** Accepts 'pt', 'pt-BR', 'pt_br', 'PT-PT' as Portuguese and 'zh', 'zh-CN', 'zh_TW', 'zh-Hans-CN' as zh; anything else is English. */
export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const lower = value.trim().toLowerCase().replace('_', '-');
  if (lower === 'zh' || lower.startsWith('zh-')) return 'zh';
  if (lower === 'pt' || lower.startsWith('pt-')) return 'pt-BR';
  if (lower === 'en' || lower.startsWith('en-')) return 'en';
  return null;
}
```

`detectLocale` 的 JSDoc（第 61-65 行）末句改为：

```ts
 * language list. Only Portuguese and Chinese are ever inferred; every other
 * language, and every environment without a window, is English.
```

- [ ] **Step 4: 运行测试确认通过**

Run: `npx vitest run src/i18n/__tests__/i18n.test.ts`
Expected: PASS（全部用例）

- [ ] **Step 5: 提交**

```bash
git add src/i18n/index.ts src/i18n/__tests__/i18n.test.ts
git commit -m "feat(i18n): add zh locale tag, labels and browser detection

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 2: 三语类型 + codemod 播种 zh 占位

**Files:**
- Modify: `src/i18n/index.ts`（`MessageCatalog`）
- Create: `scripts/add-locale-zh.mjs`
- Modify: codemod 批量改写全部含 `defineMessages` 的 `src/**/*.{ts,tsx}`（一次性机械 diff）
- Modify: `src/chronicle/eventDeck.ts:20-23`（spread 合并点手工修正）
- Test: `src/i18n/__tests__/i18n.test.ts`（两条 `@ts-expect-error` 用例升级）

**Interfaces:**
- Consumes: Task 1 的三语 `LOCALES`
- Produces: `MessageCatalog<E>` 含必选 `zh: Translation<E>`；全仓库 171 处 `defineMessages` 调用均带结构相同的 zh 块（内容暂为英文副本）；`eventDeck.ts` 的合并目录 zh 侧指向 `...eventDeckMessages['zh']` / `...stewardDeckMessages['zh']`

- [ ] **Step 1: 类型改造**

`src/i18n/index.ts` 第 128-138 行改为：

```ts
export interface MessageCatalog<E extends MessageTable> {
  en: E;
  'pt-BR': Translation<E>;
  zh: Translation<E>;
}

/** Declare a component's copy. pt-BR and zh must define every English key. */
export function defineMessages<E extends MessageTable>(
  catalog: MessageCatalog<E>
): MessageCatalog<E> {
  return catalog;
}
```

第 8-9 行头注释中 `The type of defineMessages() requires every English key in pt-BR, so a missing translation fails tsc.` 改为 `The type of defineMessages() requires every English key in pt-BR and zh, so a missing translation fails tsc.`

- [ ] **Step 2: 写 codemod 脚本**

创建 `scripts/add-locale-zh.mjs`（用 TS AST，不用正则——文案含 `{hours}` 花括号）：

```js
/**
 * One-shot codemod: seed a `zh` block into every defineMessages catalog by
 * structurally copying its `en` block. Seeded zh renders as English, so this
 * changes no visible copy; translations then replace the placeholder per file.
 * Safe to re-run: catalogs that already declare zh are left untouched.
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

function listSourceFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules') continue;
      listSourceFiles(p, acc);
    } else if (/\.tsx?$/.test(entry.name)) {
      acc.push(p);
    }
  }
  return acc;
}

const files = listSourceFiles('src');
let touchedFiles = 0;
let seededCatalogs = 0;
const skipped = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('defineMessages')) continue;

  const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);
  const edits = [];

  const visit = (node) => {
    if (
      ts.isCallExpression(node) &&
      node.expression.getText(sf) === 'defineMessages' &&
      node.arguments.length === 1 &&
      ts.isObjectLiteralExpression(node.arguments[0])
    ) {
      const catalog = node.arguments[0];
      const props = catalog.properties;
      const en = props.find((p) => p.name && p.name.getText(sf) === 'en');
      const zh = props.find((p) => p.name && p.name.getText(sf) === 'zh');
      if (zh) return; // already seeded
      if (!en || !ts.isPropertyAssignment(en) || !ts.isObjectLiteralExpression(en.initializer)) {
        skipped.push(`${file}: defineMessages without an en object literal`);
        return;
      }
      // Insert after en's trailing comma; if en is the last property (no comma
      // before the catalog's closing brace), supply the comma ourselves.
      let insertPos = en.end;
      let needsComma = true;
      while (insertPos < content.length && /[\s,]/.test(content[insertPos])) {
        if (content[insertPos] === ',') {
          insertPos += 1;
          needsComma = false;
          break;
        }
        insertPos += 1;
      }
      edits.push({
        insertPos,
        text: `${needsComma ? ',' : ''}\n  zh: ${en.initializer.getText(sf)},`,
      });
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);

  if (edits.length === 0) continue;
  edits.sort((a, b) => b.insertPos - a.insertPos);
  let out = content;
  for (const edit of edits) {
    out = out.slice(0, edit.insertPos) + edit.text + out.slice(edit.insertPos);
  }
  fs.writeFileSync(file, out);
  touchedFiles += 1;
  seededCatalogs += edits.length;
}

console.log(`Seeded zh into ${seededCatalogs} catalog(s) across ${touchedFiles} file(s).`);
if (skipped.length > 0) {
  console.error('SKIPPED (need a manual zh block):');
  for (const s of skipped) console.error('  ' + s);
  process.exit(1);
}
```

- [ ] **Step 3: 运行 codemod 与格式化**

Run: `node scripts/add-locale-zh.mjs && npm run format`
Expected: `Seeded zh into N catalog(s) across M file(s).`（N≈200+、M≈171，至少 >150；无 SKIPPED 输出、退出码 0）。prettier 会重排全部插入块。

- [ ] **Step 4: 手工修正 spread 合并点（唯一已知：eventDeck.ts）**

`src/chronicle/eventDeck.ts` 第 20-23 行，codemod 给它种下了 `zh: { ...eventDeckMessages.en, ...stewardDeckMessages.en }`（en 的展开副本）。改为镜像 pt-BR 的形态：

```ts
const eventPresentationMessages = defineMessages({
  en: { ...eventDeckMessages.en, ...stewardDeckMessages.en },
  'pt-BR': { ...eventDeckMessages['pt-BR'], ...stewardDeckMessages['pt-BR'] },
  zh: { ...eventDeckMessages['zh'], ...stewardDeckMessages['zh'] },
});
```

再全仓库扫一遍确认无同类（应只剩这一个文件）：

Run: `grep -rn "defineMessages" src --include="*.ts" -l | xargs grep -ln "\.\.\..*\.en" | grep -v ".messages.ts"`
Expected: 空输出（eventDeck.ts 已修）

- [ ] **Step 5: typecheck 全绿**

Run: `npm run typecheck`
Expected: 通过（任何报错 = codemod 漏了的目录；对照报错文件手工补 zh 块后重跑直至全绿）

- [ ] **Step 6: 升级两条编译期用例并运行 i18n 测试**

`src/i18n/__tests__/i18n.test.ts` 中 `refuses a pt-BR table...` 用例替换为：

```ts
  it('refuses a pt-BR table that misses an English key at compile time', () => {
    // @ts-expect-error pt-BR must define every English key
    defineMessages({
      en: { a: 'A', b: 'B' },
      'pt-BR': { a: 'A', b: 'B' },
      zh: { a: 'A', b: 'B' },
    });
  });

  it('refuses a zh table that misses an English key at compile time', () => {
    // @ts-expect-error zh must define every English key
    defineMessages({
      en: { a: 'A', b: 'B' },
      'pt-BR': { a: 'A', b: 'B' },
      zh: { a: 'A' },
    });
  });
```

文件顶部测试用的 `catalog`（`due`/`bags` 两条）codemod 已自动补好 zh 块，保持不动。

Run: `npx vitest run src/i18n/__tests__/i18n.test.ts src/i18n/__tests__/glossary.test.ts`
Expected: PASS（glossary 测试只检查 pt-BR 表，不受影响）

- [ ] **Step 7: 提交**

```bash
git add -A src scripts/add-locale-zh.mjs
git commit -m "feat(i18n): require zh in MessageCatalog and seed zh blocks repo-wide

One-shot TS-AST codemod copies each catalog's en block as the zh placeholder;
rendered copy is unchanged. eventDeck merge mirrors pt-BR spreads.

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 3: 翻译进度脚本

**Files:**
- Create: `scripts/check-zh-progress.mjs`
- Modify: `package.json`（scripts 段）

**Interfaces:**
- Consumes: Task 2 播种后的目录形态（en/zh 属性同名同序不一定，按 key 匹配）
- Produces: `npm run i18n:zh-progress` → 按文件列出 `total/done`、总百分比；`--fail-under=50` 低于 50% 退出码 1。批次②–⑥的任务都用它计量

- [ ] **Step 1: 写脚本**

创建 `scripts/check-zh-progress.mjs`：

```js
/**
 * zh translation progress: a key counts as translated when its zh property
 * source text differs from the en property's. Seeded placeholders (zh === en)
 * count as untranslated. --fail-under=P fails (exit 1) below P percent.
 */
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const failUnder = (() => {
  const flag = process.argv.find((a) => a.startsWith('--fail-under='));
  return flag ? Number(flag.slice('--fail-under='.length)) : null;
})();

function listSourceFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules') continue;
      listSourceFiles(p, acc);
    } else if (/\.tsx?$/.test(entry.name)) {
      acc.push(p);
    }
  }
  return acc;
}

const rows = [];
let total = 0;
let done = 0;

for (const file of listSourceFiles('src')) {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('defineMessages')) continue;
  const sf = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);
  let fileTotal = 0;
  let fileDone = 0;

  const visit = (node) => {
    if (
      ts.isCallExpression(node) &&
      node.expression.getText(sf) === 'defineMessages' &&
      node.arguments.length === 1 &&
      ts.isObjectLiteralExpression(node.arguments[0])
    ) {
      const props = node.arguments[0].properties;
      const en = props.find((p) => p.name && p.name.getText(sf) === 'en');
      const zh = props.find((p) => p.name && p.name.getText(sf) === 'zh');
      if (
        en &&
        zh &&
        ts.isPropertyAssignment(en) &&
        ts.isPropertyAssignment(zh) &&
        ts.isObjectLiteralExpression(en.initializer) &&
        ts.isObjectLiteralExpression(zh.initializer)
      ) {
        for (const enProp of en.initializer.properties) {
          const key = enProp.name && enProp.name.getText(sf);
          if (!key) continue;
          fileTotal += 1;
          const zhProp = zh.initializer.properties.find(
            (p) => p.name && p.name.getText(sf) === key
          );
          if (zhProp && zhProp.getText(sf) !== enProp.getText(sf)) fileDone += 1;
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);

  if (fileTotal > 0) rows.push({ file, total: fileTotal, done: fileDone });
  total += fileTotal;
  done += fileDone;
}

rows.sort((a, b) => a.done / a.total - b.done / b.total || b.total - a.total);
for (const row of rows) {
  const pct = ((row.done / row.total) * 100).toFixed(1).padStart(5);
  console.log(`${pct}%  ${String(row.done).padStart(4)}/${String(row.total).padEnd(4)}  ${row.file}`);
}
const percent = total === 0 ? 100 : (done / total) * 100;
console.log(`\nzh progress: ${done}/${total} (${percent.toFixed(2)}%)`);
if (failUnder !== null && percent < failUnder) {
  console.error(`FAIL: below --fail-under=${failUnder}`);
  process.exit(1);
}
```

- [ ] **Step 2: 挂 npm 别名**

`package.json` scripts 段在 `"lint":` 行前后合适位置加入：

```json
    "i18n:zh-progress": "node scripts/check-zh-progress.mjs",
```

- [ ] **Step 3: 验证输出形态**

Run: `npm run i18n:zh-progress | tail -3`
Expected: 末行形如 `zh progress: 0/NNNN (0.00%)`（N 为全部词条数，应 >8000；百分比 0）

Run: `npm run i18n:zh-progress -- --fail-under=10; echo "exit=$?"`
Expected: `FAIL: below --fail-under=10` + `exit=1`（播种期 0% 必须低于 10）

- [ ] **Step 4: 提交**

```bash
git add scripts/check-zh-progress.mjs package.json
git commit -m "feat(i18n): add zh translation progress meter

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 4: 切换器三按钮 + 数字/大小写 zh 用例

**Files:**
- Modify: `src/i18n/LanguageSwitcher.tsx:33`
- Test: `src/i18n/__tests__/i18n.test.ts`（numbers / casing 两个 describe）

**Interfaces:**
- Consumes: Task 1 的 `LOCALE_LABELS`（三键）；Task 2 播种后 `LanguageSwitcher.tsx` 内 `messages` 已带 zh 块（英文占位）
- Produces: 切换器渲染 EN / PT-BR / 中文 三按钮（compact 模式第三枚标签为 `中文`）；`formatFixed/formatGrouped/capitalizeIn` 的 zh 行为有测试钉住

- [ ] **Step 1: 写失败测试**

`i18n.test.ts` 的 `describe('numbers')` 用例追加断言：

```ts
    expect(formatFixed(6000, 0, 'zh')).toBe('6,000');
    expect(formatFixed(2.5, 1, 'zh')).toBe('2.5');
    expect(formatFixed(Number.NaN, 1, 'zh')).toBe('NaN');
    expect(formatGrouped(8640, undefined, 'zh')).toBe('8,640');
```

`describe('casing')` 用例追加：

```ts
    expect(capitalizeIn('zh')).toBe('');
```

- [ ] **Step 2: 运行确认通过（实现已覆盖，此步防回归）**

Run: `npx vitest run src/i18n/__tests__/i18n.test.ts`
Expected: PASS——`formatFixed` 非 en 分支已走 `Intl.NumberFormat('zh')`，`capitalizeIn` 非 en 已返回 `''`，无需改实现。若有断言失败，按失败值修 `formatFixed/formatGrouped` 的 zh 分支后再跑至绿

- [ ] **Step 3: 切换器三按钮**

`src/i18n/LanguageSwitcher.tsx` 第 33 行改为：

```tsx
          {compact ? (option === 'en' ? 'EN' : option === 'zh' ? '中文' : 'PT-BR') : LOCALE_LABELS[option]}
```

（`LOCALES.map` 自动渲染第三枚按钮，无需其他改动；文件内 `messages` 的 zh 块在 Task 6 一并翻译为 `语言`。）

- [ ] **Step 4: 提交**

```bash
git add src/i18n/LanguageSwitcher.tsx src/i18n/__tests__/i18n.test.ts
git commit -m "feat(i18n): three-button switcher and zh formatting regression tests

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 5: Chronicle 展示门控修正

**Files:**
- Modify: `src/chronicle/presentation.ts`（`localizedNotice` 与 `localizedInitiative` 两处门控）
- Test: `src/chronicle/presentation.test.ts`

**Interfaces:**
- Consumes: `getLocale()`；现门控 `getLocale() === 'en'`（约 :88、:399 两处）
- Produces: 非 pt-BR 语言（含 zh）一律返回英文原记录——zh 不会误穿 pt-BR 剧情；批次⑤接入 zh 记录表时再改回显式分支

- [ ] **Step 1: 写失败测试**

`src/chronicle/presentation.test.ts` 第一个 `it(...)` 之后追加（复用同文件已有的 `receipt` helper 与 `HISTORY_NOTES` 导入）：

```ts
  it('keeps canonical English records under zh until the zh presentation lands', () => {
    const old = receipt(
      'history',
      HISTORY_NOTES[0].title,
      HISTORY_NOTES[0].brief,
      HISTORY_NOTES[0].id
    );
    setLocale('zh');
    expect(localizedNotice(old)).toBe(old);
  });
```

- [ ] **Step 2: 运行确认失败**

Run: `npx vitest run src/chronicle/presentation.test.ts`
Expected: FAIL（现门控把 zh 当非英文，返回了 pt-BR 翻译记录）

- [ ] **Step 3: 修门控**

`src/chronicle/presentation.ts` `localizedNotice`（约 :88）：

```ts
export function localizedNotice(notice: ChronicleNotice): ChronicleNotice {
  // pt-BR is the only locale with translated presentation tables so far; en is
  // canonical and zh falls back to it until the zh tables land.
  if (getLocale() !== 'pt-BR') return notice;
```

`localizedInitiative`（约 :399）：

```ts
export function localizedInitiative(entry: Initiative): Initiative {
  if (getLocale() !== 'pt-BR') return entry;
```

- [ ] **Step 4: 运行确认通过**

Run: `npx vitest run src/chronicle/presentation.test.ts src/chronicle/systemCopy.localization.test.ts`
Expected: PASS（pt-BR 行为不变，zh 回落英文）

- [ ] **Step 5: 提交**

```bash
git add src/chronicle/presentation.ts src/chronicle/presentation.test.ts
git commit -m "fix(chronicle): gate presentation tables to pt-BR so zh sees English records

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 6: 中文术语表与风格规则（GLOSSARY）

**Files:**
- Modify: `src/i18n/GLOSSARY.md`（追加 zh 章节）

**Interfaces:**
- Consumes: 现有 GLOSSARY 的 never-translate 清单
- Produces: 批次①–⑥翻译全部引用的术语基线；后续批次计划直接引用本节

- [ ] **Step 1: 在 `src/i18n/GLOSSARY.md` 末尾追加**

```markdown
## zh（简体中文）术语基线

来自介绍文章的用户验证译法。翻译批次必须逐条对齐；遇到表中没有的词，
先按工业自动化习惯拟定并补进本表再使用。

| English | zh |
|---|---|
| overview | 概览 |
| production | 生产 |
| autonomy | 自治 |
| Chronicle | 磨坊纪事 |
| safety | 安全 |
| settings | 设置 |
| language | 语言 |
| silo | 筒仓 |
| roller mill | 磨辊机 |
| plansifter | 平筛 |
| packer / packing line | 包装线 |
| forklift | 叉车 |
| truck | 卡车 |
| bags/h | 袋/时 |
| target | 目标 |
| running | 运行中 |
| idle | 空闲 |
| maintenance | 维护 |
| Perform Maintenance | 执行维护 |
| wear | 磨损 |
| motor load | 电机负载 |
| temperature | 温度 |
| warning | 警告 |
| breakdown | 故障停机 |
| shift | 班次 |
| alarm | 报警 |
| acknowledge (ACK) | 确认 |
| shelved | 搁置 |
| suppressed | 抑制 |
| tag | 点位 |
| trend | 趋势 |
| historian | 历史库 |
| batch | 批次 |
| lineage | 谱系 |
| quality release | 质量放行 |
| dispatch | 发运 |
| material balance | 物料账 |
| waypoint | 航点 |
| fault injection | 故障注入 |
| sensor fail | 传感器失效 |
| spike | 尖峰 |
| drift | 漂移 |
| stuck value | 卡值 |
| noise | 噪声 |
| level (silo) | 料位 |
| getting started | 新手引导 |
| camera controls | 相机控制 |
| skip tour | 跳过引导 |

zh 风格规则（与计划 Global Constraints 一致）：
1. `{name}` 占位符原样保留；2. 函数消息签名不变；3. 全角标点、
半角占位符与单位；4. 中英之间加半角空格；5. 数字半角。
永不翻译清单沿用上文（点位号、设备编号、专有名词、歌词、涂装文字、
agent 协议、日志），zh 侧同样遵守。
```

- [ ] **Step 2: 提交**

```bash
git add src/i18n/GLOSSARY.md
git commit -m "docs(i18n): add zh terminology baseline and style rules

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 7: 批次①外壳翻译（8 个目录文件）

**Files:**
- Modify: `src/components/LoadingScreen.messages.ts`
- Modify: `src/components/ui-new/GameInterface.messages.ts`（顶栏 Production/Target/SCADA SIMULATED 等）
- Modify: `src/components/ui-new/sidebar/ContextSidebar.messages.ts`
- Modify: `src/components/ui-new/sidebar/MachineInspector.messages.ts`（右侧设备面板：RPM/Motor load/Wear…）
- Modify: `src/components/ui-new/dock/Dock.messages.ts`
- Modify: `src/components/ui-new/hud/StatusHUD.messages.ts`
- Modify: `src/components/ui-new/panels/OverviewPanel.messages.ts`
- Modify: `src/components/ui-new/panels/SettingsPanel.messages.ts`

**Interfaces:**
- Consumes: Task 2 的 zh 占位块；Task 6 的术语表与风格规则
- Produces: 外壳 8 文件 zh 100% 翻译；这 8 个文件的 zh 表即后续批次的格式样板

- [ ] **Step 1: 逐文件翻译**

对每个文件：找到 Task 2 播种的 `zh:` 块（内容为 en 副本），把每个词条的值替换为中文译文。翻译规则（不可违背）：
1. 键名、键序、注释保持不动；只改 zh 侧的值
2. `{hours}` 等占位符原样保留；字符串消息里的换行、前后空格结构保持
3. 函数消息保留函数形态与参数解构签名，仅改返回的字符串分支（中文无单复数时各分支可返回同一句）
4. 术语对齐 Task 6 表（如 `Motor load` → `电机负载`、`Wear` → `磨损`、`Overview` → `概览`）
5. 点位号/设备编号（`RM101`、`Silo Alpha`）保留英文；专有名词 `MillOS` 不译
6. 全角标点；中英之间半角空格（`产量 0 袋/时`）
7. `SCADA SIMULATED` 徽章译为 `SCADA 模拟`（SCADA 保留）

示例（`MachineInspector` 一条，展示目标形态）：

```ts
  zh: {
    // ...
    rpm: '转速',
    motorLoad: '电机负载',
    temperature: '温度',
    wear: '磨损',
    performMaintenance: '执行维护',
    // ...
  },
```

- [ ] **Step 2: 格式化与进度核对**

Run: `npm run format && npm run typecheck && npm run i18n:zh-progress`
Expected: typecheck 通过；进度表中 8 个文件各 `100.0%`，总进度约 `N/8xxx`（N 为 8 文件词条总数，估 600–900）

- [ ] **Step 3: 定向测试**

Run: `npx vitest run src/components/ui-new src/components/LoadingScreen.test.tsx`
Expected: PASS（测试以 en 运行，en 未动；zh 块不参与断言）

- [ ] **Step 4: 提交**

```bash
git add src/components/LoadingScreen.messages.ts src/components/ui-new/GameInterface.messages.ts src/components/ui-new/sidebar/ContextSidebar.messages.ts src/components/ui-new/sidebar/MachineInspector.messages.ts src/components/ui-new/dock/Dock.messages.ts src/components/ui-new/hud/StatusHUD.messages.ts src/components/ui-new/panels/OverviewPanel.messages.ts src/components/ui-new/panels/SettingsPanel.messages.ts
git commit -m "feat(i18n): translate shell chrome (top bar, sidebar, dock, overview, settings) to zh

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 8: 浏览器中文冒烟验证

**Files:**
- Create: `scripts/zh-smoke.mjs`（渲染脚本，按仓库规则取 `.capture.lock`）

**Interfaces:**
- Consumes: Task 7 译文；dev server（`npm run dev`，127.0.0.1:3000）
- Produces: 一条可重复执行的 zh 全页冒烟命令；截图存系统临时目录（不入库）

- [ ] **Step 1: 写脚本**

创建 `scripts/zh-smoke.mjs`：

```js
/**
 * zh smoke test: open the dev server with ?lang=zh in a HEADED Chrome
 * (SwiftShader headless cannot finish scene prep), wait out the loading
 * cover, screenshot, and report whether shell strings render in Chinese.
 * Screenshots go to the OS temp dir and are never committed.
 */
import os from 'node:os';
import path from 'node:path';
import { acquireCaptureLock } from './lib/capture-lock.mjs';

const URL = process.env.SMOKE_URL || 'http://127.0.0.1:3000/?lang=zh';
const MAX_WAIT_MS = 150000;

const lock = await acquireCaptureLock('zh-smoke');
try {
  const puppeteer = (await import('puppeteer')).default;
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--window-size=1920,1080'],
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    const pageErrors = [];
    page.on('pageerror', (e) => pageErrors.push(String(e).slice(0, 300)));

    console.log('navigating to', URL);
    await page.goto(URL, { waitUntil: 'networkidle2', timeout: 180000 });

    const started = Date.now();
    let cleared = false;
    while (Date.now() - started < MAX_WAIT_MS) {
      cleared = await page.evaluate(
        () => !/WARMING UP THE ROLLERS/i.test(document.body.innerText || '')
      );
      if (cleared) break;
      await new Promise((r) => setTimeout(r, 5000));
    }
    console.log('loading cleared:', cleared, 'after', Math.round((Date.now() - started) / 1000), 's');
    await new Promise((r) => setTimeout(r, 8000));

    const text = await page.evaluate(() => document.body.innerText || '');
    const probes = ['概览', '生产', '安全', '设置', '语言'];
    const missing = probes.filter((p) => !text.includes(p));
    const out = path.join(os.tmpdir(), `millos-zh-smoke-${Date.now()}.png`);
    await page.screenshot({ path: out });

    console.log('probes missing:', JSON.stringify(missing));
    console.log('pageErrors:', JSON.stringify(pageErrors.slice(0, 10)));
    console.log('screenshot:', out);
    process.exitCode = missing.length === 0 && pageErrors.length === 0 && cleared ? 0 : 1;
  } finally {
    await browser.close();
  }
} finally {
  await lock.release();
}
```

- [ ] **Step 2: 运行**

前置：dev server 在跑（`curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/` 为 200；否则 `npm run dev` 后台启动）。

Run: `node scripts/zh-smoke.mjs`
Expected: `loading cleared: true`；`probes missing: []`；`pageErrors: []`；退出码 0。有头浏览器窗口会短暂出现在桌面属预期。

- [ ] **Step 3: 人工看截图**

Read 截图文件：顶栏（概览/生产/目标）、右侧设备面板（电机负载/磨损/执行维护）、底部 dock、左侧引导卡应为中文；混排英文词条（未翻译批次）属预期，不算失败。

- [ ] **Step 4: 提交脚本（截图不提交）**

```bash
git status --short   # 确认无截图/临时文件混入
git add scripts/zh-smoke.mjs
git commit -m "test(i18n): add zh browser smoke check with capture lock

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 9: 3D 场景 CJK 字体决策门（spike）

**Files:**
- Create: `public/fonts/NotoSansSC-Regular.ttf`（~11MB，下载；**是否入库由 Step 4 结果决定**）
- Modify: `src/components/shared/SceneText.tsx`（默认字体按 locale 选择）
- Modify: 一个实况 SceneText 标签所属的目录文件（Step 2 的 grep 结果决定，预计一个小型 status/holographic 目录）

**Interfaces:**
- Consumes: `SceneText` 现有 `DEFAULT_3D_FONT = ${import.meta.env.BASE_URL}fonts/Inter-Regular.ttf`；`getLocale()`
- Produces: 决策记录——zh 场景文字走 CJK 字体（保留改动）或保持英文（回退改动并在 GLOSSARY 标注）。批次④/⑤按此执行

- [ ] **Step 1: 下载字体**

```bash
curl -L --fail -o public/fonts/NotoSansSC-Regular.ttf "https://github.com/notofonts/noto-cjk/raw/main/Sans/Variable/TTF/Subset/NotoSansSC-VF.ttf"
ls -la public/fonts/NotoSansSC-Regular.ttf   # 应 >5MB
```

注意：项目要求 glyf TrueType（CFF/OTF 会让 troika 抛错且 `<Text>` 永久 suspend）。上面是 Variable glyf TTF；若 Step 3 出现解析失败/永久加载，改用静态 TTF 重试：
`https://github.com/notofonts/noto-cjk/releases` 下 Sans 静态包内的 `NotoSansSC-Regular.ttf`。

- [ ] **Step 2: 找一个实况翻译场景标签做探针**

Run: `grep -rln "SceneText" src/components --include="*.tsx" | xargs grep -ln "useT\|translate" | head -5`
Expected: 5 个以内文件。选其中**目录文件最小**（词条 <40）的一组组件+messages 文件作为探针（例如某 holographic/status 组件），把该目录 zh 块中 1–2 条会渲染进 3D 场景的短标签译为中文（如 `RUNNING` → `运行中`——若该键在 Task 6 表中，用表内译法）。

- [ ] **Step 3: SceneText 按 locale 换字体**

`src/components/shared/SceneText.tsx`，在 `DEFAULT_3D_FONT` 常量之后加：

```ts
/** zh needs CJK glyphs; Inter has none and troika does not fall back per glyph. */
const DEFAULT_3D_FONT_ZH = `${import.meta.env.BASE_URL}fonts/NotoSansSC-Regular.ttf`;
```

在组件内现有 `font={font ?? DEFAULT_3D_FONT}`（约 :210）改为：

```ts
import { getLocale } from '../../i18n';
```

```tsx
      font={font ?? (getLocale() === 'zh' ? DEFAULT_3D_FONT_ZH : DEFAULT_3D_FONT)}
```

（`getLocale` 为模块级读取即可——字体在挂载时确定；若探针发现语言切换后 3D 标签不刷新，属可接受范围，批次④再改为响应式。）

- [ ] **Step 4: 实测并二选一**

Run: `node scripts/zh-smoke.mjs`（浏览器以 `?lang=zh` 进入）
看截图探针标签处：
- **成功**（中文正常、无豆腐块、场景未卡加载）：保留本任务全部改动，连同字体文件提交：
  ```bash
  git add public/fonts/NotoSansSC-Regular.ttf src/components/shared/SceneText.tsx <探针两个文件>
  git commit -m "feat(i18n): lazy CJK scene font for zh; scene text renders Chinese

  Co-Authored-By: Claude Code <noreply@anthropic.com>"
  ```
- **失败**（豆腐块 / 场景永久 WARMING / pageError 报字体解析）：回退并记录决策：
  ```bash
  git checkout -- src/components/shared/SceneText.tsx <探针两个文件>
  rm public/fonts/NotoSansSC-Regular.ttf
  ```
  然后在 `src/i18n/GLOSSARY.md` zh 章节末尾追加一行 `> 决策（2026-11-14）：3D 场景内文字 zh 暂保持英文（troika CJK 字体解析未通过），DOM UI 不受影响。` 并提交：
  ```bash
  git add src/i18n/GLOSSARY.md
  git commit -m "docs(i18n): record zh 3D scene text decision (English fallback)

  Co-Authored-By: Claude Code <noreply@anthropic.com>"
  ```

---

### Task 10: 收尾全量质量门

**Files:** 无新改动（验证 + 修格式）

- [ ] **Step 1: 全量门**

Run: `npm run build && npm run lint && npm run format:check`
Expected: 全部通过（lint 的 no-restricted-syntax 规则对中文注释无约束；format:check 若失败跑 `npm run format` 后重验）

- [ ] **Step 2: 全量单测**

Run: `npx vitest run`
Expected: PASS 或与主干基线一致的既有失败（记录基线对比；不得出现**新增**失败）

- [ ] **Step 3: 进度汇报**

Run: `npm run i18n:zh-progress | tail -1`
Expected: 输出总进度（约 600–900 条完成）；在批次①计划勾选全部 checkbox 并汇报，批次②计划随后另行制定

---

## Self-Review 记录

1. **Spec 覆盖**：规格 §1→Task 1/4；§2→Task 2/3/4；§3→Task 5；§4→Task 9；§5 批次①→Task 7/8，批次②–⑥另行出计划（计划头已注明）；§6 不做项未引入。文档收尾（CLAUDE.md/README）属全批次终态，留待最后一份计划。
2. **占位符扫描**：Task 9 探针文件由 grep 命令现场确定（命令+判定标准已给全，非 TBD）；其余任务代码完整。
3. **类型一致性**：`MessageCatalog` 三键、`normalizeLocale` 返回 `'zh'`、`LOCALE_LABELS.zh`、`acquireCaptureLock(name)` 签名（scripts/lib/capture-lock.mjs 头注释）在跨任务引用处一致。
