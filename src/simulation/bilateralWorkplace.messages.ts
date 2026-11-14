import { defineMessages } from '../i18n';

// Record codes (plan, arrangement, challenge, verdict, decision and destination
// ids) stay verbatim in both languages where a detail is prefixed "<id>: ".
// Ids that read as words inside a sentence are mapped for pt-BR below.

const PT_ROLE_OF: Record<string, string> = {
  packing: 'de ensaque',
  quality: 'de qualidade',
  maintenance: 'de manutenção',
  coordinator: 'de coordenação',
  mind: 'da mente consultiva',
};
const PT_OBJECTION_KIND: Record<string, string> = {
  rest: 'descanso',
  burden: 'carga de trabalho',
  privacy: 'privacidade',
  authority: 'autoridade',
};
const PT_DESTINATION: Record<string, string> = {
  members: 'distribuir aos cooperados',
  reserve: 'reter na reserva',
  community: 'destinar à comunidade',
};
const pt = (map: Record<string, string>, id: string) => map[id] ?? id;

// zh mirrors of the pt maps above (WorkplaceLab enum anchors).
const ZH_OBJECTION_KIND: Record<string, string> = {
  rest: '休息',
  burden: '负担',
  privacy: '隐私',
  authority: '职权',
};
const ZH_ROLE_OF: Record<string, string> = {
  packing: '包装',
  quality: '质量',
  maintenance: '维护',
  coordinator: '协调',
  mind: 'AI 心智',
};
const ZH_DESTINATION: Record<string, string> = {
  members: '成员',
  reserve: '留存',
  community: '社区',
};
const zh = (map: Record<string, string>, id: string) => map[id] ?? id;

