# zh 批次②：SCADA 工作区翻译 + 卫生项 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成批次②——SCADA 工作区 9 个目录文件（475 词条）的中文翻译，并落实批次①终审遗留的全部卫生项（契约测试纳入 typecheck、切换器/CLAUDE.md 三语化、进度脚本 NaN 防护、dock 标签钉入术语表）。

**Architecture:** 沿用批次①管道（三语强制 + 播种占位 + 逐文件替换 + 进度计量），无新架构。卫生项属一次性小改动。

**Tech Stack:** 同项目（React 19 / Vite 7 / TS / vitest）。

## Global Constraints（继承批次①，全文适用）

- 英文渲染输出逐字节不变；pt-BR 不动；测试以英文运行且不因 zh 失败
- 术语对齐 `src/i18n/GLOSSARY.md` zh 章；**coin-before-use**：表中没有的词先按工控习惯拟定并补进本表（同一提交内）再用
- 引号用 “”（GLOSSARY 规则 6，不用「」）；全角标点、半角数字/单位/点位号；盘古之白
- 永不翻译：SCADA 点位号、设备编号、专有名词、歌词、涂装文字、agent 协议、日志
- `{placeholder}` 原样保留；函数消息签名与 en 一致
- 每个 commit `npm run typecheck` 与相关 vitest 绿色；提交尾注 `Co-Authored-By: Claude Code <noreply@anthropic.com>`；工作分支 `main`（批次①已合并，直接在 main 上做，不再开分支——单线程推进、每提交绿色）
- 工作树中约百个幻影 CRLF "M" 文件是已知噪音：不要提交它们，add 时只点名自己的文件
- dev 服务器常驻 3000 端口（会话后台），勿杀勿重启

## 词汇基线（本批次新增拟定，翻译时先入 GLOSSARY 再用）

| English | zh（拟定） |
|---|---|
| setpoint | 设定值 |
| connections | 连接 |
| protocol | 协议 |
| layout planning | 布局规划 |
| current layout / proposed layout | 当前方案 / 提议方案 |
| active seconds | 作业秒数 |
| historian | 历史库（已有） |
| acknowledge/shelve/suppress | 确认/搁置/抑制（已有） |
| tag / trend / alarm | 点位/趋势/报警（已有） |
| sensor fail / spike / drift / stuck value / noise | 传感器失效/尖峰/漂移/卡值/噪声（已有） |
| dock short label (SCADA workspace) | SCADA 系统（Task 1 钉入） |

---

### Task 1: 卫生项 A — 切换器、CLAUDE.md、dock 标签钉入

**Files:**
- Modify: `src/i18n/LanguageSwitcher.tsx`（zh 值 + JSDoc）
- Modify: `CLAUDE.md`（`## Interface Language` 节，:425 起）
- Modify: `src/i18n/GLOSSARY.md`（追加 1 行术语）

**Interfaces:**
- Produces: 切换器 aria-label 中文；CLAUDE.md 描述三语契约（批次②-⑥每个代理都会读它）；dock 标签决策记录在案

- [ ] **Step 1: LanguageSwitcher 两处**

zh 值：`zh: { language: 'Language' }` → `zh: { language: '语言' }`；
JSDoc：`/** Two-button language choice; each label is written in its own language. */` → `/** Three-button language choice; each label is written in its own language. */`

- [ ] **Step 2: CLAUDE.md `## Interface Language` 节改写**

标题改为 `## Interface Language (English, Brazilian Portuguese, Simplified Chinese)`；首条 bullet 的代码示例改为 `defineMessages({ en: {...}, 'pt-BR': {...}, zh: {...} })`，强制句改为 `pt-BR and zh must define every English key, or tsc fails.`；`Language comes from` bullet 改为 `?lang=zh/pt-BR` 措辞；节末追加一句：`zh falls back to English for any key not yet translated (progress: npm run i18n:zh-progress); terminology contract lives in src/i18n/GLOSSARY.md.`。其余 bullet 不动。

- [ ] **Step 3: GLOSSARY zh 表追加一行**（按字母序插入合适位置）

```markdown
| SCADA (dock short label) | SCADA 系统 |
```

- [ ] **Step 4: 验证 + 提交**

Run: `npm run typecheck && npx vitest run src/i18n/__tests__/i18n.test.ts`
Expected: PASS。`git add` 仅点名 3 个文件，提交：
```
chore(i18n): trilingual docs, zh switcher label, pin SCADA dock label

Co-Authored-By: Claude Code <noreply@anthropic.com>
```

---

### Task 2: 卫生项 B — 契约测试纳入 typecheck + NaN 防护

**Files:**
- Create: `tsconfig.typecheck.tests.json`
- Modify: `package.json`（scripts）
- Modify: `scripts/check-zh-progress.mjs`（--fail-under 解析）

**Interfaces:**
- Consumes: 现有 `tsconfig.typecheck.json`（exclude 含 `src/**/*.test.ts`）
- Produces: `npm run typecheck` 一条命令同时覆盖生产码与契约测试；`--fail-under=abc` 退出码 2（不再静默通过）

