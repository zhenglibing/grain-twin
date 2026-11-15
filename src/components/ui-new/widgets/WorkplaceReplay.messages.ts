import { defineMessages } from '../../../i18n';

/** pt-BR label for a logic value; an unknown value falls back to itself. */
const pick = (labels: Record<string, string>, value: string): string => labels[value] ?? value;

type Value = { value: string };

interface DispatchParams {
  dispatched: string;
  remaining: string;
  target: string;
  deferred: string;
  shiftCount: number;
  shifts: string;
  elapsed: string;
  agreement: string;
}

interface ConservationParams {
  material: string;
  genealogy: string;
  manifestCount: number;
  manifests: string;
}

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

const ZH_PROFILE: Record<string, string> = {
  'toe-dip': '协调主导',
  team: '团队协议',
  cooperative: '成员治理',
};

const ZH_AUTONOMY: Record<string, string> = {
  directed: '指派',
  individual: '个人',
  team: '团队',
};

const ZH_GOVERNANCE: Record<string, string> = {
  consultative: '咨询式',
  'team-consent': '团队同意',
  'member-vote': '成员表决',
};

const ZH_AI_AUTHORITY: Record<string, string> = {
  advice: '仅建议',
  bounded: '有界执行',
};

export const workplaceReplayMessages = defineMessages({
  en: {
    // Logic values shown as labels. English returns the value itself.
    sectionLabel: (p: { section: string }) => p.section,
    profileLabel: (p: { profile: string }) => p.profile,
    autonomyLabel: (p: Value) => p.value,
    governanceLabel: (p: Value) => p.value,
    aiAuthorityLabel: (p: Value) => p.value,

    // Feedback
    recordedLocally: 'Replay state recorded locally.',
    noChange: 'No change.',
    reportDownloaded: 'Redacted run report downloaded locally. Plant checkpoint stays in memory.',

    // Replay
    title: 'Matched plant replay',
    intro:
      'Pause the plant, capture the customer order and stock, choose a charter, agree fresh terms, play the actual plant, then retain the review and compare. Each charter starts from the same in-memory checkpoint. Rewinding replaces current local plant progress.',
    pauseForCapture: 'Pause plant for capture',
    capturePaused: 'Capture paused plant',
    startGuided: 'Start guided plant replay',
    captureRequires:
      'Capture requires a paused, safe local plant and an idle or untouched minute-zero discussion. External SCADA control, safety holds and owed recovery block rewind. Checkpoints disappear on reload and cannot be exported.',
    checkpointLine:
      'Checkpoint: {customer}, {remaining} kg remaining; source stock {source} kg. Day {day}, hour {hour}; seed {seed}. Faults: {faults}.',
    none: 'none',
    replayCharter: 'Replay {profile} charter',
    retainReview: 'Retain actual run review',
    forget: 'Forget replay checkpoint and reports',
    replayNote:
      'Replays remain paused for agreement and pause automatically at review. After an early stop, explicitly resume the plant clock to deliver owed recovery before retaining the review. An eligible review is retained before a new charter rewinds. Consent, votes and understanding never carry over.',
    noCheckpoint: 'No checkpoint yet. Capture a paused plant to compare actual runs.',
    unequalHorizons:
      'Unequal horizons: elapsed time, agreement time or shifts differ. Dispatch totals alone cannot establish a better charter.',
    discussEvidence: 'Discuss the actual replay evidence',
    learningReview: 'Replay learning review',
    hearRoles:
      'Hear Packing, Quality, Maintenance and Coordinator before choosing the next trial. Use the actual results and member receipts below; a shared starting point alone cannot establish a charter’s causal effect.',

    // Runs
    runLabel: '{profile} actual run',
    charterLine:
      'Closing charter: {autonomy} work choice; {governance} governance; {ai} AI authority. Practices: {practices}.',
    shiftPlans: 'Shift plans: {plans}.',
    shiftPlanItem: 'shift {number}, {title}',
    dispatchHeading: 'Actual dispatch and horizon',
    dispatchLine: (p: DispatchParams) =>
      `${p.dispatched} kg dispatched; ${p.remaining} kg full commitment remaining. Agreed target ${p.target} kg; deferred ${p.deferred} kg. ${p.shifts} ${p.shiftCount === 1 ? 'shift' : 'shifts'}; ${p.elapsed} elapsed minutes; ${p.agreement} agreement minutes.`,
    plantAccounts: 'Plant accounts, pounds sterling',
    revenueLine: 'Revenue £{revenue}; costs £{costs}.',
    workplaceCredits: 'Illustrative workplace credits',
    creditsLine: 'Wages {wages}; compensation {compensation}; improvements {improvements}.',
    conservationHeading: 'Conservation and genealogy',
    conservationLine: (p: ConservationParams) =>
      `Material error ${p.material} kg; genealogy error ${p.genealogy} kg; ${p.manifests} dispatch ${p.manifestCount === 1 ? 'manifest' : 'manifests'}.`,
    conductLine:
      'Refusals respected {refusals}; promises kept {promises}. Cumulative objections resolved {resolved} of {raised}. Current-shift open objections {open}.',
    burdensSummary: 'Member burdens and public receipts',
    memberLine:
      '{role}: extra {extra} min; rest {rest} min; recovery delivered {recovery} min, owed {owed} min; earned {earned}, compensation {compensation} credits; refusal {refusal}.',
    refusalRespected: 'respected',
    refusalNotRecorded: 'not recorded as respected',
    shiftNumber: 'Shift {number}',
    noReceipts: 'No public receipts retained for this shift.',
    eventLine: 'Minute {minute}, {actor}: {detail}',
    downloadReport: 'Download redacted replay report',
    closingNote:
      'Starting conditions match; frame-driven vehicle trajectories can differ between runs. Compare elapsed and agreement time alongside dispatch. These records describe local simulation conduct. No winner, trust or wellbeing score is inferred.',

    // Guide
    guideLabel: 'Guided replay',
    guideHeading: 'Guided replay: {section}',
    guideShift:
      'Start with protected rest, shared operating information and remedy. Keep the customer commitment or negotiate an installment: deferral leaves the full contract outstanding. Select a real plan below.',
    guidePractices:
      'Toe-dip starts with rest, information and remedy. Team adds shared decisions; cooperative adds member governance. Optional budget practice enables the shared handoff improvement. Use the actual practice controls below.',
    guideAgreement:
      'Each role answers its own understanding checks and casts its own vote. Optional cover needs separate revocable consent. Quality may refuse without explaining. Resolve objections through their original author, then explicitly approve the agreement below.',
    guideReview:
      'Check actual dispatch, protected rest, earned compensation and delivered recovery. Finish owed recovery before retaining this run. Return to Experiment to replay team or cooperative from the same checkpoint with fresh agreement.',
    planLine:
      '{title}: {pacing}% pacing; {budget} illustrative credits; {rest} min protected rest.',
    planCover:
      ' Up to {cover} min voluntary cover at {rate} credits/min and {recovery} min recovery, then protected pacing resumes.',
    activeNote:
      'The agreement is active. Use the plant clock controls to resume actual play; this guide never advances time or submits decisions.',
    nextSection: 'Next guide section',
    endGuide: 'End guide',
    optionalNavigation:
      'Optional navigation only. No votes, checks, consent or approval are supplied by the guide.',

    // Resume
    resume: 'Resume agreed replay at standard pace (1x)',
  },
  zh: {
    // Logic values shown as labels. zh maps known ids; unknown values fall back to themselves.
    sectionLabel: (p: { section: string }) => pick(ZH_SECTION, p.section),
    profileLabel: (p: { profile: string }) => pick(ZH_PROFILE, p.profile),
    autonomyLabel: (p: Value) => pick(ZH_AUTONOMY, p.value),
    governanceLabel: (p: Value) => pick(ZH_GOVERNANCE, p.value),
    aiAuthorityLabel: (p: Value) => pick(ZH_AI_AUTHORITY, p.value),

    // Feedback
    recordedLocally: '回放状态已在本地记录。',
    noChange: '无变化。',
    reportDownloaded: '脱敏运行报告已在本地下载。工厂检查点保留在内存中。',

    // Replay
    title: '配对工厂回放',
    intro:
      '暂停工厂，捕获客户订单与库存，选择一份章程，商定新条款，运行真实工厂，然后保留回顾并进行对比。每份章程都从同一个内存检查点开始。倒回会替换当前本地工厂的进度。',
    pauseForCapture: '暂停工厂以捕获',
    capturePaused: '捕获已暂停的工厂',
    startGuided: '启动引导式工厂回放',
    captureRequires:
      '捕获需要一个已暂停且安全的本地工厂，以及第 0 分钟时处于空闲或未触碰状态的讨论。外部 SCADA 控制、安全扣留与应补休息会阻止倒回。检查点在重新加载后消失，且无法导出。',
    checkpointLine:
      '检查点：{customer}，剩余 {remaining} kg；来源库存 {source} kg。第 {day} 天第 {hour} 小时；种子 {seed}。故障：{faults}。',
    none: '无',
    replayCharter: '回放{profile}章程',
    retainReview: '保留实际运行回顾',
    forget: '丢弃回放检查点与报告',
    replayNote:
      '回放在协商阶段保持暂停，并在回顾时自动暂停。提前停止后，请显式恢复工厂时钟以交付应补休息，再保留回顾。符合条件的回顾会在新章程倒回之前保留。同意、表决与理解绝不结转。',
    noCheckpoint: '尚无检查点。请捕获一个已暂停的工厂，以对比实际运行。',
    unequalHorizons:
      '时间跨度不等：经过时间、协商时间或班次数不一致。仅凭发运总量无法判定更好的章程。',
    discussEvidence: '讨论实际回放证据',
    learningReview: '回放学习回顾',
    hearRoles:
      '在选择下一次试验之前，请听取包装、质量、维护与协调人的意见。请使用下方的实际结果与成员回执；仅凭共同的起点无法确立章程的因果效应。',

    // Runs
    runLabel: '{profile}实际运行',
    charterLine:
      '收尾章程：工作选择为{autonomy}；治理为{governance}；AI 决策权为{ai}。实践：{practices}。',
    shiftPlans: '班次方案：{plans}。',
    shiftPlanItem: '班次 {number}，{title}',
    dispatchHeading: '实际发运与时间跨度',
    dispatchLine: (p: DispatchParams) =>
      `已发运 ${p.dispatched} kg；全额承诺剩余 ${p.remaining} kg。约定目标 ${p.target} kg；延期 ${p.deferred} kg。${p.shifts} 个班次；经过 ${p.elapsed} 分钟；协商 ${p.agreement} 分钟。`,
    plantAccounts: '工厂账目（英镑）',
    revenueLine: '收入 £{revenue}；成本 £{costs}。',
    workplaceCredits: '示意车间点数',
    creditsLine: '工资 {wages}；补偿 {compensation}；改善 {improvements}。',
    conservationHeading: '守恒与谱系',
    conservationLine: (p: ConservationParams) =>
      `物料误差 ${p.material} kg；谱系误差 ${p.genealogy} kg；${p.manifests} 张发运运单。`,
    conductLine:
      '尊重拒绝 {refusals} 次；信守承诺 {promises} 次。累计解决异议 {resolved}/{raised} 条。本班次未决异议 {open} 条。',
    burdensSummary: '成员负担与公开回执',
    memberLine:
      '{role}：额外 {extra} 分钟；休息 {rest} 分钟；已交付补休 {recovery} 分钟，应补 {owed} 分钟；已挣 {earned}，补偿 {compensation} 点数；拒绝 {refusal}。',
    refusalRespected: '受到尊重',
    refusalNotRecorded: '未记录为受到尊重',
    shiftNumber: '班次 {number}',
    noReceipts: '本班次未保留公开回执。',
    eventLine: '第 {minute} 分钟，{actor}：{detail}',
    downloadReport: '下载脱敏回放报告',
    closingNote:
      '起始条件一致；由帧驱动的车辆轨迹可能在不同运行之间不同。请在发运之外同时对比经过时间与协商时间。这些记录描述本地模拟中的行为。不推断任何赢家或信任、福祉评分。',

    // Guide
    guideLabel: '引导式回放',
    guideHeading: '引导式回放：{section}',
    guideShift:
      '从受保护休息、共享的运营信息与补救开始。保持客户承诺，或协商一份分期安排：延期使全额合同保持未结。请在下方选择一份真实方案。',
    guidePractices:
      '“协调主导”从休息、信息与补救开始。“团队协议”加入共享决策；“成员治理”加入成员治理。可选的预算实践启用共享的交接改善。请使用下方真实的实践控制。',
    guideAgreement:
      '每个角色回答自己的理解检查并投出自己的表决。可选顶岗需要单独且可撤销的同意。质量可以拒绝而不作解释。请通过原提出人解决异议，然后在下方明确批准协议。',
    guideReview:
      '核对实际发运、受保护休息、已挣补偿与已交付补休。在保留本次运行之前完成应补休息。回到“实验”，从同一检查点以新的协议回放“团队协议”或“成员治理”。',
    planLine: '{title}：节奏 {pacing}%；{budget} 示试点数；受保护休息 {rest} 分钟。',
    planCover:
      ' 最多 {cover} 分钟自愿顶岗，报酬 {rate} 点数/分钟，外加 {recovery} 分钟补休，随后恢复受保护节奏。',
    activeNote: '协议处于活跃状态。请使用工厂时钟控制恢复实际游玩；本指南绝不推进时间或提交决策。',
    nextSection: '下一节',
    endGuide: '结束指南',
    optionalNavigation: '仅提供可选导航。指南不提供任何表决、检查、同意或批准。',

    // Resume
    resume: '以标准节奏（1x）恢复已协商的回放',
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
    profileLabel: (p: { profile: string }) =>
      pick(
        {
          'toe-dip': 'liderado pela coordenação',
          team: 'acordo da equipe',
          cooperative: 'governança dos cooperados',
        },
        p.profile
      ),
    autonomyLabel: (p: Value) =>
      pick({ directed: 'designada', individual: 'individual', team: 'pela equipe' }, p.value),
    governanceLabel: (p: Value) =>
      pick(
        {
          consultative: 'consultiva',
          'team-consent': 'por consentimento da equipe',
          'member-vote': 'por voto dos cooperados',
        },
        p.value
      ),
    aiAuthorityLabel: (p: Value) =>
      pick({ advice: 'somente recomendação', bounded: 'execução delimitada' }, p.value),

    recordedLocally: 'Estado da reprodução registrado localmente.',
    noChange: 'Nenhuma alteração.',
    reportDownloaded:
      'Relatório da execução com dados ocultados baixado localmente. O ponto de controle da planta continua na memória.',

    title: 'Reprodução pareada da planta',
    intro:
      'Pause a planta, capture o pedido do cliente e o estoque, escolha um estatuto, combine novos termos, jogue na planta real e depois guarde a revisão e compare. Cada estatuto parte do mesmo ponto de controle em memória. Voltar no tempo substitui o progresso local atual da planta.',
    pauseForCapture: 'Pausar a planta para a captura',
    capturePaused: 'Capturar a planta pausada',
    startGuided: 'Iniciar a reprodução guiada da planta',
    captureRequires:
      'A captura exige uma planta local pausada e segura e uma discussão ociosa ou ainda intocada no minuto zero. Controle SCADA externo, retenções de segurança e recuperação devida bloqueiam a volta no tempo. Os pontos de controle somem ao recarregar e não podem ser exportados.',
    checkpointLine:
      'Ponto de controle: {customer}, {remaining} kg pendentes; estoque de origem {source} kg. Dia {day}, hora {hour}; semente {seed}. Falhas: {faults}.',
    none: 'nenhuma',
    replayCharter: 'Reproduzir estatuto: {profile}',
    retainReview: 'Guardar a revisão da execução real',
    forget: 'Descartar o ponto de controle e os relatórios da reprodução',
    replayNote:
      'As reproduções ficam pausadas para o acordo e pausam automaticamente na revisão. Depois de uma parada antecipada, retome explicitamente o relógio da planta para conceder a recuperação devida antes de guardar a revisão. Uma revisão elegível é guardada antes que um novo estatuto volte no tempo. Consentimento, votos e entendimento nunca são transferidos.',
    noCheckpoint:
      'Nenhum ponto de controle ainda. Capture uma planta pausada para comparar execuções reais.',
    unequalHorizons:
      'Horizontes desiguais: o tempo decorrido, o tempo de acordo ou os turnos diferem. Os totais de expedição, sozinhos, não estabelecem um estatuto melhor.',
    discussEvidence: 'Discutir as evidências reais da reprodução',
    learningReview: 'Revisão de aprendizado da reprodução',
    hearRoles:
      'Ouça o Ensaque, a Qualidade, a Manutenção e a Coordenação antes de escolher o próximo teste. Use os resultados reais e os comprovantes dos cooperados abaixo; um ponto de partida comum, sozinho, não estabelece o efeito causal de um estatuto.',

    runLabel: 'Execução real: {profile}',
    charterLine:
      'Estatuto de encerramento: escolha do trabalho, {autonomy}; governança, {governance}; autoridade da IA, {ai}. Práticas: {practices}.',
    shiftPlans: 'Planos dos turnos: {plans}.',
    shiftPlanItem: 'turno {number}, {title}',
    dispatchHeading: 'Expedição real e horizonte',
    dispatchLine: (p: DispatchParams) =>
      `${p.dispatched} kg expedidos; ${p.remaining} kg pendentes do compromisso integral. Meta acordada ${p.target} kg; adiados ${p.deferred} kg. ${p.shifts} ${p.shiftCount === 1 ? 'turno' : 'turnos'}; ${p.elapsed} minutos decorridos; ${p.agreement} minutos de acordo.`,
    plantAccounts: 'Contas da planta, em libras esterlinas',
    revenueLine: 'Receita £{revenue}; custos £{costs}.',
    workplaceCredits: 'Créditos ilustrativos do local de trabalho',
    creditsLine: 'Remuneração {wages}; compensação {compensation}; melhorias {improvements}.',
    conservationHeading: 'Conservação e genealogia',
    conservationLine: (p: ConservationParams) =>
      `Erro de material ${p.material} kg; erro de genealogia ${p.genealogy} kg; ${p.manifests} ${p.manifestCount === 1 ? 'romaneio' : 'romaneios'} de expedição.`,
    conductLine:
      'Recusas respeitadas {refusals}; promessas cumpridas {promises}. Objeções acumuladas resolvidas {resolved} de {raised}. Objeções abertas no turno atual {open}.',
    burdensSummary: 'Cargas dos cooperados e comprovantes públicos',
    memberLine:
      '{role}: extra {extra} min; descanso {rest} min; recuperação concedida {recovery} min, devida {owed} min; ganhos {earned}, compensação {compensation} créditos; recusa {refusal}.',
    refusalRespected: 'respeitada',
    refusalNotRecorded: 'não registrada como respeitada',
    shiftNumber: 'Turno {number}',
    noReceipts: 'Nenhum comprovante público guardado para este turno.',
    eventLine: 'Minuto {minute}, {actor}: {detail}',
    downloadReport: 'Baixar o relatório da reprodução com dados ocultados',
    closingNote:
      'As condições de partida coincidem; as trajetórias dos veículos, que dependem dos quadros renderizados, podem diferir entre execuções. Compare o tempo decorrido e o tempo de acordo junto com a expedição. Estes registros descrevem condutas na simulação local. Nenhum vencedor nem pontuação de confiança ou bem-estar é inferido.',

    guideLabel: 'Reprodução guiada',
    guideHeading: 'Reprodução guiada: {section}',
    guideShift:
      'Comece com descanso protegido, informações operacionais compartilhadas e reparação. Mantenha o compromisso com o cliente ou negocie uma entrega parcelada: o adiamento deixa o contrato integral pendente. Selecione um plano real abaixo.',
    guidePractices:
      'O perfil liderado pela coordenação começa com descanso, informação e reparação. O perfil de acordo da equipe acrescenta decisões compartilhadas; o perfil cooperativo acrescenta a governança dos cooperados. A prática opcional de orçamento habilita a melhoria compartilhada da passagem de turno. Use os controles reais de práticas abaixo.',
    guideAgreement:
      'Cada função responde às próprias verificações de entendimento e dá o próprio voto. A cobertura opcional precisa de consentimento separado e revogável. A Qualidade pode recusar sem explicar. Resolva as objeções com o autor original e depois aprove explicitamente o acordo abaixo.',
    guideReview:
      'Confira a expedição real, o descanso protegido, a compensação conquistada e a recuperação concedida. Conclua a recuperação devida antes de guardar esta execução. Volte a Experimento para reproduzir o perfil de equipe ou o cooperativo a partir do mesmo ponto de controle, com um novo acordo.',
    planLine:
      '{title}: ritmo de {pacing}%; {budget} créditos ilustrativos; {rest} min de descanso protegido.',
    planCover:
      ' Até {cover} min de cobertura voluntária a {rate} créditos/min e {recovery} min de recuperação; depois o ritmo protegido é retomado.',
    activeNote:
      'O acordo está ativo. Use os controles do relógio da planta para retomar o jogo real; este guia nunca avança o tempo nem envia decisões.',
    nextSection: 'Próxima seção do guia',
    endGuide: 'Encerrar o guia',
    optionalNavigation:
      'Somente navegação opcional. O guia não fornece votos, verificações, consentimento nem aprovação.',

    resume: 'Retomar a reprodução acordada no ritmo padrão (1x)',
  },
});
