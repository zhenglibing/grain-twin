import { defineMessages } from '../../../i18n';

/** pt-BR label for a logic value; an unknown value falls back to itself. */
const pick = (labels: Record<string, string>, value: string): string => labels[value] ?? value;

type Status = { status: string };

/*
 * zh label maps mirroring the WorkplaceLab enum anchors; unknown values fall
 * back to themselves through pick(), matching the pt-BR behaviour.
 */
const ZH_SECTION: Record<string, string> = {
  Handoff: '交接',
  Shift: '班次',
  Practices: '实践',
  'Agreement / Voices': '协议/声音',
  Review: '回顾',
  Experiment: '实验',
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

const ZH_EVIDENCE_STATUS: Record<string, string> = {
  current: '当前',
  stale: '已过期',
  'quality-failed': '质量未通过',
  missing: '缺失',
};

export const workplacePressureChapterMessages = defineMessages({
  en: {
    // Logic values shown as labels. English returns the value itself.
    sectionLabel: (p: { section: string }) => p.section,
    objectionStatus: (p: Status) => p.status,
    deliveryStatus: (p: Status) => p.status,
    agreementStatus: (p: Status) => p.status,
    evidenceStatus: (p: Status) => p.status,

    // Next beat (deriveWorkplaceGuidance)
    beatRestate: 'Restate the terms',
    beatRemedy: 'The raiser reviews the remedy',
    beatQualityReviews: 'Quality reviews the line',
    beatCompleteInspection: 'Complete protected inspection',
    beatAccount: 'Account for what was kept',
    beatRecovery: 'Complete owed recovery',
    beatNextShift: 'Prepare the next shift',
    beatArchive: 'Close the campaign',
    beatSettle: 'Settle remaining obligations',
    nextRecovery: 'Resume the plant clock to deliver owed recovery. This shift stays closed.',
    nextWorkshopRecovery: 'Deliver modeled recovery in Review. This shift stays closed.',
    nextShift: 'Continue to the next campaign shift in Review. Each role chooses again.',
    nextArchive:
      'Archive the review in Review to open a fresh exercise. Campaign receipts are kept.',
    nextSettle:
      'Settle retained recovery, reserved pay and active cover in Review before archiving.',
    beatDeliver: 'Deliver the agreement',
    beatEarn: 'Earn a fresh agreement',
    nextRestate: 'Use Restate protected terms in Shift. The challenge remains open afterwards.',
    nextRemedy:
      'In Agreement / Voices, select the resolving author. Only the raiser can confirm resolution.',
    nextInspect:
      'Use Quality initiates five-minute inspection in Shift. The line is held; deadline pressure grants no authority to skip the check.',
    nextInspecting:
      'Inspection is running until modeled minute {minute}. Resume the plant clock when ready to deliver the remaining inspection time. Actual batch certification remains separate.',
    nextReviewing:
      'Review paid compensation, delivered recovery and customer delivery separately. This shift cannot resume.',
    nextRunning:
      'Use the plant clock controls to run or pause real production. An objection during work stops this shift into review.',
    nextRevised:
      'Your no is recorded. Compare revised offers in Shift. Changing shared terms clears every role decision; each role then chooses afresh.',
    nextReady:
      'Current terms are ready. Use Approve and run agreement in Agreement / Voices only when you choose to proceed.',
    nextCampaign:
      'Choose the episode response and plan in Shift, then answer the current role checks and record understanding, ballots and any separate cover consent in Agreement / Voices.',
    nextPlan:
      'Choose the plan in Shift, then record understanding, ballots and any separate cover consent in Agreement / Voices.',

    // Governance rule
    ruleConsent: 'Every member must approve the shared plan.',
    ruleVote: 'A member majority approves the plan; it cannot volunteer an individual.',
    ruleConsult: 'The coordinator hears each role before assigning qualified work.',

    // Chapter
    regionLabel: 'Pressure chapter',
    headingThursday: 'Thursday: a fresh offer',
    headingPressure: 'A working agreement under pressure',
    willingnessExpired:
      'Yesterday’s willingness has expired. Retained workload informs a new offer; it grants no new consent.',
    challengeLine: '{role} challenge: {status}. {receipt}',
    adviser: 'Adviser',
    protectedRecorded: 'Protected terms recorded.',
    noProtectedReceipt: 'No retained protected-terms receipt.',
    protectedWithoutChallenge:
      'Protected terms recorded without a challenge. Prevention does not claim an objection was resolved.',
    noPressureResponse:
      'No retained pressure response. The pressure card is optional; a protected plan can proceed without trying the demand.',
    repairBelongs:
      'Repair belongs to review. Resolving the objection cannot restart this same shift.',
    goToControls: 'Go to {destination} controls',
    detailsSummary: 'Terms, retained burden and delivery',
    stepRestate: 'Restate protected terms in Shift; restatement leaves the objection open.',
    stepRemedy: 'Let each raiser review the remedy in Agreement / Voices.',
    stepApprove:
      'Answer current role checks, record understanding and ballots, then explicitly approve the plan in Agreement / Voices. Cover consent is separate.',
    stepReview:
      'Use Review to compare paid obligations, actual recovery and delivery. Promises and agreed deferrals remain distinct from delivery.',
    extraDutyNote:
      'Extra duty always requires fresh individual consent; a no-extra-duty plan remains valid.',
    offerLine:
      'Current offer: {plan}, revision {revision}. Adviser boundaries: {ack}. Role understanding {understood}/{members}; ballots recorded {ballots}/{members}. Separate cover consent: {cover}.',
    acknowledged: 'acknowledged',
    awaitingAnswers: 'awaiting current answers',
    none: 'none',
    openItem: 'Open: {statement}',
    memberLine:
      '{role}: retained extra duty {extra} min; compensation paid {paid} credits; recovery delivered {recovery} min; recovery owed {owed} min.',
    deliveryLine:
      'Delivery {status}: {delivered} / {target} kg. Agreement outcome: {agreement}. Wages paid: {wages} credits. Full customer commitment remaining: {remaining} kg.',
    dispatchEvidence: ' Dispatch evidence: {evidence}.',
    recoveryNote:
      'Owed recovery needs modeled clock time. Review preserves shortfalls, earned pay and prior shifts. Changing terms clears the current role agreement.',
  },
  zh: {
    // Logic values shown as labels. zh maps known ids; unknown values fall back to themselves.
    sectionLabel: (p: { section: string }) => pick(ZH_SECTION, p.section),
    objectionStatus: (p: Status) => pick(ZH_OBJECTION_STATUS, p.status),
    deliveryStatus: (p: Status) => pick(ZH_DELIVERY_STATUS, p.status),
    agreementStatus: (p: Status) => pick(ZH_AGREEMENT_STATUS, p.status),
    evidenceStatus: (p: Status) => pick(ZH_EVIDENCE_STATUS, p.status),

    // Next beat (deriveWorkplaceGuidance)
    beatRestate: '重申条款',
    beatRemedy: '提出人复核补救',
    beatQualityReviews: '质量复核产线',
    beatCompleteInspection: '完成受保护检查',
    beatAccount: '交代保留的内容',
    beatRecovery: '完成应补休息',
    beatNextShift: '准备下一个班次',
    beatArchive: '结束加工季',
    beatSettle: '结清剩余义务',
    nextRecovery: '恢复工厂时钟以交付应补休息。本班次保持结束。',
    nextWorkshopRecovery: '在“回顾”中交付模拟补休。本班次保持结束。',
    nextShift: '在“回顾”中继续下一个加工季班次。每个角色再次选择。',
    nextArchive: '在“回顾”中归档本次回顾以开启新练习。加工季回执会保留。',
    nextSettle: '归档前，请在“回顾”中结清保留的补休、预留工资与进行中的顶岗。',
    beatDeliver: '履行协议',
    beatEarn: '挣得新协议',
    nextRestate: '在“班次”中使用“重申受保护条款”。挑战此后保持未决。',
    nextRemedy: '在“协议/声音”中选择解决人。只有提出人能确认解决。',
    nextInspect: '在“班次”中使用“质量启动五分钟检查”。产线保持扣留；限期压力不赋予跳过检查的职权。',
    nextInspecting:
      '检查正在进行，直至模拟第 {minute} 分钟。准备好交付剩余检查时间时，请恢复工厂时钟。实际的批次认证仍另行处理。',
    nextReviewing: '请分别复核已付补偿、已交付补休与客户交付。本班次无法恢复。',
    nextRunning: '使用工厂时钟控制来运行或暂停真实生产。工作期间的异议会使本班次停止并进入回顾。',
    nextRevised:
      '你的“不”已记录。请在“班次”中对比修订后的报价。更改共享条款会清除所有角色决策；每个角色随后重新选择。',
    nextReady: '当前条款已就绪。仅在你决定继续时，才在“协议/声音”中使用“批准并运行协议”。',
    nextCampaign:
      '在“班次”中选择剧情回应与方案，然后在“协议/声音”中回答当前的角色检查，并记录理解、表决以及任何单独的顶岗同意。',
    nextPlan: '在“班次”中选择方案，然后在“协议/声音”中记录理解、表决以及任何单独的顶岗同意。',

    // Governance rule
    ruleConsent: '每位成员都必须批准该共享方案。',
    ruleVote: '成员多数批准方案；多数决不能让个人成为志愿者。',
    ruleConsult: '协调人在指派合格工作之前听取每个角色的意见。',

    // Chapter
    regionLabel: '压力章节',
    headingThursday: '周四：一份新报价',
    headingPressure: '压力之下的工作协议',
    willingnessExpired: '昨天的意愿已经失效。保留的工作负荷为新报价提供参考；它不授予新的同意。',
    challengeLine: '{role}挑战：{status}。{receipt}',
    adviser: '顾问',
    protectedRecorded: '已记录受保护条款。',
    noProtectedReceipt: '没有保留的受保护条款回执。',
    protectedWithoutChallenge:
      '已在未发生挑战的情况下记录受保护条款。预防不等于宣称某项异议已解决。',
    noPressureResponse: '没有保留的压力回应。压力卡是可选的；受保护方案不尝试该要求也能推进。',
    repairBelongs: '修复属于回顾。解决异议不能重启同一个班次。',
    goToControls: '前往{destination}控制',
    detailsSummary: '条款、保留负担与交付',
    stepRestate: '在“班次”中重申受保护条款；重申后异议仍保持未决。',
    stepRemedy: '让每位提出人在“协议/声音”中复核补救。',
    stepApprove:
      '回答当前的角色检查，记录理解与表决，然后在“协议/声音”中明确批准该方案。顶岗同意另行处理。',
    stepReview: '使用“回顾”对比已付义务、实际补休与交付。承诺与约定延期仍与交付区分开。',
    extraDutyNote: '额外勤务始终需要新的个人同意；无额外勤务的方案仍然有效。',
    offerLine:
      '当前报价：{plan}，修订版 {revision}。顾问边界：{ack}。角色理解 {understood}/{members}；已记录表决 {ballots}/{members}。单独的顶岗同意：{cover}。',
    acknowledged: '已确认',
    awaitingAnswers: '待答当前问题',
    none: '无',
    openItem: '未决：{statement}',
    memberLine:
      '{role}：保留额外勤务 {extra} 分钟；已付补偿 {paid} 点数；已交付补休 {recovery} 分钟；应补休息 {owed} 分钟。',
    deliveryLine:
      '交付{status}：{delivered}/{target} kg。协议结果：{agreement}。已付工资：{wages} 点数。剩余全额客户承诺：{remaining} kg。',
    dispatchEvidence: ' 发运证据：{evidence}。',
    recoveryNote:
      '应补休息需要模拟时钟时间。回顾会保留缺口、已挣报酬与之前的班次。更改条款会清除当前的角色协议。',
  },
  'pt-BR': {
    sectionLabel: (p: { section: string }) =>
      pick(
        {
          Handoff: 'Passagem de turno',
          Shift: 'Turno',
          Practices: 'Práticas',
          'Agreement / Voices': 'Acordo / Vozes',
          Review: 'Revisão',
          Experiment: 'Experimento',
        },
        p.section
      ),
    objectionStatus: (p: Status) => pick({ open: 'aberta', resolved: 'resolvida' }, p.status),
    deliveryStatus: (p: Status) =>
      pick(
        {
          blocked: 'bloqueada',
          met: 'cumprida',
          shortfall: 'abaixo da meta',
          pending: 'pendente',
        },
        p.status
      ),
    agreementStatus: (p: Status) =>
      pick({ honoured: 'cumprido', incomplete: 'incompleto', pending: 'pendente' }, p.status),
    evidenceStatus: (p: Status) =>
      pick(
        {
          current: 'atual',
          stale: 'desatualizada',
          'quality-failed': 'reprovada na qualidade',
          missing: 'ausente',
        },
        p.status
      ),

    beatRestate: 'Reafirme os termos',
    beatRemedy: 'Quem levantou a objeção revisa a reparação',
    beatQualityReviews: 'A Qualidade revisa a linha',
    beatCompleteInspection: 'Conclua a inspeção protegida',
    beatAccount: 'Preste contas do que foi cumprido',
    beatRecovery: 'Cumpra o descanso compensatório devido',
    beatNextShift: 'Prepare o próximo turno',
    beatArchive: 'Encerre a campanha',
    beatSettle: 'Cumpra as obrigações pendentes',
    nextRecovery:
      'Retome o relógio da fábrica para cumprir o descanso compensatório devido. Este turno continua encerrado.',
    nextWorkshopRecovery:
      'Cumpra o descanso compensatório modelado em Revisão. Este turno continua encerrado.',
    nextShift: 'Avance para o próximo turno da campanha em Revisão. Cada papel decide novamente.',
    nextArchive:
      'Arquive a revisão em Revisão para abrir um novo exercício. Os registros da campanha são mantidos.',
    nextSettle:
      'Cumpra o descanso compensatório retido, o pagamento reservado e a cobertura ativa em Revisão antes de arquivar.',
    beatDeliver: 'Cumpra o acordo',
    beatEarn: 'Conquiste um novo acordo',
    nextRestate:
      'Use “Reafirmar os termos protegidos” em Turno. A contestação continua aberta depois.',
    nextRemedy:
      'Em Acordo / Vozes, selecione o autor da resolução. Somente quem levantou a objeção pode confirmar a resolução.',
    nextInspect:
      'Use “A Qualidade inicia a inspeção de cinco minutos” em Turno. A linha fica retida; a pressão do prazo não dá autoridade para pular a verificação.',
    nextInspecting:
      'A inspeção está em andamento até o minuto modelado {minute}. Retome o relógio da planta quando estiver pronto para cumprir o tempo restante de inspeção. A certificação real do lote continua separada.',
    nextReviewing:
      'Revise separadamente a compensação paga, a recuperação concedida e a entrega ao cliente. Este turno não pode ser retomado.',
    nextRunning:
      'Use os controles do relógio da planta para rodar ou pausar a produção real. Uma objeção durante o trabalho interrompe este turno e o leva à revisão.',
    nextRevised:
      'Seu “não” foi registrado. Compare as ofertas revisadas em Turno. Mudar os termos compartilhados apaga todas as decisões das funções; cada função então escolhe de novo.',
    nextReady:
      'Os termos atuais estão prontos. Use “Aprovar e executar o acordo” em Acordo / Vozes somente quando decidir seguir em frente.',
    nextCampaign:
      'Escolha a resposta ao episódio e o plano em Turno; depois responda às verificações atuais das funções e registre o entendimento, os votos e qualquer consentimento separado para cobertura em Acordo / Vozes.',
    nextPlan:
      'Escolha o plano em Turno; depois registre o entendimento, os votos e qualquer consentimento separado para cobertura em Acordo / Vozes.',

    ruleConsent: 'Todos os cooperados precisam aprovar o plano compartilhado.',
    ruleVote:
      'A maioria dos cooperados aprova o plano; ela não pode oferecer uma pessoa como voluntária.',
    ruleConsult: 'A coordenação ouve cada função antes de designar trabalho qualificado.',

    regionLabel: 'Capítulo de pressão',
    headingThursday: 'Quinta-feira: uma nova oferta',
    headingPressure: 'Um acordo de trabalho sob pressão',
    willingnessExpired:
      'A disposição de ontem expirou. A carga de trabalho acumulada orienta uma nova oferta; ela não concede novo consentimento.',
    challengeLine: 'Contestação de {role}: {status}. {receipt}',
    adviser: 'Conselheiro',
    protectedRecorded: 'Termos protegidos registrados.',
    noProtectedReceipt: 'Nenhum comprovante de termos protegidos registrado.',
    protectedWithoutChallenge:
      'Termos protegidos registrados sem contestação. A prevenção não afirma que uma objeção foi resolvida.',
    noPressureResponse:
      'Nenhuma resposta à pressão registrada. A carta de pressão é opcional; um plano protegido pode seguir sem testar a exigência.',
    repairBelongs:
      'A reparação cabe à revisão. Resolver a objeção não pode reiniciar este mesmo turno.',
    goToControls: 'Ir para os controles de {destination}',
    detailsSummary: 'Termos, carga acumulada e entrega',
    stepRestate: 'Reafirme os termos protegidos em Turno; a reafirmação deixa a objeção aberta.',
    stepRemedy: 'Deixe cada pessoa que levantou uma objeção revisar a reparação em Acordo / Vozes.',
    stepApprove:
      'Responda às verificações atuais das funções, registre o entendimento e os votos e depois aprove explicitamente o plano em Acordo / Vozes. O consentimento para cobertura é separado.',
    stepReview:
      'Use Revisão para comparar obrigações pagas, recuperação real e entrega. Promessas e adiamentos acordados continuam distintos da entrega.',
    extraDutyNote:
      'Trabalho extra sempre exige novo consentimento individual; um plano sem trabalho extra continua válido.',
    offerLine:
      'Oferta atual: {plan}, revisão {revision}. Limites do conselheiro: {ack}. Entendimento das funções {understood}/{members}; votos registrados {ballots}/{members}. Consentimento separado para cobertura: {cover}.',
    acknowledged: 'reconhecidos',
    awaitingAnswers: 'aguardando as respostas atuais',
    none: 'nenhum',
    openItem: 'Aberta: {statement}',
    memberLine:
      '{role}: trabalho extra acumulado {extra} min; compensação paga {paid} créditos; recuperação concedida {recovery} min; recuperação devida {owed} min.',
    deliveryLine:
      'Entrega {status}: {delivered} / {target} kg. Resultado do acordo: {agreement}. Remuneração paga: {wages} créditos. Restante do compromisso total com o cliente: {remaining} kg.',
    dispatchEvidence: ' Evidência de expedição: {evidence}.',
    recoveryNote:
      'A recuperação devida precisa de tempo de relógio modelado. A revisão preserva os déficits, a remuneração conquistada e os turnos anteriores. Mudar os termos apaga o acordo atual das funções.',
  },
});
