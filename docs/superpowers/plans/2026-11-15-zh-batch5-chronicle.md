# zh 批次⑤：Chronicle（磨坊纪事）实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成批次⑤——Chronicle 全部目录（约 963 静态词条）+ 两个动态数据表（history 34 行 × 3 字段、quiz 66 行 × 5 字段）+ 历史记录 zh 展示适配器，Chronicle 工作区全中文。

**Architecture:** 静态目录沿用既有管道；动态表沿用 `portuguese[row.id] ?? en` 模式新增 `chinese[row.id] ?? en`；展示适配器（presentation.ts）从"仅 pt-BR 翻译已识别记录"扩展为"pt-BR/zh 各自模板表、未识别记录保留原文"。

## Global Constraints（继承批次①-④，全文适用）

- 英文/pt-BR 逐字节不变；测试以英文运行且不因 zh 失败；canonical 引擎值不变（zh 仅显示层）
- **Chronicle 特有红线（来自 CLAUDE.md 与既有测试）：**
  1. 历史注记是 source-checked（史料核对过的）——译文必须忠实保留全部史实断言与专有名词（Vitruvius、Domesday、Oliver Evans、Budapest rolls、Rochdale、Mondragon、尼罗河谷 等不译或用通行译名）
  2. 测验选项的**索引顺序不变**（正确性映射在索引上），只译文本
  3. 未识别/自定义/被编辑的记录必须保留逐字原文（presentation.test.ts 纪律）
  4. steward.test 的 marks 纪律：只译显示串，键名/枚举/效果类型不动
- 术语对齐 GLOSSARY zh 章；磨坊纪事=Chronicle 已钉；coin-before-use；引号 “”；全角标点、盘古之白；`{placeholder}` 保留；签名不变
- 每个 commit `npm run typecheck` + 相关 vitest 绿色；尾注 `Co-Authored-By: Claude Code <noreply@anthropic.com>`；分支 `main`；**add-by-name 纪律**
- dev 服务器常驻 3000（后台），勿杀

## Task 1: 展示适配器 zh 化（基建，先做——其余任务的可视化都依赖它）

**Files:** `src/chronicle/presentation.messages.ts`（zh 模板表 122 keys）、`src/chronicle/presentation.ts`（locale-aware render）、`src/chronicle/presentation.test.ts`（zh 用例）、GLOSSARY（如需 coin）

**要点：**
- 先读 presentation.ts 全文：capture（en 哨兵匹配参数）/ render（模板渲染）机制；`localizedNotice`/`localizedInitiative` 现门控 `!== 'pt-BR'`
- 翻译 presentation.messages zh 模板表（122 keys——这是记录标题/正文的模板集）
- 扩展 render/门控：zh 激活时用 zh 模板表渲染已识别记录；未识别记录保留英文原文；pt-BR 行为零变化
- 新测试：zh 下已识别记录（HISTORY_NOTES[0]）→ 标题/正文为 zh 模板渲染（占位符值来自 en 原文的 capture）；未识别记录 → 与原文逐字相同；pt-BR 现有测试全绿
- 模型要求：此文件改动若出错会静默破坏存档记录显示——实现者必须先向审查者级理解力看齐：通读测试后再动手

**验证：** `npm run typecheck && npx vitest run src/chronicle/presentation.test.ts src/chronicle/systemCopy.localization.test.ts` 全绿；`i18n:zh-progress | grep presentation` 100.0%。

**提交：** `feat(chronicle): zh presentation tables and locale-aware record rendering`。

---

### Task 2: 事件卡组（eventDeck.messages 166 + longNight 9 + ChronicleEventHost 16 = 191 词条）

**Files:** 3 个 zh 块 + GLOSSARY

要点：eventDeck 是二十张剧情事件卡（Predynastic Egypt 风格叙事）——负面事件的坏结局落在默认选择上（文档语义），译文保持该结构；效果类型/选择键不动。longNight 是终夜事件。

验证：grep 100.0%；`npx vitest run src/chronicle` PASS。提交 `feat(i18n): translate chronicle event deck to zh`。

---

### Task 3: 管家卡组（stewardDeck.messages 176 词条）

**Files:** `src/chronicle/stewardDeck.messages.ts` + GLOSSARY

要点：steward deck 是管家决策卡（每张卡的 marks 被 steward.test 钉住）——只译标题/正文/选项文本；marks/效果/条件键不动。

验证：同上。提交 `feat(i18n): translate chronicle steward deck to zh`。

---

### Task 4: 历史注记动态表（34 行 × title/brief/article）