- [ ] **Step 1: 契约测试 typecheck 配置**

创建 `tsconfig.typecheck.tests.json`：

```json
{
  "extends": "./tsconfig.json",
  "include": ["src/i18n/__tests__/i18n.test.ts"],
  "exclude": [],
  "compilerOptions": {
    "allowJs": false,
    "noEmit": true
  }
}
```

（`exclude: []` 覆盖父配置的 `src/**/*.test.ts` 排除——这是本文件存在的理由；仅纳入 i18n 契约测试，不扩大到全部测试，避免引爆从未被 typecheck 过的其余测试文件。）

- [ ] **Step 2: 接入 npm typecheck 门**

`package.json` 中 `"typecheck": "tsc --noEmit -p tsconfig.typecheck.json"` 改为：

```json
    "typecheck": "tsc --noEmit -p tsconfig.typecheck.json && tsc --noEmit -p tsconfig.typecheck.tests.json",
```

- [ ] **Step 3: 运行验证**

Run: `npm run typecheck`
Expected: PASS（两个 tsconfig 都零错误；若契约测试报类型错误，修测试文件本身的类型而非放宽配置）

- [ ] **Step 4: NaN 防护**

`scripts/check-zh-progress.mjs` 的 failUnder 解析替换为：

```js
const failUnder = (() => {
  const flag = process.argv.find((a) => a.startsWith('--fail-under='));
  if (!flag) return null;
  const n = Number(flag.slice('--fail-under='.length));
  if (!Number.isFinite(n)) {
    console.error(`Invalid --fail-under value: ${flag.slice('--fail-under='.length)}`);
    process.exit(2);
  }
  return n;
})();
```

Run: `npm run i18n:zh-progress -- --fail-under=abc; echo "exit=$?"` → Expected: 报 Invalid + `exit=2`；`npm run i18n:zh-progress | tail -1` 正常输出 325/5058。

- [ ] **Step 5: 提交**

```
git add tsconfig.typecheck.tests.json package.json scripts/check-zh-progress.mjs
git commit -m "feat(i18n): typecheck the contract tests; guard --fail-under parsing

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 3: SCADAPanel.messages.ts 翻译（270 词条）

**Files:**
- Modify: `src/components/SCADAPanel.messages.ts`（仅 zh 块）
- Modify: `src/i18n/GLOSSARY.md`（coin-before-use 新词，随译随补）

**Interfaces:**
- Consumes: GLOSSARY zh 章（含 Task 1 新行）；批次①译文风格样板（MachineInspector.messages.ts）
- Produces: SCADA 主工作区（Tags/Trends/Alarms/Connections/故障注入五个标签页）中文；批次③-⑥ 的 SCADA 术语引用源

- [ ] **Step 1: 全文通读 + 术语预盘**

先读完整个文件（690 行），列出 en 侧全部概念，对照 GLOSSARY 找缺词；缺词一次性补进 GLOSSARY（表尾按序插入），再开始翻译。已知需覆盖：Tags 页（按温度/压力/流量/振动筛选、CSV/JSON 导出）、Trends 页（5 分钟窗口、24 小时历史）、Alarms 页（HIGH/BAD_QUALITY、Returned awaiting ACK、确认/搁置/抑制）、Connections 页（Simulation/REST API/MQTT/WebSocket/OPC-UA 五入口 + Modbus TCP 代理及其"未经产线控制认证"警示）、Simulation Lab 故障注入（传感器失效/尖峰/漂移/卡值/噪声、故障列表）。点位号（`RM101.TT001.PV`）、协议名（OPC-UA/MQTT/Modbus TCP）、枚举值（HIGH/BAD_QUALITY）不译。

- [ ] **Step 2: 翻译 zh 块**

规则同 Global Constraints。函数消息（枚举查表类）保持函数与签名，中文查表 + `?? p.xxx` 回退，镜像文件内既有 PT_* 模式（如存在）。

- [ ] **Step 3: 验证**

Run: `npm run format && npm run typecheck && npm run i18n:zh-progress | grep -i scadapanel`
Expected: `100.0%  270/270`；typecheck 绿（含契约测试）。
Run: `npx vitest run src/components/SCADAPanel.test.tsx src/components/SCADASetpointControl.test.tsx`
Expected: PASS（en 运行不受影响）。

- [ ] **Step 4: 提交**

```
git add src/components/SCADAPanel.messages.ts src/i18n/GLOSSARY.md
git commit -m "feat(i18n): translate SCADA workspace panel to zh (tags/trends/alarms/connections/fault lab)

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 4: SCADA 组件组翻译（SetpointControl 16 + tagDatabase 53 + AlarmManager 2 + useSCADA 1，共 72 词条）

**Files:**
- Modify: `src/components/SCADASetpointControl.messages.ts`
- Modify: `src/scada/tagDatabase.messages.ts`
- Modify: `src/scada/AlarmManager.messages.ts`
- Modify: `src/scada/useSCADA.messages.ts`
- Modify: `src/i18n/GLOSSARY.md`（如需 coin）

