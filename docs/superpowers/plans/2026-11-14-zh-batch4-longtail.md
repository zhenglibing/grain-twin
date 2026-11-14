# zh 批次④：长尾组件 实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 完成批次④——非 Chronicle 长尾全部目录（约 2,760 词条 / ~60 文件，含批次③终审交接的 15 项卫生项），使 Chronicle 以外的界面全量中文。

**Architecture:** 沿用既有管道，无新架构。Chronicle 系文件（`src/chronicle/*` 与 `src/components/chronicle/*`）明确不在本批次（属批次⑤）。

## Global Constraints（继承批次①②③，全文适用）

- 英文/pt-BR 逐字节不变；测试以英文运行且不因 zh 失败
- 术语对齐 GLOSSARY zh 章；coin-before-use 同提交入表；引号 “”；全角标点、半角数字/单位/键名；盘古之白；`{placeholder}` 逐字保留；函数签名不变
- 永不翻译：点位号、设备编号、专有名词（MillOS/Nell Watson/合作商名/歌名/涂装文字）、协议/枚举、agent 协议、日志
- 每个 commit `npm run typecheck` + 相关 vitest 绿色；尾注 `Co-Authored-By: Claude Code <noreply@anthropic.com>`；分支 `main`
- **add-by-name 纪律**：~294 个幻影 CRLF 文件常驻，任何 add 必须点名文件
- 术语参照源：GLOSSARY 全部 zh 表 + SCADAPanel/MachineInspector/PlayableShift 的 zh 值
- 既有钉词（全部沿用）：车间相关新词见 Task 1 预钉；自治(名词)/自主(形容词) 分立；警报(alert)/报警(alarm) 分立；班次回顾/加工季/中心节拍/设定值/联锁/紧急停机/疏散演练 等不变

## Task 1 预钉词汇（落表后全批次使用）

| English | zh |
|---|---|
| workplace | 车间 |
| work agreement | 工作协议（批次③已coin，沿用） |
| agent cockpit | 智能体座舱 |
| knowledge base | 知识库 |
| music player | 音乐播放器 |
| game hour | 游戏小时（批次③已coin） |

批次③终审 15 项交接清单（Task 1 逐项落实，来源 .superpowers/sdd/progress.md B3 FINAL REVIEW 节）：
① 交付迟延→迟交（shiftReview 内部统一）② 来粮 coin `| incoming grain | 来粮 |` ③ 电压骤降恢复→电压骤降后恢复 ④ routeCornerAmbiguous→先让叉车行驶至未变更路段，再暂停重试 ⑤ activeAssets 运行设施→在运设备 + coin `| active assets | 在运设备 |` ⑥ 暂留已挣报酬→已挣报酬暂留 / 拖动可环绕视角→拖动旋转视角 / 发运卡车装载→发运卡车装载量 ⑦ GLOSSARY 加仲裁行 `| contamination alert | 污染警报（环境/质量事件；报警管理alarm 另词） |` ⑧ 外运装载/外发货物 统一为 外运货物（读上下文定形） ⑨ GLOSSARY 加 MobilePanel stage* 钉行（执行阶段沿用 批次③ 规划/加工/质量扣留/装载中/已发运）+ `| predictive maintenance | 预测性维护 |` ⑩ 自治/自主 注记行（自治=系统名词，自主=形容词性修饰） ⑪ meter 头注释补 exit-2 说明 + 空白值防护 ⑫ 接受项记录：实验室 partial-carry、报警阈值 soft-orphan、千克 a11y ⑬ add-by-name 重申（本计划头已有）

---

### Task 1: 批次③交接卫生项（15 项）

**Files:** `scripts/check-zh-progress.mjs`、`src/components/SCADAPanel.messages.ts`、`src/simulation/shiftReview.messages.ts`、`src/simulation/operationsPlay.messages.ts`、`src/simulation/operationsCampaignStore 同族`（外运装载在 operationsCampaignStore.messages.ts）、`src/components/ForkliftSystem.messages.ts`、`src/components/ui-new/widgets/AutonomyPanel.messages.ts`、`src/components/ui-new/onboarding/PlayableShift.messages.ts`、`src/components/blueprint/ZoneLabels.messages.ts`（补完 筛理/包装 两区，用既钉 筛理/包装线 词根）、`src/i18n/__tests__/i18n.test.ts`（主 fixture 目录 due/bags 译为中文值，`@ts-expect-error` 两个残缺目录保持原样——那是编译期测试本体）、`src/i18n/GLOSSARY.md`

**Interfaces:** Produces: 清洁的术语契约 + 已知计量假象清单（websocketUrl、@ts-expect-error fixture、ZoneLabels 完成后全局"未翻译"仅剩 fixture 残缺键与 zh===en 合法同文键）

- [ ] 按 15 项清单逐项编辑（每项先 Read 现值再改；en/pt-BR 不动）
- [ ] 验证：`npm run format && npm run typecheck && npm run i18n:zh-progress | tail -1`（应 ≈1362/5058：+ZoneLabels 2 + fixture 2 主键 + 长尾不计）+ `npx vitest run src/i18n src/components/blueprint 2>/dev/null || npx vitest run src/i18n` PASS
- [ ] 提交：`fix(i18n): absorb batch-3 review handoffs (15 items) and finish zone labels`