**Files:** `src/chronicle/history.messages.ts`（新增 `chinese[row.id]` 表 + `zh: chinese[row.id] ?? en`）

要点：**本批次翻译质量最高的任务**——34 篇史料核对过的注记（含多篇全文长文如 long-view 的多段论文）。要求：史料专名保留或用通行译名（维特鲁威/多尔锄日书?——Domesday Book 通行译名《末日审判书》，Rochdale 罗奇代尔，Mondragon 蒙德拉贡，Budapest rolls 布达佩斯辊式磨，Oliver Evans 奥利弗·埃文斯）；每篇译文完成后与 en 对照自查史实断言无增减；`portuguese` 表与 `?? en` 结构不动。

验证：`npm run typecheck && npx vitest run src/chronicle src/components/chronicle` PASS；`i18n:zh-progress | grep history` 不适用（动态表不入计量——记录 34 行完成即可）。

提交：`feat(chronicle): translate history notes to zh (34 source-checked entries)`。

---

### Task 5: 测验动态表 + 描述/记录（quiz 66 行 × 5 字段 + record.messages 58 + describe 22）

**Files:** `src/chronicle/quiz.messages.ts`（新增 `chinese[row.id]` 表）、`src/chronicle/record.messages.ts`、`src/chronicle/describe.messages.ts` + GLOSSARY

要点：quiz 选项索引顺序即正确性映射——只译文本；史料题的史实断言忠实（与 Task 4 同纪律）。record 是存档描述。

验证：`npm run typecheck && npx vitest run src/chronicle` PASS。

提交：`feat(chronicle): translate quiz bank and record/describe copy to zh`。

---

### Task 6: Chronicle UI 标签页（ChronicleOverview 74 + ScoreTab 34 + PlansTab 30 + NotesTab 20 + PartnersTab 19 + LedgerTab 9 + ChroniclePanel 7 + CharterScreen 6 + shared 5 = 204 词条）

**Files:** 9 个 zh 块 + GLOSSARY

要点：磨坊纪事工作区的九个界面文件；宪章签署（CharterScreen）、计划/评分/笔记/伙伴/台账标签页。

验证：grep 九文件 100.0%；`npx vitest run src/components/chronicle` PASS。

提交：`feat(i18n): translate chronicle workspace tabs to zh`。

---

### Task 7: 纪事数据小件（charter 35 + epilogue 50 + trials 25 + plans 21 + stakeholders 13 + contractors 12 + forecasts 12 + delegation 8 + longNight 已在 Task 2 + desks 3 + cropYears 5 = 184 词条）

**Files:** 10 个 zh 块 + GLOSSARY

要点：epilogue 是结局卷（多段叙事，质量要求同 Task 4）；cropYears 被 modules.test 钉（只译显示串）；trials/plans/stakeholders/contractors/delegation/desks 是数据小件。

验证：grep 全部 100.0%；`npx vitest run src/chronicle` PASS。

提交：`feat(i18n): translate chronicle charter, epilogue and data snippets to zh`。

---

### Task 8: 批次⑤门禁 + 浏览器实测

**Files:** 无新改动

1. `npm run build && npm run lint && npm run format:check && npm run typecheck` 全过
2. `npm run i18n:zh-progress | tail -1` → 预期 ≈ 4800/5058 (~95%)（剩批次⑥ ~245 + 已接受假象 ~10）
3. `npx vitest run src/chronicle src/components/chronicle src/i18n` 全量 PASS
4. 浏览器（一次性有头脚本）：`?lang=zh` → 打开磨坊纪事工作区（dock `磨坊纪事`）→ 宪章屏截图 → 签署后事件卡截图 → 历史记录条目截图 → 查看全部中文、叙事通顺、无豆腐块无 pageErrors
5. 汇报批次⑤完成；批次⑥（仿真/报警/PA 收尾）另行出计划

---

## Self-Review 记录

1. **Spec 覆盖**：批次⑤定义"剧情卡、测验、历史事件 + 历史记录 zh 展示适配器" → Task 2/3（剧情卡）、Task 5（测验）、Task 4（历史注记）、Task 1（适配器）；CLAUDE.md 的 Chronicle 纪律全部入 Global Constraints；文档收尾（CLAUDE.md/README 全量终态）归批次⑥。
2. **占位符扫描**：无 TBD；动态表机制已探明（`portuguese[row.id] ?? en` → 加 `chinese[row.id] ?? en`）；行数实测（history 34、quiz 66）。
3. **一致性**：presentation 先行（Task 1）使 Task 2-7 的记录可视化立即生效；磨坊纪事/史料专名处理规则统一入约束；测验索引纪律显式。
