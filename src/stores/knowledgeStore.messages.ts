import { defineMessages } from '../i18n';

/**
 * Datalinks library copy. Each entry's places to observe it are one
 * newline-separated message, split by the store.
 */
export const knowledgeStoreMessages = defineMessages({
  en: {
    historyUnlock: 'Unlocked by an event in the Mill Chronicle',
    // Loading-screen principles
    quoteTraceEveryLot: 'Trace every lot, state change, alarm, and dispatch.',
    quoteSafeStop: 'A safe stop is part of production, not a failure of it.',
    quoteMotion: 'Motion should reveal process state before decoration.',
    quoteOneWorld: 'One world, one clock, one source of operational truth.',
    quoteAutonomyTrust: 'Autonomy earns trust through legible evidence.',
    quoteAlarmNeeds: 'Every alarm needs a condition, disposition, and recovery path.',
    quoteBoringMill: 'A well-run mill is boring. Boring is the goal.',
    quoteCheckMeasurement: 'Check the measurement, its context, and the action it supports.',
    quoteForklifts: 'If the forklifts are confused, so is the system.',
    authorControl: 'MillOS control principle',
    authorVisual: 'MillOS visual principle',
    authorArchitecture: 'MillOS architecture principle',
    authorAutonomy: 'MillOS autonomy principle',
    authorScada: 'MillOS SCADA principle',
    authorLogistics: 'MillOS logistics principle',
    // Library labels
    alwaysAvailable: 'Available in the autonomous operations library',
    categoryPrinciples: 'Operating Principles',
    categoryPioneers: 'World and Process Lineage',
    categorySystems: 'Control Systems',
    categoryCases: 'Operational Cases',
    // unified-digital-twin
    unifiedDigitalTwinTitle: 'Unified Digital Twin',
    unifiedDigitalTwinTooltip: 'Interior, yard, village, farm, and water share one simulation.',
    unifiedDigitalTwinBrief:
      'The factory and its surroundings share one coordinate system, one clock, and one weather state. There is no seam between inside and out.',
    unifiedDigitalTwinArticle: `## One Continuous Site\n\nMill floor, loading yard, village, farm, stream, and distant terrain are all part of one world. Moving the camera changes what you see, not what is being simulated.\n\nThis means trucks approach the same docks visible from inside. Water flows through the same culvert you can see from the road. Sun, moon, lamps, and process clocks all derive from a single time source. No seams, no duplicated state, no discontinuous lighting.\n\nIt also makes faults easier to find. Positioning, occlusion, route clearance, and depth-layer policies can all be measured in one coordinate system rather than translated between disconnected scenes.`,
    unifiedDigitalTwinSeeInAction: '3D world\nOverview workspace',
    // autonomous-material-flow
    autonomousMaterialFlowTitle: 'Autonomous Material Flow',
    autonomousMaterialFlowTooltip:
      'Source lots remain traceable through silos, mills, sifters, and packers.',
    autonomousMaterialFlowBrief:
      'Every bag of flour can trace its lineage back to the grain that arrived at the dock.',
    autonomousMaterialFlowArticle: `## Causal Material Flow\n\nGrain arrives as a receiving manifest and becomes a source lot. Every transformation — milling, sifting, packing — records what went in, what came out, which machine did it, and when. Dispatch can only load released material. No shortcuts.\n\nThe genealogy balance compares received, in-process, shipped, and lost mass. A discrepancy is a control defect, not a rounding error. Quality holds follow the affected batches rather than applying a blanket penalty to the whole line.\n\nThis gives the SCADA workspace evidence for every major action. A state can be reconstructed from its inputs, not inferred from a dashboard number.`,
    autonomousMaterialFlowSeeInAction: 'SCADA provenance\nBatch genealogy',
    // scada-alarm-lifecycle
    scadaAlarmLifecycleTitle: 'SCADA Alarm Lifecycle',
    scadaAlarmLifecycleTooltip: 'Alarms expose state, acknowledgement, disposition, and recovery.',
    scadaAlarmLifecycleBrief:
      'An alarm is not just a noise. It is a condition, a disposition, a piece of evidence, and a record of who did what about it.',
    scadaAlarmLifecycleArticle: `## Alarm State Is Evidence\n\nEvery alarm records the tag, the limit, the measured value, the priority, the time, and the literal condition. Acknowledging an alarm does not make the process condition go away. Return-to-normal does not excuse you from acknowledging it.\n\nShelving hides an alarm temporarily. Suppression is a deliberate, bounded control decision. Out-of-service means the signal cannot be trusted right now. Each of these requires a name and a reason, so the timeline stays honest.\n\nFlood monitoring counts occurrences over a rolling window. Event history is kept separate from the active alarm list — a cleared symptom should not vanish from operational memory.`,
    scadaAlarmLifecycleSeeInAction: 'SCADA alarms\nEvent history',
    // predictive-maintenance
    predictiveMaintenanceTitle: 'Predictive Maintenance Loop',
    predictiveMaintenanceTooltip:
      'Wear becomes diagnosis, parts demand, repair, verification, and restart.',
    predictiveMaintenanceBrief:
      'Fix things before they break. And when they do break, fix them properly — with parts, evidence, and a controlled restart.',
    predictiveMaintenanceArticle: `## From Signal to Return to Service\n\nTemperature, vibration, load, and wear can raise a predictive alert before anything actually breaks. When something does break, a work order opens with a diagnosed cause and the parts it needs. No parts, no repair — the system will not pretend.\n\nDispatch a service unit from the Predictive Maintenance panel to carry the order through repair and verification. The machine stays locked out until its controlled restart is confirmed, wear is reduced, and it reports ready.\n\nEvery phase transition is recorded. A progress bar cannot claim recovery while the production model still considers the machine critical.`,
    predictiveMaintenanceSeeInAction: 'Predictive maintenance\nSCADA maintenance provenance',
    // batch-quality
    batchQualityTitle: 'Batch Quality and Recall',
    batchQualityTooltip: 'Quality disposition follows exact batches and source lots.',
    batchQualityBrief:
      'Batch holds isolate affected material. Expired certification, unresolved contamination or a failed laboratory result can also block all dispatch.',
    batchQualityArticle: `## Bounded Quality Decisions\n\nA quality test names the batch, source lots, equipment, test type, measurements, and who ordered it. A batch hold stops dispatch of the suspect material while the rest of the line keeps running. A passing retest releases the investigated scope. A recall isolates only what needs isolating.\n\nCertification, unresolved contamination and the latest laboratory result are separate plant-wide dispatch checks. Releasing a batch does not clear those conditions. Resolve them through the QC controls before loading.\n\nThis is more informative than a single quality score that goes up or down. The score still works for trends, but the genealogy and disposition records carry the evidence you actually need to act.`,
    batchQualitySeeInAction: 'Overview batch genealogy\nSCADA quality provenance',
    // autonomous-logistics
    autonomousLogisticsTitle: 'Autonomous Logistics Choreography',
    autonomousLogisticsTooltip:
      'Forklifts, dock doors, trailers, and manifests move as one system.',
    autonomousLogisticsBrief:
      'Forklifts say where they are going and trucks follow a sequence. Nobody cuts in line.',
    autonomousLogisticsArticle: `## Legible Yard Motion\n\nEvery forklift publishes where it is, where it is heading, and when it intends to stop — which is more communication than most warehouse colleagues manage. Conflict prediction checks nearby vehicles and obstacles before anything moves.\n\nTrucks follow a strict choreography: approach, alignment, dock, loading, departure. Dock plates, doors, lamps, and manifests all agree with whichever phase is active. Decorative animation scales with graphics quality, but process-critical state changes remain visible regardless.`,
    autonomousLogisticsSeeInAction: 'Shipping yard\nForklift telemetry',
    // environment-cycle
    environmentCycleTitle: 'Environment and Celestial Cycle',
    environmentCycleTooltip: 'Sky, sun, moon, mountains, windows, lamps, and water share time.',
    environmentCycleBrief:
      'The sky, the lamps, the puddles, and the mountains all answer to the same clock and weather.',
    environmentCycleArticle: `## A Coherent Backdrop\n\nSky, haze, clouds, sun, moon, stars, mountains, window glow, yard lamps, and water all move together rather than on independent timers. When the sun sets, the whole world agrees about it.\n\nDistant ridges hold their silhouette without competing with the factory. The moon and stars arrive as daylight leaves. Weather modifies cloud cover, light contrast, and water character without replacing the world — rain makes it wetter, not different.\n\nStable shader cache keys and bounded per-frame updates keep the cycle continuous without recompilation or allocation churn.`,
    environmentCycleSeeInAction: 'Sky and mountains\nStream and culvert',
    // bottlenecks-and-buffers
    bottlenecksAndBuffersTitle: 'Bottlenecks and Buffers',
    bottlenecksAndBuffersTooltip: 'Watch where material waits before increasing the line speed.',
    bottlenecksAndBuffersBrief:
      'A faster mill helps only when the sifter, packer and loading dock can accept its output. Follow the queue to find the limiting stage.',
    bottlenecksAndBuffersArticle: `## Follow the Waiting Material\n\nStart with the active order in Overview. Its blocker and next action identify whether the line needs grain, processing, a quality disposition, loading or departure. The SCADA process workspace shows the material ledger and dispatch state.\n\nA buffer gives the next stage time to catch up. Full storage or a held batch can stop progress even when the machinery is healthy. Increasing speed before clearing that constraint adds work without completing the customer's delivery.\n\nChanging the recipe selects new grain at the silo valves. Grain and grist already inside the line finish under their original product type and traceability records. Let that work clear; a recipe change cannot turn existing flour into semolina.\n\nTry changing one control at a time. Watch the next stage and the released kilograms, then check whether the order's shipped mass actually increases. A moving conveyor alone is insufficient evidence of a completed order.`,
    bottlenecksAndBuffersSeeInAction: 'Overview commitment\nSCADA Process workspace',
    // resource-tradeoffs
    resourceTradeoffsTitle: 'Energy, Waste and Useful Output',
    resourceTradeoffsTooltip: 'Compare running costs with released and delivered kilograms.',
    resourceTradeoffsBrief:
      'Speed has a cost. Compare energy, waste and delay with the useful flour that reaches the customer.',
    resourceTradeoffsArticle: `## Make the Tradeoff Visible\n\nThe campaign accounts for energy, automation, waste, maintenance, dock delays and late deliveries. Revenue comes from credited customer shipments. The shift debrief puts these costs beside dispatched kilograms and open risks.\n\nA lower line setpoint can give constrained downstream equipment room to recover. Waiting also risks the order's due time. Compare both effects rather than treating maximum speed as the objective.\n\nUse a recovery challenge to observe a bounded power, packaging or control interruption. Read the response's consequence before choosing it. Quality and unresolved serious incidents limit the shift grade even when the financial margin is positive. These are simulator accounts, not a real mill's tariff or food-safety certificate.`,
    resourceTradeoffsSeeInAction: 'Overview recovery challenges\nShift debrief\nSCADA utilities',
    // community-commitments
    communityCommitmentsTitle: 'The Mill and Its Neighbours',
    communityCommitmentsTooltip: 'A completed cooperative order supplies the village bakery.',
    communityCommitmentsBrief:
      'The bakery needs a real flour delivery. Safe, traceable production is a promise to the people who use its output.',
    communityCommitmentsArticle: `## A Delivery Has a Destination\n\nThe Riverside Bakers' Cooperative order links the mill to the village bakery. Its display is stocked only after the campaign records a fulfilled flour order with shipment evidence. The display is a visual response to that delivery; it does not create another quantity of flour in the ledger.\n\nThe school-meals and pasta commitments have their own recipes, deadlines and shipments. Finishing one customer's order does not supply every shop in the world. Read the active customer and the remaining kilograms before changing the recipe.\n\nVillage residents retain ordinary walks, work and tea breaks. Mill tasks respond to equipment, maintenance and quality conditions. A safety stop holds personnel in their current positions while automated egress verification checks the site; it does not certify a worker evacuation.`,
    communityCommitmentsSeeInAction:
      'Overview customer orders\nVillage bakery\nSafety egress verification',
    // depth-and-material-policy
    depthAndMaterialPolicyTitle: 'Depth and Material Policy',
    depthAndMaterialPolicyTooltip:
      'Shared layers and explicit colour spaces prevent visual instability.',
    depthAndMaterialPolicyBrief:
      'Surfaces do not fight for the same pixel. Explicit depth and colour-space contracts keep them honest.',
    depthAndMaterialPolicyArticle: `## Stable Surfaces\n\nExterior ground surfaces share one elevation and use polygon offset to sort themselves. Floor markings disable depth writes. Decals use bounded offsets. Camera near and far planes preserve depth precision across the whole site.\n\nProcedural albedo textures declare sRGB colour space. Normal, roughness, metalness, and height maps stay linear. Getting this wrong makes cobblestones glow or gives metal the sheen of wet soap — neither is a good look.\n\nThese contracts prevent flicker, washed-out colour, mirror-smooth roughness failures, and the seams that appear when surfaces are separated by guesswork.`,
    depthAndMaterialPolicySeeInAction: 'Factory floor\nRoads and stream banks',
    // autonomous-evidence
    autonomousEvidenceTitle: 'Autonomous Evidence and Replay',
    autonomousEvidenceTooltip:
      'Every decision carries observations, assumptions, alternatives, and expected effect.',
    autonomousEvidenceBrief:
      'Autonomy is trustworthy when you can ask it why. Every decision carries its evidence.',
    autonomousEvidenceArticle: `## Legible Autonomy\n\nTrust requires transparency. Every autonomous decision captures its telemetry, timestamp, assumptions, alternatives, expected effect, and the equipment in scope. You can always ask why.\n\nThe replay ledger samples machine state, alerts, and vehicle positions without credentials or personal data. Commands are stored separately from frames, so a review can tell what happened from what requested it.\n\nConfidence comes with reasoning attached, not as an unexplained percentage. When evidence does not justify intervention, the system holds steady rather than guessing.`,
    autonomousEvidenceSeeInAction: 'AI Command Centre\nDecision replay',
  },
  zh: {
    historyUnlock: '由磨坊纪事中的事件解锁',
    // Loading-screen principles
    quoteTraceEveryLot: '追溯每个批次、每次状态变化、每条报警与每次发运。',
    quoteSafeStop: '安全停机是生产的一部分，而不是生产的失败。',
    quoteMotion: '动作应先呈现过程状态，再服务于装饰。',
    quoteOneWorld: '一个世界、一个时钟、一个运行事实之源。',
    quoteAutonomyTrust: '自治通过清晰可读的证据赢得信任。',
    quoteAlarmNeeds: '每条报警都需要条件、处置与恢复路径。',
    quoteBoringMill: '运转良好的磨坊是乏味的。乏味正是目标。',
    quoteCheckMeasurement: '核查测量值、它的上下文，以及它所支撑的行动。',
    quoteForklifts: '如果叉车犯了迷糊，系统也一样。',
    authorControl: 'MillOS 控制原则',
    authorVisual: 'MillOS 视觉原则',
    authorArchitecture: 'MillOS 架构原则',
    authorAutonomy: 'MillOS 自治原则',
    authorScada: 'MillOS SCADA 原则',
    authorLogistics: 'MillOS 物流原则',
    // Library labels
    alwaysAvailable: '收录于自主运行资料库',
    categoryPrinciples: '运行原则',
    categoryPioneers: '世界与过程谱系',
    categorySystems: '控制系统',
    categoryCases: '运行案例',
    // unified-digital-twin
    unifiedDigitalTwinTitle: '统一数字孪生',
    unifiedDigitalTwinTooltip: '室内、堆场、村庄、农田与水体共用同一场模拟。',
    unifiedDigitalTwinBrief:
      '工厂与其周边环境共用同一坐标系、同一时钟与同一天气状态。室内室外之间没有接缝。',
    unifiedDigitalTwinArticle: `## 连续统一的厂区\n\n生产车间、装卸堆场、村庄、农田、溪流与远方地形同属一个世界。移动相机改变的是你看到的内容，而不是正在模拟的内容。\n\n这意味着卡车驶向的装卸区，正是你从室内看到的那几个；水流穿过的涵洞，正是你从路边看到的那一座。太阳、月亮、灯光与过程时钟全部源自同一个时间源。没有接缝，没有重复状态，没有不连续的光照。\n\n这也让故障更容易定位。定位、遮挡、路线净空与深度分层策略都可以在同一坐标系中度量，而无需在互不相连的场景之间换算。`,
    unifiedDigitalTwinSeeInAction: '3D 世界\n概览工作区',
    // autonomous-material-flow
    autonomousMaterialFlowTitle: '自主物料流',
    autonomousMaterialFlowTooltip: '原料批穿越筒仓、磨辊机、平筛与包装线，全程可追溯。',
    autonomousMaterialFlowBrief: '每一袋面粉都能把谱系追溯至抵达装卸区的那批谷物。',
    autonomousMaterialFlowArticle: `## 因果物料流\n\n谷物以接收运单的形式到达，成为原料批。每一次转化——研磨、筛理、包装——都记录投入了什么、产出了什么、由哪台设备完成、发生在何时。发运只能装载已放行的物料。没有捷径。\n\n谱系账将已接收、在制、已发运与损失的物料量相互核对。出现差异属于控制缺陷，而非舍入误差。质量扣留只跟随受影响的批次，而不是对整条产线一刀切处罚。\n\n这让 SCADA 工作区中的每一个重大动作都有据可查。状态可以由其输入重建，而不必从仪表盘数字倒推。`,
    autonomousMaterialFlowSeeInAction: 'SCADA 来源\n批次谱系',
    // scada-alarm-lifecycle
    scadaAlarmLifecycleTitle: 'SCADA 报警生命周期',
    scadaAlarmLifecycleTooltip: '报警呈现状态、确认、处置与恢复。',
    scadaAlarmLifecycleBrief:
      '报警不只是声响。它是一项条件、一次处置、一份证据，也是谁对此做了什么的记录。',
    scadaAlarmLifecycleArticle: `## 报警状态即证据\n\n每条报警都记录点位、限值、测量值、优先级、时间与条件原文。确认一条报警并不会让过程条件消失。数值恢复正常也不能免除确认。\n\n搁置只是暂时隐藏报警。抑制是一项深思熟虑、有边界的控制决策。停用（OOS）表示该信号此刻不可信。以上每一项都要求署名与理由，从而让时间线保持诚实。\n\n报警风暴监控在滚动窗口内统计发生次数。事件历史与活动报警列表分开保存——已清除的症状不应从运行记忆中消失。`,
    scadaAlarmLifecycleSeeInAction: 'SCADA 报警\n事件历史',
    // predictive-maintenance
    predictiveMaintenanceTitle: '预测性维护循环',
    predictiveMaintenanceTooltip: '磨损依次变为诊断、备件需求、维修、验证与重启。',
    predictiveMaintenanceBrief:
      '在设备损坏之前修复它。即便损坏了，也要妥善修好——有备件、有证据、有受控重启。',
    predictiveMaintenanceArticle: `## 从信号到恢复投用\n\n温度、振动、负载与磨损可以在设备真正损坏之前发出预测性警报。一旦损坏，工单随即开启，并附上已诊断的原因与所需备件。没有备件就没有维修——系统不会装样子。\n\n从预测性维护面板派遣维护单位，把工单一路推进到维修与验证。设备保持锁定，直到受控重启得到确认、磨损降低并报告就绪。\n\n每一次阶段转换都有记录。只要生产模型仍视该设备为危急，进度条就不能宣称已恢复。`,
    predictiveMaintenanceSeeInAction: '预测性维护\nSCADA 维护来源',
    // batch-quality
    batchQualityTitle: '批次质量与召回',
    batchQualityTooltip: '质量处置精确跟随具体批次与原料批。',
    batchQualityBrief:
      '批次扣留会隔离受影响的物料。认证过期、未解决的污染或实验室结果不合格，也可能阻断全部发运。',
    batchQualityArticle: `## 有界的质量决策\n\n一次质量检测会写明批次、原料批、设备、检测类型、测量值以及下令检测的人。批次扣留只叫停可疑物料的发运，产线其余部分照常运转。复检合格即放行被调查的范围。召回只隔离需要隔离的部分。\n\n认证、未解决的污染与最新实验室结果是三项独立的厂级发运检查。放行一个批次并不会清除这些状况。请在装载前通过质检控制逐项解决。\n\n这比一个只升只降的质量分更有信息量。评分仍可用于观察趋势，但真正支撑行动的证据在谱系与处置记录里。`,
    batchQualitySeeInAction: '概览批次谱系\nSCADA 质量来源',
    // autonomous-logistics
    autonomousLogisticsTitle: '自主物流编排',
    autonomousLogisticsTooltip: '叉车、装卸区门、挂车与运单作为一个系统协同运转。',
    autonomousLogisticsBrief: '叉车会声明去向，卡车按序行驶。没有人插队。',
    autonomousLogisticsArticle: `## 清晰可读的场院运动\n\n每台叉车都会公布自己在哪里、要去哪里、打算何时停下——这比大多数仓库同事的沟通还要多。任何移动发生之前，冲突预测都会先检查附近的车辆与障碍物。\n\n卡车遵循严格的编排：接近、对位、靠台、装载、驶离。渡板、库门、指示灯与运单都与当前所处阶段保持一致。装饰性动画随画质缩放，但过程关键的状态变化无论如何都保持可见。`,
    autonomousLogisticsSeeInAction: '发运堆场\n叉车遥测',
    // environment-cycle
    environmentCycleTitle: '环境与天体循环',
    environmentCycleTooltip: '天空、太阳、月亮、群山、窗户、灯光与水体共享同一时间。',
    environmentCycleBrief: '天空、灯光、水洼与群山都听从同一座时钟与同一场天气。',
    environmentCycleArticle: `## 协调一致的背景\n\n天空、雾霭、云层、太阳、月亮、星辰、群山、窗光、场院灯与水体同步运行，而不是各用各的定时器。太阳落山时，整个世界对此达成一致。\n\n远处的山脊保持自己的轮廓，不与工厂争抢视线。月亮与星辰随白昼离去而到来。天气会调整云量、光影对比与水体的样貌，却不会替换整个世界——雨只会让它更湿，不会让它变成另一个世界。\n\n稳定的着色器缓存键与有界的逐帧更新让循环持续运转，不产生重新编译，也没有分配抖动。`,
    environmentCycleSeeInAction: '天空与群山\n溪流与涵洞',
    // bottlenecks-and-buffers
    bottlenecksAndBuffersTitle: '瓶颈与缓冲',
    bottlenecksAndBuffersTooltip: '在提高产线速度之前，先看物料在哪里等待。',
    bottlenecksAndBuffersBrief:
      '磨辊机更快，只有当平筛、包装线与装载区接得住产出时才有意义。沿着队列找到制约工段。',
    bottlenecksAndBuffersArticle: `## 跟随等待的物料\n\n从概览中的活动订单入手。它的阻碍项与下一步行动会指出产线缺的是谷物、加工、质量处置、装载还是离场发运。SCADA 过程工作区显示物料台账与发运状态。\n\n缓冲给下一个工段留出追赶的时间。即使设备健康，仓储已满或批次被扣留也会让进度停滞。在清除该约束之前提速，只会增加工作量，却完成不了客户的交付。\n\n更换配方会在筒仓阀门处选取新的谷物。已在产线内的谷物与在磨物料仍按原产品类型与追溯记录完成加工。让这些活儿走完；更换配方无法把已有的面粉变成粗粒粉。\n\n一次只改一个控制量。观察下一个工段与已放行的千克数，再核对订单的发运量是否真的增加了。仅凭输送机在动，不足以证明订单已完成。`,
    bottlenecksAndBuffersSeeInAction: '概览承诺\nSCADA 过程工作区',
    // resource-tradeoffs
    resourceTradeoffsTitle: '能耗、浪费与有效产出',
    resourceTradeoffsTooltip: '把运行成本与已放行、已交付的千克数放在一起比较。',
    resourceTradeoffsBrief: '速度是有代价的。把能耗、浪费与延误同送达客户的有效面粉放在一起权衡。',
    resourceTradeoffsArticle: `## 让权衡可见\n\n加工季会核算能耗、自动化、浪费、维护、装卸区延误与迟交。收入来自已计入的客户发运。班次回顾把这些成本放在已发运千克数与未结风险旁边。\n\n更低的产线设定值可以给受限的下游设备留出恢复余地。等待同样会危及订单的到期时间。把两种影响放在一起比较，而不是把最高速度当作目标。\n\n用恢复挑战来观察一次有界的电力、包装或控制中断。先读清每个回应的后果再做选择。即使财务利润为正，质量与未解决的严重事件也会限制班次等级。这些是模拟器的账目，不是真实磨坊的电费单或食品安全证书。`,
    resourceTradeoffsSeeInAction: '概览恢复挑战\n班次回顾\nSCADA 公用工程',
    // community-commitments
    communityCommitmentsTitle: '磨坊与邻里',
    communityCommitmentsTooltip: '完成一张合作社订单，即可为乡村面包店供货。',
    communityCommitmentsBrief:
      '面包店需要一次真实的面粉交付。安全、可追溯的生产，是对产品使用者的承诺。',
    communityCommitmentsArticle: `## 交付自有去向\n\nRiverside Bakers' Cooperative 的订单把磨坊与乡村面包店连在一起。只有当加工季记录到一张凭发运证据完成的面粉订单时，面包店的陈列才会摆满。陈列只是对那次交付的视觉回应；它不会在台账里凭空多出一笔面粉。\n\n学生餐与意面承诺各有自己的配方、期限与发运。完成一个客户的订单并不意味着世上每家店铺都有了货。更换配方之前，先看清当前客户与剩余千克数。\n\n村庄居民照常散步、工作与喝茶小憩。磨坊任务响应设备、维护与质量状况。安全停机会让人员留在当前位置，同时自动疏散验证检查厂区；它并不认证一次工人疏散。`,
    communityCommitmentsSeeInAction: '概览客户订单\n乡村面包店\n安全疏散验证',
    // depth-and-material-policy
    depthAndMaterialPolicyTitle: '深度与材质策略',
    depthAndMaterialPolicyTooltip: '共享图层与显式色彩空间防止视觉不稳定。',
    depthAndMaterialPolicyBrief: '表面不会争抢同一个像素。显式的深度与色彩空间契约让一切保持本分。',
    depthAndMaterialPolicyArticle: `## 稳定的表面\n\n室外地表共享同一高度，用多边形偏移（polygon offset）自行排序。地面标线禁用深度写入。贴花使用有界偏移。相机近平面与远平面在整个厂区范围内保持深度精度。\n\n程序化反照率纹理声明 sRGB 色彩空间。法线、粗糙度、金属度与高度贴图保持线性。弄反了会让鹅卵石发光，或让金属泛着湿肥皂般的光泽——哪个都不好看。\n\n这些契约防止闪烁、泛白发灰的颜色、镜面般光滑的粗糙度故障，以及靠猜分隔表面时出现的接缝。`,
    depthAndMaterialPolicySeeInAction: '生产车间\n道路与溪流沿岸',
    // autonomous-evidence
    autonomousEvidenceTitle: '自主证据与回放',
    autonomousEvidenceTooltip: '每个决策都附带观测、假设、备选方案与预期效果。',
    autonomousEvidenceBrief: '当你能向它问一句“为什么”，自治才值得信任。每个决策都自带证据。',
    autonomousEvidenceArticle: `## 清晰可读的自治\n\n信任需要透明。每个自主决策都会记录其遥测、时间戳、假设、备选方案、预期效果与涉及设备。你随时可以问为什么。\n\n回放台账对设备状态、警报与车辆位置采样，不含凭据或个人数据。指令与帧分开存储，因此回顾时能区分“发生了什么”与“是谁要求的”。\n\n置信度附带推理过程，而不是一个无从解释的百分比。当证据不足以支持干预时，系统会保持稳定，而不是瞎猜。`,
    autonomousEvidenceSeeInAction: 'AI 伙伴面板\n决策回放',
  },
  'pt-BR': {
    historyUnlock: 'Desbloqueado por um evento na Crônica do Moinho',
    // Loading-screen principles
    quoteTraceEveryLot: 'Rastreie cada lote, mudança de estado, alarme e expedição.',
    quoteSafeStop: 'Uma parada segura faz parte da produção, não é uma falha dela.',
    quoteMotion: 'O movimento deve mostrar o estado do processo antes de servir de decoração.',
    quoteOneWorld: 'Um mundo, um relógio, uma única fonte de verdade operacional.',
    quoteAutonomyTrust: 'A autonomia conquista confiança com evidências legíveis.',
    quoteAlarmNeeds:
      'Todo alarme precisa de uma condição, um tratamento e um caminho de recuperação.',
    quoteBoringMill: 'Um moinho bem operado é monótono. A monotonia é o objetivo.',
    quoteCheckMeasurement: 'Confira a medição, o contexto dela e a ação que ela sustenta.',
    quoteForklifts: 'Se as empilhadeiras estão confusas, o sistema também está.',
    authorControl: 'Princípio de controle do MillOS',
    authorVisual: 'Princípio visual do MillOS',
    authorArchitecture: 'Princípio de arquitetura do MillOS',
    authorAutonomy: 'Princípio de autonomia do MillOS',
    authorScada: 'Princípio SCADA do MillOS',
    authorLogistics: 'Princípio de logística do MillOS',
    // Library labels
    alwaysAvailable: 'Disponível na biblioteca de operações autônomas',
    categoryPrinciples: 'Princípios de operação',
    categoryPioneers: 'Linhagem do mundo e do processo',
    categorySystems: 'Sistemas de controle',
    categoryCases: 'Casos operacionais',
    // unified-digital-twin
    unifiedDigitalTwinTitle: 'Gêmeo digital unificado',
    unifiedDigitalTwinTooltip:
      'Interior, pátio, vila, fazenda e água compartilham uma única simulação.',
    unifiedDigitalTwinBrief:
      'A fábrica e seus arredores compartilham um único sistema de coordenadas, um único relógio e uma única condição climática. Não há emenda entre o lado de dentro e o de fora.',
    unifiedDigitalTwinArticle: `## Um local contínuo\n\nChão do moinho, pátio de carga, vila, fazenda, riacho e terreno distante fazem parte de um único mundo. Mover a câmera muda o que você vê, não o que está sendo simulado.\n\nIsso significa que os caminhões se aproximam das mesmas docas que você vê de dentro. A água corre pelo mesmo bueiro que você vê da estrada. Sol, lua, lâmpadas e relógios de processo derivam todos de uma única fonte de tempo. Sem emendas, sem estado duplicado, sem iluminação descontínua.\n\nIsso também facilita encontrar falhas. Posicionamento, oclusão, folga das rotas e políticas de camadas de profundidade podem ser medidos em um único sistema de coordenadas, em vez de convertidos entre cenas desconectadas.`,
    unifiedDigitalTwinSeeInAction: 'Mundo 3D\nEspaço de trabalho da Visão geral',
    // autonomous-material-flow
    autonomousMaterialFlowTitle: 'Fluxo autônomo de material',
    autonomousMaterialFlowTooltip:
      'Os lotes de origem continuam rastreáveis pelos silos, moinhos de rolos, plansifters e ensacadeiras.',
    autonomousMaterialFlowBrief:
      'Cada saco de farinha pode ter a origem rastreada até o grão que chegou à doca.',
    autonomousMaterialFlowArticle: `## Fluxo causal de material\n\nO grão chega como um romaneio de recebimento e se torna um lote de origem. Cada transformação — moagem, peneiramento, ensaque — registra o que entrou, o que saiu, qual máquina fez o trabalho e quando. A expedição só pode carregar material liberado. Sem atalhos.\n\nO balanço da genealogia compara a massa recebida, em processo, expedida e perdida. Uma discrepância é um defeito de controle, não um erro de arredondamento. As retenções de qualidade acompanham os lotes afetados, em vez de aplicar uma penalidade geral à linha inteira.\n\nIsso dá ao espaço de trabalho SCADA evidências para cada ação importante. Um estado pode ser reconstruído a partir das suas entradas, e não deduzido de um número no painel.`,
    autonomousMaterialFlowSeeInAction: 'Procedência no SCADA\nGenealogia dos lotes',
    // scada-alarm-lifecycle
    scadaAlarmLifecycleTitle: 'Ciclo de vida dos alarmes SCADA',
    scadaAlarmLifecycleTooltip:
      'Os alarmes mostram estado, reconhecimento, tratamento e recuperação.',
    scadaAlarmLifecycleBrief:
      'Um alarme não é só um barulho. É uma condição, um tratamento, uma evidência e um registro de quem fez o quê a respeito.',
    scadaAlarmLifecycleArticle: `## O estado do alarme é evidência\n\nCada alarme registra a tag, o limite, o valor medido, a prioridade, o horário e a condição literal. Reconhecer um alarme não faz a condição do processo desaparecer. O retorno ao normal não dispensa você de reconhecê-lo.\n\nColocar em espera oculta um alarme temporariamente. A supressão é uma decisão de controle deliberada e delimitada. Fora de serviço significa que, no momento, o sinal não é confiável. Cada uma dessas ações exige um nome e um motivo, para que a linha do tempo continue honesta.\n\nO monitoramento de avalanches de alarmes conta ocorrências em uma janela móvel. O histórico de eventos fica separado da lista de alarmes ativos — um sintoma resolvido não deve sumir da memória operacional.`,
    scadaAlarmLifecycleSeeInAction: 'Alarmes do SCADA\nHistórico de eventos',
    // predictive-maintenance
    predictiveMaintenanceTitle: 'Ciclo de manutenção preditiva',
    predictiveMaintenanceTooltip:
      'O desgaste vira diagnóstico, demanda de peças, reparo, verificação e religamento.',
    predictiveMaintenanceBrief:
      'Conserte as coisas antes que quebrem. E, quando quebrarem, conserte direito — com peças, evidências e um religamento controlado.',
    predictiveMaintenanceArticle: `## Do sinal ao retorno à operação\n\nTemperatura, vibração, carga e desgaste podem gerar um alerta preditivo antes que algo realmente quebre. Quando algo quebra, abre-se uma ordem de serviço com a causa diagnosticada e as peças necessárias. Sem peças, sem reparo — o sistema não vai fingir.\n\nDespache uma unidade de serviço pelo painel Manutenção preditiva para levar a ordem até o reparo e a verificação. A máquina fica bloqueada até que o religamento controlado seja confirmado, o desgaste seja reduzido e ela informe que está pronta.\n\nCada transição de fase fica registrada. Uma barra de progresso não pode alegar recuperação enquanto o modelo de produção ainda considera a máquina crítica.`,
    predictiveMaintenanceSeeInAction: 'Manutenção preditiva\nProcedência da manutenção no SCADA',
    // batch-quality
    batchQualityTitle: 'Qualidade de lotes e recolhimento',
    batchQualityTooltip:
      'A destinação de qualidade acompanha exatamente os lotes produzidos e os lotes de origem.',
    batchQualityBrief:
      'Retenções de lote isolam o material afetado. Certificação vencida, contaminação não resolvida ou resultado de laboratório reprovado também podem bloquear toda a expedição.',
    batchQualityArticle: `## Decisões de qualidade delimitadas\n\nUm teste de qualidade identifica o lote, os lotes de origem, o equipamento, o tipo de teste, as medições e quem o solicitou. Uma retenção de lote interrompe a expedição do material suspeito enquanto o restante da linha continua funcionando. Um reteste aprovado libera o escopo investigado. Um recolhimento isola apenas o que precisa ser isolado.\n\nA certificação, a contaminação não resolvida e o resultado de laboratório mais recente são verificações separadas de expedição para toda a planta. Liberar um lote não resolve essas condições. Resolva-as pelos controles do CQ antes do carregamento.\n\nIsso informa mais do que uma única nota de qualidade que sobe ou desce. A nota continua útil para tendências, mas os registros de genealogia e de destinação trazem as evidências de que você realmente precisa para agir.`,
    batchQualitySeeInAction:
      'Genealogia dos lotes na Visão geral\nProcedência da qualidade no SCADA',
    // autonomous-logistics
    autonomousLogisticsTitle: 'Coreografia logística autônoma',
    autonomousLogisticsTooltip:
      'Empilhadeiras, portas das docas, carretas e romaneios se movem como um único sistema.',
    autonomousLogisticsBrief:
      'As empilhadeiras avisam para onde vão e os caminhões seguem uma sequência. Ninguém fura a fila.',
    autonomousLogisticsArticle: `## Movimento legível no pátio\n\nCada empilhadeira informa onde está, para onde vai e quando pretende parar — o que é mais comunicação do que a maioria dos colegas de armazém consegue. A previsão de conflitos verifica veículos e obstáculos próximos antes que qualquer coisa se mova.\n\nOs caminhões seguem uma coreografia rigorosa: aproximação, alinhamento, docagem, carregamento, saída. Niveladoras de doca, portas, lâmpadas e romaneios concordam com a fase que estiver ativa. A animação decorativa acompanha a qualidade gráfica, mas as mudanças de estado críticas para o processo continuam visíveis em qualquer caso.`,
    autonomousLogisticsSeeInAction: 'Pátio de expedição\nTelemetria das empilhadeiras',
    // environment-cycle
    environmentCycleTitle: 'Ambiente e ciclo celeste',
    environmentCycleTooltip:
      'Céu, sol, lua, montanhas, janelas, lâmpadas e água seguem o mesmo relógio.',
    environmentCycleBrief:
      'O céu, as lâmpadas, as poças e as montanhas obedecem ao mesmo relógio e ao mesmo clima.',
    environmentCycleArticle: `## Um cenário coerente\n\nCéu, névoa, nuvens, sol, lua, estrelas, montanhas, brilho das janelas, lâmpadas do pátio e água se movem juntos, e não em temporizadores independentes. Quando o sol se põe, o mundo inteiro concorda.\n\nAs cristas distantes mantêm a silhueta sem competir com a fábrica. A lua e as estrelas chegam quando a luz do dia vai embora. O clima altera a cobertura de nuvens, o contraste da luz e o aspecto da água sem substituir o mundo — a chuva o deixa mais molhado, não diferente.\n\nChaves estáveis de cache de shaders e atualizações por quadro delimitadas mantêm o ciclo contínuo, sem recompilação nem excesso de alocações de memória.`,
    environmentCycleSeeInAction: 'Céu e montanhas\nRiacho e bueiro',
    // bottlenecks-and-buffers
    bottlenecksAndBuffersTitle: 'Gargalos e estoques intermediários',
    bottlenecksAndBuffersTooltip:
      'Observe onde o material fica esperando antes de aumentar a velocidade da linha.',
    bottlenecksAndBuffersBrief:
      'Um moinho mais rápido só ajuda quando o plansifter, a ensacadeira e a doca de carga conseguem receber o que ele produz. Siga a fila para encontrar a etapa limitante.',
    bottlenecksAndBuffersArticle: `## Siga o material que espera\n\nComece pelo pedido ativo na Visão geral. O bloqueio e a próxima ação dele indicam se a linha precisa de grão, de processamento, de uma destinação de qualidade, de carregamento ou de saída. O espaço de trabalho de processo do SCADA mostra o livro-razão de material e o estado da expedição.\n\nUm estoque intermediário dá à etapa seguinte tempo para alcançar o ritmo. Armazenamento cheio ou um lote retido podem parar o avanço mesmo quando o maquinário está saudável. Aumentar a velocidade antes de resolver essa restrição acrescenta trabalho sem concluir a entrega do cliente.\n\nMudar a receita seleciona novo grão nas válvulas dos silos. O grão e o produto em moagem que já estão dentro da linha terminam com o tipo de produto e os registros de rastreabilidade originais. Deixe esse trabalho escoar; uma mudança de receita não transforma farinha já produzida em semolina.\n\nTente mudar um controle de cada vez. Observe a etapa seguinte e os quilos liberados e depois verifique se a massa expedida do pedido realmente aumenta. Um transportador em movimento, sozinho, não é evidência suficiente de um pedido concluído.`,
    bottlenecksAndBuffersSeeInAction:
      'Compromisso na Visão geral\nEspaço de trabalho de Processo do SCADA',
    // resource-tradeoffs
    resourceTradeoffsTitle: 'Energia, desperdício e produção útil',
    resourceTradeoffsTooltip: 'Compare os custos de operação com os quilos liberados e entregues.',
    resourceTradeoffsBrief:
      'Velocidade tem custo. Compare energia, desperdício e atraso com a farinha útil que chega ao cliente.',
    resourceTradeoffsArticle: `## Deixe o custo-benefício visível\n\nA campanha contabiliza energia, automação, desperdício, manutenção, atrasos na doca e entregas atrasadas. A receita vem das expedições creditadas aos clientes. O balanço do turno coloca esses custos ao lado dos quilos expedidos e dos riscos em aberto.\n\nUm setpoint de linha mais baixo pode dar folga para o equipamento restrito a jusante se recuperar. Esperar também põe em risco o prazo do pedido. Compare os dois efeitos em vez de tratar a velocidade máxima como objetivo.\n\nUse um desafio de recuperação para observar uma interrupção delimitada de energia, embalagem ou controle. Leia a consequência de cada resposta antes de escolhê-la. A qualidade e ocorrências graves não resolvidas limitam a nota do turno mesmo quando a margem financeira é positiva. Estas são contas do simulador, não a tarifa de um moinho real nem um certificado de segurança de alimentos.`,
    resourceTradeoffsSeeInAction:
      'Desafios de recuperação na Visão geral\nBalanço do turno\nUtilidades no SCADA',
    // community-commitments
    communityCommitmentsTitle: 'O moinho e seus vizinhos',
    communityCommitmentsTooltip: 'Um pedido cooperativo concluído abastece a padaria da vila.',
    communityCommitmentsBrief:
      'A padaria precisa de uma entrega real de farinha. Uma produção segura e rastreável é uma promessa às pessoas que usam o que ela produz.',
    communityCommitmentsArticle: `## Uma entrega tem destino\n\nO pedido da Riverside Bakers' Cooperative liga o moinho à padaria da vila. A vitrine da padaria só é abastecida depois que a campanha registra um pedido de farinha atendido, com evidência de expedição. A vitrine é uma resposta visual a essa entrega; ela não cria mais nenhuma quantidade de farinha no livro-razão.\n\nOs compromissos de merenda escolar e de massas têm receitas, prazos e expedições próprios. Concluir o pedido de um cliente não abastece todas as lojas do mundo. Confira o cliente ativo e os quilos restantes antes de mudar a receita.\n\nOs moradores da vila mantêm as caminhadas, o trabalho e as pausas para o chá de sempre. As tarefas do moinho respondem às condições dos equipamentos, da manutenção e da qualidade. Uma parada de segurança mantém as pessoas nas posições em que estão enquanto a verificação automatizada das rotas de saída confere o local; ela não certifica uma evacuação de trabalhadores.`,
    communityCommitmentsSeeInAction:
      'Pedidos de clientes na Visão geral\nPadaria da vila\nVerificação das rotas de saída em Segurança',
    // depth-and-material-policy
    depthAndMaterialPolicyTitle: 'Política de profundidade e materiais',
    depthAndMaterialPolicyTooltip:
      'Camadas compartilhadas e espaços de cor explícitos evitam instabilidade visual.',
    depthAndMaterialPolicyBrief:
      'As superfícies não disputam o mesmo pixel. Contratos explícitos de profundidade e de espaço de cor as mantêm honestas.',
    depthAndMaterialPolicyArticle: `## Superfícies estáveis\n\nAs superfícies externas do chão compartilham uma única elevação e usam polygon offset para se ordenar. As marcações do piso desativam a escrita de profundidade. Os decalques usam deslocamentos delimitados. Os planos near e far da câmera preservam a precisão de profundidade em todo o local.\n\nAs texturas procedurais de albedo declaram o espaço de cor sRGB. Os mapas de normal, rugosidade, metalicidade e altura permanecem lineares. Errar nisso faz os paralelepípedos brilharem ou dá ao metal o brilho de sabão molhado — nenhum dos dois fica bonito.\n\nEsses contratos evitam cintilação, cores desbotadas, falhas de rugosidade espelhada e as emendas que aparecem quando as superfícies são separadas no chute.`,
    depthAndMaterialPolicySeeInAction: 'Chão de fábrica\nEstradas e margens do riacho',
    // autonomous-evidence
    autonomousEvidenceTitle: 'Evidências autônomas e reprodução',
    autonomousEvidenceTooltip:
      'Cada decisão traz observações, premissas, alternativas e o efeito esperado.',
    autonomousEvidenceBrief:
      'A autonomia é confiável quando você pode perguntar o porquê. Cada decisão traz suas evidências.',
    autonomousEvidenceArticle: `## Autonomia legível\n\nConfiança exige transparência. Cada decisão autônoma registra sua telemetria, o horário, as premissas, as alternativas, o efeito esperado e os equipamentos no escopo. Você sempre pode perguntar por quê.\n\nO registro de reprodução amostra o estado das máquinas, os alertas e as posições dos veículos sem credenciais nem dados pessoais. Os comandos ficam armazenados separados dos quadros, para que uma revisão consiga distinguir o que aconteceu daquilo que o solicitou.\n\nO nível de confiança vem acompanhado do raciocínio, e não como uma porcentagem sem explicação. Quando as evidências não justificam uma intervenção, o sistema se mantém estável em vez de adivinhar.`,
    autonomousEvidenceSeeInAction: 'Central de comando de IA\nReprodução da decisão',
  },
});
