# zh 批次③：生产 / Autonomy / Safety / 新手引导 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成批次③——生产/Autonomy/Safety/新手引导 4 组共 21 个目录文件（556 词条）的中文翻译，并落实批次②终审交接的全部卫生项。

**Architecture:** 沿用批次①②管道，无新架构。

## Global Constraints（继承批次①②，全文适用）

- 英文渲染输出逐字节不变；pt-BR 不动；测试以英文运行且不因 zh 失败
- 术语对齐 `src/i18n/GLOSSARY.md`；**coin-before-use**（新词同提交入表）；引号 “”；全角标点、半角数字单位；盘古之白；`{placeholder}` 逐字保留；函数签名不变
- 永不翻译：点位号、设备编号、专有名词、协议/枚举、agent 协议、日志
- 每个 commit `npm run typecheck` + 相关 vitest 绿色；尾注 `Co-Authored-By: Claude Code <noreply@anthropic.com>`；分支 `main` 直接推进
- **add-by-name 纪律（批次②终审重申）**：工作树有 ~294 个幻影 CRLF "M" 文件 + package-lock 噪音——任何 `git add` 必须点名文件，严禁 `-A`/`-u`/目录级 add
- 术语基线参考：GLOSSARY zh 章 + SCADAPanel.messages.ts 的 zh 值（批次②已建立的 SCADA/物流术语）
- dev 服务器常驻 3000 端口（后台），勿杀勿重启

## 词汇基线（本批次预钉，Task 1 落表）

| English | zh（拟定） |
|---|---|
| central tick | 中心节拍 |
| intake (plant) | 接收（与既有 receiving=接收 合流；运输腿 intake=进料 已钉不动） |
| shift review | 班次回顾 |
| campaign (operations) | 加工季（批次②已钉，沿用） |
| e-stop / emergency stop | 紧急停机 |
| evacuation drill | 疏散演练（批次②已有 疏散认证，勿混淆） |
| autopilot / autonomy | 自治（已有） |

批次②交接的措辞修正（Task 1 一并执行）：准入的中心节拍时间 → 计入中心节拍的时间。

---

### Task 1: 批次②交接卫生项（8 项）

**Files:**
- Modify: `scripts/check-zh-progress.mjs`（空串防护）
- Modify: `src/components/SCADAPanel.messages.ts`（URL 统一 + 尖峰措辞 + suppressedUntil）
- Modify: `src/simulation/layoutPlanningExport.messages.ts`（legendPaths 已字）
- Modify: `src/components/ui-new/widgets/LayoutPlanner.messages.ts`（节拍措辞）
- Modify: `src/i18n/GLOSSARY.md`（2 新行 + 1 行去重 + 1 行措辞更新）

**精确编辑清单：**
1. `check-zh-progress.mjs` failUnder IIFE：`const raw = flag.slice('--fail-under='.length); if (raw === '' || !Number.isFinite(Number(raw))) { console.error(...); process.exit(2); } return Number(raw);`（`--fail-under=` 空串现在退出码 2）
2. SCADAPanel zh：`websocketUrl: 'WebSocket 地址'` → `'WebSocket URL'`；`enterWebsocketUrl` 中的 地址 → URL（保持句式）
3. SCADAPanel zh：`faultSpikeDescription: '数值突然尖峰至接近最大值'` → `'数值骤增至接近最大值'`
4. SCADAPanel zh：`suppressedUntil: ' 持续至 {time}。'` → `'，持续至 {time}。'`（en 侧前导空格不动）
5. layoutPlanningExport zh：`legendPaths: '实线：已渲染管道。虚线：建模路径。'` → `'实线：已渲染管道。虚线：已建模路径。'`
6. LayoutPlanner zh：`observedNote` 中 `准入的中心节拍时间` → `计入中心节拍的时间`
7. GLOSSARY 基线表加两行：`| central tick | 中心节拍 |`、`| intake (plant) | 接收（运输腿 intake=进料） |`
8. GLOSSARY :389 行 `| shipping / receiving (dock label，id 本身不译) | 发运 / 接收 |` → `| shipping (dock label，id 本身不译) | 发运 |`（receiving 已有独立行 :245，消除双行同值）

**验证：** `npm run typecheck && npm run i18n:zh-progress | grep -iE "scadapanel|layoutplanner|layoutplanningexport"`（三文件仍 100.0%）+ `npm run i18n:zh-progress -- --fail-under=; echo exit=$?` → exit=2 + `npx vitest run src/components/SCADAPanel.test.tsx` PASS。

**提交：** 5 文件点名 add，`fix(i18n): absorb batch-2 review handoffs (URL unify, spike wording, glossary pins, meter guard)`。

---

### Task 2: 生产流程组（operationsCampaignStore 64 + operationsPlay 39 + shiftReview 34 + pace 16，共 153 词条）

**Files:** 4 个 zh 块 + GLOSSARY（如需 coin）

要点：shiftReview=班次回顾；pace=节奏（生产节奏/班次节奏）；campaign 沿用加工季；订单/产线/工单 沿用既有。operationsPlay 是可玩班次的仿真侧文案（与 Task 5 的 PlayableShift UI 侧同源概念，术语必须一致——先译本任务，Task 5 引用其表）。