**Interfaces:**
- Consumes: Task 3 建立的 SCADA 术语（同一提交序列内保持一致：设定值/点位/报警/确认…）

- [ ] **Step 1: 翻译**（规则同上；tagDatabase 里点位描述含大量设备名与量词，点位号保持原样）
- [ ] **Step 2: 验证**

Run: `npm run format && npm run typecheck && npm run i18n:zh-progress | grep -iE "scada|tagDatabase|Alarm"`
Expected: 四个文件各 100.0%；`npx vitest run src/components/SCADASetpointControl.test.tsx src/store.scadaBridge.test.ts` PASS。

- [ ] **Step 3: 提交**

```
git add src/components/SCADASetpointControl.messages.ts src/scada/tagDatabase.messages.ts src/scada/AlarmManager.messages.ts src/scada/useSCADA.messages.ts src/i18n/GLOSSARY.md
git commit -m "feat(i18n): translate SCADA setpoint control, tag database and alarm store copy to zh

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 5: 布局规划组翻译（LayoutPlanner 100 + layoutPlanningExport 13 + layoutPlanning 12 + logisticsLayoutStore 8，共 133 词条）

**Files:**
- Modify: `src/components/ui-new/widgets/LayoutPlanner.messages.ts`
- Modify: `src/simulation/layoutPlanningExport.messages.ts`
- Modify: `src/simulation/layoutPlanning.messages.ts`
- Modify: `src/stores/logisticsLayoutStore.messages.ts`
- Modify: `src/i18n/GLOSSARY.md`（如需 coin）

**Interfaces:**
- Consumes: 词汇基线"布局规划/当前方案/提议方案/作业秒数"行（先入 GLOSSARY 再用）

- [ ] **Step 1: 翻译**（文章验证语汇：布局规划页把当前方案和提议方案并排、装卸能力按几何假设估算、结果表列出改动前后观测值——如 Active seconds 从 32.5 降到 24.5 → 作业秒数）
- [ ] **Step 2: 验证**

Run: `npm run format && npm run typecheck && npm run i18n:zh-progress | grep -iE "layout|logistics"`
Expected: 四个文件各 100.0%。
Run: `npx vitest run src/components/ui-new/widgets src/stores/logisticsLayoutStore.messages.ts 2>/dev/null || npx vitest run src/components/ui-new/widgets`（LayoutPlanner 如无专属测试则跑 widgets 目录）
Expected: PASS。

- [ ] **Step 3: 提交**

```
git add src/components/ui-new/widgets/LayoutPlanner.messages.ts src/simulation/layoutPlanningExport.messages.ts src/simulation/layoutPlanning.messages.ts src/stores/logisticsLayoutStore.messages.ts src/i18n/GLOSSARY.md
git commit -m "feat(i18n): translate layout planner and logistics layout copy to zh

Co-Authored-By: Claude Code <noreply@anthropic.com>"
```

---

### Task 6: 批次②门禁 + SCADA 中文实测

**Files:** 无新改动（验证 + 一张一次性截图）

- [ ] **Step 1: 全门禁**

Run: `npm run build && npm run lint && npm run format:check && npm run typecheck`
Expected: 全 PASS。
Run: `npm run i18n:zh-progress | tail -1`
Expected: 约 `800/5058 (~15.8%)`。

- [ ] **Step 2: 定向测试**

Run: `npx vitest run src/components/SCADAPanel.test.tsx src/components/SCADASetpointControl.test.tsx src/i18n`
Expected: PASS。

- [ ] **Step 3: 浏览器 SCADA 中文实测**

`node scripts/zh-smoke.mjs`（回归，应 exit 0）。随后用一次性有头脚本（临时文件，不入库）：`?lang=zh` 打开 → 点 dock 的 `SCADA 系统` 按钮 → 等 2s → 截图到系统临时目录并 Read 查看：Tags/Trends/Alarms/Connections 页签中文、无豆腐块、无页面错误。临时脚本用后删除，`git status` 不留痕。

- [ ] **Step 4: 收尾汇报**

勾选本计划全部 checkbox，向用户汇报批次②完成（进度 6.43% → ~15.8%），批次③（生产/Autonomy/Safety/引导）另行出计划。

---

## Self-Review 记录

1. **Spec 覆盖**：批次②定义"Tags/Trends/Alarms/Connections/故障注入/布局规划" → Task 3（前五者，均在 SCADAPanel）+ Task 4/5（支撑目录与布局规划）；终审卫生项 4 条 → Task 1/2；dock 标签决策 → Task 1 Step 3。
2. **占位符扫描**：无 TBD；翻译任务的程序与术语基线完整给定，新词处理规则（coin-before-use）明确。
3. **一致性**：SCADAPanel 270/100/53/16/13/12/8/2/1 词条数来自进度脚本实测；tsconfig `exclude: []` 覆盖语义已核对；`npm run typecheck` 改造后批次③-⑥的"绿色"定义自动包含契约测试。
