import { defineMessages } from '../i18n';

/* What held a grade back, as a noun phrase inside the headline. */
const EN_CAUSE: Record<string, string> = {
  quality: 'a quality failure',
  unsafe: 'an unresolved incident',
  late: 'a late delivery',
  risks: 'risks carried into the next shift',
  margin: 'costs above revenue',
  kg: 'too little dispatched for the time on commitments',
  no_dispatch: 'having no deliveries',
};
const PT_CAUSE: Record<string, string> = {
  quality: 'uma falha de qualidade',
  unsafe: 'uma ocorrência não resolvida',
  late: 'uma entrega atrasada',
  risks: 'o risco transferido para o próximo turno',
  margin: 'o custo acima da receita',
  kg: 'a pouca expedição para o tempo com compromissos',
  no_dispatch: 'a falta de entregas',
};
const PT_SHIFT: Record<string, string> = { morning: 'Manhã', afternoon: 'Tarde', night: 'Noite' };
const ZH_CAUSE: Record<string, string> = {
  quality: '质量失败',
  unsafe: '未解决的事件',
  late: '交付迟延',
  risks: '结转至下一班次的风险',
  margin: '成本高于收入',
  kg: '承诺期内发运量过少',
  no_dispatch: '没有任何交付',
};
const ZH_SHIFT: Record<string, string> = { morning: '清晨', afternoon: '下午', night: '夜间' };
/* How far an incident still open at close was handled. */
const EN_OPEN_PHASE: Record<string, string> = {
  raised: 'not yet acknowledged',
  acknowledged: 'acknowledged, not yet mitigated',
  mitigated: 'mitigated, not yet resolved',
};
const PT_OPEN_PHASE: Record<string, string> = {
  raised: 'sem reconhecimento',
  acknowledged: 'reconhecida, ainda não mitigada',
  mitigated: 'mitigada, ainda não resolvida',
};
const ZH_OPEN_PHASE: Record<string, string> = {
  raised: '尚未确认',
  acknowledged: '已确认，尚未缓解',
  mitigated: '已缓解，尚未解决',
};
interface OpenIncidentParams {
  title: string;
  detail: string;
  phase: string;
}

interface LateGapParams {
  next: string;
  count: number;
  countText: string;
  allowed: number;
  allowedText: string;
}
interface MixedIssueGapParams {
  next: string;
  allowed: number;
  allowedText: string;
  risks: number;
  riskText: string;
  late: number;
  lateText: string;
  labels: string;
}

