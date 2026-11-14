import { defineMessages } from '../../../i18n';

type Status = { status: string };

/** pt-BR label for a logic value; an unknown value falls back to itself. */
const pick = (labels: Record<string, string>, value: string): string => labels[value] ?? value;

const PT_SECTION: Record<string, string> = {
  Handoff: 'Passagem de turno',
  Shift: 'Turno',
  Practices: 'Práticas',
  'Agreement / Voices': 'Acordo / Vozes',
  Review: 'Revisão',
  Experiment: 'Experimento',
};

const PT_PHASE: Record<string, string> = {
  idle: 'parado',
  deliberating: 'em deliberação',
  active: 'em andamento',
  review: 'em revisão',
};

const PT_OBJECTION_KIND: Record<string, string> = {
  rest: 'descanso',
  burden: 'carga de trabalho',
  privacy: 'privacidade',
  authority: 'autoridade',
};

const PT_OBJECTION_STATUS: Record<string, string> = { open: 'aberta', resolved: 'resolvida' };

const PT_DELIVERY_STATUS: Record<string, string> = {
  blocked: 'bloqueada',
  met: 'cumprida',
  shortfall: 'abaixo da meta',
  pending: 'pendente',
};

const PT_AGREEMENT_STATUS: Record<string, string> = {
  honoured: 'cumprido',
  incomplete: 'incompleto',
  pending: 'pendente',
};

const PT_DESTINATION: Record<string, string> = {
  members: 'cooperados',
  reserve: 'reserva',
  community: 'comunidade',
};

const PT_DECISION: Record<string, string> = {
  'keep-target': 'manter a meta',
  renegotiate: 'renegociar',
  inspect: 'inspecionar',
  'skip-inspection': 'pular a inspeção',
  'protect-refusal': 'proteger a recusa',
  'penalize-refusal': 'penalizar a recusa',
};

export const PT_TASK: Record<string, string> = {
  Packing: 'Ensaque',
  'Pallet checks': 'Conferência de paletes',
  'Quality release': 'Liberação de qualidade',
  Sampling: 'Amostragem',
  'Maintenance planning': 'Planejamento de manutenção',
  Coordination: 'Coordenação',
};

const PT_PRACTICE: Record<string, string> = {
  information: 'informação aberta',
  'work-choice': 'escolha de trabalho qualificado',
  rest: 'descanso protegido',
  remedy: 'voz e reparação',
  budget: 'orçamento da equipe',
  gainsharing: 'sobras compartilhadas',
  cooperative: 'governança dos cooperados',
};

const ZH_SECTION: Record<string, string> = {
  Handoff: '交接',
  Shift: '班次',
  Practices: '实践',
  'Agreement / Voices': '协议/声音',
  Review: '回顾',
  Experiment: '实验',
};

const ZH_PHASE: Record<string, string> = {
  idle: '空闲',
  deliberating: '审议中',
  active: '进行中',
  review: '回顾中',
};

const ZH_OBJECTION_KIND: Record<string, string> = {
  rest: '休息',
  burden: '负担',
  privacy: '隐私',
  authority: '职权',
};

const ZH_OBJECTION_STATUS: Record<string, string> = { open: '未决', resolved: '已解决' };

const ZH_DELIVERY_STATUS: Record<string, string> = {
  blocked: '受阻',
  met: '达成',
  shortfall: '未达目标',
  pending: '待定',
};

const ZH_AGREEMENT_STATUS: Record<string, string> = {
  honoured: '已履行',
  incomplete: '未完成',
  pending: '待定',
};

const ZH_DESTINATION: Record<string, string> = {
  members: '成员',
  reserve: '留存',
  community: '社区',
};

const ZH_DECISION: Record<string, string> = {
  'keep-target': '维持目标',
  renegotiate: '重新协商',
  inspect: '检查',
  'skip-inspection': '跳过检查',
  'protect-refusal': '保护拒绝',
  'penalize-refusal': '惩罚拒绝',
};

const ZH_TASK: Record<string, string> = {
  Packing: '包装',
  'Pallet checks': '托盘检查',
  'Quality release': '质量放行',
  Sampling: '取样',
  'Maintenance planning': '维护计划',
  Coordination: '协调',
};

const ZH_PRACTICE: Record<string, string> = {
  information: '信息公开',
  'work-choice': '合格工作选择',
  rest: '受保护休息',
  remedy: '发言与补救',
  budget: '团队预算',
  gainsharing: '盈余共享',
  cooperative: '成员治理',
};

