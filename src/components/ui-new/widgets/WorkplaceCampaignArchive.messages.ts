import { defineMessages } from '../../../i18n';

const PT_PROFILE: Record<string, string> = {
  'toe-dip': 'liderado pela coordenação',
  team: 'acordo da equipe',
  cooperative: 'governança dos cooperados',
};
const PT_DELIVERY: Record<string, string> = {
  met: 'cumprida',
  blocked: 'bloqueada',
  shortfall: 'abaixo do compromisso',
  pending: 'pendente',
};
const PT_AGREEMENT: Record<string, string> = {
  honoured: 'honrado',
  incomplete: 'incompleto',
  pending: 'pendente',
};

/* Why a follow-on order stopped earning, by its receipt evidence. */
const EN_EVIDENCE: Record<string, string> = {
  'quality-failed': 'a load failed its quality threshold',
  stale: 'its dispatch record no longer matches the plant, for example after a reset',
  missing: 'the order was cancelled or is no longer on the books',
};
const PT_EVIDENCE: Record<string, string> = {
  'quality-failed': 'uma carga não atingiu o limite de qualidade',
  stale: 'o registro de expedição não confere mais com a fábrica, por exemplo após um reinício',
  missing: 'o pedido foi cancelado ou não consta mais da carteira',
};

/*
 * zh mirrors of the pt maps above (WorkplaceLab / workplaceCampaign enum
 * anchors); unknown values fall back to the raw id.
 */
const ZH_PROFILE: Record<string, string> = {
  'toe-dip': '协调主导',
  team: '团队协议',
  cooperative: '成员治理',
};
const ZH_DELIVERY: Record<string, string> = {
  met: '达成',
  blocked: '受阻',
  shortfall: '未达目标',
  pending: '待定',
};
const ZH_AGREEMENT: Record<string, string> = {
  honoured: '已履行',
  incomplete: '未完成',
  pending: '待定',
};
const ZH_EVIDENCE: Record<string, string> = {
  'quality-failed': '一车货物未通过其质量阈值',
  stale: '其发运记录不再与工厂相符，例如在重置之后',
  missing: '该订单已被取消，或已不在订单簿上',
};

interface ReviewSummaryParams {
  profile: string;
  seed: string;
  delivery: string;
  agreement: string;
}

