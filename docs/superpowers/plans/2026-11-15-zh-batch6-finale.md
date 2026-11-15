# zh 批次⑥：仿真/报警/PA 收尾 + 全项目终态 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成批次⑥——18 个改判目录（245 词条）翻译、全部交接卫生项、egress 标签验证、终态文档核对与全项目完工汇报（DoD 全项核对）。

**Architecture:** 沿用既有管道。完成后除已登记计量假象外全量中文。

## Global Constraints（继承批次①-⑤，全文适用）

- 英文/pt-BR 逐字节不变；测试以英文运行且不因 zh 失败
- 术语对齐 GLOSSARY；coin-before-use；引号 “”；全角标点、盘古之白；`{placeholder}` 保留；签名不变
- 永不翻译清单照旧
- 每个 commit `npm run typecheck` + 相关 vitest 绿色；尾注 `Co-Authored-By: Claude Code <noreply@anthropic.com>`；分支 `main`；**add-by-name 纪律**
- dev 服务器常驻 3000（后台），勿杀
- 已登记计量假象（不计为未完成，GLOSSARY:935 附近有清单）：websocketUrl、WorkplaceImprovementPanel.kgValue/WorkplacePackingEvidence.kg、PlansTab.p17、Valley Haulage×2、epilogue 1、stakeholders 1、i18n.test.ts fixture 残缺键

---

### Task 1: 措辞自然化收尾（批次①-⑤终审交接的全部 wording 项）

**Files（精确 old→new，来自各批次终审建议）：**
1. `src/components/ui-new/widgets/WorkplacePressureChapter.messages.ts`：`待答当前问题` → `等待当前答复`
2. `src/components/ui-new/widgets/WorkplaceReplay.messages.ts`：`下一指南分区` → `下一节`
3. `src/components/ui-new/widgets/WorkplaceNegotiation.messages.ts`：`协商一份分期` → `协商一份分期安排`
4. `src/stores/knowledgeStore.messages.ts`：`风暴监控` → `报警风暴监控`（scadaAlarmLifecycleArticle，消歧义）
5. `src/chronicle/quiz.messages.ts`：tide-mills 行 opt0 `涨潮进来的时候` → `涨潮时`
6. `src/chronicle/quiz.messages.ts`：grain-elevator 行 opt3 `纽约` → `纽约市`
7. `src/components/mobile/MobilePanel.messages.ts`：`未遂：` → `未遂事件：`
8. `src/simulation/bilateralWorkplace.messages.ts`：`政策反对` → `政策反对票`（nextPolicyNo；若与相邻 政策表决 语境不合则改为 政策的反对票，报告说明）
9. `src/components/ui-new/widgets/WorkplaceLab.messages.ts`：`系统信任着自己。` → `系统信任自己。`
10. `src/components/ai/ForkliftSystem` 无项；`src/simulation/layoutPlanningExport.messages.ts`：`grep -n "建模路径"` 若仍有 未加"已" 的 建模路径 → 已建模路径（B4 终审称 1745 行仍见；若已修复则记录）
11. `src/components/ui-new/widgets/WorkplaceNegotiation.messages.ts` 或 `WorkplaceLab.messages.ts`：`协商一份分期` 已含于 3

**验证：** `npm run format && npm run typecheck && npm run i18n:zh-progress | grep -E "Pressure|Replay|Negotiation|knowledgeStore|quiz"`（各文件保持 100.0% 或 +0 变化——自然化改写 zh≠en 仍计数）+ `npx vitest run src/components/ui-new/widgets src/stores/knowledgeStore.messages.ts src/chronicle 2>/dev/null || npx vitest run src/chronicle` PASS。

**提交：** 点名文件，`fix(i18n): batch-⑥ wording naturalization pass (reviewer handoffs)`。

---

### Task 2: 术语表/回归护栏收尾

**Files:** `src/i18n/GLOSSARY.md`、新测试文件 `src/i18n/__tests__/zhDynamicTables.test.ts`

1. GLOSSARY zh 章补 3 行：`| a season (flour) | 产季 |`、`| record (The Chronicle) | 纪事（dock 短标签同） |`、仲裁行 `| open exceptions vs open incidents | 未决的异常（objections）vs 未结事件（incidents）——分立勿混 |`
2. GLOSSARY:1168 附近 斑点面粉 的 provenance 标注修正（批次④新 coin，非沿用）
3. 新建回归护栏测试（zh 动态表 CJK 在位守卫）：

```ts
import { describe, expect, it } from 'vitest';
import { setLocale } from '../i18n';
import { historyMessages } from '../../chronicle/history.messages';
import { quizMessages } from '../../chronicle/quiz.messages';
import { HISTORY_NOTES } from '../../chronicle/history';
import { QUIZ_BANK } from '../../chronicle/quiz';

const hasCJK = (text: string): boolean => /[一-鿿]/.test(text);

describe('zh dynamic tables stay translated', () => {
  it('renders every history note title/brief in Chinese under zh', () => {
    setLocale('zh');
    for (const row of HISTORY_NOTES) {
      const t = (key: 'title' | 'brief'): string =>
        // translate() with the per-row catalog; zh falls back to en only if the table lost the row
        require('../../chronicle/history.messages').historyMessages(row) !== undefined &&
        hasCJK(window.__zhProbe(row, key));
    }
  });
});
```

