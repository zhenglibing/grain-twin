# MillOS 简体中文（zh）语言支持 — 设计文档

日期：2026-11-13
分支：`feat/zh-locale`
状态：已获用户批准（范围、变体、架构方案 A 均经用户确认）

## 目标

为 MillOS 增加简体中文界面语言，与现有 English / pt-BR 并列，覆盖全部用户可见文案（约 167 个 `*.messages.ts` 目录、8,300+ 词条），英文输出保持逐字节不变。

## 已确认的关键决策

| 决策点 | 结论 |
|---|---|
| 翻译范围 | 一次性全量翻译（用户明确选择），跨多会话分批交付 |
| 中文变体 | 仅简体中文，内部 id `zh`（大陆工控术语习惯） |
| 架构方案 | 方案 A：zh 与 pt-BR 同等编译期强制 + 脚本播种英文占位 + 逐文件替换翻译 |
| 执行分支 | `feat/zh-locale`，每个提交保持构建绿色 |

## 1. 语言标识与检测（`src/i18n/index.ts`）

- `LOCALES = ['en', 'pt-BR', 'zh']`
- `normalizeLocale`：`zh`、`zh-CN`、`zh_tw`、`zh-Hans`、`zh-SG` 等全部 zh 系标签 → `'zh'`
- `LOCALE_LABELS.zh = '简体中文'`
- `LanguageSwitcher`：三按钮；compact 模式第三按钮标签用 `中文`（不用 "ZH"）
- 检测优先级不变：`?lang=zh` → `localStorage['millos-locale']` → 浏览器语言（zh 系自动命中）→ 默认 en
- `document.documentElement.lang = 'zh'`

## 2. 核心管道

- `MessageCatalog<E>` = `{ en: E; 'pt-BR': Translation<E>; zh: Translation<E> }`，缺 zh 词条即 tsc 失败（与 pt-BR 纪律一致）
- **一次性 codemod** `scripts/add-locale-zh.mjs`：用 `typescript` 包 AST 解析每个 `defineMessages` 调用，将 en 块结构化复制为 zh 块（字符串逐字复制；函数消息整体复制）。禁用正则括号匹配（文案含 `{hours}` 占位符）。运行一次后 tsc 全绿、界面零变化；此提交为机械大 diff，属预期
- 进度脚本 `scripts/check-zh-progress.mjs`（npm 别名 `i18n:zh-progress`）：统计 zh 值与 en 相同的未翻译词条（字符串按值比较，函数按源码文本比较），按文件输出计数与总百分比
- `formatFixed` / `formatGrouped`：zh 走 `Intl.NumberFormat('zh')` 分支（千位 `,`、小数 `.`）。新增测试：`formatFixed(6000,0,'zh')==='6,000'`、`formatFixed(2.5,1,'zh')==='2.5'`、`formatGrouped(8640,undefined,'zh')==='8,640'`
- `capitalizeIn('zh')` 返回 `''`（非 en 分支已覆盖，补显式测试）；`upperFirst` 对汉字为恒等变换，无需改

## 3. 项目特有门控修正

- `src/chronicle/presentation.ts`（约 :88、:399）：现逻辑是 `getLocale() === 'en'` 则显示英文原记录、**否则套用 pt-BR 翻译记录**——必须改为显式 `=== 'pt-BR'` 门控，使 zh 回落英文原文，直至 Chronicle 历史记录 zh 适配完成（批次 ⑤）
- `src/chronicle/eventDeck.ts:22` 的 pt-BR 消息表合并增加对应 zh 合并
- 相关测试（`presentation.test.ts`、`systemCopy.localization.test.ts` 等）补充 zh 用例，纪律与 pt-BR 一致
- `index.html` 水合前加载闪屏的英文内联文案**保持原样**（存在 <1s，随后被 i18n 化的 `LoadingScreen` 组件替换）；`LoadingScreen.tsx` 自身如走 i18n 则正常翻译

## 4. 3D 场景中文渲染（风险项，设独立决策门）

- 现状：`SceneText` 默认自托管 `Inter-Regular.ttf`（glyf TrueType）；troika 指定 font 后**不按字符回退**，缺汉字字形将渲染豆腐块
- 首选方案：zh 激活时懒加载 CJK TrueType 字体（Noto Sans SC glyf 版，约 10MB，自托管 `public/fonts/`，仅 zh 用户下载），场景标签正常显示中文且离线可用
- 降级方案（若 troika 解析失败）：3D 场景内文字保持英文（多为永不翻译的设备编号，损失可控），DOM UI 不受影响
- 决策门：批次 ① 完成后有头浏览器中文截图实测，按结果二选一并记录

## 5. 翻译执行与验收

- **术语基线**（来自介绍文章的用户验证译法）：筒仓、磨辊机（roller mill）、平筛（plansifter）、包装线（packer）、批次谱系、物料账、质量放行、发运（dispatch）、搁置（shelved）、抑制（suppressed）、航点（waypoint）、故障注入、传感器失效、尖峰、漂移、卡值、噪声
- **永不翻译清单**（`src/i18n/GLOSSARY.md`）：SCADA 点位号（`RM101.TT001.PV`）、设备编号、专有名词、歌词、涂装/铭牌文字、agent 协议、日志
- **六个批次**，每批验收 = `npm run typecheck` + 相关 vitest + `i18n:zh-progress` 增量：
  1. 外壳：顶栏、侧栏、dock、Overview、Settings、LoadingScreen
  2. SCADA 工作区：Tags / Trends / Alarms / Connections / 故障注入 / 布局规划
  3. 生产、Autonomy、Safety、新手引导（PlayableShift / tour）
  4. 知识库、widgets、其余长尾组件
  5. Chronicle：剧情卡、测验、历史事件 + 历史记录 zh 展示适配器
  6. 仿真层 / store 消息 / 报警 / PA 广播
- 批次 ① 与收尾各做一次有头浏览器中文截图验证
- **硬规则**：英文渲染输出逐字节不变；现有测试全部以英文运行，不得因 zh 改动而失败
- 收尾：更新 CLAUDE.md / README / GLOSSARY 文档描述三语；全量质量门 `npm run build`、`lint`、`format`（prettier 会重排 zh 块）、全量 vitest、既有 validate 脚本

## 6. 明确不做（YAGNI）

- 不做繁体（zh-TW/zh-HK）或 zh 双变体
- 不引入新 i18n 框架/运行时
- 不改 en、pt-BR 的任何现有行为与文案
- 不翻译 `public/v0.*` 历史归档、`_wiki/`、`docs/` 开发者文档、git 历史

## 风险与缓解

| 风险 | 缓解 |
|---|---|
| 3D 场景中文豆腐块 | 第 4 节决策门 + 降级方案 |
| codemod 解析漏文件 | 脚本断言处理文件数 === glob 数；tsc 全量校验兜底 |
| 翻译批次中断留下半成品 | 方案 A 保证任意提交可构建可运行 |
| 术语不一致 | 批次开始前先落术语表；每批翻译引用同一表 |
| 8,300 词条工作量跨会话 | 每批独立可交付；进度脚本精确计量 |

## 验收标准（Definition of Done）

1. `zh` 出现在 LOCALES，切换、持久化、`?lang=zh`、浏览器检测全部生效
2. `i18n:zh-progress` 报告 0 个未翻译词条
3. `npm run build`、`typecheck`、`lint`、全量 vitest 通过；en 输出逐字节不变
4. 有头浏览器 zh 模式截图：外壳 UI、SCADA 工作区、Chronicle 均为中文，无豆腐块（或已启用降级方案并记录）
5. CLAUDE.md / README / GLOSSARY 反映三语现状
