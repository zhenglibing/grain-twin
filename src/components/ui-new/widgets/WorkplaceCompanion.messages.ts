import { defineMessages } from '../../../i18n';

interface DestinationParams {
  destination: string;
}

/** guide.destination is a tab id; English prints it verbatim. */
const PT_DESTINATION: Record<string, string> = {
  Shift: 'Turno',
  'Agreement / Voices': 'Acordo / Vozes',
  Review: 'Revisão',
};

/** zh mirror of the WorkplaceLab section anchors for the same tab ids. */
const ZH_DESTINATION: Record<string, string> = {
  Shift: '班次',
  'Agreement / Voices': '协议/声音',
  Review: '回顾',
};

interface ReceiptsParams {
  delivered: string;
  target: string;
  blocked: boolean;
}

export const workplaceCompanionMessages = defineMessages({
  en: {
    handoffShift: 'Handoff shift {cycle}',
    objectionNeedsRaiser: 'An objection needs its raiser',
    regionLabel: 'Working agreement companion',
    heading: 'Working agreement',
    revisionLine: '{name}, revision {revision}',
    adviserAbstained: 'The adviser abstained. Missing plant evidence remains visible in Handoff.',
    frozenBound:
      'Frozen conditional departure bound: 0 to {upper} kg. Actual receipts remain separate.',
    reviewPhase: 'Future authority has ended. Earned pay and recovery remain owed until delivered.',
    activePhase: 'Current bounded agreement is active. Refusal remains available.',
    readyForApproval: 'Current terms are ready for your explicit approval.',
    needsFreshAgreement: 'These terms still need a fresh agreement.',
    nextControls: (p: DestinationParams) => `Next: ${p.destination} controls.`,
    adviser: 'Adviser',
    openObjection: '{roles}: open objection. Only its raiser can confirm resolution.',
    currentCover: 'Current cover: {role}, {minutes} min remaining.',
    installmentReceipts: 'Agreed installment receipts: ',
    dispatchReceipts: 'Customer dispatch receipts: ',
    teachingOutput: 'Teaching output: ',
    receiptsValue: (p: ReceiptsParams) =>
      `${p.delivered} / ${p.target} kg${p.blocked ? '; evidence blocked' : ''}.`,
    agreedDeferral: 'Agreed deferral: ',
    deferralValue: '{kg} kg, still part of the full commitment.',
    handoffDispatch: 'This handoff shift’s dispatch: ',
    kgValue: '{kg} kg.',
    commitmentRemaining: 'Full customer commitment remaining: ',
    retainedCompensation: 'Retained compensation paid: ',
    compensationPaid: 'Compensation paid: ',
    creditsValue: '{amount} illustrative credits.',
    retainedRecovery: 'Retained recovery: ',
    recovery: 'Recovery: ',
    recoveryValue: '{recovered} min delivered; {owed} min owed.',
    openControls: 'Open agreement controls',
    viewPacking: 'View packing floor',
  },
  zh: {
    handoffShift: '交接班次 {cycle}',
    objectionNeedsRaiser: '异议需要其提出人',
    regionLabel: '工作协议伙伴',
    heading: '工作协议',
    revisionLine: '{name}，修订版 {revision}',
    adviserAbstained: '顾问已弃权。缺失的工厂证据仍显示在“交接”中。',
    frozenBound: '冻结的条件离场界限：0 到 {upper} kg。实际回执仍分开保留。',
    reviewPhase: '未来的授权已经结束。已挣报酬与补休在交付之前仍然应付。',
    activePhase: '当前的有界协议处于活跃状态。拒绝仍然可用。',
    readyForApproval: '当前条款已就绪，等待你的明确批准。',
    needsFreshAgreement: '这些条款仍需要一份新的协议。',
    nextControls: (p: DestinationParams) =>
      `下一步：${ZH_DESTINATION[p.destination] ?? p.destination}控制。`,
    adviser: '顾问',
    openObjection: '{roles}：未决异议。只有其提出人能确认解决。',
    currentCover: '当前顶岗：{role}，剩余 {minutes} 分钟。',
    installmentReceipts: '约定分期回执：',
    dispatchReceipts: '客户发运回执：',
    teachingOutput: '教学产出：',
    receiptsValue: (p: ReceiptsParams) =>
      `${p.delivered} / ${p.target} kg${p.blocked ? '；证据受阻' : ''}。`,
    agreedDeferral: '约定延期：',
    deferralValue: '{kg} kg，仍是全额承诺的一部分。',
    handoffDispatch: '本交接班次的发运：',
    kgValue: '{kg} kg。',
    commitmentRemaining: '剩余全额客户承诺：',
    retainedCompensation: '已付保留补偿：',
    compensationPaid: '已付补偿：',
    creditsValue: '{amount} 示试点数。',
    retainedRecovery: '保留补休：',
    recovery: '补休：',
    recoveryValue: '已交付 {recovered} 分钟；应补 {owed} 分钟。',
    openControls: '打开协议控制',
    viewPacking: '查看包装区',
  },
  'pt-BR': {
    handoffShift: 'Turno {cycle} do experimento',
    objectionNeedsRaiser: 'Uma objeção precisa de quem a levantou',
    regionLabel: 'Assistente do acordo de trabalho',
    heading: 'Acordo de trabalho',
    revisionLine: '{name}, revisão {revision}',
    adviserAbstained:
      'O conselheiro se absteve. A evidência ausente da planta continua visível em Passagem de turno.',
    frozenBound:
      'Limite condicional de saída congelado: 0 a {upper} kg. Os comprovantes reais continuam separados.',
    reviewPhase:
      'A autoridade futura terminou. A remuneração conquistada e a recuperação continuam devidas até serem concedidas.',
    activePhase: 'O acordo limitado atual está ativo. A recusa continua disponível.',
    readyForApproval: 'Os termos atuais estão prontos para a sua aprovação explícita.',
    needsFreshAgreement: 'Estes termos ainda precisam de um novo acordo.',
    nextControls: (p: DestinationParams) =>
      `Próximo passo: controles de ${PT_DESTINATION[p.destination] ?? p.destination}.`,
    adviser: 'Conselheiro',
    openObjection: '{roles}: objeção aberta. Somente quem a levantou pode confirmar a resolução.',
    currentCover: 'Cobertura atual: {role}, {minutes} min restantes.',
    installmentReceipts: 'Comprovantes da parcela acordada: ',
    dispatchReceipts: 'Comprovantes de expedição ao cliente: ',
    teachingOutput: 'Produção didática: ',
    receiptsValue: (p: ReceiptsParams) =>
      `${p.delivered} / ${p.target} kg${p.blocked ? '; evidência bloqueada' : ''}.`,
    agreedDeferral: 'Adiamento acordado: ',
    deferralValue: '{kg} kg, ainda parte do compromisso total.',
    handoffDispatch: 'Expedição deste turno do experimento: ',
    kgValue: '{kg} kg.',
    commitmentRemaining: 'Compromisso total restante com o cliente: ',
    retainedCompensation: 'Compensação paga e mantida: ',
    compensationPaid: 'Compensação paga: ',
    creditsValue: '{amount} créditos ilustrativos.',
    retainedRecovery: 'Recuperação mantida: ',
    recovery: 'Recuperação: ',
    recoveryValue: '{recovered} min concedidos; {owed} min devidos.',
    openControls: 'Abrir os controles do acordo',
    viewPacking: 'Ver o setor de ensaque',
  },
});