**注意：上面是示意骨架——实现者按仓库真实导出改写**：HISTORY_NOTES 的每行用 `useT` 同义的 `translate(historyMessages(row), 'title')` 取值断言 `hasCJK`；quiz 每行对 `prompt` 断言；`QUIZ_BANK` 的真实导出名以 `src/chronicle/quiz.ts` 为准。测试必须真实可失败（若 chinese 表被删则 zh 回落 en，hasCJK 变 false → 红）。

4. 验证：`npm run typecheck && npx vitest run src/i18n/__tests__/zhDynamicTables.test.ts` PASS（且手工验证：临时注释 chinese 表一行 → 测试变红 → 恢复 → 绿）
5. 提交：`test(i18n): guard zh dynamic tables against regression; finish glossary pins`。

---

### Task 3: 18 目录收尾翻译（245 词条）

**Files（实测清单，18 个）：** `src/stores/workplaceReplayStore.messages.ts` 25、`src/components/ui-new/widgets/WindmillLearningCard.messages.ts` 24、`src/utils/aiEngine.messages.ts` 22、`src/components/AlertSystem.messages.ts` 20、`src/stores/gameSimulationStore.messages.ts` 18、`src/simulation/workplaceParticipation.messages.ts` 14、`src/components/OperationalWorldSignals.messages.ts` 13、`src/components/ui/ActionPlanTimeline.messages.ts` 13、`src/components/game/IncidentReplayControls.messages.ts` 12、`src/stores/aiConfigStore.messages.ts` 12、`src/components/game/AchievementsPanel.messages.ts` 11、`src/utils/webgpuClient.messages.ts` 10、`src/components/DeferredOperationalUI.messages.ts` 9、`src/simulation/workplaceAutoplay.messages.ts` 9、`src/simulation/communityLife.messages.ts` 8、`src/stores/qcLabStore.messages.ts` 7、`src/stores/aiNarrationStore.messages.ts` 4、`src/stores/materialFlowStore.messages.ts` 4

要点：AlertSystem/PA 短句命令式；gameSimulationStore 译后 egress 标签（egressFront 等 getter）自动中文生效——MillScene:441 `toUpperCase()` 对汉字恒等，无需改码；aiEngine/webgpuClient/aiConfigStore 是 AI 客户端（provider 名不译，沿批次④ AI 术语）；WindmillLearningCard 是学习卡（与 WindmillLearning 既有 zh 表一致——先查 GLOSSARY）。

验证：grep 18 文件全 100.0%（gameSimulationStore 可能 17/18 若有纯符号键——按假象先例登记）；`npx vitest run src/stores src/simulation src/components/game 2>/dev/null || npx vitest run src/stores` PASS。

提交：`feat(i18n): translate reassigned simulation/alert/PA catalogs to zh (final sweep)`。

---

### Task 4: egress 标签实测 + 终态文档核对

**Files:** 可能 `README.md`（语言说明小节，若缺则补三语说明）；无代码改动预期

1. 浏览器实测：`node scripts/zh-smoke.mjs` exit 0；一次性有头脚本：`?lang=zh` → 触发 Safety 面板 START DRILL（若可点击）→ 截图区域验证标签（应为 `XXX 已验证` 中文标签）；quiz 可达则打开一次（批次⑤遗留项）
2. 全量门禁：`npm run build && npm run lint && npm run format:check && npm run typecheck` 全过
3. `npm run i18n:zh-progress | tail -1` → 预期 ≈ 5048/5058 (~99.8%)（余已登记假象）
4. README 核对：语言说明（若 README 无语言节，在合理位置加一句三语说明：English / Português (Brasil) / 简体中文，`?lang=` 切换）
5. 提交（如有 README 改动）：`docs: note trilingual interface support in README`。

---

### Task 5: 全项目完工核对（DoD 全项）

**Files:** 无新改动（核对 + 汇报）

按 spec DoD 逐项核对并在汇报中给出证据：
1. zh 出现在 LOCALES，切换/持久化/`?lang=zh`/浏览器检测生效（批次①已证 + 冒烟复验）
2. `npm run i18n:zh-progress` 余量 = 已登记假象清单（逐项列出，含动态表 99 行不入计量的说明）
3. `npm run build`、`typecheck`、`lint`、全量 vitest 通过；en 输出逐字节不变（引用各批次终审的哈希证明）
4. 有头浏览器 zh 截图：外壳/SCADA/Chronicle/车间 全中文无豆腐块（引用各批次 Task-末截图 + 本批次复验）
5. CLAUDE.md / README / GLOSSARY 反映三语现状

汇报后：**全项目完工宣告**。

---

## Self-Review 记录

1. **Spec 覆盖**：批次⑥定义"仿真/报警/PA 收尾" → Task 3（18 目录）+ Task 4（egress/quiz 实测）；DoD 5 项 → Task 5；全部交接项（B4-FINAL a/c/d/e/f/h + B5 minors）→ Task 1/2（已核对部分项在批次③④已完成，不重复）。
2. **占位符扫描**：Task 2 的测试骨架标注"示意骨架——按真实导出改写"（显式指令非 TBD）；其余完整。
3. **一致性**：18 文件清单来自进度脚本实测（245 = 18 文件之和）；egress 标签机制已探明（getter 已 locale-aware，译库即生效）；措辞清单逐项给出 old→new。