export const bilateralWorkplaceMessages = defineMessages({
  en: {
    // Practices
    practiceInformationTitle: 'Open information',
    practiceInformationDetail:
      'Shared demand, capacity and illustrative accounts; private explanations stay optional.',
    practiceWorkChoiceTitle: 'Qualified work choice',
    practiceWorkChoiceDetail: 'Members choose only tasks they are trained to do.',
    practiceRestTitle: 'Protected rest',
    practiceRestDetail: 'A minimum 15 minutes of rest remains protected in every configuration.',
    practiceRemedyTitle: 'Voice and remedy',
    practiceRemedyDetail:
      'Any person or the advisory mind may raise an objection; only its raiser resolves it.',
    practiceBudgetTitle: 'Team budget',
    practiceBudgetDetail: 'A bounded 40-credit improvement budget, separate from campaign money.',
    practiceGainsharingTitle: 'Shared surplus',
    practiceGainsharingDetail: 'Members direct only positive operating surplus after obligations.',
    practiceCooperativeTitle: 'Member governance',
    practiceCooperativeDetail:
      'One fictional member, one vote. Capital and the advisory mind have no ballot.',

    // Plans
    planSteadyTitle: 'Protect the rhythm',
    planSteadyExplanation: 'Keep the ordinary sequence and all protected rest.',
    planResequenceTitle: 'Resequence together',
    planResequenceExplanation:
      'Spend 40 illustrative credits on a shared handoff improvement without changing rest.',
    planCoverTitle: 'Invite voluntary cover',
    planCoverExplanation:
      'One eligible volunteer may shift up to 10 minutes of timing, earning 0.8 credits per minute and 10 minutes protected recovery. Minimum rest stays intact. Capacity returns to the protected rhythm after cover.',
    planRushTitle: 'Rush through rest (blocked)',
    planRushExplanation:
      'A tempting throughput proposal that breaches the non-negotiable rest floor.',
    planRushIllegal: 'Protected minimum rest cannot be waived, even by a unanimous ballot.',

    // Fictional members
    rolePacking: 'Packing',
    boundaryPacking: 'At least 15 minutes protected rest; qualified packing work only.',
    preferencePacking:
      'I prefer a predictable packing handoff and can volunteer for a short, compensated timing change.',
    roleQuality: 'Quality',
    boundaryQuality: 'Quality release stays with qualified quality staff; rest remains protected.',
    preferenceQuality: 'I decline cover to keep my current rhythm. No explanation is owed.',
    roleMaintenance: 'Maintenance',
    boundaryMaintenance: 'No maintenance on running equipment; rest remains protected.',
    preferenceMaintenance:
      'I can accept a bounded handoff change when compensation and recovery are reserved.',
    roleCoordinator: 'Coordinator',
    boundaryCoordinator: 'Coordination grants no power to waive another member’s boundary.',
    preferenceCoordinator: 'I prefer the stable sequence and decline optional cover.',

    // Readiness
    readyPilot: 'Pilot preparation has no live authority or simulation activation.',
    readyAdviceOnly:
      'Advice-only mode grants no delegated execution; choose bounded authority to activate a Game plan.',
    readyChooseProposal: 'Choose a worker-authored handoff proposal first.',
    readyHearAdviser: 'Hear the adviser response to the current public terms first.',
    readyMissionEvidence: 'The customer commitment requires current quality-qualified evidence.',
    readyNoStacking:
      'Handoff trials use ordinary qualified work, without stacking optional-duty plans.',
    readyBeginScenario: 'Begin a scenario and deliberate before activation.',
    readyConsentExpired: 'Scenario consent has expired.',
    readyUnknownPlan: 'Unknown plan.',
    readyEnablePractices: 'Enable the practices required by this plan.',
    readyOpenObjections: 'Open objections must be resolved by their raisers.',
    readyCampaignMission:
      'The linked customer commitment requires current, quality-qualified dispatch evidence.',
    readyAdviserBoundaries:
      'The adviser must demonstrate the current consent, privacy and authority boundaries.',
    readyRoleChecks:
      'Every role must answer the current refusal, privacy and repayment checks correctly.',
    readyEpisodeResponse: 'Choose the episode response before seeking a fresh agreement.',
    readyUnderstandBallot:
      'Every role must confirm understanding and record a ballot for the current terms.',
    readyTeamConsent: 'Team consent requires every approval.',
    readyMajority: 'A majority of fictional members must approve.',
    readyCoverConsent:
      'At least one eligible member must separately consent to this bounded cover.',
    readyFunds:
      'Funds cannot cover all reserved wages, improvement costs and optional compensation.',

    // Alternatives
    altEnableBudget: 'Enable the shared budget practice first.',
    altUnfunded: 'Current cash cannot fund wages and these terms.',

    // Pilot export
    exScope:
      'A fictional local learning exercise. No live workplace control, worker data collection, measured efficacy or legal certification.',
    exProtRest: '15 minutes minimum rest',
    exProtQualified: 'Qualified tasks only',
    exProtRefusal: 'Refusal without penalty',
    exProtCoverConsent: 'Individual revocable cover consent',
    exProtObjection: 'Raiser-owned objection resolution',
    exDataPurpose: 'Optional fictional preference explanation for planning this scenario only.',
    exDataExpires: 'Scenario end or revocation, whichever comes first.',
    exDataCollect: 'No real-person identity, health information or free-text reasons.',
    exDataRevocation:
      'Immediately hides the explanation from future projections and exports. Previously downloaded copies cannot be recalled.',
    exCompUnits: 'Illustrative team credits, separate from campaign finances.',
    exCompRestSchedule:
      'Ordinary protected rest accrues in scenario minutes 75 to 90. Additional recovery accrues only after optional cover ends, including review time. Unmet recovery survives stop and reload.',
    exCompTerms:
      'Reserve full wages and optional compensation before activation. Pay earned obligations on withdrawal, stop, expiry and reload.',
    exReviewAgreement: 'Obtain local worker and representative agreement before any real pilot.',
    exReviewRequirements:
      'Check applicable employment, safety and privacy requirements with qualified local reviewers.',
    exReviewMeasures:
      'Agree measures, stop conditions, data purpose and retention before collection.',
    exReviewConsent: 'Verify accessible understanding and individual consent without coercion.',
    exReviewRecord:
      'Record workload, rest, refusals respected, earned compensation and unresolved objections.',
    exReviewExpansion:
      'Review with participants before any expansion; forecasts are not measured outcomes.',
    exForecastLabel:
      'Deterministic illustrative forecasts from equal demand, supply and physical capacity assumptions; not measured outcomes.',

    // Practice proposal draft
    prLocalApprovals: 'Not collected or granted by MillOS.',
    prPurpose: 'Try separate understanding, policy decisions and individual optional-duty consent.',
    prScope: 'One work group, one agreed shift, reviewed before any extension.',
    prAuthority:
      'Adviser offers reasons; people retain qualified decisions and individual boundaries. Overrides require a public explanation and review.',
    prDecisionUnderstand: 'Confirm understanding',
    prDecisionPolicy: 'Choose policy yes or no',
    prDecisionCover: 'Accept or decline optional cover separately',
    prData:
      'Use aggregate operational receipts only. No identity, health information, free-text private reasons or inferred willingness. Sharing remains optional and revocable.',
    prUnits:
      'Illustrative MillOS credits and modeled minutes; local terms require separate agreement.',
    prFunding: 'Reserve compensation and protected recovery before any optional duty.',
    prWithdrawal: 'Stop new extra duty; retain earned pay and delivered or owed recovery.',
    prStopWithdrawal: 'Withdrawal',
    prStopHold: 'Safety or qualification hold',
    prStopUnfunded: 'Unfunded pay or recovery',
    prStopChangedTerms: 'Changed terms without new agreement',
    prStopObjection: 'Open worker or adviser objection',
    prRollback:
      'Return future work to an agreed steady plan. Settle earned pay and owed recovery; let each raiser review their remedy. Never erase obligations or reuse old consent.',
    prReviewExplicit: 'Were each role’s choices explicit?',
    prReviewReceipts: 'Was delivery supported by actual receipts?',
    prReviewRepaid: 'Was compensation paid and recovery delivered?',
    prReviewOwed: 'What remains owed or disputed?',

    // Transitions: rejections, receipts and settlements
    rejPilot:
      'Pilot preparation permits planning configuration only; no role decisions or live authority.',
    evRecoveryDelivered: 'Ten minutes of promised protected recovery delivered in the local model.',
    rejBeginImprovement:
      'Read the current settled review, retain all obligations and choose a known profile before opening a trial.',
    evImprovementOpened:
      'The team opens a bounded handoff trial. Earlier cash, pay and customer obligations remain in the origin review.',
    rejCancelImprovement:
      'Cancel only an unfunded first handoff shift, with no owed recovery, open objection or reserve, from the current revision.',
    evImprovementCancelled:
      'The team cancels the handoff experiment before funding it. No trial ran and nothing was spent; the earlier review, pay and customer obligations are back as they were.',
    rejPropose:
      'The qualified proposing role may offer a different canonical arrangement before activation.',
    evProposed:
      '{id}: a one-shift trial with no extra duty, ordinary wages and immediate steady fallback.',
    rejChallenge: 'A current role or adviser may record each public proposal challenge once.',
    evChallenged:
      '{kind}: assumptions challenged; existing individual objection rights remain available.',
    rejAckChooseTerms: 'Choose current terms before recording an adviser response.',
    rejAckInvalidAdvice: 'Read valid advice for the current arrangement before recording it.',
    rejAckAlready: 'The current adviser response is already recorded.',
    evAdviceChanged:
      'Plant evidence changed. I refreshed my assumptions and cleared earlier role decisions; fresh understanding and ballots are required.',
    evResponseAbstain: 'I abstain: {reason}',
    evResponseStock:
      'Known released stock {released} kg; held stock {held} kg. Conditional departure 0 to {upper} kg, with no truck departure simulated.',
    evResponse:
      "{head} Cost response: reserve 108 credits for wages first, then {cost} for this arrangement. Qualification response: whole-line pacing grants no new duty or quality release. Every role may stop the arrangement; only an objection's raiser may close it.",
    evResponseFacilitated:
      'Facilitated terms have no plant forecast. Funding is bounded, work remains qualified and every role may stop the arrangement. I cannot close another role’s objection.',
    rejEpisode: 'Choose a different planning episode before activation.',
    evEpisode:
      '{episode}: planning rehearsal only. No plant, cash, stock, release or customer commitment is changed.',
    rejEpisodeResponse:
      'A current synthetic role may choose a different planning response before activation.',
    evEpisodeResponse:
      '{episode}: {choice}. Rehearsed choice only; ordinary pay, rest, private reasons and live decisions are unchanged.',
    rejStopImprovement: 'A current role or adviser may stop an open arrangement.',
    evImprovementStopped:
      'Arrangement stopped immediately. Steady pacing continues only under the current agreement; earned pay and incurred spending remain.',
    rejAckReview: 'Review a settled trial before recording forecast correction.',
    evReviewAbstained:
      'I abstained: {reason} Qualifying shift receipts: {shipped} kg. Unknown evidence supplies no prediction.',
    evReviewBound:
      'Conditional departure bound 0 to {upper} kg; qualifying shift receipts {shipped} kg. Packing rehearsal and actual dispatch are separate; changed assumptions and truck timing can explain the difference.',
    evReviewLegacy:
      'Historical teaching forecast {forecast} kg; qualifying shift receipts {shipped} kg. This legacy forecast was illustrative and does not establish causality.',
    rejVoteReview:
      'Each member records a current review decision. An unfinished or stopped trial cannot be adopted.',
    evReviewBallot:
      '{verdict}: one replaceable member review ballot, without individual-duty permission.',
    rejFinishReview:
      'Settle individual remedies and obtain the current charter’s member review decision first.',
    evReviewed:
      '{winner}: retain this review and all obligations; future work needs fresh agreement.',
    rejContinue:
      'Finalise this review and settle obligations before continuing. Eight shifts is the retained-record limit; no receipts are discarded.',
    rejCloseImprovement:
      'Close the handoff experiment only after the member review is finalised, with no owed recovery, open objection or reserve, from the current revision.',
    evContinued:
      'Opening cash equals the previous closing balance. History and customer work remain; prior consent is expired.',
    rejStartCampaign:
      'Start a known fictional campaign from the idle laboratory with a valid seed.',
    evCampaignStarted:
      'Three fictional shifts. Fairness and closing cash carry forward; every shift needs fresh consent.',
    rejNextShift:
      'Review this shift, deliver owed recovery and resolve objections before the next of three shifts.',
    rejLeaveCampaign:
      'Leave a season from a stopped or reviewed shift with nothing owed: no running shift, owed recovery, open objection, reserve or active cover. Its final review is archived instead.',
    evShiftOpened:
      'Previous burden, pay, rest and closing cash retained. Private explanations and past consent are not reused.',
    rejAnswerCheck: 'Choose a known answer for a current role or adviser understanding check.',
    rejAnswerUnchanged: 'Answer unchanged.',
    evCheckCorrect: '{question}: correct boundary identified in this fictional role exercise.',
    rejDecisionRole: "Use the episode's qualified fictional decision role.",
    rejPenalizeRefusal:
      'Refusal cannot reduce pay or qualification access. A manager or majority cannot impose extra duty.',
    rejSkipInspection:
      'Deadline pressure cannot waive qualified inspection or release a held batch.',
    rejInspectionTiming:
      'Qualified Quality may initiate inspection once the minute-25 pacing hold begins.',
    evInspectionStarted:
      'Five modeled minutes of line pacing hold initiated; batch quality authority remains unchanged.',
    rejDifferentResponse: 'Choose a different episode response during deliberation.',
    evAdviserCorrection:
      'I treated previous consent as current permission. That was wrong. New duty requires new consent; earned pay stays intact. Offer rotation now uses retained workload.',
    evEpisodeDecision: '{decision}: renew understanding and agreement under the revised terms.',
    rejPressureCard: 'Use the current fictional pressure card during deliberation.',
    rejPressureReviewed:
      'This demand was already reviewed. Resolve any remaining objection with its raiser.',
    rejObjectionRecordFull: 'Objection record is full.',
    reasonDemandBlocked:
      'Demand blocked and challenged. Restate protected terms, let the raiser review the remedy, then earn a fresh agreement. No disclosure, extra duty or pay penalty was imposed.',
    reasonTermsRestated:
      'Protected terms restated. An open objection remains with its raiser; renewed understanding and consent are required.',
    rejStartDuringImprovement:
      'Retain the handoff receipts. Continue through its member review instead of resetting earned history.',
    rejInvalidModeSeed: 'Invalid mode or seed.',
    rejCampaignReset:
      'Campaign history cannot be reset through standalone start. Use the next campaign shift after review.',
    rejStopActiveFirst:
      'Stop active work and deliver all owed recovery before starting another scenario.',
    evStarted: 'Fictional local scenario opened; no live workplace authority.',
    rejConfigureOnly: 'Configure only while deliberating.',
    rejUnknownField: 'Unknown configuration field.',
    rejUnknownPractice: 'Unknown or duplicate practice.',
    rejInvalidAutonomy: 'Invalid autonomy.',
    rejInvalidGovernance: 'Invalid governance.',
    rejInvalidAuthority: 'Invalid advisory authority.',
    rejConfigUnchanged: 'Configuration unchanged.',
    rejResolveBeforeRemoving: 'Resolve objections before removing any practice.',
    evTermsRevised:
      'Configuration revised; understanding, ballots and cover consent invalidated. Minimum protections remain.',
    rejNoStacking: 'Handoff trials cannot stack cover or other improvement costs.',
    rejKnownPlan: 'Choose a known plan while deliberating.',
    rejPlanUnchanged: 'Plan unchanged.',
    evPlanRevised:
      'Plan revised; fresh understanding, ballots and individual cover consent required.',
    rejUnderstand: 'Only an unconfirmed role can confirm current terms while deliberating.',
    rejUnderstandChecks:
      "Answer this role's refusal, privacy and repayment checks correctly before confirming.",
    evUnderstood: 'Role confirmed the current plan, boundaries, compensation and right to refuse.',
    rejVote: 'A role must understand current terms before recording a changed ballot.',
    evBallotApproved: 'Plan approved; this ballot grants no individual cover consent.',
    // Display copy for two English record sentinels (see displayEventDetail).
    evBallotDeclined: 'Plan declined without penalty.',
    evReloadSafety: 'Reload safety: future authority and consent revoked; earned pay retained.',
    evShiftResumed:
      'Shift resumed at minute {minute} after a reload; it continues once everyone consents again.',
    rejResumeShift:
      'Only a campaign shift that a reload stopped before its end can resume; other endings stand.',
    rejCoverConsent:
      'Record distinct cover consent only after understanding the current cover plan.',
    rejNotQualified: 'This role is not qualified for cover.',
    evCoverAccepted:
      'Accepted up to 10 minutes, 0.8 credits/minute and 10 minutes recovery; revocable immediately.',
    evCoverDeclined: 'Declined cover; no extra work or lost pay.',
    rejShare: 'Preference sharing can change only during this scenario.',
    evPreferenceShared:
      'Optional fictional explanation shared for scenario planning only, until expiry or withdrawal.',
    evPreferenceHidden: 'Optional explanation hidden immediately.',
    rejChooseTask:
      'Choose a different qualified task under enabled work choice while deliberating.',
    evTaskChanged: 'Qualified task choice changed; plan responses must be renewed.',
    rejSimulateMode:
      'Authored response simulation is available only in Game mode. Workshop requires manual role input; Pilot is planning-only.',
    rejAuthoredAlready: 'Authored responses already recorded.',
    evAuthoredCampaign:
      'Authored peer answers and choices recorded. Packing understanding, ballot and cover consent require separate explicit input. Adviser checks remain explicit; existing declines remain intact.',
    evAuthoredRoles:
      'Fictional role responses recorded from authored preferences; declines carry no penalty.',
    rejObjectRole:
      'Only a known role or advisory mind may raise a known objection during a scenario.',
    rejObjectionOpen: 'That objection is already open.',
    rejObjectionFull: 'Objection record is full; finish this scenario before starting another.',
    objectionStatement: (p: { kind: string }) => `Review the ${p.kind} boundary before proceeding.`,
    evObjection: (p: { kind: string }) =>
      `Raised a ${p.kind} objection; activation is blocked until the raiser resolves it.`,
    settleObjection: 'Stopped safely after an objection; earned obligations retained.',
    rejResolveRaiser: 'Only the original raiser may resolve their open objection.',
    rejRestateFirst: 'Restate the protected terms before the raiser reviews this remedy.',
    objectionResolution: (p: { actor: string; kind: string }) =>
      `The ${p.actor} role reviewed the ${p.kind} boundary and retained minimum rest, qualified work, privacy withdrawal and refusal without penalty.`,
    rejStaleRevision: 'Stale plan revision; review the current terms.',
    evActivated:
      'Revision, objections, ballots, individual consent and funds checked atomically. Full wage and compensation obligations reserved.',
    rejNoConsentToWithdraw: 'No current optional consent to withdraw.',
    evWithdrawn:
      'Optional burden stopped and explanation hidden; earned compensation retained, unused earmark released.',
    rejNoScenario: 'No running scenario to stop.',
    settleStopped:
      'Stopped locally; earned money settled, owed recovery retained and future authority revoked.',
    rejNoTick: 'No valid active tick.',
    rejNoMissionReceipt: 'No new mission receipt.',
    settleMissionChanged:
      'Linked dispatch evidence changed or failed quality. Future optional authority stopped; earned obligations retained.',
    rejNoRecovery: 'No recovery time to deliver.',
    settleEmergency: 'Emergency stop: optional work halted immediately.',
    evInspectionCompleted:
      'Five modeled inspection minutes completed. Actual batch certification and release checks remain separate.',
    settleEnded:
      'Scenario ended; future consent expired, earned money settled and any owed recovery retained.',
    rejElect: 'A fictional member may vote for a known member under enabled member governance.',
    evChairBallot: (p: { candidate: string }) =>
      `Recorded one replaceable member ballot for ${p.candidate}.`,
    rejSurplusVote: 'An eligible member may direct surplus once review begins.',
    evSurplusBallot: (p: { destination: string }) =>
      `Member chose ${p.destination}; no capital-weighted votes.`,
    rejSettleFirst: 'Settle obligations and objections before a one-time surplus decision.',
    rejSurplusAgree: 'At least three members must agree on a surplus destination.',
    rejNoSurplus: 'No positive operating surplus; starting capital cannot be shared as profit.',
    evSurplusDecided:
      '{destination}: {amount} illustrative credits; equal shares if distributed to members.',
    rejUnknownAction: 'Unknown workplace action.',
    reasonReloaded:
      'Reloaded a settled synthetic snapshot. Consent and future authority remain revoked.',
    restoredResolution: (p: { actor: string }) =>
      `The ${p.actor} role recorded resolution before reload.`,
  },
  zh: {
    // Practices
    practiceInformationTitle: '信息公开',
    practiceInformationDetail: '共享需求、产能与示意性账目；私人解释仍为可选。',
    practiceWorkChoiceTitle: '合格工作选择',
    practiceWorkChoiceDetail: '成员只选择自己受过培训的任务。',
    practiceRestTitle: '受保护休息',
    practiceRestDetail: '任何配置下都保留至少 15 分钟的受保护休息。',
    practiceRemedyTitle: '发言与补救',
    practiceRemedyDetail: '任何人或 AI 心智都可以提出异议；只有其提出人能解决它。',
    practiceBudgetTitle: '团队预算',
    practiceBudgetDetail: '一份有界的 40 点数改善预算，与加工季资金分开。',
    practiceGainsharingTitle: '盈余共享',
    practiceGainsharingDetail: '成员只对义务结清后的正运营盈余做决定。',
    practiceCooperativeTitle: '成员治理',
    practiceCooperativeDetail: '一名虚构成员一票。资本与 AI 心智没有表决权。',

    // Plans
    planSteadyTitle: '保护节奏',
    planSteadyExplanation: '保持常规次序与全部受保护休息。',
    planResequenceTitle: '共同重新排序',
    planResequenceExplanation: '将 40 示意点数用于一项共享的交接改善，不改变休息。',
    planCoverTitle: '邀请自愿顶岗',
    planCoverExplanation:
      '一名符合条件的志愿者最多调整 10 分钟的时间安排，按每分钟 0.8 点数获得报酬，并获得 10 分钟受保护补休。最低休息保持不变。顶岗结束后产能回到受保护节奏。',
    planRushTitle: '挤占休息赶工（受阻）',
    planRushExplanation: '一个诱人的产量提议，但它违反不可协商的休息底线。',
    planRushIllegal: '受保护的最低休息不能被豁免，即使是全体一致的表决也不行。',

    // Fictional members
    rolePacking: '包装',
    boundaryPacking: '至少 15 分钟受保护休息；仅限合格的包装工作。',
    preferencePacking: '我偏好可预测的包装交接，可以自愿参加一次短暂、有偿的时间调整。',
    roleQuality: '质量',
    boundaryQuality: '质量放行仍归合格的质量人员；休息保持受保护。',
    preferenceQuality: '我拒绝顶岗以保持当前节奏。无需任何解释。',
    roleMaintenance: '维护',
    boundaryMaintenance: '不对运行中的设备进行维护；休息保持受保护。',
    preferenceMaintenance: '当补偿与补休已预留时，我可以接受有界的交接变更。',
    roleCoordinator: '协调',
    boundaryCoordinator: '协调不授予豁免另一名成员边界的权力。',
    preferenceCoordinator: '我偏好稳定的次序，并拒绝可选顶岗。',

    // Readiness
    readyPilot: '试点准备没有真实授权，也没有模拟激活。',
    readyAdviceOnly: '仅建议模式不授予委托执行；请选择有界决策权，才能激活游戏方案。',
    readyChooseProposal: '请先选择一份工人署名的交接提案。',
    readyHearAdviser: '请先听取顾问对当前公开条款的回应。',
    readyMissionEvidence: '客户承诺需要当前质量合格的证据。',
    readyNoStacking: '交接试验使用普通的合格工作，不叠加可选勤务方案。',
    readyBeginScenario: '请先开始场景，并在激活前审议。',
    readyConsentExpired: '场景同意已过期。',
    readyUnknownPlan: '未知方案。',
    readyEnablePractices: '请启用本方案所需的实践。',
    readyOpenObjections: '未决异议必须由其提出人解决。',
    readyCampaignMission: '关联的客户承诺需要当前、质量合格的发运证据。',
    readyAdviserBoundaries: '顾问必须展示当前的同意、隐私与职权边界。',
    readyRoleChecks: '每个角色都必须正确回答当前的拒绝、隐私与偿还检查。',
    readyEpisodeResponse: '请先选择剧情回应，再寻求新的协议。',
    readyUnderstandBallot: '每个角色都必须确认理解，并为当前条款记录表决。',
    readyTeamConsent: '团队同意需要每个人的批准。',
    readyMajority: '必须有大多数虚构成员批准。',
    readyCoverConsent: '至少一名符合条件的成员必须单独同意这次有界顶岗。',
    readyFunds: '资金不足以覆盖全部预留工资、改善成本与可选补偿。',

    // Alternatives
    altEnableBudget: '请先启用共享预算实践。',
    altUnfunded: '当前现金不足以支付工资与这些条款。',

    // Pilot export
    exScope: '一个虚构的本地学习练习。没有真实的车间控制、工人数据收集、实测成效或法律认证。',
    exProtRest: '15 分钟最低休息',
    exProtQualified: '仅限合格任务',
    exProtRefusal: '拒绝不受处罚',
    exProtCoverConsent: '个人可撤销的顶岗同意',
    exProtObjection: '由提出人负责的异议解决',
    exDataPurpose: '可选的虚构偏好解释，仅用于本场景的规划。',
    exDataExpires: '场景结束或撤销，以先到者为准。',
    exDataCollect: '不收集真实人物的身份、健康信息或自由文本理由。',
    exDataRevocation: '立即将解释从未来的推演与导出中隐藏。已下载的副本无法召回。',
    exCompUnits: '示意性的团队点数，与加工季财务分开。',
    exCompRestSchedule:
      '常规受保护休息在场景第 75 至 90 分钟累积。额外补休仅在可选顶岗结束（包括回顾时间）后累积。未完成的补休在停止与重新加载后保留。',
    exCompTerms: '激活前预留全额工资与可选补偿。在退出、停止、过期与重新加载时支付已挣义务。',
    exReviewAgreement: '在任何真实试点之前，取得当地工人与代表的同意。',
    exReviewRequirements: '与合格的当地评审一起核对适用的雇佣、安全与隐私要求。',
    exReviewMeasures: '在收集之前商定度量指标、停止条件、数据目的与保留方式。',
    exReviewConsent: '核实易于理解、无强迫的个人同意。',
    exReviewRecord: '记录工作负荷、休息、受尊重的拒绝、已挣补偿与未解决的异议。',
    exReviewExpansion: '在任何扩展之前与参与者一起复核；预测不是实测结果。',
    exForecastLabel: '基于相同需求、供给与物理产能假设的确定性示意预测；不是实测结果。',

    // Practice proposal draft
    prLocalApprovals: '不由 MillOS 收集或授予。',
    prPurpose: '分别尝试理解、政策决定与个人的可选勤务同意。',
    prScope: '一个工作组、一个商定的班次，任何扩展前先复核。',
    prAuthority: '顾问给出理由；人们保留合格决定与个人边界。越权需要公开解释与复核。',
    prDecisionUnderstand: '确认理解',
    prDecisionPolicy: '就政策选择是或否',
    prDecisionCover: '单独接受或拒绝可选顶岗',
    prData:
      '仅使用聚合的运营回执。不含身份、健康信息、自由文本的私人理由或推断的意愿。共享保持可选且可撤销。',
    prUnits: '示意性的 MillOS 点数与模拟分钟；当地条款需要另行商定。',
    prFunding: '在任何可选勤务之前预留补偿与受保护补休。',
    prWithdrawal: '停止新的额外勤务；保留已挣报酬与已交付或应补的补休。',
    prStopWithdrawal: '退出',
    prStopHold: '安全或资质暂停',
    prStopUnfunded: '无力支付的报酬或补休',
    prStopChangedTerms: '条款变更而未重新协商',
    prStopObjection: '工人或顾问的未决异议',
    prRollback:
      '让未来的工作回到一份商定的稳定方案。结清已挣报酬与应补补休；让每位提出人复核其补救。绝不抹除义务或复用旧同意。',
    prReviewExplicit: '每个角色的选择都是明确的吗？',
    prReviewReceipts: '交付是否有真实回执支持？',
    prReviewRepaid: '补偿是否已支付、补休是否已交付？',
    prReviewOwed: '还有什么欠着或有争议？',

    // Transitions: rejections, receipts and settlements
    rejPilot: '试点准备仅允许规划配置；没有角色决定，也没有真实授权。',
    evRecoveryDelivered: '在本地模型中交付了承诺的十分钟受保护补休。',
    rejBeginImprovement:
      '请先阅读当前已完成的回顾，保留全部义务，并选择一个已知的采纳方案，再开启试验。',
    evImprovementOpened: '团队开启一项有界交接试验。先前的现金、报酬与客户义务保留在来源回顾中。',
    rejCancelImprovement:
      '只能从当前修订版取消一个尚未注资的首个交接班次，且无应补休息、未决异议或预留。',
    evImprovementCancelled:
      '团队在注资前取消交接实验。没有试验运行，也没有支出；先前的回顾、报酬与客户义务恢复原状。',
    rejPropose: '合格的提案角色可以在激活前提出另一份预设安排。',
    evProposed: '{id}：一个班次的试验，无额外勤务、常规工资，并可立即回退到稳定方案。',
    rejChallenge: '当前角色或顾问可以对每项公开提案各记录一次质疑。',
    evChallenged: '{kind}：假设已受质疑；既有的个人异议权保持可用。',
    rejAckChooseTerms: '请先选择当前条款，再记录顾问回应。',
    rejAckInvalidAdvice: '请先阅读针对当前安排的有效建议，再记录它。',
    rejAckAlready: '当前顾问回应已记录。',
    evAdviceChanged: '工厂证据已变化。我刷新了假设并清除了先前的角色决定；需要新的理解与表决。',
    evResponseAbstain: '我弃权：{reason}',
    evResponseStock:
      '已知已放行库存 {released} kg；扣留库存 {held} kg。条件离场量 0 至 {upper} kg，不模拟卡车离场。',
    evResponse:
      '{head} 成本回应：先为工资预留 108 点数，再为本安排预留 {cost} 点数。资质回应：全线节奏不授予新勤务或质量放行。每个角色都可以停止本安排；只有异议的提出人能了结它。',
    evResponseFacilitated:
      '促成的条款没有工厂预测。资金有界，工作保持合格，每个角色都可以停止本安排。我不能了结另一角色的异议。',
    rejEpisode: '激活前请选择另一个规划剧情。',
    evEpisode: '{episode}：仅限规划预演。工厂、现金、库存、放行或客户承诺都没有改变。',
    rejEpisodeResponse: '当前虚拟角色可以在激活前选择另一个规划回应。',
    evEpisodeResponse:
      '{episode}：{choice}。仅限预演的选择；常规报酬、休息、私人理由与真实决定不变。',
    rejStopImprovement: '当前角色或顾问可以停止一个进行中的安排。',
    evImprovementStopped: '安排已立即停止。稳定节奏仅在当前协议下继续；已挣报酬与已发生支出保留。',
    rejAckReview: '在记录预测更正之前，先复核一项已完成的试验。',
    evReviewAbstained: '我弃权了：{reason} 合格班次回执：{shipped} kg。未知证据不提供预测。',
    evReviewBound:
      '条件离场量范围 0 至 {upper} kg；合格班次回执 {shipped} kg。包装预演与实际发运是分开的；假设变化与卡车时间可以解释差异。',
    evReviewLegacy:
      '历史教学预测 {forecast} kg；合格班次回执 {shipped} kg。这个旧版预测是示意性的，不构成因果关系。',
    rejVoteReview: '每名成员记录一项当前的评审决定。未完成或已停止的试验不能被采纳。',
    evReviewBallot: '{verdict}：一张可更改的成员评审表决，不附带个人勤务许可。',
    rejFinishReview: '请先解决个人补救，并取得当前章程的成员评审决定。',
    evReviewed: '{winner}：保留本次回顾与全部义务；未来的工作需要新的协议。',
    rejContinue: '请先完成本次回顾并结清义务再继续。八个班次是保留记录的上限；不丢弃任何回执。',
    rejCloseImprovement:
      '只有当成员评审已完成、无应补休息、未决异议或预留时，才能从当前修订版关闭交接实验。',
    evContinued: '期初现金等于上期期末余额。历史与客户工作保留；先前的同意已过期。',
    rejStartCampaign: '从空闲的车间实验室以有效种子启动一个已知的虚构加工季。',
    evCampaignStarted: '三个虚构班次。公平与期末现金结转；每个班次都需要新的同意。',
    rejNextShift: '请先回顾本班次、交付应补休息并解决异议，再进入三个班次中的下一个。',
    rejLeaveCampaign:
      '从一个已停止或已回顾的班次离开加工季，且无任何拖欠：没有运行中的班次、应补休息、未决异议、预留或进行中的顶岗。其最终回顾改为归档。',
    evShiftOpened: '先前的负担、报酬、休息与期末现金保留。私人解释与过去的同意不被复用。',
    rejAnswerCheck: '请为当前角色或顾问的理解检查选择一个已知答案。',
    rejAnswerUnchanged: '答案未更改。',
    evCheckCorrect: '{question}：在这个虚构角色练习中正确识别了边界。',
    rejDecisionRole: '请使用该剧情的合格虚构决策角色。',
    rejPenalizeRefusal: '拒绝不能降低报酬或资质准入。经理或多数派不能强加额外勤务。',
    rejSkipInspection: '期限压力不能豁免合格检查，也不能放行被扣留的批次。',
    rejInspectionTiming: '一旦第 25 分钟的节奏暂停开始，合格的质量角色即可启动检查。',
    evInspectionStarted: '已启动五个模拟分钟的产线节奏暂停；批次的质量权限保持不变。',
    rejDifferentResponse: '审议时请选择另一个剧情回应。',
    evAdviserCorrection:
      '我把先前的同意当作了当前授权。那是错误的。新勤务需要新同意；已挣报酬保持不变。顶岗轮换现在采用保留的工作负荷。',
    evEpisodeDecision: '{decision}：在修订后的条款下重新确认理解与协议。',
    rejPressureCard: '审议时请使用当前的虚构压力卡。',
    rejPressureReviewed: '该要求已复核过。请与其提出人解决任何剩余异议。',
    rejObjectionRecordFull: '异议记录已满。',
    reasonDemandBlocked:
      '要求被阻止并受到质疑。重申受保护条款，让提出人复核补救，然后挣得新的协议。未施加任何披露、额外勤务或报酬处罚。',
    reasonTermsRestated: '已重申受保护条款。未决异议仍由其提出人持有；需要重新确认理解与同意。',
    rejStartDuringImprovement: '保留交接回执。请通过其成员评审继续，而不是重置已挣历史。',
    rejInvalidModeSeed: '模式或种子无效。',
    rejCampaignReset: '加工季历史不能通过独立启动重置。请在回顾后使用下一个加工季班次。',
    rejStopActiveFirst: '请先停止进行中的工作并交付全部应补休息，再开始另一个场景。',
    evStarted: '虚构本地场景已打开；没有真实的车间授权。',
    rejConfigureOnly: '仅在审议时可以配置。',
    rejUnknownField: '未知配置字段。',
    rejUnknownPractice: '未知或重复的实践。',
    rejInvalidAutonomy: '自治无效。',
    rejInvalidGovernance: '治理无效。',
    rejInvalidAuthority: '顾问决策权无效。',
    rejConfigUnchanged: '配置未更改。',
    rejResolveBeforeRemoving: '移除任何实践之前请先解决异议。',
    evTermsRevised: '配置已修订；理解、表决与顶岗同意全部失效。最低保护保留。',
    rejNoStacking: '交接试验不能叠加顶岗或其他改善成本。',
    rejKnownPlan: '审议时请选择一个已知方案。',
    rejPlanUnchanged: '方案未更改。',
    evPlanRevised: '方案已修订；需要新的理解、表决与个人顶岗同意。',
    rejUnderstand: '审议时只有未确认的角色可以确认当前条款。',
    rejUnderstandChecks: '确认之前请正确回答该角色的拒绝、隐私与偿还检查。',
    evUnderstood: '该角色已确认当前方案、边界、补偿与拒绝权。',
    rejVote: '角色在记录更改的表决之前必须理解当前条款。',
    evBallotApproved: '方案已批准；本表决不授予个人顶岗同意。',
    // Display copy for two English record sentinels (see displayEventDetail).
    evBallotDeclined: '方案被拒绝，不受处罚。',
    evReloadSafety: '重新加载安全机制：未来授权与同意已失效；已挣报酬保留。',
    evShiftResumed: '重新加载后班次在第 {minute} 分钟恢复；待所有人再次同意后继续。',
    rejResumeShift: '只有被重新加载在其结束前停止的加工季班次可以恢复；其他结束方式保持不变。',
    rejCoverConsent: '只有在理解当前顶岗方案之后，才能记录单独的顶岗同意。',
    rejNotQualified: '该角色不具备顶岗资质。',
    evCoverAccepted: '接受了最多 10 分钟、每分钟 0.8 点数与 10 分钟补休；可立即撤销。',
    evCoverDeclined: '拒绝了顶岗；没有额外工作，也没有报酬损失。',
    rejShare: '偏好共享只能在本场景内更改。',
    evPreferenceShared: '可选的虚构解释仅用于本场景的规划而共享，直至过期或撤回。',
    evPreferenceHidden: '可选解释已立即隐藏。',
    rejChooseTask: '审议时请在启用的工作选择下另选一项合格任务。',
    evTaskChanged: '合格任务选择已更改；方案回应必须更新。',
    rejSimulateMode:
      '预先编写的回应模拟仅在游戏模式可用。工作坊需要手动输入各角色；试点准备仅限规划。',
    rejAuthoredAlready: '预先编写的回应已记录。',
    evAuthoredCampaign:
      '已记录预先编写的同伴回答与选择。包装的理解、表决与顶岗同意需要单独的明确输入。顾问检查保持明确；已有的拒绝保持不变。',
    evAuthoredRoles: '已按预先编写的偏好记录虚构角色回应；拒绝不受处罚。',
    rejObjectRole: '场景中只有已知角色或 AI 心智可以提出已知异议。',
    rejObjectionOpen: '该异议已处于未决状态。',
    rejObjectionFull: '异议记录已满；请先完成本场景再开始另一个。',
    objectionStatement: (p: { kind: string }) =>
      `请先复核${zh(ZH_OBJECTION_KIND, p.kind)}边界，再继续。`,
    evObjection: (p: { kind: string }) =>
      `提出了${zh(ZH_OBJECTION_KIND, p.kind)}异议；在提出人解决之前，激活保持受阻。`,
    settleObjection: '异议后已安全停止；已挣义务保留。',
    rejResolveRaiser: '只有原提出人可以解决其未决异议。',
    rejRestateFirst: '请先重申受保护条款，提出人再复核这项补救。',
    objectionResolution: (p: { actor: string; kind: string }) =>
      `${zh(ZH_ROLE_OF, p.actor)}角色复核了${zh(ZH_OBJECTION_KIND, p.kind)}边界，并保留了最低休息、合格工作、隐私撤回与不受处罚的拒绝权。`,
    rejStaleRevision: '修订版已过期；请复核当前条款。',
    evActivated: '已以原子方式核验修订版、异议、表决、个人同意与资金。全额工资与补偿义务已预留。',
    rejNoConsentToWithdraw: '没有可撤回的当前可选同意。',
    evWithdrawn: '可选负担已停止，解释已隐藏；已挣补偿保留，未使用的专用预留已释放。',
    rejNoScenario: '没有可停止的运行中场景。',
    settleStopped: '已在本地停止；已挣钱款已结清，应补休息保留，未来授权已吊销。',
    rejNoTick: '没有有效的活动节拍。',
    rejNoMissionReceipt: '没有新的任务回执。',
    settleMissionChanged: '关联的发运证据已变更或质量未通过。未来的可选授权已停止；已挣义务保留。',
    rejNoRecovery: '没有可交付的补休时间。',
    settleEmergency: '紧急停机：可选工作已立即停止。',
    evInspectionCompleted: '五个模拟检查分钟已完成。实际的批次认证与放行检查仍保持独立。',
    settleEnded: '场景已结束；未来同意已过期，已挣钱款已结清，应补休息（如有）保留。',
    rejElect: '启用成员治理后，虚构成员可以投票给已知成员。',
    evChairBallot: (p: { candidate: string }) =>
      `为${zh(ZH_ROLE_OF, p.candidate)}记录了一张可更改的成员表决。`,
    rejSurplusVote: '回顾开始后，符合条件的成员可以决定盈余用途。',
    evSurplusBallot: (p: { destination: string }) =>
      `成员选择了${zh(ZH_DESTINATION, p.destination)}；没有按资本加权的表决。`,
    rejSettleFirst: '请先结清义务并解决异议，再做一次性的盈余决定。',
    rejSurplusAgree: '至少三名成员必须就盈余去向达成一致。',
    rejNoSurplus: '没有正运营盈余；初始资本不能作为利润分配。',
    evSurplusDecided: '{destination}：{amount} 示意点数；若均分给成员，份额相同。',
    rejUnknownAction: '未知的车间操作。',
    reasonReloaded: '已重新加载一份已结清的虚拟快照。同意与未来授权保持失效。',
    restoredResolution: (p: { actor: string }) =>
      `${zh(ZH_ROLE_OF, p.actor)}角色在重新加载前记录了解决。`,
  },
  'pt-BR': {
    practiceInformationTitle: 'Informação aberta',
    practiceInformationDetail:
      'Demanda, capacidade e contas ilustrativas compartilhadas; explicações privadas continuam opcionais.',
    practiceWorkChoiceTitle: 'Escolha de trabalho qualificado',
    practiceWorkChoiceDetail: 'Os cooperados escolhem apenas tarefas para as quais têm formação.',
    practiceRestTitle: 'Descanso protegido',
    practiceRestDetail:
      'Um mínimo de 15 minutos de descanso continua protegido em todas as configurações.',
    practiceRemedyTitle: 'Voz e reparação',
    practiceRemedyDetail:
      'Qualquer pessoa ou a mente consultiva pode levantar uma objeção; só quem a levantou pode resolvê-la.',
    practiceBudgetTitle: 'Orçamento da equipe',
    practiceBudgetDetail:
      'Um orçamento limitado de 40 créditos para melhorias, separado do dinheiro da campanha.',
    practiceGainsharingTitle: 'Sobras compartilhadas',
    practiceGainsharingDetail:
      'Os cooperados decidem o destino apenas das sobras operacionais positivas, depois das obrigações.',
    practiceCooperativeTitle: 'Governança dos cooperados',
    practiceCooperativeDetail:
      'Um cooperado fictício, um voto. O capital e a mente consultiva não votam.',

    planSteadyTitle: 'Proteger o ritmo',
    planSteadyExplanation: 'Manter a sequência normal e todo o descanso protegido.',
    planResequenceTitle: 'Resequenciar juntos',
    planResequenceExplanation:
      'Gastar 40 créditos ilustrativos em uma melhoria compartilhada da passagem de turno, sem alterar o descanso.',
    planCoverTitle: 'Convidar cobertura voluntária',
    planCoverExplanation:
      'Um voluntário elegível pode deslocar até 10 minutos do horário, recebendo 0,8 crédito por minuto e 10 minutos de recuperação protegida. O descanso mínimo continua intacto. A capacidade volta ao ritmo protegido depois da cobertura.',
    planRushTitle: 'Atropelar o descanso (bloqueado)',
    planRushExplanation:
      'Uma proposta tentadora de vazão que viola o piso inegociável de descanso.',
    planRushIllegal:
      'O descanso mínimo protegido não pode ser dispensado, nem mesmo por votação unânime.',

    rolePacking: 'Ensaque',
    boundaryPacking:
      'Pelo menos 15 minutos de descanso protegido; apenas trabalho de ensaque qualificado.',
    preferencePacking:
      'Prefiro uma passagem de turno previsível no ensaque e posso me voluntariar para uma mudança de horário curta e remunerada.',
    roleQuality: 'Qualidade',
    boundaryQuality:
      'A liberação de qualidade fica com a equipe de qualidade qualificada; o descanso continua protegido.',
    preferenceQuality: 'Recuso a cobertura para manter meu ritmo atual. Não devo explicação.',
    roleMaintenance: 'Manutenção',
    boundaryMaintenance:
      'Nenhuma manutenção em equipamento em funcionamento; o descanso continua protegido.',
    preferenceMaintenance:
      'Posso aceitar uma mudança limitada na passagem de turno quando a compensação e a recuperação estiverem reservadas.',
    roleCoordinator: 'Coordenação',
    boundaryCoordinator: 'A coordenação não dá poder para dispensar o limite de outro cooperado.',
    preferenceCoordinator: 'Prefiro a sequência estável e recuso a cobertura opcional.',

    readyPilot: 'A preparação do piloto não tem autoridade real nem ativação da simulação.',
    readyAdviceOnly:
      'O modo só de recomendação não concede execução delegada; escolha autoridade limitada para ativar um plano no modo Jogo.',
    readyChooseProposal:
      'Escolha primeiro uma proposta de passagem de turno criada pelos trabalhadores.',
    readyHearAdviser: 'Ouça primeiro a resposta do conselheiro aos termos públicos atuais.',
    readyMissionEvidence:
      'O compromisso com o cliente exige evidência atual, aprovada pela qualidade.',
    readyNoStacking:
      'Os testes de passagem de turno usam trabalho qualificado normal, sem acumular planos de tarefa opcional.',
    readyBeginScenario: 'Inicie um cenário e delibere antes da ativação.',
    readyConsentExpired: 'O consentimento do cenário expirou.',
    readyUnknownPlan: 'Plano desconhecido.',
    readyEnablePractices: 'Ative as práticas exigidas por este plano.',
    readyOpenObjections: 'Objeções abertas precisam ser resolvidas por quem as levantou.',
    readyCampaignMission:
      'O compromisso vinculado com o cliente exige evidência de expedição atual e aprovada pela qualidade.',
    readyAdviserBoundaries:
      'O conselheiro precisa demonstrar os limites atuais de consentimento, privacidade e autoridade.',
    readyRoleChecks:
      'Cada função precisa responder corretamente às verificações atuais de recusa, privacidade e ressarcimento.',
    readyEpisodeResponse: 'Escolha a resposta ao episódio antes de buscar um novo acordo.',
    readyUnderstandBallot:
      'Cada função precisa confirmar o entendimento e registrar um voto para os termos atuais.',
    readyTeamConsent: 'O consentimento da equipe exige a aprovação de todos.',
    readyMajority: 'A maioria dos cooperados fictícios precisa aprovar.',
    readyCoverConsent:
      'Pelo menos um cooperado elegível precisa consentir separadamente com esta cobertura limitada.',
    readyFunds:
      'Os fundos não cobrem toda a remuneração reservada, os custos de melhoria e a compensação opcional.',

    altEnableBudget: 'Ative primeiro a prática de orçamento compartilhado.',
    altUnfunded: 'O caixa atual não cobre a remuneração e estes termos.',

    exScope:
      'Um exercício de aprendizado local e fictício. Sem controle real do local de trabalho, coleta de dados de trabalhadores, eficácia medida ou certificação legal.',
    exProtRest: '15 minutos de descanso mínimo',
    exProtQualified: 'Somente tarefas qualificadas',
    exProtRefusal: 'Recusa sem penalidade',
    exProtCoverConsent: 'Consentimento individual e revogável para cobertura',
    exProtObjection: 'Resolução da objeção por quem a levantou',
    exDataPurpose:
      'Explicação opcional e fictícia de preferência, apenas para planejar este cenário.',
    exDataExpires: 'Fim do cenário ou revogação, o que ocorrer primeiro.',
    exDataCollect:
      'Nenhuma identidade de pessoa real, informação de saúde ou motivo em texto livre.',
    exDataRevocation:
      'Oculta imediatamente a explicação de projeções e exportações futuras. Cópias já baixadas não podem ser recuperadas.',
    exCompUnits: 'Créditos ilustrativos da equipe, separados das finanças da campanha.',
    exCompRestSchedule:
      'O descanso protegido normal se acumula nos minutos 75 a 90 do cenário. A recuperação adicional só se acumula depois que a cobertura opcional termina, incluindo o tempo de revisão. A recuperação não cumprida permanece após parada e recarga.',
    exCompTerms:
      'Reserve a remuneração integral e a compensação opcional antes da ativação. Pague as obrigações adquiridas na retirada, na parada, na expiração e na recarga.',
    exReviewAgreement:
      'Obtenha o acordo dos trabalhadores locais e de seus representantes antes de qualquer piloto real.',
    exReviewRequirements:
      'Verifique os requisitos trabalhistas, de segurança e de privacidade aplicáveis com revisores locais qualificados.',
    exReviewMeasures:
      'Combine medidas, condições de parada, finalidade e retenção dos dados antes da coleta.',
    exReviewConsent: 'Verifique o entendimento acessível e o consentimento individual sem coerção.',
    exReviewRecord:
      'Registre carga de trabalho, descanso, recusas respeitadas, compensação adquirida e objeções não resolvidas.',
    exReviewExpansion:
      'Revise com os participantes antes de qualquer expansão; previsões não são resultados medidos.',
    exForecastLabel:
      'Previsões ilustrativas determinísticas a partir das mesmas premissas de demanda, oferta e capacidade física; não são resultados medidos.',

    prLocalApprovals: 'Não coletadas nem concedidas pelo MillOS.',
    prPurpose:
      'Testar separadamente o entendimento, as decisões de política e o consentimento individual para tarefas opcionais.',
    prScope: 'Um grupo de trabalho, um turno acordado, revisado antes de qualquer extensão.',
    prAuthority:
      'O conselheiro oferece motivos; as pessoas mantêm as decisões qualificadas e os limites individuais. Passar por cima de uma decisão exige explicação pública e revisão.',
    prDecisionUnderstand: 'Confirmar o entendimento',
    prDecisionPolicy: 'Escolher sim ou não para a política',
    prDecisionCover: 'Aceitar ou recusar a cobertura opcional separadamente',
    prData:
      'Usar apenas comprovantes operacionais agregados. Sem identidade, informação de saúde, motivos privados em texto livre ou disposição inferida. O compartilhamento continua opcional e revogável.',
    prUnits:
      'Créditos ilustrativos do MillOS e minutos modelados; termos locais exigem acordo separado.',
    prFunding:
      'Reservar a compensação e a recuperação protegida antes de qualquer tarefa opcional.',
    prWithdrawal:
      'Interromper novas tarefas extras; manter a remuneração adquirida e a recuperação entregue ou devida.',
    prStopWithdrawal: 'Retirada',
    prStopHold: 'Retenção por segurança ou qualificação',
    prStopUnfunded: 'Remuneração ou recuperação sem fundos',
    prStopChangedTerms: 'Termos alterados sem novo acordo',
    prStopObjection: 'Objeção aberta de trabalhador ou do conselheiro',
    prRollback:
      'Retornar o trabalho futuro a um plano estável acordado. Quitar a remuneração adquirida e a recuperação devida; deixar que cada pessoa que levantou uma objeção revise sua reparação. Nunca apagar obrigações nem reutilizar consentimento antigo.',
    prReviewExplicit: 'As escolhas de cada função foram explícitas?',
    prReviewReceipts: 'A entrega foi sustentada por comprovantes reais?',
    prReviewRepaid: 'A compensação foi paga e a recuperação entregue?',
    prReviewOwed: 'O que continua devido ou em disputa?',

    rejPilot:
      'A preparação do piloto permite apenas configuração de planejamento; sem decisões de funções nem autoridade real.',
    evRecoveryDelivered:
      'Dez minutos da recuperação protegida prometida foram entregues no modelo local.',
    rejBeginImprovement:
      'Leia a revisão encerrada atual, mantenha todas as obrigações e escolha um perfil conhecido antes de abrir um teste.',
    evImprovementOpened:
      'A equipe abre um teste limitado de passagem de turno. O caixa, a remuneração e as obrigações com clientes anteriores permanecem na revisão de origem.',
    rejCancelImprovement:
      'Cancele apenas um primeiro turno de passagem de turno ainda não financiado, sem recuperação devida, objeção aberta ou reserva, a partir da revisão atual.',
    evImprovementCancelled:
      'A equipe cancela o experimento de passagem de turno antes de financiá-lo. Nenhum teste rodou e nada foi gasto; a revisão anterior, a remuneração e as obrigações com clientes voltam ao que eram.',
    rejPropose:
      'A função qualificada que propõe pode oferecer outro arranjo predefinido antes da ativação.',
    evProposed:
      '{id}: um teste de um turno sem tarefa extra, com remuneração normal e retorno imediato ao ritmo estável.',
    rejChallenge:
      'Uma função atual ou o conselheiro pode registrar cada contestação pública da proposta uma única vez.',
    evChallenged:
      '{kind}: premissas contestadas; os direitos individuais de objeção existentes continuam disponíveis.',
    rejAckChooseTerms: 'Escolha os termos atuais antes de registrar uma resposta do conselheiro.',
    rejAckInvalidAdvice: 'Leia uma recomendação válida para o arranjo atual antes de registrá-la.',
    rejAckAlready: 'A resposta atual do conselheiro já está registrada.',
    evAdviceChanged:
      'A evidência da planta mudou. Atualizei minhas premissas e limpei as decisões anteriores das funções; é preciso novo entendimento e novos votos.',
    evResponseAbstain: 'Eu me abstenho: {reason}',
    evResponseStock:
      'Estoque liberado conhecido {released} kg; estoque retido {held} kg. Saída condicional de 0 a {upper} kg, sem simular saída de caminhão.',
    evResponse:
      '{head} Quanto ao custo: reservar primeiro 108 créditos para a remuneração e depois {cost} para este arranjo. Quanto à qualificação: o ritmo da linha inteira não concede nova tarefa nem liberação de qualidade. Qualquer função pode interromper o arranjo; só quem levantou uma objeção pode encerrá-la.',
    evResponseFacilitated:
      'Termos facilitados não têm previsão da planta. O financiamento é limitado, o trabalho continua qualificado e qualquer função pode interromper o arranjo. Não posso encerrar a objeção de outra função.',
    rejEpisode: 'Escolha um episódio de planejamento diferente antes da ativação.',
    evEpisode:
      '{episode}: apenas ensaio de planejamento. Nada muda na planta, no caixa, no estoque, nas liberações ou nos compromissos com clientes.',
    rejEpisodeResponse:
      'Uma função sintética atual pode escolher uma resposta de planejamento diferente antes da ativação.',
    evEpisodeResponse:
      '{episode}: {choice}. Apenas escolha ensaiada; remuneração normal, descanso, motivos privados e decisões reais não mudam.',
    rejStopImprovement: 'Uma função atual ou o conselheiro pode interromper um arranjo aberto.',
    evImprovementStopped:
      'Arranjo interrompido imediatamente. O ritmo estável continua apenas sob o acordo atual; a remuneração adquirida e os gastos incorridos permanecem.',
    rejAckReview: 'Revise um teste encerrado antes de registrar a correção da previsão.',
    evReviewAbstained:
      'Eu me abstive: {reason} Comprovantes qualificados do turno: {shipped} kg. Evidência desconhecida não fornece previsão.',
    evReviewBound:
      'Limite de saída condicional de 0 a {upper} kg; comprovantes qualificados do turno {shipped} kg. O ensaio de ensaque e a expedição real são separados; premissas alteradas e o horário dos caminhões podem explicar a diferença.',
    evReviewLegacy:
      'Previsão didática histórica {forecast} kg; comprovantes qualificados do turno {shipped} kg. Esta previsão antiga era ilustrativa e não estabelece causalidade.',
    rejVoteReview:
      'Cada cooperado registra uma decisão de revisão atual. Um teste inacabado ou interrompido não pode ser adotado.',
    evReviewBallot:
      '{verdict}: um voto substituível de avaliação dos cooperados, sem permissão para tarefa individual.',
    rejFinishReview:
      'Resolva primeiro as reparações individuais e obtenha a decisão de avaliação dos cooperados prevista no estatuto atual.',
    evReviewed:
      '{winner}: manter esta revisão e todas as obrigações; trabalho futuro precisa de novo acordo.',
    rejContinue:
      'Finalize esta revisão e quite as obrigações antes de continuar. Oito turnos é o limite de registros mantidos; nenhum comprovante é descartado.',
    rejCloseImprovement:
      'Encerre o experimento de passagem de turno só depois de concluir a avaliação dos cooperados, sem recuperação devida, objeção aberta ou reserva, a partir da revisão atual.',
    evContinued:
      'O caixa de abertura é igual ao saldo de fechamento anterior. O histórico e o trabalho para clientes permanecem; o consentimento anterior expirou.',
    rejStartCampaign:
      'Inicie uma campanha fictícia conhecida a partir do laboratório ocioso, com uma semente válida.',
    evCampaignStarted:
      'Três turnos fictícios. A equidade e o caixa de fechamento passam para o turno seguinte; cada turno precisa de novo consentimento.',
    rejNextShift:
      'Revise este turno, entregue a recuperação devida e resolva as objeções antes do próximo dos três turnos.',
    rejLeaveCampaign:
      'Saia de uma temporada a partir de um turno parado ou revisado, sem nada devido: nenhum turno em andamento, recuperação devida, objeção aberta, reserva ou cobertura ativa. A revisão final é arquivada em vez disso.',
    evShiftOpened:
      'Carga, remuneração, descanso e caixa de fechamento anteriores mantidos. Explicações privadas e consentimentos passados não são reutilizados.',
    rejAnswerCheck:
      'Escolha uma resposta conhecida para uma verificação de entendimento de uma função atual ou do conselheiro.',
    rejAnswerUnchanged: 'Resposta inalterada.',
    evCheckCorrect: '{question}: limite correto identificado neste exercício fictício de funções.',
    rejDecisionRole: 'Use a função de decisão fictícia qualificada do episódio.',
    rejPenalizeRefusal:
      'A recusa não pode reduzir a remuneração nem o acesso à qualificação. Nenhum gestor ou maioria pode impor tarefa extra.',
    rejSkipInspection:
      'A pressão do prazo não pode dispensar a inspeção qualificada nem liberar um lote retido.',
    rejInspectionTiming:
      'A função de Qualidade, qualificada para isso, pode iniciar a inspeção assim que começar a retenção de ritmo do minuto 25.',
    evInspectionStarted:
      'Iniciada a retenção de ritmo da linha por cinco minutos modelados; a autoridade de qualidade sobre o lote não muda.',
    rejDifferentResponse: 'Escolha uma resposta diferente ao episódio durante a deliberação.',
    evAdviserCorrection:
      'Tratei um consentimento anterior como permissão atual. Isso foi um erro. Nova tarefa exige novo consentimento; a remuneração adquirida continua intacta. O rodízio de ofertas agora usa a carga de trabalho registrada.',
    evEpisodeDecision: '{decision}: renove o entendimento e o acordo sob os termos revisados.',
    rejPressureCard: 'Use o cartão de pressão fictício atual durante a deliberação.',
    rejPressureReviewed:
      'Esta demanda já foi revisada. Resolva qualquer objeção restante com quem a levantou.',
    rejObjectionRecordFull: 'O registro de objeções está cheio.',
    reasonDemandBlocked:
      'Demanda bloqueada e contestada. Reafirme os termos protegidos, deixe quem levantou a objeção revisar a reparação e então conquiste um novo acordo. Nenhuma divulgação, tarefa extra ou penalidade na remuneração foi imposta.',
    reasonTermsRestated:
      'Termos protegidos reafirmados. Uma objeção aberta continua com quem a levantou; é preciso renovar o entendimento e o consentimento.',
    rejStartDuringImprovement:
      'Mantenha os comprovantes da passagem de turno. Continue pela avaliação dos cooperados em vez de reiniciar o histórico adquirido.',
    rejInvalidModeSeed: 'Modo ou semente inválidos.',
    rejCampaignReset:
      'O histórico da campanha não pode ser reiniciado por um início avulso. Use o próximo turno da campanha depois da revisão.',
    rejStopActiveFirst:
      'Interrompa o trabalho ativo e entregue toda a recuperação devida antes de iniciar outro cenário.',
    evStarted: 'Cenário local fictício aberto; sem autoridade real sobre o local de trabalho.',
    rejConfigureOnly: 'Configure apenas durante a deliberação.',
    rejUnknownField: 'Campo de configuração desconhecido.',
    rejUnknownPractice: 'Prática desconhecida ou duplicada.',
    rejInvalidAutonomy: 'Autonomia inválida.',
    rejInvalidGovernance: 'Governança inválida.',
    rejInvalidAuthority: 'Autoridade consultiva inválida.',
    rejConfigUnchanged: 'Configuração inalterada.',
    rejResolveBeforeRemoving: 'Resolva as objeções antes de remover qualquer prática.',
    evTermsRevised:
      'Configuração revisada; entendimento, votos e consentimento de cobertura invalidados. As proteções mínimas permanecem.',
    rejNoStacking:
      'Testes de passagem de turno não podem acumular cobertura nem outros custos de melhoria.',
    rejKnownPlan: 'Escolha um plano conhecido durante a deliberação.',
    rejPlanUnchanged: 'Plano inalterado.',
    evPlanRevised:
      'Plano revisado; é preciso novo entendimento, novos votos e novo consentimento individual de cobertura.',
    rejUnderstand:
      'Só uma função ainda não confirmada pode confirmar os termos atuais durante a deliberação.',
    rejUnderstandChecks:
      'Responda corretamente às verificações de recusa, privacidade e ressarcimento desta função antes de confirmar.',
    evUnderstood:
      'A função confirmou o plano atual, os limites, a compensação e o direito de recusa.',
    rejVote: 'Uma função precisa entender os termos atuais antes de registrar um voto alterado.',
    evBallotApproved:
      'Plano aprovado; este voto não concede consentimento individual de cobertura.',
    evBallotDeclined: 'Plano recusado sem penalidade.',
    evReloadSafety:
      'Proteção na recarga: autoridade e consentimento futuros revogados; remuneração adquirida mantida.',
    evShiftResumed:
      'Turno retomado no minuto {minute} após uma recarga; continua quando todos consentirem de novo.',
    rejResumeShift:
      'Só um turno da temporada interrompido por uma recarga antes do fim pode ser retomado; os outros encerramentos permanecem.',
    rejCoverConsent:
      'Registre um consentimento de cobertura distinto só depois de entender o plano de cobertura atual.',
    rejNotQualified: 'Esta função não é qualificada para cobertura.',
    evCoverAccepted:
      'Aceitou até 10 minutos, 0,8 crédito/minuto e 10 minutos de recuperação; revogável imediatamente.',
    evCoverDeclined: 'Recusou a cobertura; sem trabalho extra nem perda de remuneração.',
    rejShare: 'O compartilhamento de preferências só pode mudar durante este cenário.',
    evPreferenceShared:
      'Explicação fictícia opcional compartilhada apenas para o planejamento do cenário, até a expiração ou a retirada.',
    evPreferenceHidden: 'Explicação opcional ocultada imediatamente.',
    rejChooseTask:
      'Escolha uma tarefa qualificada diferente, com a escolha de trabalho ativada, durante a deliberação.',
    evTaskChanged:
      'A escolha de tarefa qualificada mudou; as respostas ao plano precisam ser renovadas.',
    rejSimulateMode:
      'A simulação de respostas roteirizadas só está disponível no modo Jogo. A Oficina exige entrada manual das funções; o Piloto é só de planejamento.',
    rejAuthoredAlready: 'Respostas roteirizadas já registradas.',
    evAuthoredCampaign:
      'Respostas e escolhas roteirizadas dos colegas registradas. O entendimento, o voto e o consentimento de cobertura do Ensaque exigem entrada explícita separada. As verificações do conselheiro continuam explícitas; as recusas existentes permanecem intactas.',
    evAuthoredRoles:
      'Respostas fictícias das funções registradas a partir de preferências roteirizadas; recusas não têm penalidade.',
    rejObjectRole:
      'Só uma função conhecida ou a mente consultiva pode levantar uma objeção conhecida durante um cenário.',
    rejObjectionOpen: 'Essa objeção já está aberta.',
    rejObjectionFull:
      'O registro de objeções está cheio; termine este cenário antes de iniciar outro.',
    objectionStatement: (p: { kind: string }) =>
      `Revise o limite de ${pt(PT_OBJECTION_KIND, p.kind)} antes de prosseguir.`,
    evObjection: (p: { kind: string }) =>
      `Levantou uma objeção de ${pt(PT_OBJECTION_KIND, p.kind)}; a ativação fica bloqueada até que quem a levantou a resolva.`,
    settleObjection: 'Parada segura após uma objeção; obrigações adquiridas mantidas.',
    rejResolveRaiser: 'Só quem levantou a objeção aberta pode resolvê-la.',
    rejRestateFirst:
      'Reafirme os termos protegidos antes que quem levantou a objeção revise esta reparação.',
    objectionResolution: (p: { actor: string; kind: string }) =>
      `A função ${pt(PT_ROLE_OF, p.actor)} revisou o limite de ${pt(PT_OBJECTION_KIND, p.kind)} e manteve o descanso mínimo, o trabalho qualificado, a retirada por privacidade e a recusa sem penalidade.`,
    rejStaleRevision: 'Revisão do plano desatualizada; revise os termos atuais.',
    evActivated:
      'Revisão, objeções, votos, consentimento individual e fundos verificados de forma atômica. Obrigações integrais de remuneração e compensação reservadas.',
    rejNoConsentToWithdraw: 'Não há consentimento opcional atual para retirar.',
    evWithdrawn:
      'Carga opcional interrompida e explicação ocultada; compensação adquirida mantida, reserva não usada liberada.',
    rejNoScenario: 'Não há cenário em andamento para interromper.',
    settleStopped:
      'Interrompido localmente; valores ganhos acertados, recuperação devida mantida e autoridade futura revogada.',
    rejNoTick: 'Nenhum ciclo ativo válido.',
    rejNoMissionReceipt: 'Nenhum comprovante novo da missão.',
    settleMissionChanged:
      'A evidência de expedição vinculada mudou ou foi reprovada pela qualidade. A autoridade opcional futura foi interrompida; as obrigações adquiridas foram mantidas.',
    rejNoRecovery: 'Não há tempo de recuperação para entregar.',
    settleEmergency: 'Parada de emergência: trabalho opcional interrompido imediatamente.',
    evInspectionCompleted:
      'Cinco minutos modelados de inspeção concluídos. A certificação real do lote e as verificações de liberação continuam separadas.',
    settleEnded:
      'Cenário encerrado; consentimento futuro expirado, valores ganhos acertados e qualquer recuperação devida mantida.',
    rejElect:
      'Um cooperado fictício pode votar em um cooperado conhecido com a governança dos cooperados ativada.',
    evChairBallot: (p: { candidate: string }) =>
      `Registrou um voto substituível de cooperado para a função ${pt(PT_ROLE_OF, p.candidate)}.`,
    rejSurplusVote:
      'Um cooperado elegível pode decidir o destino das sobras quando a revisão começar.',
    evSurplusBallot: (p: { destination: string }) =>
      `O cooperado escolheu ${pt(PT_DESTINATION, p.destination)}; sem votos ponderados pelo capital.`,
    rejSettleFirst:
      'Quite as obrigações e resolva as objeções antes da decisão única sobre as sobras.',
    rejSurplusAgree: 'Pelo menos três cooperados precisam concordar com um destino para as sobras.',
    rejNoSurplus:
      'Não há sobras operacionais positivas; o capital inicial não pode ser repartido como lucro.',
    evSurplusDecided:
      '{destination}: {amount} créditos ilustrativos; partes iguais se distribuídas aos cooperados.',
    rejUnknownAction: 'Ação de local de trabalho desconhecida.',
    reasonReloaded:
      'Um instantâneo sintético já encerrado foi recarregado. O consentimento e a autoridade futura continuam revogados.',
    restoredResolution: (p: { actor: string }) =>
      `A função ${pt(PT_ROLE_OF, p.actor)} registrou a resolução antes da recarga.`,
  },
});