---

### Task 2: WorkplaceLab（258 词条）

**Files:** `src/components/ui-new/widgets/WorkplaceLab.messages.ts` + GLOSSARY

要点：WorkplaceLab 是双边车间实验主界面——车间/工作协议/交接评审/成员评审 沿用批次③ coins；这是本批次最大单体，术语决定后续 5 个车间组任务。

验证：grep 100.0%；`npx vitest run src/components/ui-new/widgets/WorkplaceLab.test.tsx 2>/dev/null || npx vitest run src/components/ui-new/widgets` PASS。提交 `feat(i18n): translate WorkplaceLab to zh`。

---

### Task 3: bilateralWorkplace + workplaceCampaign（227 + 94 = 321 词条）

**Files:** `src/simulation/bilateralWorkplace.messages.ts`、`src/simulation/workplaceCampaign.messages.ts` + GLOSSARY

要点： bilateralWorkplace 是 BAS 仿真核心（双边自治系统（BAS）/顾问/预测/交接实验/成员评审 沿用批次③ coins）；workplaceCampaign 是车间战役层（加工季 沿用）。

验证：grep 两文件 100.0%；`npx vitest run src/simulation` PASS。提交 `feat(i18n): translate bilateral workplace and workplace campaign to zh`。

---

### Task 4: 车间 widgets A（ImprovementPanel 97 + PackingEvidence 95 + ProcessInspectionCard 87 = 279 词条）

**Files:** 3 个 zh 块 + GLOSSARY

验证：grep 100.0%；`npx vitest run src/components/ui-new/widgets` PASS。提交 `feat(i18n): translate workplace improvement, packing evidence and inspection cards to zh`。

---

### Task 5: 车间 widgets B（Participation 62 + PressureChapter 61 + Replay 60 + Negotiation 49 + Companion 32 + CampaignArchive 26 = 290 词条）

**Files:** 6 个 zh 块 + GLOSSARY

要点：参与/压力章节/回放/协商/伙伴/归档——BAS 社会模拟词汇，与 Task 2/3 一致。

验证：grep 100.0%；`npx vitest run src/components/ui-new/widgets` PASS。提交 `feat(i18n): translate workplace participation, pressure, replay, negotiation and companion to zh`。

---

### Task 6: 车间仿真 B（workplaceImprovement 55 + workplaceAdvice 61 + workplaceFairness 37 + workplaceStore 26 = 179 词条）

**Files:** 4 个 zh 块 + GLOSSARY

验证：grep 100.0%；`npx vitest run src/simulation` PASS。提交 `feat(i18n): translate workplace advice, improvement, fairness and store copy to zh`。

---

### Task 7: 知识库/AI 组（knowledgeStore 81 + AISettingsModal 104 + AICommandCenter 31 + AgentCockpit 38 = 254 词条）

**Files:** 4 个 zh 块 + GLOSSARY

要点：AI 设置模态（BYOK 云端密钥/WebGPU 本地模型——provider 名 Anthropic/OpenAI/Gemini 不译）；AICommandCenter/AgentCockpit 用 智能体座舱；knowledgeStore 知识库术语 Task 1 已钉；jev 相关词见表（Jev 专名不译）。

验证：grep 100.0%；`npx vitest run src/stores/knowledgeStore.messages.ts src/components/AICommandCenter.messages.ts 2>/dev/null || npx vitest run src/stores` PASS。提交 `feat(i18n): translate knowledge store and AI settings/cockpit copy to zh`。

---

### Task 8: AI 客户端 + 调试面板（jevClient 29 + cloudAIClient 28 + chatgptClient 5 + VCLDebugPanel 47 + VCLDiffPanel 13 + PredictiveMaintenancePanel 47 + EnergyDashboard 42 + JevAdvisoryPanel 33 = 244 词条）

**Files:** 8 个 zh 块 + GLOSSARY

要点：VCL 是线协议名（永不翻译，debug 面板文案保留 VCL 术语）；PredictiveMaintenancePanel 用 Task 1 钉的 预测性维护 并把 SCADAPanel 的本地 ZH_PHASE 镜像切为引用此处导出（或保持本地镜像但在 GLOSSARY 注明——二选一，报告说明）；能源面板单位半角。

验证：grep 100.0%；`npx vitest run src/components/ui 2>/dev/null || npx vitest run src/utils` PASS。提交 `feat(i18n): translate AI clients, VCL debug and maintenance/energy panels to zh`。

---

### Task 9: ui 杂项 + 键盘 + 移动端（KeyboardShortcutsModal 48 + DecisionReplay 27 + ui 小件 ~93 + useKeyboardShortcuts 36 + MobilePanel 70 + mobile 小件 21 ≈ 295 词条）