export const shiftReviewMessages = defineMessages({
  en: {
    noCommitment: 'No customer commitments this shift.',
    noCommitmentIncident:
      'No customer commitments this shift, but an unresolved incident held it back.',
    openIncidentReason: (p: OpenIncidentParams) =>
      `Still open at close, ${EN_OPEN_PHASE[p.phase] ?? EN_OPEN_PHASE.raised}: ${p.title}. ${p.detail}`,
    openIncidentTitleReason: 'Still open at close: {title}.',
    dispatchReason: '{kg} kg dispatched; net contribution {margin} after recorded costs.',
    riskReason: (p: { count: number; countText: string }) =>
      p.count === 1
        ? `${p.countText} material or deadline risk carried into the next shift.`
        : `${p.countText} material or deadline risks carried into the next shift.`,
    qualityFailureReason:
      '{kg} kg failed the commitment quality threshold; quality failure caps the grade at F.',
    unsafeReason: 'Unresolved high-severity controls cap the grade at D: {titles}.',
    shiftName: (p: { shift: string }) => p.shift.charAt(0).toUpperCase() + p.shift.slice(1),
    durationHours: '{hours}h {minutes}m',
    durationMinutes: '{minutes}m',
    headlineGood: '{kg} kg shipped with a nonnegative contribution and carry-over risk in hand.',
    headlineHeldBack: (p: { kg: string; cause: string }) =>
      `${p.kg} kg shipped; ${EN_CAUSE[p.cause] ?? EN_CAUSE.risks} held the grade back.`,
    gradeLabel: 'Grade {grade}',
    gapQuality: '{next} needs every load to meet the recipe quality target.',
    gapUnsafe: '{next} needs {titles} resolved before the shift closes.',
    gapLate: (p: LateGapParams) =>
      p.allowed === 0
        ? `${p.next} needs every delivery on time; ${p.countText} arrived late.`
        : `${p.next} allows at most ${p.allowedText} late ${p.allowed === 1 ? 'delivery' : 'deliveries'}; ${p.countText} arrived late.`,
    gapMixedIssues: (p: MixedIssueGapParams) =>
      `${p.next} allows ${p.allowedText} ${p.allowed === 1 ? 'issue' : 'issues'} across open risks and late deliveries; this shift had ${p.riskText} open ${p.risks === 1 ? 'risk' : 'risks'} (${p.labels}) and ${p.lateText} late ${p.late === 1 ? 'delivery' : 'deliveries'}.`,
    gapRisks: (p: {
      next: string;
      allowed: number;
      allowedText: string;
      count: number;
      countText: string;
      labels: string;
    }) =>
      p.allowed === 0
        ? `${p.next} needs no open risks when the shift closes; you carried ${p.countText}: ${p.labels}.`
        : `${p.next} needs at most ${p.allowedText} open risk${p.allowed === 1 ? '' : 's'} when the shift closes; you carried ${p.countText}: ${p.labels}.`,
    gapMargin: '{next} needs a nonnegative net contribution; costs exceeded revenue by {amount}.',
    gapKg: '{next} needs {target} kg for {duration} on commitments; you were {short} kg short.',
    gapNoDispatch: '{next} needs at least one delivery against a commitment.',
    tryNoCommitment:
      'Try next: accept the next delivery programme in Overview, so the shift has a customer to serve.',
    tryQuality:
      'Try next: hold loading until QC releases the batch, and check the recipe quality target in Overview before a truck leaves.',
    tryUnsafe:
      'Try next: acknowledge and mitigate {titles} in Overview as soon as it is raised, then resolve it before the shift closes.',
    tryLate:
      'Try next: serve the earliest-due customer first; the line starts the next order while a truck loads, so keep the recipe feed stocked.',
    tryRisk: 'Try next: clear "{risk}" before the shift closes.',
    tryMargin:
      'Try next: keep an order running; an idle line, open work orders and a docked truck held at the bay still cost money.',
    tryKg:
      'Try next: keep the recipe feed stocked and a shipping truck loading, so finished goods leave while the order is open.',
    outcomeOnTime: '{customer}: {shipped} of {required} kg, delivered on time.',
    outcomeLate: '{customer}: {shipped} of {required} kg, delivered {duration} late.',
    outcomeOverdue: '{customer}: {shipped} of {required} kg so far, {duration} overdue.',
    outcomeOpen: '{customer}: {shipped} of {required} kg so far, due in {duration}.',
    outcomeQualityFailure: '{kg} kg failed quality.',
  },
  zh: {
    noCommitment: '本班次没有客户承诺。',
    noCommitmentIncident: '本班次没有客户承诺，但未解决事件拖累了表现。',
    openIncidentReason: (p: OpenIncidentParams) =>
      `结班时仍未解决，${ZH_OPEN_PHASE[p.phase] ?? ZH_OPEN_PHASE.raised}：${p.title}。${p.detail}`,
    openIncidentTitleReason: '结班时仍未解决：{title}。',
    dispatchReason: '发运 {kg} kg；扣除已记录成本后净贡献 {margin}。',
    riskReason: (p: { count: number; countText: string }) =>
      `${p.countText} 项物料或期限风险结转至下一班次。`,
    qualityFailureReason: '{kg} kg 未达承诺质量阈值；质量失败使等级封顶为 F。',
    unsafeReason: '未解决的高严重度控制使等级封顶为 D：{titles}。',
    shiftName: (p: { shift: string }) => ZH_SHIFT[p.shift] ?? p.shift,
    durationHours: '{hours} 小时 {minutes} 分钟',
    durationMinutes: '{minutes} 分钟',
    headlineGood: '发运 {kg} kg，净贡献非负，结转风险可控。',
    headlineHeldBack: (p: { kg: string; cause: string }) =>
      `${p.kg} kg 已发运；${ZH_CAUSE[p.cause] ?? ZH_CAUSE.risks}拖累了等级。`,
    gradeLabel: '等级 {grade}',
    gapQuality: '{next} 要求每一车都达到配方质量目标。',
    gapUnsafe: '{next} 要求在结班前解决{titles}。',
    gapLate: (p: LateGapParams) =>
      p.allowed === 0
        ? `${p.next} 要求全部交付准时；实际迟交 ${p.countText} 次。`
        : `${p.next} 最多允许 ${p.allowedText} 次迟交；实际迟交 ${p.countText} 次。`,
    gapMixedIssues: (p: MixedIssueGapParams) =>
      `${p.next} 允许未结风险与迟交合计不超过 ${p.allowedText} 项；本班次有 ${p.riskText} 项未结风险（${p.labels}）和 ${p.lateText} 次迟交。`,
    gapRisks: (p: {
      next: string;
      allowed: number;
      allowedText: string;
      count: number;
      countText: string;
      labels: string;
    }) =>
      p.allowed === 0
        ? `${p.next} 要求结班时没有未结风险；你结转了 ${p.countText} 项：${p.labels}。`
        : `${p.next} 要求结班时未结风险不超过 ${p.allowedText} 项；你结转了 ${p.countText} 项：${p.labels}。`,
    gapMargin: '{next} 要求净贡献非负；成本超出收入 {amount}。',
    gapKg: '{next} 要求在承诺期（{duration}）内发运 {target} kg；实际差 {short} kg。',
    gapNoDispatch: '{next} 要求至少有一次针对承诺的交付。',
    tryNoCommitment: '下一步尝试：在概览中接受下一个交付计划，让班次有客户可服务。',
    tryQuality: '下一步尝试：在质检放行该批次前暂缓装载，并在卡车出发前于概览核对配方质量目标。',
    tryUnsafe: '下一步尝试：{titles}一旦触发，立即在概览中确认并缓解，并在结班前解决。',
    tryLate:
      '下一步尝试：优先服务期限最早的客户；卡车装载时产线已开始下一个订单，因此要保持配方进料充足。',
    tryRisk: '下一步尝试：在结班前消除“{risk}”。',
    tryMargin: '下一步尝试：保持订单运转；产线空闲、未结工单和滞留装卸区的卡车都会持续产生费用。',
    tryKg: '下一步尝试：保持配方进料充足，并让发运卡车持续装载，使成品在订单未结期间不断离厂。',
    outcomeOnTime: '{customer}：{shipped}/{required} kg，按时交付。',
    outcomeLate: '{customer}：{shipped}/{required} kg，迟交 {duration}。',
    outcomeOverdue: '{customer}：目前已发运 {shipped}/{required} kg，已逾期 {duration}。',
    outcomeOpen: '{customer}：目前已发运 {shipped}/{required} kg，距期限还有 {duration}。',
    outcomeQualityFailure: '{kg} kg 质量不合格。',
  },
  'pt-BR': {
    noCommitment: 'Nenhum compromisso com clientes neste turno.',
    noCommitmentIncident:
      'Nenhum compromisso com clientes neste turno, mas uma ocorrência não resolvida o prejudicou.',
    openIncidentReason: (p: OpenIncidentParams) =>
      `Ainda aberta no fechamento, ${PT_OPEN_PHASE[p.phase] ?? PT_OPEN_PHASE.raised}: ${p.title}. ${p.detail}`,
    openIncidentTitleReason: 'Ainda aberta no fechamento: {title}.',
    dispatchReason:
      '{kg} kg expedidos; contribuição líquida de {margin} após os custos registrados.',
    riskReason: (p: { count: number; countText: string }) =>
      p.count === 1
        ? `${p.countText} risco de material ou de prazo transferido para o próximo turno.`
        : `${p.countText} riscos de material ou de prazo transferidos para o próximo turno.`,
    qualityFailureReason:
      '{kg} kg não atingiram o limite de qualidade do compromisso; a falha de qualidade limita a nota a F.',
    unsafeReason: 'Controles de alta severidade não resolvidos limitam a nota a D: {titles}.',
    shiftName: (p: { shift: string }) => PT_SHIFT[p.shift] ?? p.shift,
    durationHours: '{hours}h {minutes}min',
    durationMinutes: '{minutes}min',
    headlineGood:
      '{kg} kg expedidos com contribuição não negativa e risco transferido sob controle.',
    headlineHeldBack: (p: { kg: string; cause: string }) =>
      `${p.kg} kg expedidos; ${PT_CAUSE[p.cause] ?? PT_CAUSE.risks} impediu uma nota melhor.`,
    gradeLabel: 'Nota {grade}',
    gapQuality: '{next} exige que toda carga atinja a meta de qualidade da receita.',
    gapUnsafe: '{next} exige resolver {titles} antes de o turno fechar.',
    gapLate: (p: LateGapParams) =>
      p.allowed === 0
        ? p.count === 1
          ? `${p.next} exige todas as entregas no prazo; ${p.countText} chegou atrasada.`
          : `${p.next} exige todas as entregas no prazo; ${p.countText} chegaram atrasadas.`
        : `${p.next} permite no máximo ${p.allowedText} ${p.allowed === 1 ? 'entrega atrasada' : 'entregas atrasadas'}; ${p.countText} ${p.count === 1 ? 'chegou atrasada' : 'chegaram atrasadas'}.`,
    gapMixedIssues: (p: MixedIssueGapParams) =>
      `${p.next} permite ${p.allowedText} ${p.allowed === 1 ? 'ocorrência' : 'ocorrências'} no total entre riscos abertos e entregas atrasadas; este turno teve ${p.riskText} ${p.risks === 1 ? 'risco aberto' : 'riscos abertos'} (${p.labels}) e ${p.lateText} ${p.late === 1 ? 'entrega atrasada' : 'entregas atrasadas'}.`,
    gapRisks: (p: {
      next: string;
      allowed: number;
      allowedText: string;
      count: number;
      countText: string;
      labels: string;
    }) =>
      p.allowed === 0
        ? `${p.next} exige nenhum risco aberto quando o turno fecha; você levou ${p.countText}: ${p.labels}.`
        : `${p.next} exige no máximo ${p.allowedText} ${p.allowed === 1 ? 'risco aberto' : 'riscos abertos'} quando o turno fecha; você levou ${p.countText}: ${p.labels}.`,
    gapMargin:
      '{next} exige contribuição líquida não negativa; os custos superaram a receita em {amount}.',
    gapKg: '{next} exige {target} kg em {duration} com compromissos; faltaram {short} kg.',
    gapNoDispatch: '{next} exige pelo menos uma entrega para um compromisso.',
    tryNoCommitment:
      'Tente a seguir: aceite o próximo programa de entregas na Visão geral, para que o turno tenha um cliente a atender.',
    tryQuality:
      'Tente a seguir: segure o carregamento até o CQ liberar o lote e confira a meta de qualidade da receita na Visão geral antes de o caminhão sair.',
    tryUnsafe:
      'Tente a seguir: reconheça e mitigue {titles} na Visão geral assim que surgir, e resolva antes de o turno fechar.',
    tryLate:
      'Tente a seguir: atenda primeiro o cliente com o prazo mais próximo; a linha começa o próximo pedido enquanto o caminhão carrega, então mantenha a alimentação da receita abastecida.',
    tryRisk: 'Tente a seguir: resolva "{risk}" antes de o turno fechar.',
    tryMargin:
      'Tente a seguir: mantenha um pedido em andamento; linha parada, ordens de serviço abertas e caminhão retido na doca continuam custando dinheiro.',
    tryKg:
      'Tente a seguir: mantenha a alimentação da receita abastecida e um caminhão de expedição carregando, para que os produtos acabados saiam enquanto o pedido está aberto.',
    outcomeOnTime: '{customer}: {shipped} de {required} kg, entregue no prazo.',
    outcomeLate: '{customer}: {shipped} de {required} kg, entregue com {duration} de atraso.',
    outcomeOverdue: '{customer}: {shipped} de {required} kg até agora, atrasado em {duration}.',
    outcomeOpen: '{customer}: {shipped} de {required} kg até agora, prazo em {duration}.',
    outcomeQualityFailure: '{kg} kg reprovados na qualidade.',
  },
});
