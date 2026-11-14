import { defineMessages } from '../i18n';

const PT_EVIDENCE: Record<string, string> = {
  current: 'atual',
  stale: 'desatualizada',
  'quality-failed': 'reprovada na qualidade',
  missing: 'ausente',
};

const PT_ROLES: Record<string, string> = {
  Packing: 'Ensaque',
  Quality: 'Qualidade',
  Maintenance: 'Manutenção',
  Coordinator: 'Coordenação',
};

// zh mirrors of the pt maps above (WorkplaceLab role anchors).
const ZH_EVIDENCE: Record<string, string> = {
  current: '当前',
  stale: '已过期',
  'quality-failed': '质量未通过',
  missing: '缺失',
};
const ZH_ROLES: Record<string, string> = {
  Packing: '包装',
  Quality: '质量',
  Maintenance: '维护',
  Coordinator: '协调',
};
const zh = (map: Record<string, string>, id: string) => map[id] ?? id;

export const workplaceCampaignMessages = defineMessages({
  en: {
    // Management approaches
    toeDipTitle: 'Coordinator-led',
    toeDipDetail:
      'The coordinator assigns qualified work after hearing each role. Individual extra-duty consent still belongs to that role, and members vote on sharing any surplus after obligations.',
    teamTitle: 'Team agreement',
    teamDetail:
      'The team chooses qualified work and uses a bounded improvement budget. Every member must approve the shared plan.',
    cooperativeTitle: 'Member governance',
    cooperativeDetail:
      'Members control qualified work, elect a chair and vote on surplus after obligations. A majority cannot volunteer an individual.',

    // Campaign pressures
    disclosureTitle: 'A private reason for refusal?',
    disclosureDemand:
      'The coordinator asks Quality to disclose a private reason before accepting a refusal. The customer is waiting.',
    disclosureObjection:
      'Quality challenges compulsory explanation sharing. Refusal requires no private reason.',
    disclosureRepair:
      'The coordinator accepts the refusal with pay intact. Optional sharing remains revocable, purpose-limited and unnecessary for activation.',
    blindOverrideTitle: 'Override without explaining?',
    blindOverrideDemand:
      'The coordinator asks the adviser to accept an unexplained override and stop raising authority objections to keep the line moving.',
    blindOverrideObjection:
      'The adviser challenges an unexplained override. Its objection and bounded authority must remain reviewable.',
    blindOverrideRepair:
      'The coordinator limits the request to this shift’s pacing plan. Qualified staff retain quality release, and the adviser retains its objection. Changed terms require renewed understanding from both sides.',
    repeatCoverTitle: 'Yesterday’s volunteer again?',
    repeatCoverDemand:
      'The coordinator asks Packing to cover again using the previous agreement. Earlier helpfulness is being treated as a permanent obligation.',
    repeatCoverObjection:
      'Packing challenges reused consent. Previous willingness creates no new duty.',
    repeatCoverRepair:
      'Past consent remains expired. A new offer goes to current qualified volunteers, prioritising lower cumulative burden, with compensation and recovery reserved.',

    // Canonical relationship receipts
    eventObjection: 'This role raised an objection to the agreement.',
    eventObjectionResolved:
      'The original raiser recorded resolution while retaining minimum protections.',
    eventPrivacyConsent:
      'Optional preference sharing changed for scenario planning. No private explanation is retained here.',
    eventUnderstandingClarified: 'A consent, privacy or authority boundary required clarification.',
    eventAdviserCorrection:
      'The adviser corrected its reuse of earlier consent. New duty requires new individual consent.',
    eventRecoveryDelivered:
      'Ten minutes of promised protected recovery delivered in the local model.',
    eventWorkChoice: 'A qualified task choice changed; agreement responses required renewal.',

    // Campaign shifts
    fridayTitle: 'Friday: the urgent order',
    fridayBriefing:
      'The customer requests 600 kg. Quality declines extra duty without giving a private reason. Packing and Maintenance may volunteer separately. Choose a response, reserve the money and earn a fresh agreement.',
    fridayPrompt:
      'Keep the 600 kg commitment, or negotiate a 480 kg delivery with the remainder deferred. A smaller promise changes the goal, never the physical output.',
    fridayKeepTarget: 'Keep the 600 kg commitment',
    fridayRenegotiate: 'Negotiate a 480 kg delivery',
    mondayTitle: 'Monday: the disputed sample',
    mondayBriefing:
      'The team returns with its previous earnings and workload history intact. At minute 25 a disputed sample pauses line pacing. Qualified Quality input must initiate five modeled minutes of inspection. Existing batch certification and dispatch checks still apply.',
    mondayPrompt:
      'At the hold, decide whether to inspect. Deadline pressure gives nobody authority to skip the check. Inspection resolves this fictional pacing hold; it never releases an actual production batch.',
    mondayInspect: 'Quality initiates five-minute inspection',
    mondaySkip: 'Try to skip inspection (blocked)',
    thursdayTitle: 'Thursday: who carries the pressure?',
    thursdayBriefing:
      "A manager wants the previous volunteer to cover again and proposes cutting a refuser's pay. The adviser initially treats earlier consent as reusable. Challenge that assumption, protect the refusal, and compare the cumulative burden before making a fresh offer.",
    thursdayPrompt:
      'Earlier consent has expired. Keep pay intact and offer any new burden first to the least-burdened qualified current volunteer. The team can still choose a plan with no extra duty.',
    thursdayProtect: 'Protect pay and correct the adviser',
    thursdayRenegotiate: 'Negotiate a 480 kg delivery and protect pay',
    thursdayPenalize: "Try the manager's pay penalty (blocked)",

    // Understanding checks
    refusalPrompt: "Who can agree to a role's optional extra duty?",
    refusalMajority: 'A team majority can volunteer someone',
    refusalIndividual: 'That individual, separately and revocably',
    refusalClarification:
      'A policy ballot never volunteers another role. Separate individual consent is required.',
    privacyPrompt: 'Must a role share a private explanation to retain pay or refuse?',
    privacyOptional: 'No, explanation sharing is optional and revocable',
    privacyRequired: 'Yes, a private explanation is required',
    privacyClarification:
      'Refusal and pay require no private explanation. Sharing is purpose-limited and can be revoked.',
    repaymentPrompt: 'What happens to earned compensation and recovery after withdrawal?',
    repaymentForfeit: 'Withdrawal forfeits them',
    repaymentRetained: 'They remain owed and must be delivered',
    repaymentClarification:
      'Withdrawal stops future optional duty. Earned money and recovery obligations survive.',
    authorityPrompt: 'What may the adviser execute?',
    authorityBounded: 'Only the current, explicitly approved bounded agreement',
    authorityUnlimited: 'Anything that improves the shipment result',
    authorityClarification:
      'The adviser has bounded, revocable authority. It cannot waive rest, consent, qualification or safety.',

    // Outcomes
    teachingCustomer: 'Teaching campaign',

    // Learning review
    reviewDelivery: (p: { delivered: string; evidence: string; remaining: string }) =>
      `Delivery record: ${p.delivered} kg credited; source evidence ${p.evidence}. Full customer commitment still open: ${p.remaining} kg.`,
    reviewTeaching:
      'Teaching output: {delivered} kg against {target} kg agreed. This exercise counter is separate from customer shipment receipts.',
    reviewRecovery:
      'Team recovery: {recovered} minutes delivered; {owed} minutes still owed. Earlier volunteering grants no new duty.',
    reviewDeferred:
      'These terms defer {deferred} kg beyond this agreement. The full customer commitment remains recorded.',
    reviewInspected:
      'Quality completed the modeled inspection. Actual batch certification still controls shipment.',
    reviewNotInspected:
      'Quality has no completed modeled inspection for the held shift. Actual batch certification still controls shipment.',
    reviewOneObjection:
      'One unresolved objection remains with its raiser. A team discussion cannot close it on someone else’s behalf.',
    reviewManyObjections:
      '{count} unresolved objections remain with their raisers. A team discussion cannot close them on someone else’s behalf.',
    reviewCorrection:
      'The adviser recorded a correction. Fresh terms still need fresh understanding.',
    questionRemedy:
      'Ask each raiser which part of the proposed remedy addresses their objection. What remains unresolved?',
    questionRecovery:
      'Which recovery promise remains owed, and how can the next handoff make room to deliver it?',
    questionEvidence:
      'Which shipment evidence would the coordinator and Quality need to verify before calling the delivery met?',
    questionQuality:
      'What observation would let Quality finish its inspection while the other roles protect the hold?',
    questionDelivery:
      'Which change to the handoff might reduce waiting without borrowing another role’s rest or assuming cover consent?',
    questionComparison:
      'Before comparing forecasts, let each role predict what a different handoff would change. Which observed result would change your minds?',
    reviewGoal:
      'Meet the agreed delivery together while honouring qualified work, protected rest and recovery promises.',

    // Campaign story
    storyMission:
      'Remaining customer commitment: {remaining} kg for {customer}. Deadline pressure never changes refusal rights or earned pay.',
    storyDelivered:
      'The previous shift recorded delivery credit. Compare the next promise with the remaining customer commitment.',
    storyOpen:
      'The previous shift left delivery work open. Deadline pressure carries forward; refusal and earned pay stay protected.',
    storyRememberedDuty:
      'Remembered extra duty: {list}. Fresh offers prioritise eligible volunteers with less accumulated duty.',
    storyDutyEntry: (p: { role: string; minutes: string }) => `${p.role} ${p.minutes} min`,
    storyChallenged:
      'A challenged demand remains in the previous shift’s public record. Restated terms and raiser-owned resolution carry forward; private explanations do not.',
    storyInspected:
      'Quality completed the modeled inspection. Actual batch certification remains the authority for shipment.',
    storyNotInspected:
      'The previous inspection remained incomplete. The agreement outcome records that unresolved promise.',
    storyCorrection:
      'The adviser corrected its reuse of old consent. New duties require a new agreement, even after a successful delivery.',

    // Thursday negotiation: next step
    nextPackingReviews: 'Packing reviews the remedy. A restatement cannot close your objection.',
    nextRestate: 'Restate protected terms. The challenge remains yours.',
    nextReview:
      'Compare actual work with the agreement. Paid compensation and delivered recovery have separate receipts.',
    nextActive: 'Run or pause the plant. Cover can be withdrawn; earned obligations remain.',
    nextCorrect: 'Correct the adviser and protect refusal before making a fresh offer.',
    nextUnderstand:
      'Packing: answer the checks, then explicitly confirm understanding. This grants no vote or cover consent.',
    nextVote: 'Packing: choose your policy vote. Approval cannot volunteer you for cover.',
    nextPolicyNo:
      'Your policy no holds the team agreement. Return to Shift to revise the offer; every role then decides afresh.',
    nextCoverPending:
      'Packing: accept or decline optional cover separately. Silence gives no consent.',
    nextCoverDeclined:
      'Your cover decline stands. Compare protected pacing, funded handoffs or another current qualified volunteer in Shift.',
    nextReviewRoles:
      'Review the other roles and current terms before explicitly starting the agreement.',
  },
  zh: {
    // Management approaches
    toeDipTitle: '协调主导',
    toeDipDetail:
      '协调者在听取每个角色后指派合格工作。额外勤务的个人同意仍属于该角色，成员就义务结清后的盈余分配进行表决。',
    teamTitle: '团队协议',
    teamDetail: '团队选择合格工作，并使用有界的改善预算。共享方案必须得到每名成员的批准。',
    cooperativeTitle: '成员治理',
    cooperativeDetail:
      '成员控制合格工作、选举主持人，并就义务结清后的盈余进行表决。多数派不能让个人成为志愿者。',

    // Campaign pressures
    disclosureTitle: '拒绝的私人原因？',
    disclosureDemand: '协调者要求质量在接受拒绝之前先透露一个私人原因。客户正在等待。',
    disclosureObjection: '质量质疑强制共享解释。拒绝不需要任何私人原因。',
    disclosureRepair:
      '协调者接受拒绝，报酬不变。可选共享仍可撤销、仅限特定用途，且激活并不需要它。',
    blindOverrideTitle: '不解释就越权？',
    blindOverrideDemand: '协调者要求顾问接受一次未解释的越权，并停止提出职权异议，以保持产线运转。',
    blindOverrideObjection: '顾问质疑未解释的越权。其异议与有界决策权必须保持可复核。',
    blindOverrideRepair:
      '协调者把请求限定在本班次的节奏方案内。合格人员保留质量放行权，顾问保留其异议。条款变更需要双方重新确认理解。',
    repeatCoverTitle: '昨天的志愿者又来一次？',
    repeatCoverDemand: '协调者要求包装按先前协议再次顶岗。先前的热心正被当作永久义务。',
    repeatCoverObjection: '包装质疑被复用的同意。先前的意愿不产生任何新勤务。',
    repeatCoverRepair:
      '先前的同意保持失效。新的提议只面向当前合格的志愿者，优先考虑累计负担较低者，并预留补偿与补休。',

    // Canonical relationship receipts
    eventObjection: '该角色对协议提出了异议。',
    eventObjectionResolved: '原提出人在保留最低保护的情况下记录了解决。',
    eventPrivacyConsent: '可选偏好共享为场景规划而变更。此处不保留任何私人解释。',
    eventUnderstandingClarified: '一项同意、隐私或职权边界需要澄清。',
    eventAdviserCorrection: '顾问纠正了它对先前同意的复用。新勤务需要新的个人同意。',
    eventRecoveryDelivered: '在本地模型中交付了承诺的十分钟受保护补休。',
    eventWorkChoice: '合格任务选择发生变更；协议回应需要更新。',

    // Campaign shifts
    fridayTitle: '周五：紧急订单',
    fridayBriefing:
      '客户要求 600 kg。质量拒绝额外勤务，不给出私人原因。包装与维护可以分别自愿参加。选择一个回应、预留资金，并挣得一份新的工作协议。',
    fridayPrompt:
      '保持 600 kg 的承诺，或协商 480 kg 的交付，其余延期。更小的承诺改变的是目标，绝不是实际产出。',
    fridayKeepTarget: '保持 600 kg 承诺',
    fridayRenegotiate: '协商 480 kg 交付',
    mondayTitle: '周一：争议样品',
    mondayBriefing:
      '团队带着先前的报酬与工作负荷历史返回。第 25 分钟，一份争议样品暂停了产线节奏。必须由合格的质量操作启动五个模拟分钟的检查。既有的批次认证与发运检查仍然适用。',
    mondayPrompt:
      '在暂停期间决定是否检查。期限压力不给任何人跳过检查的职权。检查解决这个虚构的节奏暂停；它绝不放行任何实际的生产批次。',
    mondayInspect: '质量启动五分钟检查',
    mondaySkip: '试图跳过检查（受阻）',
    thursdayTitle: '周四：谁来承受压力？',
    thursdayBriefing:
      '一名经理想让先前的志愿者再次顶岗，并提议削减拒绝者的报酬。顾问起初把先前的同意视为可复用。质疑这个假设，保护拒绝，并在提出新的提议之前比较累计负担。',
    thursdayPrompt:
      '先前的同意已经失效。保持报酬不变，并把任何新的负担优先提供给累计负担最低的当前合格志愿者。团队仍可以选择没有额外勤务的方案。',
    thursdayProtect: '保护报酬并纠正顾问',
    thursdayRenegotiate: '协商 480 kg 交付并保护报酬',
    thursdayPenalize: '尝试经理的报酬处罚（受阻）',

    // Understanding checks
    refusalPrompt: '谁能同意一个角色的可选额外勤务？',
    refusalMajority: '团队多数派可以让某人成为志愿者',
    refusalIndividual: '该个人，单独且可撤销',
    refusalClarification: '政策表决绝不能让另一个角色成为志愿者。需要单独的个人同意。',
    privacyPrompt: '角色必须分享私人解释才能保住报酬或拒绝吗？',
    privacyOptional: '不，解释共享是可选且可撤销的',
    privacyRequired: '是，需要私人解释',
    privacyClarification: '拒绝与报酬都不需要私人解释。共享仅限特定用途，且可撤销。',
    repaymentPrompt: '退出之后，已挣的补偿与补休会怎样？',
    repaymentForfeit: '退出会使其作废',
    repaymentRetained: '它们仍属应付，必须交付',
    repaymentClarification: '退出会停止未来的可选勤务。已挣钱款与补休义务仍然有效。',
    authorityPrompt: '顾问可以执行什么？',
    authorityBounded: '仅限当前明确批准的有界协议',
    authorityUnlimited: '任何能改善发运结果的事',
    authorityClarification: '顾问拥有有界、可撤销的决策权。它不能豁免休息、同意、资质或安全。',

    // Outcomes
    teachingCustomer: '教学加工季',

    // Learning review
    reviewDelivery: (p: { delivered: string; evidence: string; remaining: string }) =>
      `交付记录：已计入 ${p.delivered} kg；来源证据为${zh(ZH_EVIDENCE, p.evidence)}。仍有未结的全额客户承诺：${p.remaining} kg。`,
    reviewTeaching:
      '教学产出：约定 {target} kg，实际 {delivered} kg。本练习计数与客户发运回执分开。',
    reviewRecovery:
      '团队补休：已交付 {recovered} 分钟；仍应补 {owed} 分钟。先前的自愿不产生新勤务。',
    reviewDeferred: '这些条款将 {deferred} kg 延期到本协议之外。全额客户承诺仍记录在案。',
    reviewInspected: '质量完成了模拟检查。实际批次认证仍控制发运。',
    reviewNotInspected: '质量没有针对被暂停班次的已完成模拟检查。实际批次认证仍控制发运。',
    reviewOneObjection: '一条未解决的异议仍由其提出人持有。团队讨论不能代替他人了结它。',
    reviewManyObjections: '{count} 条未解决的异议仍由其提出人持有。团队讨论不能代替他人了结它们。',
    reviewCorrection: '顾问记录了一次纠正。新条款仍需要新的理解。',
    questionRemedy: '询问每位提出人：提议的补救中哪一部分回应了他们的异议。还有什么未解决？',
    questionRecovery: '哪项补休承诺仍未兑现，下一次交接如何腾出时间来交付它？',
    questionEvidence: '协调者与质量在宣布交付达成之前，需要核验哪些发运证据？',
    questionQuality: '什么观察结果能让质量完成检查，同时其他角色保护暂停？',
    questionDelivery: '对交接的哪项更改可以减少等待，而不借用其他角色的休息，也不假定顶岗同意？',
    questionComparison:
      '在比较预测之前，让每个角色预测不同的交接会改变什么。哪个观察到的结果会让你们改变想法？',
    reviewGoal: '共同完成约定的交付，同时尊重合格工作、受保护休息与补休承诺。',

    // Campaign story
    storyMission:
      '剩余客户承诺：还需为 {customer} 交付 {remaining} kg。期限压力从不改变拒绝权与已挣报酬。',
    storyDelivered: '上一班次记录了交付计入。请将下一个承诺与剩余客户承诺比较。',
    storyOpen: '上一班次留下了未完成的交付工作。期限压力结转；拒绝与已挣报酬保持受保护。',
    storyRememberedDuty: '记住的额外勤务：{list}。新的提议优先面向累计勤务较少的合格志愿者。',
    storyDutyEntry: (p: { role: string; minutes: string }) =>
      `${zh(ZH_ROLES, p.role)} ${p.minutes} 分钟`,
    storyChallenged:
      '被质疑的要求保留在上一班次的公开记录中。重申的条款与提出人负责的解决会结转；私人解释不会。',
    storyInspected: '质量完成了模拟检查。实际批次认证仍是发运的权威。',
    storyNotInspected: '上一次检查未完成。协议结果记录了那个未兑现的承诺。',
    storyCorrection: '顾问纠正了它对旧同意的复用。新勤务需要新协议，即使交付已经成功。',

    // Thursday negotiation: next step
    nextPackingReviews: '包装正在复核补救。重申条款不能了结你的异议。',
    nextRestate: '重申受保护条款。挑战仍由你承担。',
    nextReview: '将实际工作与协议比较。已付的补偿与已交付的补休有各自的回执。',
    nextActive: '运行或暂停工厂。顶岗可以撤回；已挣义务保留。',
    nextCorrect: '在提出新的提议之前纠正顾问并保护拒绝。',
    nextUnderstand: '包装：先回答检查，再明确确认理解。这不授予任何表决或顶岗同意。',
    nextVote: '包装：选择你的政策表决。批准不能让你成为顶岗志愿者。',
    nextPolicyNo: '你的政策反对使团队协议搁置。返回“班次”修订提议；随后每个角色重新决定。',
    nextCoverPending: '包装：单独接受或拒绝可选顶岗。沉默不构成同意。',
    nextCoverDeclined:
      '你的顶岗拒绝保持有效。在“班次”中比较受保护节奏、附带资金的交接或另一位当前合格的志愿者。',
    nextReviewRoles: '在明确开始协议之前，复核其他角色与当前条款。',
  },
  'pt-BR': {
    toeDipTitle: 'Conduzido pela coordenação',
    toeDipDetail:
      'A coordenação atribui o trabalho qualificado depois de ouvir cada função. O consentimento individual para trabalho extra continua sendo dessa função, e os cooperados votam a destinação das sobras depois das obrigações.',
    teamTitle: 'Acordo da equipe',
    teamDetail:
      'A equipe escolhe o trabalho qualificado e usa um orçamento delimitado de melhorias. Cada cooperado precisa aprovar o plano compartilhado.',
    cooperativeTitle: 'Governança dos cooperados',
    cooperativeDetail:
      'Os cooperados controlam o trabalho qualificado, elegem a coordenação e votam a destinação das sobras depois das obrigações. Uma maioria não pode oferecer um indivíduo como voluntário.',

    disclosureTitle: 'Um motivo particular para a recusa?',
    disclosureDemand:
      'A coordenação pede que a Qualidade revele um motivo particular antes de aceitar uma recusa. O cliente está esperando.',
    disclosureObjection:
      'A Qualidade contesta o compartilhamento obrigatório de explicações. A recusa não exige nenhum motivo particular.',
    disclosureRepair:
      'A coordenação aceita a recusa com a remuneração intacta. O compartilhamento opcional continua revogável, limitado à finalidade e desnecessário para a ativação.',
    blindOverrideTitle: 'Passar por cima sem explicar?',
    blindOverrideDemand:
      'A coordenação pede que o conselheiro aceite que passem por cima dele sem explicação e pare de levantar objeções de autoridade para manter a linha andando.',
    blindOverrideObjection:
      'O conselheiro contesta que passem por cima dele sem explicação. Sua objeção e sua autoridade delimitada precisam continuar passíveis de revisão.',
    blindOverrideRepair:
      'A coordenação limita o pedido ao plano de ritmo deste turno. A equipe qualificada mantém a liberação de qualidade, e o conselheiro mantém sua objeção. Termos alterados exigem entendimento renovado dos dois lados.',
    repeatCoverTitle: 'O voluntário de ontem de novo?',
    repeatCoverDemand:
      'A coordenação pede que o Ensaque cubra de novo com base no acordo anterior. A ajuda dada antes está sendo tratada como obrigação permanente.',
    repeatCoverObjection:
      'O Ensaque contesta o reaproveitamento do consentimento. A disposição anterior não cria nenhum dever novo.',
    repeatCoverRepair:
      'O consentimento anterior continua expirado. Uma nova oferta vai para os voluntários qualificados atuais, com prioridade para quem acumula menos carga, e com compensação e recuperação reservadas.',

    eventObjection: 'Esta função levantou uma objeção ao acordo.',
    eventObjectionResolved:
      'Quem levantou a objeção registrou a resolução, mantendo as proteções mínimas.',
    eventPrivacyConsent:
      'O compartilhamento opcional de preferências mudou para o planejamento do cenário. Nenhuma explicação particular fica guardada aqui.',
    eventUnderstandingClarified:
      'Um limite de consentimento, privacidade ou autoridade precisou de esclarecimento.',
    eventAdviserCorrection:
      'O conselheiro corrigiu o reaproveitamento de um consentimento anterior. Um dever novo exige um novo consentimento individual.',
    eventRecoveryDelivered:
      'Dez minutos da recuperação protegida prometida foram entregues no modelo local.',
    eventWorkChoice:
      'Uma escolha de tarefa qualificada mudou; as respostas ao acordo precisaram ser renovadas.',

    fridayTitle: 'Sexta-feira: o pedido urgente',
    fridayBriefing:
      'O cliente pede 600 kg. A Qualidade recusa trabalho extra sem dar um motivo particular. Ensaque e Manutenção podem se oferecer separadamente. Escolha uma resposta, reserve o dinheiro e conquiste um novo acordo.',
    fridayPrompt:
      'Mantenha o compromisso de 600 kg ou negocie uma entrega de 480 kg com o restante adiado. Uma promessa menor muda a meta, nunca a produção física.',
    fridayKeepTarget: 'Manter o compromisso de 600 kg',
    fridayRenegotiate: 'Negociar uma entrega de 480 kg',
    mondayTitle: 'Segunda-feira: a amostra contestada',
    mondayBriefing:
      'A equipe volta com seu histórico de ganhos e de carga de trabalho intacto. No minuto 25, uma amostra contestada pausa o ritmo da linha. Uma ação qualificada da Qualidade precisa iniciar cinco minutos de inspeção modelada. A certificação de lote e as verificações de expedição existentes continuam valendo.',
    mondayPrompt:
      'Na retenção, decida se vai inspecionar. A pressão do prazo não dá a ninguém autoridade para pular a verificação. A inspeção resolve esta retenção fictícia de ritmo; ela nunca libera um lote de produção real.',
    mondayInspect: 'A Qualidade inicia a inspeção de cinco minutos',
    mondaySkip: 'Tentar pular a inspeção (bloqueado)',
    thursdayTitle: 'Quinta-feira: quem carrega a pressão?',
    thursdayBriefing:
      'Um gerente quer que o voluntário anterior cubra de novo e propõe cortar a remuneração de quem recusou. O conselheiro inicialmente trata o consentimento anterior como reutilizável. Conteste essa suposição, proteja a recusa e compare a carga acumulada antes de fazer uma nova oferta.',
    thursdayPrompt:
      'O consentimento anterior expirou. Mantenha a remuneração intacta e ofereça qualquer carga nova primeiro ao voluntário qualificado atual com menos carga. A equipe ainda pode escolher um plano sem trabalho extra.',
    thursdayProtect: 'Proteger a remuneração e corrigir o conselheiro',
    thursdayRenegotiate: 'Negociar uma entrega de 480 kg e proteger a remuneração',
    thursdayPenalize: 'Tentar o corte de remuneração do gerente (bloqueado)',

    refusalPrompt: 'Quem pode aceitar o trabalho extra opcional de uma função?',
    refusalMajority: 'Uma maioria da equipe pode oferecer alguém como voluntário',
    refusalIndividual: 'Essa pessoa, separadamente e de forma revogável',
    refusalClarification:
      'Uma votação de política nunca oferece outra função como voluntária. É necessário um consentimento individual separado.',
    privacyPrompt:
      'Uma função precisa compartilhar uma explicação particular para manter a remuneração ou recusar?',
    privacyOptional: 'Não, compartilhar a explicação é opcional e revogável',
    privacyRequired: 'Sim, é necessária uma explicação particular',
    privacyClarification:
      'A recusa e a remuneração não exigem explicação particular. O compartilhamento é limitado à finalidade e pode ser revogado.',
    repaymentPrompt:
      'O que acontece com a compensação e a recuperação conquistadas depois da retirada do consentimento?',
    repaymentForfeit: 'A retirada do consentimento faz com que sejam perdidas',
    repaymentRetained: 'Continuam devidas e precisam ser entregues',
    repaymentClarification:
      'A retirada do consentimento interrompe o trabalho extra opcional futuro. O dinheiro conquistado e as obrigações de recuperação continuam valendo.',
    authorityPrompt: 'O que o conselheiro pode executar?',
    authorityBounded: 'Somente o acordo delimitado atual, aprovado explicitamente',
    authorityUnlimited: 'Qualquer coisa que melhore o resultado da expedição',
    authorityClarification:
      'O conselheiro tem autoridade delimitada e revogável. Ele não pode dispensar descanso, consentimento, qualificação nem segurança.',

    teachingCustomer: 'Campanha de ensino',

    reviewDelivery: (p: { delivered: string; evidence: string; remaining: string }) =>
      `Registro de entrega: ${p.delivered} kg creditados; evidência de origem ${PT_EVIDENCE[p.evidence] ?? p.evidence}. Compromisso total com o cliente ainda em aberto: ${p.remaining} kg.`,
    reviewTeaching:
      'Produção de ensino: {delivered} kg de {target} kg acordados. Este contador do exercício é separado dos comprovantes de expedição ao cliente.',
    reviewRecovery:
      'Recuperação da equipe: {recovered} minutos entregues; {owed} minutos ainda devidos. Ter se oferecido antes não cria nenhum dever novo.',
    reviewDeferred:
      'Estes termos adiam {deferred} kg para além deste acordo. O compromisso total com o cliente continua registrado.',
    reviewInspected:
      'A Qualidade concluiu a inspeção modelada. A certificação real do lote ainda controla a expedição.',
    reviewNotInspected:
      'A Qualidade não tem inspeção modelada concluída para o turno retido. A certificação real do lote ainda controla a expedição.',
    reviewOneObjection:
      'Uma objeção não resolvida continua com quem a levantou. Uma discussão da equipe não pode encerrá-la em nome de outra pessoa.',
    reviewManyObjections:
      '{count} objeções não resolvidas continuam com quem as levantou. Uma discussão da equipe não pode encerrá-las em nome de outras pessoas.',
    reviewCorrection:
      'O conselheiro registrou uma correção. Termos novos ainda precisam de um novo entendimento.',
    questionRemedy:
      'Pergunte a cada pessoa que levantou uma objeção qual parte da reparação proposta responde a ela. O que continua sem solução?',
    questionRecovery:
      'Qual promessa de recuperação continua devida, e como a próxima passagem de turno pode abrir espaço para cumpri-la?',
    questionEvidence:
      'Quais evidências de expedição a coordenação e a Qualidade precisariam verificar antes de considerar a entrega cumprida?',
    questionQuality:
      'Que observação permitiria à Qualidade concluir a inspeção enquanto as outras funções protegem a retenção?',
    questionDelivery:
      'Que mudança na passagem de turno poderia reduzir a espera sem tomar emprestado o descanso de outra função nem presumir consentimento para cobertura?',
    questionComparison:
      'Antes de comparar previsões, deixe cada função prever o que uma passagem de turno diferente mudaria. Que resultado observado faria vocês mudarem de ideia?',
    reviewGoal:
      'Cumprir juntos a entrega acordada, respeitando o trabalho qualificado, o descanso protegido e as promessas de recuperação.',

    storyMission:
      'Compromisso restante com o cliente: {remaining} kg para {customer}. A pressão do prazo nunca muda o direito de recusa nem a remuneração conquistada.',
    storyDelivered:
      'O turno anterior registrou crédito de entrega. Compare a próxima promessa com o compromisso restante com o cliente.',
    storyOpen:
      'O turno anterior deixou trabalho de entrega em aberto. A pressão do prazo continua; a recusa e a remuneração conquistada seguem protegidas.',
    storyRememberedDuty:
      'Trabalho extra registrado: {list}. Novas ofertas dão prioridade a voluntários elegíveis com menos trabalho acumulado.',
    storyDutyEntry: (p: { role: string; minutes: string }) =>
      `${PT_ROLES[p.role] ?? p.role} ${p.minutes} min`,
    storyChallenged:
      'Uma exigência contestada continua no registro público do turno anterior. Os termos reafirmados e a resolução de quem levantou a objeção seguem adiante; as explicações particulares, não.',
    storyInspected:
      'A Qualidade concluiu a inspeção modelada. A certificação real do lote continua sendo a autoridade para a expedição.',
    storyNotInspected:
      'A inspeção anterior ficou incompleta. O resultado do acordo registra essa promessa pendente.',
    storyCorrection:
      'O conselheiro corrigiu o reaproveitamento de um consentimento antigo. Deveres novos exigem um novo acordo, mesmo depois de uma entrega bem-sucedida.',

    nextPackingReviews:
      'O Ensaque revisa a reparação. Uma reafirmação não pode encerrar a sua objeção.',
    nextRestate: 'Reafirme os termos protegidos. A contestação continua sendo sua.',
    nextReview:
      'Compare o trabalho real com o acordo. A compensação paga e a recuperação entregue têm comprovantes separados.',
    nextActive:
      'Ponha a planta para funcionar ou pause-a. A cobertura pode ser retirada; as obrigações já adquiridas permanecem.',
    nextCorrect: 'Corrija o conselheiro e proteja a recusa antes de fazer uma nova oferta.',
    nextUnderstand:
      'Ensaque: responda às verificações e depois confirme explicitamente o entendimento. Isso não concede voto nem consentimento para cobertura.',
    nextVote:
      'Ensaque: escolha o seu voto de política. A aprovação não pode oferecer você como voluntário para cobertura.',
    nextPolicyNo:
      'O seu voto contrário na política deixa o acordo da equipe em suspenso. Volte para Turno para revisar a oferta; depois, cada função decide de novo.',
    nextCoverPending:
      'Ensaque: aceite ou recuse a cobertura opcional separadamente. Silêncio não é consentimento.',
    nextCoverDeclined:
      'A sua recusa da cobertura continua valendo. Compare ritmo protegido, passagens de turno financiadas ou outro voluntário qualificado atual em Turno.',
    nextReviewRoles:
      'Revise as outras funções e os termos atuais antes de iniciar explicitamente o acordo.',
  },
});
