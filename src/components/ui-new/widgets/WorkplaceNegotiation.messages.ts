import { defineMessages } from '../../../i18n';

export const workplaceNegotiationMessages = defineMessages({
  en: {
    adviserHoldExecution:
      'I recommend holding execution until each raiser reviews the remedy. I cannot close their objection.',
    adviserIllegal:
      'I cannot recommend this offer: it breaches protected rest. A unanimous vote cannot waive that boundary.',
    adviserNeedsCorrection:
      'My earlier offer reused consent. It needs an explicit correction before a fresh agreement.',
    adviserCover:
      'I recommend offering cover only to a currently consenting qualified volunteer. A policy yes grants no extra duty.',
    adviserCurrentOffer:
      'I recommend the current {title} offer for review. It keeps extra duty at zero and preserves protected rest.',
    stageOffer: 'Offer',
    stageOfferDetail: '{title}. Earlier willingness grants no new duty.',
    stageChallenge: 'Challenge',
    challengePrevented: 'Boundary protected before any challenge; no objection was resolved.',
    challengeNotRaised: 'No challenge recorded. You can protect the boundary directly.',
    challengeStatus: 'Challenge status: {status}. Packing retains remedy review.',
    stageRevisedTerms: 'Revised terms',
    correctionDone: 'The adviser corrected reused consent. This receipt grants no new permission.',
    correctionPending:
      'Adviser correction still pending. Past agreement cannot supply today’s choices.',
    stageFreshDecisions: 'Fresh decisions',
    freshDecisionsDetail: 'Understanding {understanding}; policy {policy}; optional cover {cover}.',
    stagePhysicalWork: 'Physical work',
    physicalWorkDetail:
      'Dispatch {delivered} / {target} kg; {status}. Changed promises never create delivery.',
    stageRepayment: 'Repayment',
    repaymentDetail: '{paid} credits paid; recovery {delivered} min delivered, {owed} min owed.',
    sectionLabel: 'Thursday negotiation',
    heading: 'Your choices, this shift',
    labelUnderstanding: 'Understanding',
    labelPolicyVote: 'Policy vote',
    labelOptionalCover: 'Optional cover',
    termsOffered:
      'Packing has carried {extra} min of extra duty. This offer permits at most {cover} min, with {rate} credits/min and {recovery} min recovery. These are terms offered, separate from actual payment and recovery.',
    sequenceSummary: 'Offer, choices and receipts',
    sequenceLabel: 'Negotiation sequence',
    adviserProposal: 'Adviser proposal',
    dispatchUncertain:
      'Dispatch remains uncertain until quality-qualified manifests arrive. Supply, inspection and logistics can limit the result. You can challenge my authority in Agreement / Voices; I can raise the same boundary there.',
    shiftFinance:
      'This shift: wages paid {wages} credits; handoff spending {handoff} credits; compensation paid {compensation} credits. Closing cash {cash} credits. Full commitment remaining {remaining} kg.',
    reviewExperiment:
      "This charter's practices remain a valid experiment. Review the actual shortfall and obligations before deciding whether to extend them.",
    proposalLabel: 'Reversible practice proposal',
    proposalHeading: 'A small practice to try',
    proposalScope: '{scope} Keep understanding, the policy vote and optional duty separate.',
    planningOnly:
      'Planning draft only. Local approvals are unfilled; this download grants no live authority.',
    boundariesSummary: 'Boundaries, repayment and rollback',
    stopOn: 'Stop on: {conditions}.',
    download: 'Download planning-only practice proposal',
    // Display words for the simulation's state values; logic keeps the raw values.
    wordOpen: 'open',
    wordResolved: 'resolved',
    wordConfirmed: 'confirmed',
    wordPending: 'pending',
    wordYes: 'yes',
    wordNo: 'no',
    wordNotOffered: 'not offered',
    wordBlocked: 'blocked',
    wordMet: 'met',
    wordShortfall: 'shortfall',
  },
  zh: {
    adviserHoldExecution: '我建议暂缓执行，直至每位提出人复核补救。我不能了结他们的异议。',
    adviserIllegal: '我无法推荐这份报价：它违反受保护休息。即使一致表决也不能豁免该边界。',
    adviserNeedsCorrection: '我先前的报价复用了同意。在达成新协议之前，需要一次明确的更正。',
    adviserCover: '我建议只向当前同意的合格志愿者提供顶岗。政策中的“赞成”不授予额外勤务。',
    adviserCurrentOffer: '我建议复核当前的{title}报价。它将额外勤务保持为零，并保留受保护休息。',
    stageOffer: '报价',
    stageOfferDetail: '{title}。先前的意愿不授予新义务。',
    stageChallenge: '挑战',
    challengePrevented: '边界在任何挑战之前已受保护；没有异议被解决。',
    challengeNotRaised: '没有记录到挑战。你可以直接保护边界。',
    challengeStatus: '挑战状态：{status}。包装保留补救复核。',
    stageRevisedTerms: '修订条款',
    correctionDone: '顾问已更正被复用的同意。本回执不授予任何新许可。',
    correctionPending: '顾问更正仍待完成。过去的协议不能替代今天的选择。',
    stageFreshDecisions: '新决策',
    freshDecisionsDetail: '理解 {understanding}；政策 {policy}；可选顶岗 {cover}。',
    stagePhysicalWork: '实际工作',
    physicalWorkDetail: '发运 {delivered}/{target} kg；{status}。更改承诺绝不会创造交付。',
    stageRepayment: '偿还',
    repaymentDetail: '已付 {paid} 点数；补休已交付 {delivered} 分钟，应补 {owed} 分钟。',
    sectionLabel: '周四协商',
    heading: '你在本班次的选择',
    labelUnderstanding: '理解',
    labelPolicyVote: '政策表决',
    labelOptionalCover: '可选顶岗',
    termsOffered:
      '包装已承担 {extra} 分钟额外勤务。本报价最多允许 {cover} 分钟，报酬 {rate} 点数/分钟，并附带 {recovery} 分钟补休。这些是所提供的条款，与实际支付和补休分开。',
    sequenceSummary: '报价、选择与回执',
    sequenceLabel: '协商顺序',
    adviserProposal: '顾问提案',
    dispatchUncertain:
      '在质量合格的运单到达之前，发运仍不确定。供应、检查与物流都可能限制结果。你可以在“协议/声音”中质疑我的职权；我也可以在那里提出同样的边界。',
    shiftFinance:
      '本班次：已付工资 {wages} 点数；交接支出 {handoff} 点数；已付补偿 {compensation} 点数。期末现金 {cash} 点数。剩余全额承诺 {remaining} kg。',
    reviewExperiment:
      '本章程的实践仍是一项有效的实验。在决定是否延续之前，请先复核实际的缺口与义务。',
    proposalLabel: '可逆的实践提案',
    proposalHeading: '一项可尝试的小实践',
    proposalScope: '{scope}请将理解、政策表决与可选勤务保持独立。',
    planningOnly: '仅为规划草案。本地批准均未填写；此下载不授予任何真实权限。',
    boundariesSummary: '边界、偿还与回滚',
    stopOn: '停止条件：{conditions}。',
    download: '下载仅规划用的实践提案',
    // Display words for the simulation's state values; logic keeps the raw values.
    wordOpen: '未决',
    wordResolved: '已解决',
    wordConfirmed: '已确认',
    wordPending: '待定',
    wordYes: '赞成',
    wordNo: '反对',
    wordNotOffered: '未提供',
    wordBlocked: '受阻',
    wordMet: '达成',
    wordShortfall: '未达目标',
  },
  'pt-BR': {
    adviserHoldExecution:
      'Recomendo suspender a execução até que cada pessoa que levantou uma objeção revise a reparação. Não posso encerrar a objeção dela.',
    adviserIllegal:
      'Não posso recomendar esta oferta: ela viola o descanso protegido. Nem uma votação unânime pode dispensar esse limite.',
    adviserNeedsCorrection:
      'Minha oferta anterior reaproveitou um consentimento. Ela precisa de uma correção explícita antes de um novo acordo.',
    adviserCover:
      'Recomendo oferecer a cobertura apenas a um voluntário qualificado que consinta neste momento. Um sim à política não autoriza nenhum trabalho extra.',
    adviserCurrentOffer:
      'Recomendo a oferta atual ({title}) para revisão. Ela mantém o trabalho extra em zero e preserva o descanso protegido.',
    stageOffer: 'Oferta',
    stageOfferDetail: '{title}. Uma disposição anterior não cria nenhum dever novo.',
    stageChallenge: 'Contestação',
    challengePrevented:
      'Limite protegido antes de qualquer contestação; nenhuma objeção foi resolvida.',
    challengeNotRaised: 'Nenhuma contestação registrada. Você pode proteger o limite diretamente.',
    challengeStatus: 'Situação da contestação: {status}. O Ensaque mantém a revisão da reparação.',
    stageRevisedTerms: 'Termos revisados',
    correctionDone:
      'O conselheiro corrigiu o consentimento reaproveitado. Este comprovante não concede nenhuma nova permissão.',
    correctionPending:
      'Correção do conselheiro ainda pendente. Um acordo passado não pode substituir as escolhas de hoje.',
    stageFreshDecisions: 'Novas decisões',
    freshDecisionsDetail:
      'Entendimento {understanding}; política {policy}; cobertura opcional {cover}.',
    stagePhysicalWork: 'Trabalho físico',
    physicalWorkDetail:
      'Expedição {delivered} / {target} kg; {status}. Promessas alteradas nunca geram entrega.',
    stageRepayment: 'Ressarcimento',
    repaymentDetail:
      '{paid} créditos pagos; recuperação: {delivered} min concedidos, {owed} min devidos.',
    sectionLabel: 'Negociação de quinta-feira',
    heading: 'Suas escolhas neste turno',
    labelUnderstanding: 'Entendimento',
    labelPolicyVote: 'Votação da política',
    labelOptionalCover: 'Cobertura opcional',
    termsOffered:
      'O Ensaque já assumiu {extra} min de trabalho extra. Esta oferta permite no máximo {cover} min, com {rate} créditos/min e {recovery} min de recuperação. Estes são os termos oferecidos, separados do pagamento e da recuperação efetivos.',
    sequenceSummary: 'Oferta, escolhas e comprovantes',
    sequenceLabel: 'Sequência da negociação',
    adviserProposal: 'Proposta do conselheiro',
    dispatchUncertain:
      'A expedição continua incerta até que cheguem romaneios aprovados pela qualidade. Abastecimento, inspeção e logística podem limitar o resultado. Você pode contestar minha autoridade em Acordo / Vozes; eu posso levantar o mesmo limite lá.',
    shiftFinance:
      'Neste turno: remuneração paga {wages} créditos; gastos da passagem de turno {handoff} créditos; compensação paga {compensation} créditos. Caixa de fechamento {cash} créditos. Compromisso total restante {remaining} kg.',
    reviewExperiment:
      'As práticas deste estatuto continuam sendo um experimento válido. Revise o déficit real e as obrigações antes de decidir se vai estendê-las.',
    proposalLabel: 'Proposta de prática reversível',
    proposalHeading: 'Uma pequena prática para experimentar',
    proposalScope:
      '{scope} Mantenha separados o entendimento, a votação da política e o trabalho opcional.',
    planningOnly:
      'Apenas rascunho de planejamento. As aprovações locais não estão preenchidas; este download não concede nenhuma autoridade efetiva.',
    boundariesSummary: 'Limites, ressarcimento e reversão',
    stopOn: 'Parar se: {conditions}.',
    download: 'Baixar a proposta de prática (apenas planejamento)',
    wordOpen: 'aberta',
    wordResolved: 'resolvida',
    wordConfirmed: 'confirmado',
    wordPending: 'pendente',
    wordYes: 'sim',
    wordNo: 'não',
    wordNotOffered: 'não oferecida',
    wordBlocked: 'bloqueada',
    wordMet: 'cumprida',
    wordShortfall: 'abaixo do compromisso',
  },
});