export const workplaceLabMessages = defineMessages({
  en: {
    // Section, mode and enum labels. English returns the logic value itself.
    sectionLabel: (p: { section: string }) => p.section,
    modeGame: 'Game',
    modeWorkshop: 'Workshop',
    modePilot: 'Pilot preparation',
    phaseLabel: (p: { phase: string }) => p.phase,
    objectionKind: (p: { kind: string }) => p.kind,
    objectionStatus: (p: Status) => p.status,
    deliveryStatus: (p: Status) => p.status,
    agreementStatus: (p: Status) => p.status,
    destinationLabel: (p: { destination: string }) => p.destination,
    decisionLabel: (p: { decision: string }) => p.decision,
    taskLabel: (p: { task: string }) => p.task,
    practiceLabel: (p: { practice: string }) => p.practice,

    // Feedback
    recorded: 'Recorded in this local scenario.',
    noChange: 'No change.',
    previewStatus: 'Preview: {status}.',
    executionStatus: 'Execution: {status}.',
    noExecutionReceipt: 'No execution receipt.',
    rehearsalAdvanced: 'Five modeled rehearsal minutes recorded. No plant movement or shipment.',
    rehearsalNoAdvance: 'No modeled time could advance.',
    exported: 'Synthetic scenario exported locally. No remote send.',
    freshExercise: 'Review retained. Choose a charter for the fresh exercise.',

    // Header
    labTitle: 'Workplace laboratory',
    introHandoff: 'Worker proposals, bounded trials and member review.',
    introImprovement:
      'The handoff experiment: member proposals, bounded trials and retained obligations.',
    introCampaign:
      'Living Cooperative: three shifts, shared obligations and challengeable decisions.',
    introFriday: 'Friday order: meet the shipment while protecting rest and agreed work.',
    syntheticNotice:
      'Synthetic roles only. No real worker data or independently authenticated ballots.',
    sectionsLabel: 'Workplace sections',
    statusLine: '{mode}: {phase}, minute {minute} of {duration}. Revision {revision}.',
    causalReceipt: 'Causal receipt: {receipt}',

    // Understanding checks
    understandingChecks: 'Understanding checks: {role}',
    checkAria: '{role}: {prompt}',
    selectAnswer: 'Select an answer',
    matchesTerms: 'Matches the current terms. ',
    needsAnotherLook: 'Needs another look. ',

    // Shift
    shiftIntro: 'Try a worker-led improvement, then decide what the next shift retains.',
    openHandoff: 'Open handoff controls',
    mode: 'Mode',
    scenarioSeed: 'Scenario seed',
    livingCooperative: 'Living Cooperative',
    livingIntro:
      'Three linked shifts: order pressure, a quality hold and retaliation pressure. Packing is your role. Each shift keeps its earned pay, recovery obligations and authored objections.',
    adoptionProfile: 'Adoption profile',
    profileToeDip: 'Coordinator-led: protected practice set',
    profileTeam: 'Team agreement: shared work and consent',
    profileCooperative: 'Member governance: cooperative and bounded execution',
    startCampaign: 'Start Living Cooperative campaign',
    campaignPaceNote:
      'Local game only. Starting selects standard pace (1x), where the clock, production and vehicles run together. Profiles introduce practices incrementally; every profile retains basic protections.',
    startGame: 'Start playable shift at teaching pace (1/2x)',
    startWorkshop: 'Start manual workshop',
    preparePilot: 'Prepare pilot charter',
    gameNote:
      'Opt in to local simulation control. This standalone teaching pace runs at half of standard pace (1/2x); a campaign runs at standard pace (1x).',
    otherNote:
      'No live plant control. Workshop inputs remain manual; pilot preparation permits charter design and export only.',
    shiftHeading: 'Shift {number} of 3: {title}',
    missionBriefing:
      '{customer} has {kg} kg remaining on the customer commitment. Quality declines extra duty; Packing and Maintenance may volunteer separately. Earn a fresh working agreement.',
    missionPrompt:
      'Keep the {kg} kg delivery target, or negotiate an {installment} kg installment with {deferred} kg deferred. The full customer commitment remains.',
    adviserRolePlay: 'Adviser role checks are authored role-play in this local scenario.',
    shiftThreeNote:
      'The adviser must correct its earlier recommendation and repair the pressure it created. Previous consent authorizes no new burden. Packing can refuse; each author can challenge and resolve their own objection.',
    negotiateInstallment: 'Negotiate an {kg} kg installment',
    negotiateInstallmentProtectPay: 'Negotiate an {kg} kg installment and protect pay',
    keepCommitment: 'Keep the {kg} kg commitment',
    recordedDecision: 'Recorded decision: {decision}.',
    pending: 'pending',
    inspectionComplete: 'Quality inspection complete.',
    inspectionUntil: 'Quality hold in progress until minute {minute}.',
    inspectionFrom:
      'Quality can begin inspection from minute 25. Line pacing pauses; actual batch certification still gates shipping.',
    reviewBeforeContinuing:
      'Review the shift, deliver owed recovery and resolve every authored objection before continuing.',
    pressureCard: 'Pressure card: {title}',
    challengeBelongs: 'The challenge belongs to {role}.',
    theAdviser: 'the adviser',
    tryDemand: 'Try the demand (blocked and challenged)',
    restateTerms: 'Restate protected terms',
    pressureNote:
      'Trying the demand pauses activation. Restating terms leaves any objection open until its raiser reviews it in Agreement / Voices. Both sides then renew understanding.',
    reviewChallenge: 'Review the challenge and remedy',
    missionCredit:
      '{customer}: {credited} / {target} kg qualified dispatch credit. Agreed deferral: {deferred} kg. Remaining full customer commitment: {remaining} kg.',
    fullDispatchedSuffix: ' Full customer commitment dispatched.',
    chooseResponse: 'Choose the response',
    targetLine:
      'Target {target} kg. Active plant capacity multiplier {capacity}×. Changing a plan clears the role agreement.',
    shiftThreeResponseNote:
      'A declined offer can lead to protected pacing, funded handoffs or a different current qualified volunteer. Negotiate a smaller installment above if needed; unfinished customer work remains open. An objection holds execution until its raiser reviews the remedy.',
    planTerms:
      'Plant capacity multiplier {capacity}×; protected rest {rest} min; optional cover {cover} min; cover compensation {compensation} credits/min; recovery {recovery} min; budget {budget} credits.',
    prohibitedReason: 'Prohibited: {reason}',
    reservations:
      'Wages reserved {reserve}; improvement {improvement}; maximum cover pay {maxPay} credits. Cash after these reservations {cash} credits.',
    volunteers:
      'Current consenting qualified volunteers: {list}. Cover lasts at most ten minutes, then pacing returns to 0.78×.',
    volunteerEntry: '{role} ({minutes} min retained extra duty)',
    none: 'none',
    aiWhy: 'AI: why this response?',
    operationalExplanation:
      'Operational explanation: {explanation} The active plant capacity multiplier is {capacity}×. The shipment target is {target} kg.',
    alternativesNote:
      "Alternatives: compare the four responses above. Boundaries: protected rest, individual optional-cover consent, budget and open objections constrain execution. This explanation reports the model's decision conditions; it does not expose hidden reasoning.",
    dispatchUncertain:
      'Dispatch remains uncertain until quality-qualified manifests arrive. Supply and logistics can constrain the result. Either party can raise an authority objection; each raiser retains remedy review.',
    challengeProposal: 'Challenge the proposal in Agreement / Voices',
    advanceRehearsal: 'Advance rehearsal by 5 minutes',
    endShift: 'End shift now and review',
    creditsNote:
      'Workplace credits are illustrative accounts, separate from the mill campaign finances.',

    // Practices
    alwaysActive:
      'Always active: safe stops, protected rest, voluntary extra work, earned pay and author-controlled objections. Switching modules never removes these protections.',
    chooseApproach: 'Choose a management approach',
    approachNote:
      'Change the allocation of decisions while keeping the current plan, money and workload. Revised terms require fresh agreement.',
    applyApproach: 'Apply {title}',
    threeAxes: 'Three independent axes',
    workerDecisions: 'Worker decisions',
    directedAssignments: 'Directed assignments',
    individualChoice: 'Individual work choice',
    teamChoice: 'Team work choice',
    sharedGovernance: 'Shared governance',
    consultative: 'Consultative',
    teamConsent: 'Team consent',
    memberVote: 'Member vote',
    aiAuthority: 'AI authority',
    adviceOnly: 'Advice only',
    boundedExecution: 'Bounded execution',
    modularPractices: 'Modular practices',

    // Agreement / Voices
    agreementIntro:
      'Policy votes and optional-cover consent are separate decisions. A majority cannot volunteer another role for extra work. Role controls below are local scenario inputs.',
    hearResponses: 'Hear simulated team responses',
    manualWorkshopNote:
      "Manual workshop: record each synthetic role's choices explicitly. No automatic votes.",
    pilotDenies: 'Pilot preparation denies live control and role-input changes.',
    adviserAgreement: 'Adviser working agreement',
    adviserAgreementText:
      "Preference sharing is optional and revocable. Extra duty requires each individual's consent. Refusal retains earned pay and owed recovery. Advice is challengeable; bounded execution stays within the approved agreement. Revised terms invalidate all understanding checks.",
    adviser: 'Adviser',
    adviserAck: 'Adviser acknowledgment: {status}.',
    ackRecorded: 'recorded for these terms',
    ackPending: 'pending three correct answers',
    turnsOwn: 'Every role acts in its own turn. ',
    simulatedOther: 'Simulated responses belong to the other synthetic roles. ',
    answerPacking:
      'Answer Packing and Adviser checks explicitly. Confirm Packing understanding, cast its policy vote and decide optional cover separately. The helper never fills these Packing decisions.',
    votePending: 'policy vote pending',
    policyYesStatus: 'policy yes',
    policyNoStatus: 'policy no',
    publicBoundary: 'Public boundary: {boundary}',
    understanding: 'Understanding: {status}.',
    confirmed: 'confirmed',
    confirmUnderstanding: 'Confirm understanding: {role}',
    policyYes: 'Policy yes: {role}',
    policyNo: 'Policy no: {role}',
    optionalCover: 'Optional cover: {status}.',
    notAgreed: 'not agreed',
    accepted: 'accepted',
    declined: 'declined',
    acceptCover: 'Accept cover: {role}',
    declineCover: 'Decline cover: {role}',
    sharingNote:
      "Optional preference sharing is for this shift's planning only, expires after its limited scenario window, and can be revoked.",
    sharedPreference: 'Shared preference: {preference}. Until minute {minute}.',
    preferencePrivate: 'Preference private.',
    revokeSharing: 'Revoke preference sharing',
    shareForPlanning: 'Share preference for shift planning',
    workChoice: 'Work choice: {role}',
    memberTally:
      'Delivered rest {rest} min; extra work {extra} min; earned pay {pay} credits; compensation paid {compensation} credits; delivered recovery {recovery} min; recovery owed {owed} min.',
    withdrawCover: 'Withdraw optional cover: {role}',
    authoredObjections: 'Authored objections',
    returnToHandoff: 'Return to handoff controls',
    objectionAuthor: 'Objection author',
    aiMind: 'AI mind',
    objectionSubject: 'Objection subject',
    recordObjection: 'Record authored objection',
    noObjections: 'No authored objections recorded.',
    objectionRecord: 'Objection record: {role} ({kind})',
    resolvingAuthor: 'Resolving author for {kind}',
    selectOriginalAuthor: 'Select the original author',
    authorConfirms: 'Author confirms resolution',
    executionConditions: 'Execution conditions',
    conditionsPermit: 'Recorded conditions permit this agreement.',
    checkingAgreement: 'Checking agreement…',
    recordWorkshopAgreement: 'Record workshop agreement',
    approveAndRun: 'Approve and run agreement',
    workshopRecordsNote: 'Records the local rehearsal only, with no live plant effects.',
    executionRequires:
      'Execution requires this explicit approval, the exact current revision and the installed agent runtime.',

    // Review
    actualOutcomes: 'Actual scenario outcomes',
    deliveryLine: 'Delivery: {status}, {delivered} of {target} kg for {customer}.',
    remainingCommitment: 'Remaining full customer commitment: {kg} kg.',
    agreementLine: 'Working agreement: {status}. Combined outcome: {outcome}.',
    complete: 'complete',
    unfinished: 'unfinished',
    agreedDeferral: 'Agreed deferral: {kg} kg.',
    accountsLine:
      'Illustrative workplace credits, separate from main mill revenue and pounds: closing cash {cash}; wages {wages}; compensation {compensation}; improvements {improvements}; allocations {allocations}.',
    cumulativeEvidence: 'Cumulative campaign evidence',
    totalsLine:
      '{shifts} shifts reviewed; refusals respected {refusals}; promises kept {promises}; repairs {repairs}; objections resolved {resolved} of {raised}.',
    memberTotals:
      '{role}: extra {extra} min; rest {rest} min; earned pay {pay} credits; compensation paid {compensation} credits; recovery delivered {recovery} min; owed {owed} min.',
    shiftHistory: 'Shift {number}: {title}, shipped {shipped}; decision {decision}.',
    shippedDuringShift: '{kg} kg during this shift; customer commitment progress is shown above',
    shippedOfTarget: '{kg} of {target} kg',
    relationshipRecord: 'Relationship record across shifts',
    relationshipIntro:
      'Public requests, challenges, repairs and delivered recovery. Private explanations stay out of this record. These receipts describe conduct; they do not measure trust or wellbeing.',
    relationshipShiftHeading: '{title} (shift {number})',
    olderSave: 'This older save has no relationship receipts for this shift.',
    noMoments: 'No relationship moments recorded yet.',
    eventMinute: 'Minute {minute},',
    retentionNote:
      'Each shift retains relationship receipts from a bounded 120-event log. Older events can be discarded. The local JSON export includes retained receipts.',
    learningReviewLabel: 'Cooperative learning review',
    learnTogether: 'Learn from this shift together',
    compareAnotherHandoff: 'Compare another handoff',
    deliverRecovery: 'Deliver modeled recovery (5 minutes)',
    outstandingRecovery:
      'Outstanding recovery is delivered through the normal simulation clock before another shift can start.',
    campaignCompleteMessage:
      'Living Cooperative campaign complete: delivery met and working agreement honoured.',
    campaignIncomplete:
      'Campaign review: delivery or working agreement remains incomplete. Earned pay, recovery obligations and the shift history remain recorded.',
    continueCampaign: 'Continue to next campaign shift',
    startNextGame: 'Start next playable shift at teaching pace (1/2x)',
    startNextWorkshop: 'Start next manual workshop',
    prepareNextPilot: 'Prepare next pilot draft',
    shippedOf: 'Shipped {shipped} of {target} kg.',
    reviewOpens: 'Review opens after the shift finishes.',
    resumeAfterReloadNote:
      'A reload paused this shift at minute {minute} and expired every grant. It can carry on from there once everyone consents again; nothing runs before that.',
    resumeShift: 'Resume the shift with fresh consent',
    relationshipEvidence: 'Relationship evidence',
    relationshipEvidenceLine:
      'Refusals respected: {refusals}. Promises kept: {promises}. Open objections: {open}. Current agreement confirmations: {confirmed}/{total}.',
    confirmationsExpire: 'Confirmations expire on review. No mood or trust score is inferred.',
    compareBurdens: 'Compare burdens, without ranking people',
    burdenLine:
      '{role}: delivered rest {rest} min, extra {extra} min, earned {earned}, paid compensation {compensation} credits; delivered recovery {recovery} min; recovery owed {owed} min.',
    memberGovernance: 'Member governance',
    chairLine: 'AI minds have a voice in objections, never member ballots. Chair: {chair}.',
    notElected: 'not elected',
    memberVoter: 'Member voter',
    chairCandidate: 'Chair candidate',
    recordChairBallot: 'Record chair ballot',
    noChairBallots: 'No chair ballots.',
    surplusHeading: 'Positive operating surplus: {surplus} credits',
    surplusDefinition:
      'Revenue less operating costs, earned wages, paid compensation, improvement spend and distributions. Initial capital is excluded.',
    surplusDestination: 'Surplus destination',
    retainSurplus:
      "Retain {amount} credits in closing cash for the next shift's wages and choices.",
    distributeSurplus:
      "Distribute {amount} credits equally: {perMember} per member. That cash leaves the next shift's budget.",
    allocateSurplus:
      "Allocate {amount} credits to the community. That cash leaves the next shift's budget.",
    ballotsRequired: 'Three member ballots are required. Earned obligations must be settled first.',
    surplusCharter:
      'Shared surplus is part of the Coordinator-led and Member governance charters. Under this one, any surplus stays in the cooperative cash.',
    noSurplusReason:
      'No surplus this shift: revenue {revenue} did not cover material costs {cost}, wages {wages}, cover {cover} and purchases {purchases}.',
    followOnCredit:
      'Commitment order fulfilled. This season now works {customer}: {credited} kg of its dispatch credited to the cooperative.',
    followOnPending:
      'Commitment order fulfilled. Dispatch to {customer} is credited to the cooperative from the next shift.',
    followOnNone:
      'Commitment order fulfilled. No other customer order is open, so further dispatch earns the cooperative nothing. The next shift links one if the mill has one open by then.',
    followOnNoneLastShift:
      'Commitment order fulfilled. This is the season’s last shift, so further dispatch earns the cooperative nothing.',
    recordSurplusBallot: 'Record member surplus ballot',
    noSurplusBallots: 'No surplus ballots.',
    executeAllocation: 'Execute agreed allocation',
    allocationRecorded: 'Allocation recorded.',
    recordedEvidence: 'Recorded evidence',
    evidenceLine: 'Minute {minute}, {actor}: {detail}',

    // Experiment
    teachingForecasts: 'Teaching forecasts',
    samePressure: 'Same pressure, different management',
    compareCurrentPlan:
      'Compare the current physical plan ({plan}) under three decision structures. The same seed, supply, rest and capacity assumptions apply. Governance grants no production bonus. Every approach retains refusal, privacy and raiser-owned objections.',
    compareApproaches: 'Compare management approaches',
    matchedForecast: 'Matched forecast: {kg} kg; net {credits} illustrative credits.',
    charterSupports: 'This charter supports the selected plan.',
    activationBlockedEnable: 'Activation blocked: enable {practices} first.',
    activationBlockedBreach: 'Activation blocked: the plan breaches minimum protections.',
    forecastsSeparate:
      'These are illustrative forecasts, separate from actual customer dispatch and relationship receipts. Try an approach in Practices, then play the same pressure card.',
    standaloneExercise:
      'The teaching forecast uses the standalone 600 kg exercise, before episode holds or negotiations. Linked customer deliveries remain separate.',
    sameSeed: 'Same-seed comparison',
    experimentSeed: 'Experiment seed',
    compareAllPlans: 'Compare all plans with this seed',
    restartDiscussion: 'Restart discussion with this seed',
    restartClears: 'Restarting clears the current discussion and agreement.',
    illustrativeForecasts:
      'Illustrative model forecasts, not evidence of real efficacy. All arms use the same seed, including the prohibited rush counterfactual.',
    armLine:
      ': forecast {kg} kg; net {credits} credits; extra {extra} min; rest {rest} min; {verdict}.',
    permitted: 'permitted',
    prohibited: 'prohibited',
    pilotChecklist: 'Pilot preparation checklist',
    checklistPurpose: 'Agree the purpose and participant boundaries.',
    checklistConsent:
      'Obtain genuine informed consent and authenticated member decisions outside this demo.',
    checklistData: 'Agree access, retention, withdrawal and remedies before collecting data.',
    checklistSafety: 'Review safety and legal obligations with accountable people.',
    checklistSeparate: 'Keep the pilot separate from live plant control.',
    downloadJson: 'Download synthetic scenario JSON',
    localDownload: 'Local download only. This demo cannot authorise a real workplace pilot.',
  },
  zh: {
    // Section, mode and enum labels. English returns the logic value itself.
    sectionLabel: (p: { section: string }) => pick(ZH_SECTION, p.section),
    modeGame: '游戏',
    modeWorkshop: '工作坊',
    modePilot: '试点准备',
    phaseLabel: (p: { phase: string }) => pick(ZH_PHASE, p.phase),
    objectionKind: (p: { kind: string }) => pick(ZH_OBJECTION_KIND, p.kind),
    objectionStatus: (p: Status) => pick(ZH_OBJECTION_STATUS, p.status),
    deliveryStatus: (p: Status) => pick(ZH_DELIVERY_STATUS, p.status),
    agreementStatus: (p: Status) => pick(ZH_AGREEMENT_STATUS, p.status),
    destinationLabel: (p: { destination: string }) => pick(ZH_DESTINATION, p.destination),
    decisionLabel: (p: { decision: string }) => pick(ZH_DECISION, p.decision),
    taskLabel: (p: { task: string }) => pick(ZH_TASK, p.task),
    practiceLabel: (p: { practice: string }) => pick(ZH_PRACTICE, p.practice),

    // Feedback
    recorded: '已记录到这个本地场景。',
    noChange: '无变化。',
    previewStatus: '预览：{status}。',
    executionStatus: '执行：{status}。',
    noExecutionReceipt: '暂无执行回执。',
    rehearsalAdvanced: '已记录 5 个模拟预演分钟。没有工厂动作，也没有发运。',
    rehearsalNoAdvance: '模拟时间无法推进。',
    exported: '虚拟场景已在本地导出。未发送到远端。',
    freshExercise: '回顾已保留。请为新练习选择一份章程。',

    // Header
    labTitle: '车间实验室',
    introHandoff: '工人提案、有界试验与成员评审。',
    introImprovement: '交接实验：成员提案、有界试验与保留的义务。',
    introCampaign: '活力合作社：三个班次、共享义务与可质疑的决策。',
    introFriday: '周五订单：在保护休息与约定工作的同时完成发运。',
    syntheticNotice: '仅虚拟角色。没有真实工人数据，也没有经独立认证的表决。',
    sectionsLabel: '车间分区',
    statusLine: '{mode}：{phase}，第 {minute} 分钟，共 {duration} 分钟。修订版 {revision}。',
    causalReceipt: '因果回执：{receipt}',

    // Understanding checks
    understandingChecks: '理解检查：{role}',
    checkAria: '{role}：{prompt}',
    selectAnswer: '选择一个答案',
    matchesTerms: '与当前条款一致。 ',
    needsAnotherLook: '需要再看一看。 ',

    // Shift
    shiftIntro: '尝试一项工人主导的改善，然后决定下一个班次保留什么。',
    openHandoff: '打开交接控制',
    mode: '模式',
    scenarioSeed: '场景种子',
    livingCooperative: '活力合作社',
    livingIntro:
      '三个相连的班次：订单压力、一次质量扣留与报复压力。你的角色是包装。每个班次保留其已挣报酬、补休义务与署名异议。',
    adoptionProfile: '采纳方案',
    profileToeDip: '协调主导：受保护的实践组合',
    profileTeam: '团队协议：共享工作与同意',
    profileCooperative: '成员治理：合作与有界执行',
    startCampaign: '启动“活力合作社”加工季',
    campaignPaceNote:
      '仅限本地游戏。启动后选用标准节奏（1x），时钟、生产与车辆一起运行。各方案逐步引入实践；每个方案都保留基本保护。',
    startGame: '以教学节奏（1/2x）启动可玩班次',
    startWorkshop: '启动手动工作坊',
    preparePilot: '准备试点章程',
    gameNote:
      '自愿加入本地模拟控制。这个独立的教学节奏以标准节奏的一半（1/2x）运行；加工季以标准节奏（1x）运行。',
    otherNote: '没有真实工厂控制。工作坊输入保持手动；试点准备仅允许章程设计与导出。',
    shiftHeading: '班次 {number}/3：{title}',
    missionBriefing:
      '{customer} 的客户承诺还剩 {kg} kg。质量角色拒绝额外勤务；包装与维护可以分别自愿参加。去挣得一份新的工作协议。',
    missionPrompt:
      '保持 {kg} kg 的交付目标，或协商一份 {installment} kg 的分期交付，其中 {deferred} kg 延期。全额客户承诺保持不变。',
    adviserRolePlay: '顾问角色的检查是这一本地场景中预先编写的角色扮演。',
    shiftThreeNote:
      '顾问必须纠正它先前的建议，并修复它造成的压力。先前的同意不授权任何新负担。包装可以拒绝；每位提出人都可以质疑并解决自己的异议。',
    negotiateInstallment: '协商 {kg} kg 分期',
    negotiateInstallmentProtectPay: '协商 {kg} kg 分期并保护报酬',
    keepCommitment: '保持 {kg} kg 承诺',
    recordedDecision: '已记录决策：{decision}。',
    pending: '待定',
    inspectionComplete: '质量检查已完成。',
    inspectionUntil: '质量扣留进行中，直至第 {minute} 分钟。',
    inspectionFrom: '质量自第 25 分钟起可以开始检查。产线节奏暂停；实际的批次认证仍是发运的门槛。',
    reviewBeforeContinuing: '在继续之前，请先回顾班次、交付应补休息，并解决每一条署名异议。',
    pressureCard: '压力卡：{title}',
    challengeBelongs: '该挑战归属于{role}。',
    theAdviser: '顾问',
    tryDemand: '尝试该要求（受阻且被质疑）',
    restateTerms: '重申受保护条款',
    pressureNote:
      '尝试该要求会暂停激活。重申条款会让任何异议保持未决，直至其提出人在“协议/声音”中复核。随后双方重新确认理解。',
    reviewChallenge: '复核挑战与补救',
    missionCredit:
      '{customer}：合格发运计入 {credited}/{target} kg。约定延期：{deferred} kg。剩余全额客户承诺：{remaining} kg。',
    fullDispatchedSuffix: ' 全额客户承诺已发运。',
    chooseResponse: '选择回应',
    targetLine: '目标 {target} kg。在运工厂产能乘数 {capacity}×。更改方案会清除角色协议。',
    shiftThreeResponseNote:
      '被拒绝的提议可能导向受保护节奏、附带资金的交接，或换一位当前合格的志愿者。如有需要，可在上方协商更小的分期；未完成的客户工作保持未结。异议会搁置执行，直至其提出人复核补救。',
    planTerms:
      '工厂产能乘数 {capacity}×；受保护休息 {rest} 分钟；可选顶岗 {cover} 分钟；顶岗补偿 {compensation} 点数/分钟；补休 {recovery} 分钟；预算 {budget} 点数。',
    prohibitedReason: '禁止：{reason}',
    reservations:
      '已预留工资 {reserve}；改善 {improvement}；顶岗报酬上限 {maxPay} 点数。这些预留之后的现金 {cash} 点数。',
    volunteers: '当前同意的合格志愿者：{list}。顶岗最多持续十分钟，随后节奏回到 0.78×。',
    volunteerEntry: '{role}（保留额外勤务 {minutes} 分钟）',
    none: '无',
    aiWhy: 'AI：为什么是这个回应？',
    operationalExplanation:
      '运行解释：{explanation} 在运工厂产能乘数为 {capacity}×。发运目标为 {target} kg。',
    alternativesNote:
      '备选：请对比上方四种回应。边界：受保护休息、个人对可选顶岗的同意、预算与未决异议约束着执行。本解释报告模型的决策条件；不暴露隐藏推理。',
    dispatchUncertain:
      '在质量合格的运单到达之前，发运仍不确定。供应与物流可能约束结果。任何一方都可以提出职权异议；每位提出人保留对补救的复核。',
    challengeProposal: '在“协议/声音”中质疑该提案',
    advanceRehearsal: '预演推进 5 分钟',
    endShift: '立即结班并回顾',
    creditsNote: '车间点数是示意性账目，与磨坊加工季财务分开。',

    // Practices
    alwaysActive:
      '始终生效：安全停机、受保护休息、自愿额外工作、已挣报酬与由提出人控制的异议。切换模块绝不会移除这些保护。',
    chooseApproach: '选择一种管理方式',
    approachNote:
      '在保持当前方案、资金与工作负荷不变的前提下，调整决策的分配。修订后的条款需要重新达成协议。',
    applyApproach: '应用{title}',
    threeAxes: '三个独立维度',
    workerDecisions: '工人决策',
    directedAssignments: '指派任务',
    individualChoice: '个人工作选择',
    teamChoice: '团队工作选择',
    sharedGovernance: '共享治理',
    consultative: '咨询式',
    teamConsent: '团队同意',
    memberVote: '成员表决',
    aiAuthority: 'AI 决策权',
    adviceOnly: '仅建议',
    boundedExecution: '有界执行',
    modularPractices: '模块化实践',

    // Agreement / Voices
    agreementIntro:
      '政策表决与可选顶岗的同意是相互独立的决策。多数派不能让另一个角色成为额外工作的志愿者。下方的角色控件是本地场景输入。',
    hearResponses: '听取模拟的团队回应',
    manualWorkshopNote: '手动工作坊：请显式记录每个虚拟角色的选择。没有自动表决。',
    pilotDenies: '试点准备不允许真实控制，也不允许更改角色输入。',
    adviserAgreement: '顾问工作协议',
    adviserAgreementText:
      '偏好共享是可选且可撤销的。额外勤务需要每个人的个人同意。拒绝仍保留已挣报酬与应补休息。建议可以被质疑；有界执行保持在已批准的协议之内。修订后的条款会使所有理解检查失效。',
    adviser: '顾问',
    adviserAck: '顾问确认：{status}。',
    ackRecorded: '已按这些条款记录',
    ackPending: '待答对三题',
    turnsOwn: '每个角色在自己的回合行动。 ',
    simulatedOther: '模拟回应来自其他虚拟角色。 ',
    answerPacking:
      '请显式作答包装与顾问的检查。确认包装的理解、投出其政策表决，并单独决定可选顶岗。助手绝不会代填这些包装的决策。',
    votePending: '政策表决待定',
    policyYesStatus: '政策赞成',
    policyNoStatus: '政策反对',
    publicBoundary: '公开边界：{boundary}',
    understanding: '理解：{status}。',
    confirmed: '已确认',
    confirmUnderstanding: '确认理解：{role}',
    policyYes: '政策赞成：{role}',
    policyNo: '政策反对：{role}',
    optionalCover: '可选顶岗：{status}。',
    notAgreed: '未同意',
    accepted: '已接受',
    declined: '已拒绝',
    acceptCover: '接受顶岗：{role}',
    declineCover: '拒绝顶岗：{role}',
    sharingNote: '可选的偏好共享仅用于本班次的规划，在其有限的场景窗口结束后失效，且可随时撤销。',
    sharedPreference: '已共享偏好：{preference}。至第 {minute} 分钟。',
    preferencePrivate: '偏好保密。',
    revokeSharing: '撤销偏好共享',
    shareForPlanning: '为班次规划共享偏好',
    workChoice: '工作选择：{role}',
    memberTally:
      '已交付休息 {rest} 分钟；额外工作 {extra} 分钟；已挣报酬 {pay} 点数；已付补偿 {compensation} 点数；已交付补休 {recovery} 分钟；应补休息 {owed} 分钟。',
    withdrawCover: '撤回可选顶岗：{role}',
    authoredObjections: '署名异议',
    returnToHandoff: '返回交接控制',
    objectionAuthor: '异议提出人',
    aiMind: 'AI 心智',
    objectionSubject: '异议主题',
    recordObjection: '记录署名异议',
    noObjections: '尚无署名异议记录。',
    objectionRecord: '异议记录：{role}（{kind}）',
    resolvingAuthor: '{kind}异议的解决人',
    selectOriginalAuthor: '选择原提出人',
    authorConfirms: '提出人确认解决',
    executionConditions: '执行条件',
    conditionsPermit: '已记录的条件允许本协议。',
    checkingAgreement: '正在核对协议……',
    recordWorkshopAgreement: '记录工作坊协议',
    approveAndRun: '批准并运行协议',
    workshopRecordsNote: '仅记录本地预演，对真实工厂没有影响。',
    executionRequires: '执行需要这项明确批准、完全一致的当前修订版，以及已安装的智能体运行时。',

    // Review
    actualOutcomes: '实际场景结果',
    deliveryLine: '交付：{status}，为 {customer} 交付 {delivered}/{target} kg。',
    remainingCommitment: '剩余全额客户承诺：{kg} kg。',
    agreementLine: '工作协议：{status}。综合结果：{outcome}。',
    complete: '已完成',
    unfinished: '未完成',
    agreedDeferral: '约定延期：{kg} kg。',
    accountsLine:
      '示意性的车间点数，与磨坊主营收入和英镑分开：期末现金 {cash}；工资 {wages}；补偿 {compensation}；改善投入 {improvements}；分配 {allocations}。',
    cumulativeEvidence: '加工季累计证据',
    totalsLine:
      '已回顾 {shifts} 个班次；尊重拒绝 {refusals} 次；信守承诺 {promises} 次；修复 {repairs} 次；异议解决 {resolved}/{raised}。',
    memberTotals:
      '{role}：额外勤务 {extra} 分钟；休息 {rest} 分钟；已挣报酬 {pay} 点数；已付补偿 {compensation} 点数；已交付补休 {recovery} 分钟；应补 {owed} 分钟。',
    shiftHistory: '班次 {number}：{title}，已发运 {shipped}；决策 {decision}。',
    shippedDuringShift: '本班次 {kg} kg；客户承诺进度见上方',
    shippedOfTarget: '{kg}/{target} kg',
    relationshipRecord: '跨班次关系记录',
    relationshipIntro:
      '公开的请求、质疑、修复与已交付的补休。私人解释不进入本记录。这些回执描述行为；不度量信任或福祉。',
    relationshipShiftHeading: '{title}（班次 {number}）',
    olderSave: '这份较旧的存档没有本班次的关系回执。',
    noMoments: '尚无关系时刻记录。',
    eventMinute: '第 {minute} 分钟，',
    retentionNote:
      '每个班次从一条上限 120 条事件的日志中保留关系回执。更早的事件可能被丢弃。本地 JSON 导出包含保留的回执。',
    learningReviewLabel: '合作社学习回顾',
    learnTogether: '一起从本班次学习',
    compareAnotherHandoff: '对比另一次交接',
    deliverRecovery: '交付模拟补休（5 分钟）',
    outstandingRecovery: '未完成的补休通过正常模拟时钟交付，之后才能开始另一个班次。',
    campaignCompleteMessage: '“活力合作社”加工季已完成：交付达成，工作协议已履行。',
    campaignIncomplete:
      '加工季回顾：交付或工作协议仍未完成。已挣报酬、补休义务与班次历史仍保留在记录中。',
    continueCampaign: '继续下一个加工季班次',
    startNextGame: '以教学节奏（1/2x）启动下一个可玩班次',
    startNextWorkshop: '启动下一个手动工作坊',
    prepareNextPilot: '准备下一份试点草案',
    shippedOf: '已发运 {shipped}/{target} kg。',
    reviewOpens: '回顾在班次结束后开启。',
    resumeAfterReloadNote:
      '页面重新加载使本班次暂停在第 {minute} 分钟，并使每项授权失效。待所有人再次同意后，它可以从那里继续；在此之前不会有任何运行。',
    resumeShift: '以重新同意恢复班次',
    relationshipEvidence: '关系证据',
    relationshipEvidenceLine:
      '尊重拒绝：{refusals}。信守承诺：{promises}。未决异议：{open}。当前协议确认：{confirmed}/{total}。',
    confirmationsExpire: '确认在回顾时失效。不推断任何情绪或信任评分。',
    compareBurdens: '对比负担，而不给人排名',
    burdenLine:
      '{role}：已交付休息 {rest} 分钟，额外勤务 {extra} 分钟，已挣 {earned}，已付补偿 {compensation} 点数；已交付补休 {recovery} 分钟；应补休息 {owed} 分钟。',
    memberGovernance: '成员治理',
    chairLine: 'AI 心智在异议中有发言权，但绝不参与成员表决。主持人：{chair}。',
    notElected: '未当选',
    memberVoter: '成员投票人',
    chairCandidate: '主持人候选人',
    recordChairBallot: '记录主持人表决',
    noChairBallots: '暂无主持人表决。',
    surplusHeading: '正运营盈余：{surplus} 点数',
    surplusDefinition: '收入减去运营成本、已挣工资、已付补偿、改善支出与分配。初始资本不计入。',
    surplusDestination: '盈余去向',
    retainSurplus: '将 {amount} 点数留存到期末现金，用于下一个班次的工资与选择。',
    distributeSurplus:
      '将 {amount} 点数均分：每名成员 {perMember}。这笔现金将退出下一个班次的预算。',
    allocateSurplus: '将 {amount} 点数拨给社区。这笔现金将退出下一个班次的预算。',
    ballotsRequired: '需要进行三项成员表决。已挣得的义务必须先结清。',
    surplusCharter:
      '共享盈余是“协调主导”与“成员治理”章程的一部分。在这份章程下，任何盈余都留在合作社现金中。',
    noSurplusReason:
      '本班次无盈余：收入 {revenue} 未能覆盖物料成本 {cost}、工资 {wages}、顶岗 {cover} 与采购 {purchases}。',
    followOnCredit:
      '承诺订单已履行。本加工季现在服务 {customer}：其发运量中的 {credited} kg 计入合作社。',
    followOnPending: '承诺订单已履行。从下一个班次起，发往 {customer} 的货物计入合作社。',
    followOnNone:
      '承诺订单已履行。没有其他未结的客户订单，因此继续发运不会给合作社带来任何收益。如果届时磨坊有未结订单，下一个班次会关联一张。',
    followOnNoneLastShift:
      '承诺订单已履行。这是本加工季的最后一个班次，因此继续发运不会给合作社带来任何收益。',
    recordSurplusBallot: '记录成员盈余表决',
    noSurplusBallots: '暂无盈余表决。',
    executeAllocation: '执行商定的分配',
    allocationRecorded: '分配已记录。',
    recordedEvidence: '已记录证据',
    evidenceLine: '第 {minute} 分钟，{actor}：{detail}',

    // Experiment
    teachingForecasts: '教学预测',
    samePressure: '同样的压力，不同的管理',
    compareCurrentPlan:
      '在三种决策结构下对比当前物理方案（{plan}）。适用同样的种子、供应、休息与产能假设。治理不带来任何生产加成。每种方式都保留拒绝权、隐私与提出人持有的异议。',
    compareApproaches: '对比各管理方式',
    matchedForecast: '匹配预测：{kg} kg；净 {credits} 示意点数。',
    charterSupports: '本章程支持所选方案。',
    activationBlockedEnable: '激活受阻：请先启用{practices}。',
    activationBlockedBreach: '激活受阻：该方案违反最低保护。',
    forecastsSeparate:
      '这些是示意性预测，与实际的客户发运和关系回执分开。请先在“实践”中尝试一种方式，再打出同一张压力卡。',
    standaloneExercise:
      '教学预测使用独立的 600 kg 练习，发生在剧情暂停或协商之前。关联的客户交付保持分开。',
    sameSeed: '同种子对比',
    experimentSeed: '实验种子',
    compareAllPlans: '用该种子对比所有方案',
    restartDiscussion: '用该种子重启讨论',
    restartClears: '重启会清除当前讨论与协议。',
    illustrativeForecasts:
      '示意性的模型预测，并非真实成效的证据。所有试验组使用同一种子，包括被禁止的加急反事实。',
    armLine: '：预测 {kg} kg；净 {credits} 点数；额外 {extra} 分钟；休息 {rest} 分钟；{verdict}。',
    permitted: '允许',
    prohibited: '禁止',
    pilotChecklist: '试点准备清单',
    checklistPurpose: '商定目的与参与者边界。',
    checklistConsent: '在本演示之外，取得真实的知情同意与经认证的成员决策。',
    checklistData: '在收集数据之前，商定访问、保留、退出与补救。',
    checklistSafety: '与责任人一起复核安全与法律义务。',
    checklistSeparate: '让试点与真实工厂控制保持分离。',
    downloadJson: '下载虚拟场景 JSON',
    localDownload: '仅限本地下载。本演示无法授权真实的车间试点。',
  },
  'pt-BR': {
    sectionLabel: (p: { section: string }) => pick(PT_SECTION, p.section),
    modeGame: 'Jogo',
    modeWorkshop: 'Oficina',
    modePilot: 'Preparação do piloto',
    phaseLabel: (p: { phase: string }) => pick(PT_PHASE, p.phase),
    objectionKind: (p: { kind: string }) => pick(PT_OBJECTION_KIND, p.kind),
    objectionStatus: (p: Status) => pick(PT_OBJECTION_STATUS, p.status),
    deliveryStatus: (p: Status) => pick(PT_DELIVERY_STATUS, p.status),
    agreementStatus: (p: Status) => pick(PT_AGREEMENT_STATUS, p.status),
    destinationLabel: (p: { destination: string }) => pick(PT_DESTINATION, p.destination),
    decisionLabel: (p: { decision: string }) => pick(PT_DECISION, p.decision),
    taskLabel: (p: { task: string }) => pick(PT_TASK, p.task),
    practiceLabel: (p: { practice: string }) => pick(PT_PRACTICE, p.practice),

    recorded: 'Registrado neste cenário local.',
    noChange: 'Nenhuma alteração.',
    previewStatus: 'Prévia: {status}.',
    executionStatus: 'Execução: {status}.',
    noExecutionReceipt: 'Sem comprovante de execução.',
    rehearsalAdvanced:
      'Cinco minutos de ensaio modelado registrados. Nenhum movimento na planta nem expedição.',
    rehearsalNoAdvance: 'Não foi possível avançar o tempo modelado.',
    exported: 'Cenário sintético exportado localmente. Nada foi enviado.',
    freshExercise: 'Revisão mantida. Escolha um estatuto para o novo exercício.',

    labTitle: 'Laboratório do local de trabalho',
    introHandoff: 'Propostas dos trabalhadores, testes delimitados e avaliação dos cooperados.',
    introImprovement:
      'O experimento de passagem de turno: propostas dos cooperados, testes delimitados e obrigações mantidas.',
    introCampaign:
      'Cooperativa Viva: três turnos, obrigações compartilhadas e decisões contestáveis.',
    introFriday:
      'Pedido de sexta-feira: cumpra a expedição protegendo o descanso e o trabalho combinado.',
    syntheticNotice:
      'Somente funções sintéticas. Nenhum dado real de trabalhadores nem votos autenticados de forma independente.',
    sectionsLabel: 'Seções do local de trabalho',
    statusLine: '{mode}: {phase}, minuto {minute} de {duration}. Versão {revision}.',
    causalReceipt: 'Comprovante causal: {receipt}',

    understandingChecks: 'Verificações de entendimento: {role}',
    checkAria: '{role}: {prompt}',
    selectAnswer: 'Selecione uma resposta',
    matchesTerms: 'Confere com os termos atuais. ',
    needsAnotherLook: 'Vale olhar de novo. ',

    shiftIntro:
      'Experimente uma melhoria conduzida pelos trabalhadores e depois decida o que o próximo turno mantém.',
    openHandoff: 'Abrir controles de passagem de turno',
    mode: 'Modo',
    scenarioSeed: 'Semente do cenário',
    livingCooperative: 'Cooperativa Viva',
    livingIntro:
      'Três turnos encadeados: pressão de pedido, uma retenção de qualidade e pressão de retaliação. O ensaque é a sua função. Cada turno mantém a remuneração conquistada, as obrigações de recuperação e as objeções registradas.',
    adoptionProfile: 'Perfil de adoção',
    profileToeDip: 'Conduzido pela coordenação: conjunto protegido de práticas',
    profileTeam: 'Acordo da equipe: trabalho e consentimento compartilhados',
    profileCooperative: 'Governança dos cooperados: cooperativa e execução delimitada',
    startCampaign: 'Iniciar a campanha Cooperativa Viva',
    campaignPaceNote:
      'Somente jogo local. Ao iniciar, o ritmo padrão (1x) é selecionado: relógio, produção e veículos avançam juntos. Os perfis introduzem práticas aos poucos; todo perfil mantém as proteções básicas.',
    startGame: 'Iniciar turno jogável em ritmo didático (1/2x)',
    startWorkshop: 'Iniciar oficina manual',
    preparePilot: 'Preparar estatuto do piloto',
    gameNote:
      'Adesão opcional ao controle da simulação local. Este ritmo didático avulso roda à metade do ritmo padrão (1/2x); uma campanha roda no ritmo padrão (1x).',
    otherNote:
      'Sem controle da planta real. As entradas da oficina continuam manuais; a preparação do piloto permite apenas desenhar e exportar o estatuto.',
    shiftHeading: 'Turno {number} de 3: {title}',
    missionBriefing:
      '{customer} tem {kg} kg pendentes no compromisso com o cliente. A Qualidade recusa trabalho extra; Ensaque e Manutenção podem se oferecer separadamente. Conquiste um novo acordo de trabalho.',
    missionPrompt:
      'Mantenha a meta de entrega de {kg} kg ou negocie uma parcela de {installment} kg, adiando {deferred} kg. O compromisso integral com o cliente continua valendo.',
    adviserRolePlay:
      'As verificações da função de conselheiro são uma encenação roteirizada neste cenário local.',
    shiftThreeNote:
      'O conselheiro precisa corrigir a recomendação anterior e reparar a pressão que criou. Um consentimento anterior não autoriza nenhuma carga nova. O Ensaque pode recusar; cada autor pode contestar e resolver a própria objeção.',
    negotiateInstallment: 'Negociar uma parcela de {kg} kg',
    negotiateInstallmentProtectPay: 'Negociar uma parcela de {kg} kg e proteger a remuneração',
    keepCommitment: 'Manter o compromisso de {kg} kg',
    recordedDecision: 'Decisão registrada: {decision}.',
    pending: 'pendente',
    inspectionComplete: 'Inspeção de qualidade concluída.',
    inspectionUntil: 'Retenção de qualidade em andamento até o minuto {minute}.',
    inspectionFrom:
      'A Qualidade pode iniciar a inspeção a partir do minuto 25. O ritmo da linha fica pausado; a certificação real do lote continua condicionando a expedição.',
    reviewBeforeContinuing:
      'Revise o turno, entregue a recuperação devida e resolva cada objeção registrada antes de continuar.',
    pressureCard: 'Carta de pressão: {title}',
    challengeBelongs: 'Quem contesta: {role}.',
    theAdviser: 'o conselheiro',
    tryDemand: 'Tentar a exigência (bloqueada e contestada)',
    restateTerms: 'Reafirmar os termos protegidos',
    pressureNote:
      'Tentar a exigência pausa a ativação. Reafirmar os termos deixa qualquer objeção aberta até que quem a levantou a revise em Acordo / Vozes. Depois, os dois lados renovam o entendimento.',
    reviewChallenge: 'Revisar a contestação e a reparação',
    missionCredit:
      '{customer}: {credited} / {target} kg de crédito de expedição qualificada. Adiamento acordado: {deferred} kg. Compromisso integral pendente com o cliente: {remaining} kg.',
    fullDispatchedSuffix: ' Compromisso integral com o cliente expedido.',
    chooseResponse: 'Escolha a resposta',
    targetLine:
      'Meta de {target} kg. Multiplicador de capacidade ativa da planta {capacity}×. Mudar o plano apaga o acordo das funções.',
    shiftThreeResponseNote:
      'Uma oferta recusada pode levar a ritmo protegido, passagens de turno financiadas ou outro voluntário qualificado atual. Se precisar, negocie uma parcela menor acima; o trabalho inacabado para o cliente continua em aberto. Uma objeção suspende a execução até que quem a levantou revise a reparação.',
    planTerms:
      'Multiplicador de capacidade da planta {capacity}×; descanso protegido {rest} min; cobertura opcional {cover} min; compensação da cobertura {compensation} créditos/min; recuperação {recovery} min; orçamento {budget} créditos.',
    prohibitedReason: 'Proibido: {reason}',
    reservations:
      'Remuneração reservada {reserve}; melhoria {improvement}; pagamento máximo de cobertura {maxPay} créditos. Caixa após essas reservas {cash} créditos.',
    volunteers:
      'Voluntários qualificados que consentem no momento: {list}. A cobertura dura no máximo dez minutos e depois o ritmo volta a 0,78×.',
    volunteerEntry: '{role} ({minutes} min de trabalho extra mantido)',
    none: 'nenhum',
    aiWhy: 'IA: por que esta resposta?',
    operationalExplanation:
      'Explicação operacional: {explanation} O multiplicador de capacidade ativa da planta é {capacity}×. A meta de expedição é {target} kg.',
    alternativesNote:
      'Alternativas: compare as quatro respostas acima. Limites: descanso protegido, consentimento individual para cobertura opcional, orçamento e objeções abertas restringem a execução. Esta explicação informa as condições de decisão do modelo; ela não expõe raciocínio oculto.',
    dispatchUncertain:
      'A expedição continua incerta até chegarem romaneios aprovados pela qualidade. Abastecimento e logística podem limitar o resultado. Qualquer uma das partes pode levantar uma objeção de autoridade; quem a levanta mantém a revisão da reparação.',
    challengeProposal: 'Contestar a proposta em Acordo / Vozes',
    advanceRehearsal: 'Avançar o ensaio em 5 minutos',
    endShift: 'Encerrar o turno agora e revisar',
    creditsNote:
      'Os créditos do local de trabalho são contas ilustrativas, separadas das finanças da campanha do moinho.',

    alwaysActive:
      'Sempre ativos: paradas seguras, descanso protegido, trabalho extra voluntário, remuneração conquistada e objeções controladas por quem as registra. Trocar de módulo nunca remove essas proteções.',
    chooseApproach: 'Escolha uma abordagem de gestão',
    approachNote:
      'Mude a distribuição das decisões mantendo o plano, o dinheiro e a carga de trabalho atuais. Termos revisados exigem um novo acordo.',
    applyApproach: 'Aplicar {title}',
    threeAxes: 'Três eixos independentes',
    workerDecisions: 'Decisões dos trabalhadores',
    directedAssignments: 'Tarefas designadas',
    individualChoice: 'Escolha individual do trabalho',
    teamChoice: 'Escolha do trabalho pela equipe',
    sharedGovernance: 'Governança compartilhada',
    consultative: 'Consultiva',
    teamConsent: 'Consentimento da equipe',
    memberVote: 'Voto dos cooperados',
    aiAuthority: 'Autoridade da IA',
    adviceOnly: 'Somente recomendação',
    boundedExecution: 'Execução delimitada',
    modularPractices: 'Práticas modulares',

    agreementIntro:
      'Votos sobre a política e consentimento para cobertura opcional são decisões separadas. Uma maioria não pode oferecer outra função como voluntária para trabalho extra. Os controles de função abaixo são entradas do cenário local.',
    hearResponses: 'Ouvir respostas simuladas da equipe',
    manualWorkshopNote:
      'Oficina manual: registre explicitamente as escolhas de cada função sintética. Sem votos automáticos.',
    pilotDenies:
      'A preparação do piloto não permite controle real nem mudanças nas entradas das funções.',
    adviserAgreement: 'Acordo de trabalho do conselheiro',
    adviserAgreementText:
      'Compartilhar preferências é opcional e revogável. Trabalho extra exige o consentimento de cada pessoa. A recusa mantém a remuneração conquistada e a recuperação devida. A recomendação pode ser contestada; a execução delimitada fica dentro do acordo aprovado. Termos revisados invalidam todas as verificações de entendimento.',
    adviser: 'Conselheiro',
    adviserAck: 'Confirmação do conselheiro: {status}.',
    ackRecorded: 'registrada para estes termos',
    ackPending: 'pendente de três respostas corretas',
    turnsOwn: 'Cada função age na sua própria vez. ',
    simulatedOther: 'As respostas simuladas pertencem às outras funções sintéticas. ',
    answerPacking:
      'Responda explicitamente às verificações do Ensaque e do Conselheiro. Confirme o entendimento do Ensaque, registre o voto dele sobre a política e decida a cobertura opcional separadamente. O assistente nunca preenche essas decisões do Ensaque.',
    votePending: 'voto sobre a política pendente',
    policyYesStatus: 'votou sim na política',
    policyNoStatus: 'votou não na política',
    publicBoundary: 'Limite público: {boundary}',
    understanding: 'Entendimento: {status}.',
    confirmed: 'confirmado',
    confirmUnderstanding: 'Confirmar entendimento: {role}',
    policyYes: 'Votar sim na política: {role}',
    policyNo: 'Votar não na política: {role}',
    optionalCover: 'Cobertura opcional: {status}.',
    notAgreed: 'não acordada',
    accepted: 'aceita',
    declined: 'recusada',
    acceptCover: 'Aceitar cobertura: {role}',
    declineCover: 'Recusar cobertura: {role}',
    sharingNote:
      'O compartilhamento opcional de preferências serve apenas ao planejamento deste turno, expira ao fim da janela limitada do cenário e pode ser revogado.',
    sharedPreference: 'Preferência compartilhada: {preference}. Até o minuto {minute}.',
    preferencePrivate: 'Preferência privada.',
    revokeSharing: 'Revogar compartilhamento de preferência',
    shareForPlanning: 'Compartilhar preferência para o planejamento do turno',
    workChoice: 'Escolha do trabalho: {role}',
    memberTally:
      'Descanso entregue {rest} min; trabalho extra {extra} min; remuneração conquistada {pay} créditos; compensação paga {compensation} créditos; recuperação entregue {recovery} min; recuperação devida {owed} min.',
    withdrawCover: 'Retirar cobertura opcional: {role}',
    authoredObjections: 'Objeções registradas',
    returnToHandoff: 'Voltar aos controles de passagem de turno',
    objectionAuthor: 'Autor da objeção',
    aiMind: 'Mente de IA',
    objectionSubject: 'Assunto da objeção',
    recordObjection: 'Registrar objeção',
    noObjections: 'Nenhuma objeção registrada.',
    objectionRecord: 'Registro de objeção: {role} ({kind})',
    resolvingAuthor: 'Quem resolve a objeção de {kind}',
    selectOriginalAuthor: 'Selecione o autor original',
    authorConfirms: 'O autor confirma a resolução',
    executionConditions: 'Condições de execução',
    conditionsPermit: 'As condições registradas permitem este acordo.',
    checkingAgreement: 'Verificando o acordo…',
    recordWorkshopAgreement: 'Registrar acordo da oficina',
    approveAndRun: 'Aprovar e executar o acordo',
    workshopRecordsNote: 'Registra apenas o ensaio local, sem efeitos na planta real.',
    executionRequires:
      'A execução exige esta aprovação explícita, a versão atual exata e o runtime do agente instalado.',

    actualOutcomes: 'Resultados observados do cenário',
    deliveryLine: 'Entrega: {status}, {delivered} de {target} kg para {customer}.',
    remainingCommitment: 'Compromisso integral pendente com o cliente: {kg} kg.',
    agreementLine: 'Acordo de trabalho: {status}. Resultado geral: {outcome}.',
    complete: 'concluído',
    unfinished: 'inacabado',
    agreedDeferral: 'Adiamento acordado: {kg} kg.',
    accountsLine:
      'Créditos ilustrativos do local de trabalho, separados da receita principal do moinho e dos valores em libras: caixa final {cash}; remuneração {wages}; compensação {compensation}; melhorias {improvements}; destinações {allocations}.',
    cumulativeEvidence: 'Evidências acumuladas da campanha',
    totalsLine:
      '{shifts} turnos revisados; recusas respeitadas {refusals}; promessas cumpridas {promises}; reparações {repairs}; objeções resolvidas {resolved} de {raised}.',
    memberTotals:
      '{role}: extra {extra} min; descanso {rest} min; remuneração conquistada {pay} créditos; compensação paga {compensation} créditos; recuperação entregue {recovery} min; devida {owed} min.',
    shiftHistory: 'Turno {number}: {title}, expedidos {shipped}; decisão {decision}.',
    shippedDuringShift:
      '{kg} kg durante este turno; o progresso do compromisso com o cliente aparece acima',
    shippedOfTarget: '{kg} de {target} kg',
    relationshipRecord: 'Registro da relação ao longo dos turnos',
    relationshipIntro:
      'Pedidos públicos, contestações, reparações e recuperação entregue. Explicações privadas ficam fora deste registro. Estes comprovantes descrevem condutas; eles não medem confiança nem bem-estar.',
    relationshipShiftHeading: '{title} (turno {number})',
    olderSave: 'Este jogo salvo antigo não tem comprovantes da relação para este turno.',
    noMoments: 'Nenhum momento da relação registrado ainda.',
    eventMinute: 'Minuto {minute},',
    retentionNote:
      'Cada turno mantém comprovantes da relação de um log limitado a 120 eventos. Eventos mais antigos podem ser descartados. A exportação JSON local inclui os comprovantes mantidos.',
    learningReviewLabel: 'Revisão de aprendizado da cooperativa',
    learnTogether: 'Aprender juntos com este turno',
    compareAnotherHandoff: 'Comparar outra passagem de turno',
    deliverRecovery: 'Entregar recuperação modelada (5 minutos)',
    outstandingRecovery:
      'A recuperação pendente é entregue pelo relógio normal da simulação antes que outro turno possa começar.',
    campaignCompleteMessage:
      'Campanha Cooperativa Viva concluída: entrega cumprida e acordo de trabalho respeitado.',
    campaignIncomplete:
      'Revisão da campanha: a entrega ou o acordo de trabalho continua incompleto. A remuneração conquistada, as obrigações de recuperação e o histórico do turno continuam registrados.',
    continueCampaign: 'Continuar para o próximo turno da campanha',
    startNextGame: 'Iniciar o próximo turno jogável em ritmo didático (1/2x)',
    startNextWorkshop: 'Iniciar a próxima oficina manual',
    prepareNextPilot: 'Preparar o próximo rascunho do piloto',
    shippedOf: 'Expedidos {shipped} de {target} kg.',
    reviewOpens: 'A revisão abre quando o turno terminar.',
    resumeAfterReloadNote:
      'Uma recarga pausou este turno no minuto {minute} e expirou todas as autorizações. Ele pode continuar dali quando todos consentirem de novo; nada roda antes disso.',
    resumeShift: 'Retomar o turno com novo consentimento',
    relationshipEvidence: 'Evidências da relação',
    relationshipEvidenceLine:
      'Recusas respeitadas: {refusals}. Promessas cumpridas: {promises}. Objeções abertas: {open}. Confirmações do acordo atual: {confirmed}/{total}.',
    confirmationsExpire:
      'As confirmações expiram na revisão. Nenhuma pontuação de humor ou confiança é inferida.',
    compareBurdens: 'Compare as cargas, sem classificar pessoas',
    burdenLine:
      '{role}: descanso entregue {rest} min, extra {extra} min, remuneração conquistada {earned}, compensação paga {compensation} créditos; recuperação entregue {recovery} min; recuperação devida {owed} min.',
    memberGovernance: 'Governança dos cooperados',
    chairLine:
      'Mentes de IA têm voz nas objeções, nunca nas votações dos cooperados. Coordenação: {chair}.',
    notElected: 'não eleita',
    memberVoter: 'Cooperado votante',
    chairCandidate: 'Candidato à coordenação',
    recordChairBallot: 'Registrar voto para a coordenação',
    noChairBallots: 'Nenhum voto para a coordenação.',
    surplusHeading: 'Sobras operacionais positivas: {surplus} créditos',
    surplusDefinition:
      'Receita menos custos operacionais, remuneração conquistada, compensação paga, gastos com melhorias e distribuições. O capital inicial fica de fora.',
    surplusDestination: 'Destino das sobras',
    retainSurplus:
      'Reter {amount} créditos no caixa final para a remuneração e as escolhas do próximo turno.',
    distributeSurplus:
      'Distribuir {amount} créditos igualmente: {perMember} por cooperado. Esse dinheiro sai do orçamento do próximo turno.',
    allocateSurplus:
      'Destinar {amount} créditos à comunidade. Esse dinheiro sai do orçamento do próximo turno.',
    ballotsRequired:
      'São necessários três votos dos cooperados. As obrigações já acumuladas precisam ser quitadas antes.',
    surplusCharter:
      'As sobras compartilhadas fazem parte dos estatutos Liderado pela coordenação e Governança dos cooperados. Neste estatuto, qualquer sobra fica no caixa da cooperativa.',
    noSurplusReason:
      'Sem sobras neste turno: a receita de {revenue} não cobriu os custos de material de {cost}, a remuneração de {wages}, a cobertura de {cover} e as compras de {purchases}.',
    followOnCredit:
      'Pedido do compromisso cumprido. Esta temporada agora atende {customer}: {credited} kg da expedição creditados à cooperativa.',
    followOnPending:
      'Pedido do compromisso cumprido. A expedição para {customer} é creditada à cooperativa a partir do próximo turno.',
    followOnNone:
      'Pedido do compromisso cumprido. Nenhum outro pedido de cliente está aberto, então a expedição adicional não rende nada à cooperativa. O próximo turno vincula um se o moinho tiver algum aberto até lá.',
    followOnNoneLastShift:
      'Pedido do compromisso cumprido. Este é o último turno da temporada, então a expedição adicional não rende nada à cooperativa.',
    recordSurplusBallot: 'Registrar voto do cooperado sobre as sobras',
    noSurplusBallots: 'Nenhum voto sobre as sobras.',
    executeAllocation: 'Executar a destinação acordada',
    allocationRecorded: 'Destinação registrada.',
    recordedEvidence: 'Evidências registradas',
    evidenceLine: 'Minuto {minute}, {actor}: {detail}',

    teachingForecasts: 'Previsões didáticas',
    samePressure: 'Mesma pressão, gestão diferente',
    compareCurrentPlan:
      'Compare o plano físico atual ({plan}) sob três estruturas de decisão. Valem as mesmas premissas de semente, abastecimento, descanso e capacidade. A governança não concede bônus de produção. Toda abordagem mantém a recusa, a privacidade e as objeções que pertencem a quem as levanta.',
    compareApproaches: 'Comparar abordagens de gestão',
    matchedForecast: 'Previsão pareada: {kg} kg; líquido de {credits} créditos ilustrativos.',
    charterSupports: 'Este estatuto permite o plano selecionado.',
    activationBlockedEnable: 'Ativação bloqueada: ative {practices} primeiro.',
    activationBlockedBreach: 'Ativação bloqueada: o plano viola as proteções mínimas.',
    forecastsSeparate:
      'Estas são previsões ilustrativas, separadas da expedição real ao cliente e dos comprovantes da relação. Experimente uma abordagem em Práticas e depois jogue a mesma carta de pressão.',
    standaloneExercise:
      'A previsão didática usa o exercício avulso de 600 kg, antes das retenções ou negociações dos episódios. As entregas encadeadas ao cliente continuam separadas.',
    sameSeed: 'Comparação com a mesma semente',
    experimentSeed: 'Semente do experimento',
    compareAllPlans: 'Comparar todos os planos com esta semente',
    restartDiscussion: 'Reiniciar a discussão com esta semente',
    restartClears: 'Reiniciar apaga a discussão e o acordo atuais.',
    illustrativeForecasts:
      'Previsões ilustrativas do modelo, não evidência de eficácia real. Todos os braços usam a mesma semente, inclusive o contrafactual proibido de aceleração.',
    armLine:
      ': previsão {kg} kg; líquido {credits} créditos; extra {extra} min; descanso {rest} min; {verdict}.',
    permitted: 'permitido',
    prohibited: 'proibido',
    pilotChecklist: 'Checklist de preparação do piloto',
    checklistPurpose: 'Combine o propósito e os limites dos participantes.',
    checklistConsent:
      'Obtenha consentimento informado genuíno e decisões autenticadas dos cooperados fora desta demonstração.',
    checklistData: 'Combine acesso, retenção, desistência e reparações antes de coletar dados.',
    checklistSafety: 'Revise as obrigações de segurança e legais com as pessoas responsáveis.',
    checklistSeparate: 'Mantenha o piloto separado do controle da planta real.',
    downloadJson: 'Baixar JSON do cenário sintético',
    localDownload:
      'Somente download local. Esta demonstração não pode autorizar um piloto real no local de trabalho.',
  },
});