验证：`npm run typecheck && npm run i18n:zh-progress | grep -iE "operations|shiftReview|pace"` 四文件 100.0%；`npx vitest run src/stores/operationsCampaignStore.messages.ts src/simulation 2>/dev/null || npx vitest run src/simulation` PASS。

提交：`feat(i18n): translate production flow simulation copy to zh (campaign, ops play, shift review, pace)`。

---

### Task 3: 生产数据组（productionStore 26 + UnifiedGameTick 26 + ProductionTargetWidget 19，共 71 词条）

**Files:** 3 个 zh 块 + GLOSSARY（如需 coin）

要点：ProductionTargetWidget 是顶栏产量目标件（批次①顶栏已译 产量/目标，沿用）；UnifiedGameTick 是中心节拍仿真文案（中心节拍 已在 Task 1 钉表）；productionStore 是生产状态存储文案。

验证：同模式 grep 三文件 100.0%；`npx vitest run src/stores/productionStore.messages.ts src/systems/UnifiedGameTick.messages.ts 2>/dev/null || npx vitest run src/systems` PASS。

提交：`feat(i18n): translate production store, game tick and target widget copy to zh`。

---

### Task 4: Autonomy + Safety 组（AutonomyPanel 24 + ForkliftSystem 6 + SafetyPanel 44 + SafetyAnalyticsPanel 26 + SafetyConfigPanel 20 + SafetyMetricsDisplay 10 + EmergencyStopButton 10 + EmergencyOverlay 8 + safetyStore 6，共 154 词条）

**Files:** 9 个 zh 块 + GLOSSARY（如需 coin）

要点：SafetyPanel 是安全面板（疏散演练 START/END DRILL 按钮、区域验证 X/Y——术语 疏散演练/紧急停机/联锁 沿用既有，转运联锁 已在批次②）；EmergencyOverlay/EmergencyStopButton 是急停 UI（紧急停机）；AutonomyPanel 沿用 自治/双边自治系统（BAS）；ForkliftSystem 是叉车仿真文案（航点/急停 沿用）。急停、报警类文案语气要短促有力。

验证：grep 九文件 100.0%；`npx vitest run src/components/ui-new/panels/SafetyPanel.test.tsx src/components/ui 2>/dev/null || npx vitest run src/components/ui-new/panels` PASS。

提交：`feat(i18n): translate autonomy and safety UI copy to zh (e-stop, evacuation drill, interlocks)`。

---

### Task 5: 新手引导组（PlayableShift 115 + deliveryJourney 39 + OnboardingGuide 9 + FirstPersonController 11 + MobileFirstPersonController 4，共 178 词条）

**Files:** 5 个 zh 块 + GLOSSARY（如需 coin）

要点：PlayableShift 是可玩班次引导（批次② operationsPlay 已建仿真侧术语，必须一致）；deliveryJourney 是交付旅程卡；OnboardingGuide 是"Follow the grain"引导卡（批次①截图中的 GETTING STARTED 卡）；FirstPerson/Mobile 是第一人称与移动端操控提示（WASD/V 键位名保持半角）。引导文案是新手第一次读的中文——语气友好、句子短。

验证：grep 五文件 100.0%；`npx vitest run src/components/ui-new/onboarding src/components/FirstPersonController.messages.ts src/components/mobile 2>/dev/null || npx vitest run src/components/ui-new/onboarding src/components/mobile` PASS。

提交：`feat(i18n): translate onboarding, playable shift and controls copy to zh`。

---

### Task 6: 批次③门禁 + 浏览器实测

**Files:** 无新改动（验证 + 一次性截图）

1. `npm run build && npm run lint && npm run format:check && npm run typecheck` 全过
2. `npm run i18n:zh-progress | tail -1` → 预期 ≈ 1357/5058 (~26.8%)
3. `npx vitest run src/components/ui-new/panels src/components/ui-new/onboarding src/components/ui src/i18n` PASS
4. 浏览器：`node scripts/zh-smoke.mjs` exit 0；一次性有头脚本（临时目录）：`?lang=zh` → 点 dock `生产` → 截图（产量目标件/班次中文）；再开 `安全` 面板 → 截图（疏散演练按钮/区域验证中文）；查看两图：无豆腐块、无 pageErrors；临时脚本用后删除
5. 汇报：进度、门禁、截图所见；批次④（长尾组件）另行出计划

---

## Self-Review 记录

1. **Spec 覆盖**：批次③定义"生产、Autonomy、Safety、新手引导（PlayableShift / tour）" → Task 2/3（生产仿真+存储+顶栏件）、Task 4（Autonomy+Safety 全部 9 文件）、Task 5（引导 5 文件）；批次②终审 8 项交接 → Task 1（全部 8 项落表）。
2. **占位符扫描**：无 TBD；卫生项给出精确行级编辑；翻译组给出术语基线与一致性约束。
3. **一致性**：词条数来自进度脚本实测（556 = 153+71+154+178）；operationsPlay（Task 2）先于 PlayableShift（Task 5）保证可玩班次术语单向引用；central tick / intake (plant) 钉表先行于使用文件（Task 3/4/5）。