**Files:** `src/components/ui/KeyboardShortcutsModal.messages.ts`、`DecisionReplay.messages.ts`、`CostEstimationOverlay.messages.ts`、`OnDeviceOperatorRecord.messages.ts`、`TimelinePlayback.messages.ts`、`MultiObjectiveDashboard.messages.ts`、`StrategicPriorityCards.messages.ts`、`IncidentHistoryPanel.messages.ts`、`DecisionHistoryPanel.messages.ts`、`WeatherEffectsOverlay.messages.ts`、`ZoneCustomizationPanel.messages.ts`、`ConfirmDialog.messages.ts`、`ConfidenceBar.messages.ts`、`src/hooks/useKeyboardShortcuts.messages.ts`、`src/components/mobile/MobilePanel.messages.ts`、`DPad.messages.ts`、`CameraPresetMenu.messages.ts`、`RotateDeviceOverlay.messages.ts`、`MobileControlsOverlay.messages.ts` + GLOSSARY

要点：MobilePanel stage* 用 Task 1 钉行（规划/加工/质量扣留/装载中/已发运）；键位提示半角；MobilePanel 70 词条含批次②预告的 stage chips。

验证：grep 全部 100.0%；`npx vitest run src/components/ui src/hooks src/components/mobile 2>/dev/null || npx vitest run src/components/mobile` PASS。提交 `feat(i18n): translate keyboard shortcuts, ui misc and mobile panels to zh`。

---

### Task 10: 短尾扫尾（game/* 56 + achievements 37 + breakdownStore 29 + HolographicDisplays 32 + BuildCacheDiagnostics 30 + MillOSMusicPlayer 27 + knowledge/* 34 + utils 66 + App/store/About/ErrorBoundary ~44 + 小组件 ~13 + utilityAssets 4 + logisticsRuntime 1 ≈ 373 词条）

**Files:** `src/components/game/shared.messages.ts`、`MiniMap.messages.ts`、`GamificationBar.messages.ts`、`ScreenshotButton.messages.ts`、`PAAnnouncementSystem.messages.ts`、`src/stores/achievementsStore.messages.ts`、`src/hooks/useAchievementTracker.messages.ts`、`src/stores/breakdownStore.messages.ts`、`src/components/HolographicDisplays.messages.ts`、`src/components/ui-new/panels/BuildCacheDiagnostics.messages.ts`、`src/components/ui-new/MillOSMusicPlayer.messages.ts`、`src/components/knowledge/Datalinks.messages.ts`、`KnowledgeEntryCard.messages.ts`、`AINarration.messages.ts`、`KnowledgeTooltip.messages.ts`、`UnlockNotification.messages.ts`、`LearningNote.messages.ts`、`src/utils/physicalSession.messages.ts`、`energyCalculations.messages.ts`、`onDeviceOperator.messages.ts`、`decisionIcons.messages.ts`、`spendBudget.messages.ts`、`recoverableLazy.messages.ts`、`src/App.messages.ts`、`src/store.messages.ts`、`src/components/AboutModal.messages.ts`、`ErrorBoundary.messages.ts`、`MillScene.messages.ts`、`CommunityLife.messages.ts`、`ConveyorSystem.messages.ts`、`CameraController.messages.ts`、`StrategicOverlay3D.messages.ts`、`src/constants/utilityAssets.messages.ts`、`src/simulation/logisticsRuntime.messages.ts` + GLOSSARY

要点：歌名（The Builder 等）按永不翻译保留英文；成就/徽章文案友好语气；Broadcast/PA 文案短句。

验证：grep 全部 100.0%（i18n.test.ts 的 `@ts-expect-error` fixture 键为永久计量假象，记录即可）；`npx vitest run src/components/game src/components/knowledge src/stores 2>/dev/null || npx vitest run src/stores` PASS。提交 `feat(i18n): translate long-tail components to zh (music, achievements, knowledge, utils)`。

---

### Task 11: 批次④门禁 + 浏览器实测

**Files:** 无新改动

1. `npm run build && npm run lint && npm run format:check && npm run typecheck` 全过
2. `npm run i18n:zh-progress | tail -1` → 预期 ≈ 4050/5058 (~80%)（除 Chronicle ~935 + 已接受计量假象）
3. `npx vitest run src/components src/stores src/utils src/hooks src/i18n` PASS
4. 浏览器：`node scripts/zh-smoke.mjs` exit 0；一次性有头脚本三连截图：dock `智能体座舱`/知识库入口 → 车间 lab 界面 → 音乐播放器；查看：无豆腐块、无 pageErrors
5. 汇报进度与批次④完成；批次⑤（Chronicle）另行出计划

---

## Self-Review 记录

1. **Spec 覆盖**：批次④定义"知识库、widgets、其余长尾组件" → Task 2-10 覆盖全部非 Chronicle 未译文件（Chronicle 系排除至批次⑤，符合 spec 分波）；15 项交接 → Task 1。
2. **占位符扫描**：无 TBD；每任务文件清单+词条数来自进度脚本实测；术语要点给出预钉与参照源。
3. **一致性**：车间词汇 Task 1 预钉先于 5 个车间组任务；可玩班次/SCADA 术语既有钉不重造；fixture 处理与计量假象清单在 Task 1/11 显式记录。