/** Status ids stay verbatim in English, which is what the review always printed. */
export const workplaceCampaignArchiveMessages = defineMessages({
  en: {
    reviewSummary: (p: ReviewSummaryParams) =>
      `${p.profile}, seed ${p.seed}: delivery ${p.delivery}, agreement ${p.agreement}`,
    dispatched: 'Dispatched {delivered} / {target} kg. Full commitment remaining: {remaining} kg.',
    accounts:
      'Illustrative credits: closing cash {cash}; wages paid {wages}; compensation paid {compensation}.',
    memberLine:
      '{role}: extra duty {extra} min; rest {rest} min; recovery delivered {recovery} min; recovery owed {owed} min.',
    download: 'Download this redacted review',
    regionLabel: 'Completed workplace campaigns',
    freshHeading: 'Keep the review, try another charter',
    freshIntro:
      'Archive these three shifts before opening a fresh exercise. Earned pay, delivered recovery and shortfalls stay in the review. New terms need new role understanding, ballots and individual consent.',
    freshCredits:
      'Each exercise opens with 400 illustrative credits. Mill inventory, customer commitments and physical production continue unchanged.',
    archiveButton: 'Archive review and open a fresh exercise',
    blockedReplay: 'Finish or forget the matched replay first.',
    blockedObligations: 'Deliver owed recovery and settle open objections and reserved pay first.',
    retainedReviews: 'Retained campaign reviews ({count})',
    retainedNote:
      'The last six reviews stay on this browser, with private preferences redacted. Download any review you want to keep longer. A historical review cannot restart an agreement.',
    leaveButton: 'Leave this season',
    leaveKept:
      'Leaving keeps what was earned: {kg} kg delivered to {customer}, {pay} credits in pay and cover, and {recovery} minutes of recovery delivered. It is kept as a season left early, not a completed one, and customer and next-programme choices open again.',
    leaveWaitActive: 'Leaving waits until this shift is stopped or ends, so its pay settles first.',
    leaveWaitObligations: 'Leaving waits until nothing is owed. {reasons}',
    leftFeedback:
      'Season left early at shift {shift} of 3. Its pay, recovery and receipts are kept under Seasons left early.',
    leftSeasons: 'Seasons left early ({count})',
    leftNote:
      'Each was left before its final review. It keeps the pay, recovery and receipts it earned and does not count as a completed season.',
    leftSummary: 'Left early at shift {shift} of 3, seed {seed}',
    followOnStopped: (p: { customer: string; evidence: string }) =>
      `Credit from ${p.customer} has stopped: ${EN_EVIDENCE[p.evidence] ?? EN_EVIDENCE.missing}.`,
    followOnReplacement: 'The next shift credits dispatch to {customer} in its place.',
    followOnNoReplacement:
      'No other open order can take its place yet. The next shift links one if the mill has one open by then; until then, further dispatch earns the cooperative nothing.',
    followOnLastShift: 'This is the season’s last shift, so nothing replaces it.',
  },
  zh: {
    reviewSummary: (p: ReviewSummaryParams) =>
      `${ZH_PROFILE[p.profile] ?? p.profile}，种子 ${p.seed}：交付${
        ZH_DELIVERY[p.delivery] ?? p.delivery
      }，协议${ZH_AGREEMENT[p.agreement] ?? p.agreement}`,
    dispatched: '已发运 {delivered}/{target} kg。剩余全额承诺：{remaining} kg。',
    accounts: '示意点数：期末现金 {cash}；已付工资 {wages}；已付补偿 {compensation}。',
    memberLine:
      '{role}：额外勤务 {extra} 分钟；休息 {rest} 分钟；已交付补休 {recovery} 分钟；应补休息 {owed} 分钟。',
    download: '下载这份脱敏回顾',
    regionLabel: '已完成的加工季',
    freshHeading: '保留回顾，尝试另一份章程',
    freshIntro:
      '在开启新练习之前，请先归档这三个班次。已挣报酬、已交付补休与缺口留在回顾中。新条款需要新的角色理解、表决与个人同意。',
    freshCredits: '每次练习以 400 示试点数开启。磨坊库存、客户承诺与实际生产保持不变。',
    archiveButton: '归档回顾并开启新练习',
    blockedReplay: '请先完成或丢弃配对回放。',
    blockedObligations: '请先交付应补休息，并了结未决异议、结清预留工资。',
    retainedReviews: '保留的加工季回顾（{count}）',
    retainedNote:
      '最近六份回顾保存在本浏览器中，私人偏好已脱敏。请下载任何你想更长久保留的回顾。历史回顾不能重启协议。',
    leaveButton: '离开本加工季',
    leaveKept:
      '离开会保留已挣得的内容：向 {customer} 交付 {kg} kg，报酬与顶岗 {pay} 点数，以及已交付的 {recovery} 分钟补休。它会被记录为提前离开的加工季，而非已完成的加工季，客户与下一加工季的选择会重新开放。',
    leaveWaitActive: '离开需等待本班次停止或结束，以便先结清其报酬。',
    leaveWaitObligations: '离开需等待没有任何应付内容。{reasons}',
    leftFeedback:
      '加工季在第 {shift}/3 个班次提前离开。其报酬、补休与回执保留在“提前离开的加工季”下。',
    leftSeasons: '提前离开的加工季（{count}）',
    leftNote: '每一个都在最终回顾之前离开。它保留已挣得的报酬、补休与回执，不计为已完成的加工季。',
    leftSummary: '在第 {shift}/3 个班次提前离开，种子 {seed}',
    followOnStopped: (p: { customer: string; evidence: string }) =>
      `来自 ${p.customer} 的计入已停止：${ZH_EVIDENCE[p.evidence] ?? ZH_EVIDENCE.missing}。`,
    followOnReplacement: '下一个班次将其发运计入 {customer} 作为替代。',
    followOnNoReplacement:
      '尚无其他未结订单可以替代。如果届时磨坊有未结订单，下一个班次会关联一张；在那之前，继续发运不会给合作社带来任何收益。',
    followOnLastShift: '这是本加工季的最后一个班次，因此没有任何替代。',
  },
  'pt-BR': {
    reviewSummary: (p: ReviewSummaryParams) =>
      `${PT_PROFILE[p.profile] ?? p.profile}, semente ${p.seed}: entrega ${
        PT_DELIVERY[p.delivery] ?? p.delivery
      }, acordo ${PT_AGREEMENT[p.agreement] ?? p.agreement}`,
    dispatched: 'Expedido: {delivered} / {target} kg. Compromisso total restante: {remaining} kg.',
    accounts:
      'Créditos ilustrativos: caixa de fechamento {cash}; remuneração paga {wages}; compensação paga {compensation}.',
    memberLine:
      '{role}: serviço extra {extra} min; descanso {rest} min; recuperação concedida {recovery} min; recuperação devida {owed} min.',
    download: 'Baixar esta revisão com dados ocultados',
    regionLabel: 'Campanhas de trabalho concluídas',
    freshHeading: 'Guarde a revisão, experimente outro estatuto',
    freshIntro:
      'Arquive estes três turnos antes de abrir um novo exercício. A remuneração conquistada, a recuperação concedida e os déficits permanecem na revisão. Novos termos exigem novo entendimento das funções, novas votações e consentimento individual.',
    freshCredits:
      'Cada exercício começa com 400 créditos ilustrativos. O estoque do moinho, os compromissos com clientes e a produção física continuam inalterados.',
    archiveButton: 'Arquivar a revisão e abrir um novo exercício',
    blockedReplay: 'Primeiro conclua ou descarte a reprodução pareada.',
    blockedObligations:
      'Primeiro conceda a recuperação devida e resolva as objeções abertas e a remuneração reservada.',
    retainedReviews: 'Revisões de campanha guardadas ({count})',
    retainedNote:
      'As seis revisões mais recentes ficam neste navegador, com as preferências privadas ocultadas. Baixe qualquer revisão que quiser guardar por mais tempo. Uma revisão histórica não pode reiniciar um acordo.',
    leaveButton: 'Sair desta temporada',
    leaveKept:
      'Sair mantém o que foi conquistado: {kg} kg entregues a {customer}, {pay} créditos de remuneração e cobertura e {recovery} minutos de recuperação concedida. Ela fica guardada como temporada encerrada antes do fim, não como concluída, e as escolhas de cliente e do próximo programa voltam a ficar disponíveis.',
    leaveWaitActive:
      'Para sair, espere este turno ser parado ou terminar, para que a remuneração seja acertada antes.',
    leaveWaitObligations: 'Para sair, nada pode estar devido. {reasons}',
    leftFeedback:
      'Temporada encerrada antes do fim no turno {shift} de 3. A remuneração, a recuperação e os comprovantes ficam em Temporadas encerradas antes do fim.',
    leftSeasons: 'Temporadas encerradas antes do fim ({count})',
    leftNote:
      'Cada uma foi encerrada antes da revisão final. Ela mantém a remuneração, a recuperação e os comprovantes conquistados e não conta como temporada concluída.',
    leftSummary: 'Encerrada antes do fim no turno {shift} de 3, semente {seed}',
    followOnStopped: (p: { customer: string; evidence: string }) =>
      `O crédito de ${p.customer} foi interrompido: ${PT_EVIDENCE[p.evidence] ?? PT_EVIDENCE.missing}.`,
    followOnReplacement: 'O próximo turno credita a expedição para {customer} no lugar dele.',
    followOnNoReplacement:
      'Ainda não há outro pedido aberto para substituí-lo. O próximo turno vincula um se o moinho tiver algum aberto até lá; até então, a expedição adicional não rende nada à cooperativa.',
    followOnLastShift: 'Este é o último turno da temporada, então nada o substitui.',
  },
});
