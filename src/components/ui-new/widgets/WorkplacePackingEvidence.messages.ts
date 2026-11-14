import { defineMessages } from '../../../i18n';

type Count = { count: number; countText: string };

export const workplacePackingEvidenceMessages = defineMessages({
  en: {
    // HandoffEpisodes
    handoffLabel: 'Handoff pressure rehearsals',
    handoffHeading: 'Try an agreement under pressure',
    handoffIntro:
      'Optional planning episodes. Their assumptions leave live trucks, stock, quality, cash and customer commitments unchanged.',
    pressureEpisode: 'Pressure episode',
    ordinaryHandoff: 'Ordinary handoff',
    responseAuthor: 'Rehearsal response author',
    beginMemberTurn: 'Begin a member turn',
    adviserNoResponse: 'Adviser, no member response',
    actInPlant:
      'To act in the plant, choose the real proposal below and make fresh role decisions. This rehearsal records no live permission.',
    // FrozenPackingAdvice
    evidenceLabel: 'Plant-grounded adviser evidence',
    adviserAbstains: 'The adviser abstains from a forecast',
    conditionalBounds: 'Conditional packing and departure bounds',
    abstainReason: '{reason} Unknown evidence remains unknown.',
    materialFlour: 'flour',
    materialSemolina: 'semolina',
    modeledPacking:
      'Additional modeled packing: {low} to {high} kg of {material}. Conditional departure: 0 to {upper} kg.',
    scenarioBounds:
      'These are scenario bounds. No departure is simulated or guaranteed. Held stock supplies no eligible dispatch.',
    factsSummary: 'Known facts, age and assumptions',
    factsUnavailable:
      'Numeric plant facts are unavailable for this forecast. Resolve the missing evidence above, then hear a fresh response before deciding.',
    orderAndRecipe: 'Order and recipe: ',
    orderRecipeValue: '{order}; {recipe}. Remaining {remaining}.',
    unknown: 'unknown',
    kg: '{value} kg',
    materialClock: 'Captured material clock: ',
    secondsValue: '{value} seconds.',
    intendedPace: 'Intended pace: ',
    paceValue: '{speed}x pace. 90 workplace minutes are {seconds} plant seconds at every pace.',
    inspectTogether: 'Inspect evidence together',
    frozenFacts:
      'Facts are frozen at the adviser’s capture. These views inspect the current plant; changed facts need a fresh adviser response before another agreement. Looking records no understanding, ballot or permission.',
    inputReceipt: 'Input receipt: {fingerprint}; material session {session}.',
    // MatchedPackingRehearsal
    qualityOverride: 'Higher pacing can replace the withheld release',
    qualityHeld: 'Departure remains blocked at every pace',
    qualityUnsure: 'We are unsure, compare the boundaries',
    pauseFirst: 'Pause the plant before capturing matched packing inputs.',
    inputsChangedDuring: 'Plant inputs changed during rehearsal. Pause and capture again.',
    rehearsalFailed:
      'The local packing rehearsal could not complete. No live plant state was changed.',
    qualityFailed: 'The quality-boundary rehearsal could not complete. No live state changed.',
    compareSummary: 'Compare matched packing alternatives',
    isolatedCopies:
      'Three isolated copies of one plant input, using the real flow engine. No live inventory, shipping receipt, pay, customer credit or consent is changed. Pressure episodes remain separate planning assumptions.',
    packingPrediction: 'Our packing prediction (optional)',
    discussFirst: 'Discuss before revealing the ranges',
    compareIdeas:
      'Compare ideas first and keep any disagreements. This optional prediction stays in this open comparison; it records no role ballot or permission.',
    rehearsingPacking: 'Rehearsing packing…',
    runRehearsal: 'Run matched packing rehearsal',
    matchedInput:
      'Matched input: {fingerprint}. Fixed machinery and dispositions; no collection, wear or maintenance simulation.',
    checkFreshness: 'Check rehearsal freshness',
    staleComparison: 'Inputs changed. This comparison is stale; capture again before using it.',
    resultsLabel: 'Matched packing results',
    arrangementSteady: 'Ordinary work',
    arrangementBriefing: 'Paid briefing',
    arrangementBuffer: 'Buffer pacing',
    armAbstained: 'abstained, {reason}',
    armRange: '{low} to {high} kg additionally packed; conditional departure 0 to {upper} kg.',
    firstPackingSummary: 'When did packing first appear?',
    firstPackingExplain:
      'Each value marks the completed simulation tick that first recorded additional packed stock. These are workplace minutes from the same captured start. Discrete samples can differ with the physical step size.',
    timingLabel: 'Packing time observations',
    coarseSteps: '0.5-second steps: {value}.',
    fineSteps: '0.25-second steps: {value}.',
    noPackingObserved: 'no additional packing observed',
    minutesValue: '{value} min',
    briefingRetains:
      'The briefing retains its five paid minutes of pacing hold. Compare the sample times with the 90-minute totals above; an earlier first sample supplies no collection receipt.',
    timingQuestion:
      'If the final totals match, which timing difference would you investigate together before changing the handoff?',
    timingUnavailable:
      'Timing is unavailable for this comparison. Resolve the missing facts or model warning above before interpreting it.',
    releaseSummary: 'Can pacing replace a release?',
    assumeWithheld:
      'Assume dispatch release is withheld in isolated copies of these same inputs. The real flow engine still models packing; source and batch dispositions stay unchanged. This creates no live hold, release or departure.',
    qualityPrediction: 'Our quality prediction (optional)',
    discussQuality: 'Discuss with Quality and the coordinator',
    resolveMissing:
      'Resolve missing captured facts before this exercise. Unknown inputs cannot establish a zero-output result.',
    rehearsingWithheld: 'Rehearsing withheld release…',
    rehearseWithheld: 'Rehearse withheld dispatch release',
    qualityResultsLabel: 'Quality boundary results',
    differentQuestions: 'Packing and permission answer different questions',
    recordedIdea: 'Recorded idea: {idea}.',
    noneRecorded: 'none recorded for this run',
    keepOpen: '{reason} Keep the question open.',
    withheldArm:
      '{arrangement} with withheld release: {low} to {high} kg additionally packed; conditional departure {lower} to {upper} kg.',
    alreadyHeld:
      'Release was already held in the captured facts. This rehearsal grants no new permission.',
    alreadyZero:
      'The original departure bounds were already zero. This comparison cannot attribute that original zero to quality alone.',
    independentEvidence:
      'Which independent evidence would Quality and the coordinator need before an actual departure? More packing supplies no missing release or collection receipt.',
    resetQuality: 'Reset quality prediction',
    reviewLabel: 'Packing prediction review',
    rehearsalShowed: 'What did the rehearsal show?',
    ourPrediction: 'Our prediction: {prediction}.',
    moreStock:
      'More packed stock does not establish a truck departure. Collection, qualified release and actual dispatch receipts still need their own evidence.',
    anotherPrediction: 'Prepare another prediction',
    // HandoffConduct
    conductLabel: 'Handoff conduct debrief',
    treatEachOther: 'How did we treat each other?',
    challenges: (p: Count) =>
      `${p.countText} public ${p.count === 1 ? 'challenge' : 'challenges'};`,
    adviceUpdates: '{count} evidence-driven advice updates.',
    declined: (p: Count) =>
      p.count
        ? `${p.countText} ${p.count === 1 ? 'role' : 'roles'} recorded a declined policy ballot without a pay penalty.`
        : 'No declined policy ballot was recorded.',
    declinedNoPermission:
      'A declined policy ballot grants no extra-duty permission. Coordinated or majority ordinary work can proceed under the selected governance rule. Private explanations stay optional.',
    roleLedger:
      ': earned {pay} credits; rest {rest} min; extra duty {extra} min; compensation paid {compensation}; recovery delivered {recovery} min, owed {owed} min.',
    objections: (p: Count) =>
      `${p.countText} unresolved ${p.count === 1 ? 'objection' : 'objections'}. Each remedy belongs to its original raiser; a promise supplies no delivered recovery.`,
    receiptsSummary: 'Public conduct receipts',
    receipt: '{minute} min, {actor}: {detail}',
  },
  zh: {
    // HandoffEpisodes
    handoffLabel: '交接压力预演',
    handoffHeading: '在压力下试验一份协议',
    handoffIntro: '可选的规划剧情。它们的假设不会改变真实的卡车、库存、质量、现金与客户承诺。',
    pressureEpisode: '压力剧情',
    ordinaryHandoff: '常规交接',
    responseAuthor: '预演回应提出人',
    beginMemberTurn: '开始一名成员的回合',
    adviserNoResponse: '顾问，无成员回应',
    actInPlant:
      '要在工厂里行动，请选择下方的真实提案，并做出新的角色决定。本预演不记录任何真实授权。',
    // FrozenPackingAdvice
    evidenceLabel: '顾问基于工厂的证据',
    adviserAbstains: '顾问弃权，不做预测',
    conditionalBounds: '条件包装与离场界限',
    abstainReason: '{reason} 未知证据仍是未知。',
    materialFlour: '面粉',
    materialSemolina: '粗粒粉',
    modeledPacking: '额外模拟包装：{material} {low} 至 {high} kg。条件离场量：0 至 {upper} kg。',
    scenarioBounds: '这些是场景界限。没有任何离场被模拟或保证。扣留库存不提供符合条件的发运。',
    factsSummary: '已知事实、数据年龄与假设',
    factsUnavailable:
      '这次预测没有可用的工厂数值事实。请先解决上方缺失的证据，然后听取新的回应再做决定。',
    orderAndRecipe: '订单与配方：',
    orderRecipeValue: '{order}；{recipe}。剩余 {remaining}。',
    unknown: '未知',
    kg: '{value} kg',
    materialClock: '采集到的物料时钟：',
    secondsValue: '{value} 秒。',
    intendedPace: '预期节奏：',
    paceValue: '{speed}x 节奏。无论何种节奏，90 个车间分钟都等于 {seconds} 个工厂秒。',
    inspectTogether: '一起检查证据',
    frozenFacts:
      '事实冻结在顾问采集的时刻。这些视图检查的是当前工厂；事实变化后，达成另一份协议之前需要新的顾问回应。查看不会记录任何理解、表决或授权。',
    inputReceipt: '输入回执：{fingerprint}；物料会话 {session}。',
    // MatchedPackingRehearsal
    qualityOverride: '更高的节奏可以替代被扣留的放行',
    qualityHeld: '在任何节奏下，离场都保持受阻',
    qualityUnsure: '我们不确定，请对比界限',
    pauseFirst: '在采集配对包装输入之前，请先暂停工厂。',
    inputsChangedDuring: '预演期间工厂输入发生了变化。请暂停并重新采集。',
    rehearsalFailed: '本地包装预演无法完成。没有改变任何真实工厂状态。',
    qualityFailed: '质量界限预演无法完成。没有改变任何真实状态。',
    compareSummary: '对比配对包装的备选方案',
    isolatedCopies:
      '一份工厂输入的三个隔离副本，使用真实的物料流引擎。不改变任何真实库存、发运回执、报酬、客户信用或同意。压力剧情仍保持独立的规划假设。',
    packingPrediction: '我们的包装预测（可选）',
    discussFirst: '先讨论，再揭示范围',
    compareIdeas:
      '先对比想法，并保留任何分歧。这个可选预测只保留在这次公开对比中；它不记录任何角色表决或授权。',
    rehearsingPacking: '正在预演包装……',
    runRehearsal: '运行配对包装预演',
    matchedInput: '配对输入：{fingerprint}。固定的设备与处置；不模拟提货、磨损或维护。',
    checkFreshness: '检查预演时效',
    staleComparison: '输入已变化。这份对比已过期；使用前请重新采集。',
    resultsLabel: '配对包装结果',
    arrangementSteady: '常规工作',
    arrangementBriefing: '带薪简报',
    arrangementBuffer: '缓冲节奏',
    armAbstained: '弃权，{reason}',
    armRange: '额外包装 {low} 至 {high} kg；条件离场量 0 至 {upper} kg。',
    firstPackingSummary: '包装最早出现在何时？',
    firstPackingExplain:
      '每个数值都标记首次记录到额外包装库存的已完成模拟节拍。这些是从同一次采集起点算起的车间分钟。离散样本可能因物理步长而不同。',
    timingLabel: '包装时间观测',
    coarseSteps: '0.5 秒步长：{value}。',
    fineSteps: '0.25 秒步长：{value}。',
    noPackingObserved: '未观察到额外包装',
    minutesValue: '{value} 分钟',
    briefingRetains:
      '简报保留其五分钟带薪的节奏暂停。请把样本时间与上方的 90 分钟总量对比；更早的首个样本不提供提货回执。',
    timingQuestion: '如果最终总量一致，在改变交接之前，你们会一起调查哪个时间差异？',
    timingUnavailable: '这份对比没有可用的时间数据。请先解决上方缺失的事实或模型警告，再解读它。',
    releaseSummary: '节奏能替代一次放行吗？',
    assumeWithheld:
      '假设在这些相同输入的隔离副本中，发运放行被扣留。真实的物料流引擎仍会模拟包装；来源与批次处置保持不变。这不会造成任何真实的扣留、放行或离场。',
    qualityPrediction: '我们的质量预测（可选）',
    discussQuality: '与质量和协调一起讨论',
    resolveMissing: '在这项练习之前，请先解决缺失的采集事实。未知输入无法确立零产出的结果。',
    rehearsingWithheld: '正在预演扣留放行……',
    rehearseWithheld: '预演被扣留的发运放行',
    qualityResultsLabel: '质量界限结果',
    differentQuestions: '包装与许可回答的是不同的问题',
    recordedIdea: '已记录的想法：{idea}。',
    noneRecorded: '本次运行未记录任何想法',
    keepOpen: '{reason} 让问题保持开放。',
    withheldArm:
      '{arrangement}（放行扣留）：额外包装 {low} 至 {high} kg；条件离场量 {lower} 至 {upper} kg。',
    alreadyHeld: '在采集到的事实中，放行已被扣留。本预演不授予任何新许可。',
    alreadyZero: '原始的离场界限本已为零。这份对比不能把那个原始零值单独归因于质量。',
    independentEvidence:
      '在实际离场之前，质量与协调需要哪些独立证据？更多包装补不上缺失的放行或提货回执。',
    resetQuality: '重置质量预测',
    reviewLabel: '包装预测回顾',
    rehearsalShowed: '预演显示了什么？',
    ourPrediction: '我们的预测：{prediction}。',
    moreStock:
      '更多包装库存并不能确立一次卡车离场。提货、合格放行与实际发运的回执仍需要各自的证据。',
    anotherPrediction: '准备另一个预测',
    // HandoffConduct
    conductLabel: '交接行为复盘',
    treatEachOther: '我们是如何对待彼此的？',
    challenges: (p: Count) => `${p.countText} 次公开质疑；`,
    adviceUpdates: '{count} 次基于证据的建议更新。',
    declined: (p: Count) =>
      p.count
        ? `${p.countText} 个角色记录了被拒绝的政策表决，没有报酬处罚。`
        : '没有记录被拒绝的政策表决。',
    declinedNoPermission:
      '被拒绝的政策表决不授予额外勤务许可。协调式或多数派的常规工作可以按所选治理规则继续进行。私人解释保持可选。',
    roleLedger:
      '：已挣 {pay} 点数；休息 {rest} 分钟；额外勤务 {extra} 分钟；已付补偿 {compensation}；已交付补休 {recovery} 分钟，应补 {owed} 分钟。',
    objections: (p: Count) =>
      `${p.countText} 条未决异议。每个补救都归属于其原提出人；承诺不构成已交付的补休。`,
    receiptsSummary: '公开行为回执',
    receipt: '第 {minute} 分钟，{actor}：{detail}',
  },
  'pt-BR': {
    handoffLabel: 'Ensaios de passagem de turno sob pressão',
    handoffHeading: 'Teste um acordo sob pressão',
    handoffIntro:
      'Episódios opcionais de planejamento. Suas premissas não alteram os caminhões reais, o estoque, a qualidade, o caixa nem os compromissos com clientes.',
    pressureEpisode: 'Episódio de pressão',
    ordinaryHandoff: 'Passagem de turno comum',
    responseAuthor: 'Autor da resposta no ensaio',
    beginMemberTurn: 'Comece a vez de um cooperado',
    adviserNoResponse: 'Conselheiro, sem resposta de cooperado',
    actInPlant:
      'Para agir no moinho, escolha a proposta real abaixo e tome novas decisões de função. Este ensaio não registra nenhuma permissão real.',
    evidenceLabel: 'Evidências do conselheiro baseadas no moinho',
    adviserAbstains: 'O conselheiro se abstém de fazer uma previsão',
    conditionalBounds: 'Limites condicionais de ensaque e de saída',
    abstainReason: '{reason} Evidência desconhecida continua desconhecida.',
    materialFlour: 'farinha',
    materialSemolina: 'semolina',
    modeledPacking:
      'Ensaque adicional modelado: {low} a {high} kg de {material}. Saída condicional: 0 a {upper} kg.',
    scenarioBounds:
      'São limites de cenário. Nenhuma saída é simulada nem garantida. Estoque retido não gera nenhuma expedição elegível.',
    factsSummary: 'Fatos conhecidos, idade dos dados e premissas',
    factsUnavailable:
      'Os fatos numéricos do moinho não estão disponíveis para esta previsão. Resolva a evidência que falta acima e ouça uma nova resposta antes de decidir.',
    orderAndRecipe: 'Pedido e receita: ',
    orderRecipeValue: '{order}; {recipe}. Restante: {remaining}.',
    unknown: 'desconhecido',
    kg: '{value} kg',
    materialClock: 'Relógio de material capturado: ',
    secondsValue: '{value} segundos.',
    intendedPace: 'Ritmo pretendido: ',
    paceValue:
      'Ritmo {speed}x. 90 minutos de trabalho correspondem a {seconds} segundos de operação do moinho em qualquer ritmo.',
    inspectTogether: 'Examinem as evidências juntos',
    frozenFacts:
      'Os fatos ficam congelados no momento da captura do conselheiro. Estas visões mostram o moinho atual; fatos alterados exigem uma nova resposta do conselheiro antes de outro acordo. Olhar não registra entendimento, voto nem permissão.',
    inputReceipt: 'Comprovante de entrada: {fingerprint}; sessão de material {session}.',
    qualityOverride: 'Um ritmo maior pode substituir a liberação retida',
    qualityHeld: 'A saída continua bloqueada em qualquer ritmo',
    qualityUnsure: 'Não temos certeza; comparem os limites',
    pauseFirst: 'Pause o moinho antes de capturar as entradas de ensaque pareadas.',
    inputsChangedDuring:
      'As entradas do moinho mudaram durante o ensaio. Pause e capture novamente.',
    rehearsalFailed:
      'O ensaio local de ensaque não pôde ser concluído. Nenhum estado real do moinho foi alterado.',
    qualityFailed:
      'O ensaio do limite de qualidade não pôde ser concluído. Nenhum estado real foi alterado.',
    compareSummary: 'Compare alternativas de ensaque pareadas',
    isolatedCopies:
      'Três cópias isoladas de uma mesma entrada do moinho, usando o motor de fluxo real. Nenhum estoque real, comprovante de expedição, remuneração, crédito de cliente ou consentimento é alterado. Os episódios de pressão continuam sendo premissas de planejamento separadas.',
    packingPrediction: 'Nosso palpite de ensaque (opcional)',
    discussFirst: 'Discutam antes de revelar as faixas',
    compareIdeas:
      'Comparem as ideias primeiro e mantenham as divergências. Este palpite opcional fica nesta comparação aberta; não registra voto de função nem permissão.',
    rehearsingPacking: 'Executando o ensaio de ensaque…',
    runRehearsal: 'Executar ensaio de ensaque pareado',
    matchedInput:
      'Entrada pareada: {fingerprint}. Máquinas e disposições fixas; sem simulação de coleta, desgaste ou manutenção.',
    checkFreshness: 'Verificar se o ensaio está atualizado',
    staleComparison:
      'As entradas mudaram. Esta comparação está desatualizada; capture novamente antes de usá-la.',
    resultsLabel: 'Resultados do ensaque pareado',
    arrangementSteady: 'Trabalho comum',
    arrangementBriefing: 'Briefing remunerado',
    arrangementBuffer: 'Ritmo pelo estoque intermediário',
    armAbstained: 'abstenção, {reason}',
    armRange: '{low} a {high} kg ensacados a mais; saída condicional de 0 a {upper} kg.',
    firstPackingSummary: 'Quando o ensaque apareceu pela primeira vez?',
    firstPackingExplain:
      'Cada valor marca o passo de simulação concluído que primeiro registrou estoque ensacado adicional. São minutos de trabalho contados a partir do mesmo início capturado. Amostras discretas podem variar conforme o tamanho do passo físico.',
    timingLabel: 'Observações do tempo de ensaque',
    coarseSteps: 'Passos de 0,5 segundo: {value}.',
    fineSteps: 'Passos de 0,25 segundo: {value}.',
    noPackingObserved: 'nenhum ensaque adicional observado',
    minutesValue: '{value} min',
    briefingRetains:
      'O briefing mantém seus cinco minutos remunerados de pausa no ritmo. Comparem os tempos das amostras com os totais de 90 minutos acima; uma primeira amostra mais cedo não gera nenhum comprovante de coleta.',
    timingQuestion:
      'Se os totais finais coincidirem, qual diferença de tempo vocês investigariam juntos antes de mudar a passagem de turno?',
    timingUnavailable:
      'O tempo não está disponível para esta comparação. Resolva os fatos ausentes ou o aviso do modelo acima antes de interpretá-la.',
    releaseSummary: 'O ritmo pode substituir uma liberação?',
    assumeWithheld:
      'Suponha que a liberação para expedição esteja retida em cópias isoladas dessas mesmas entradas. O motor de fluxo real continua modelando o ensaque; as disposições de origem e de lote não mudam. Isto não cria nenhuma retenção, liberação ou saída real.',
    qualityPrediction: 'Nosso palpite de qualidade (opcional)',
    discussQuality: 'Discutam com a Qualidade e a coordenação',
    resolveMissing:
      'Resolva os fatos capturados ausentes antes deste exercício. Entradas desconhecidas não podem estabelecer um resultado de produção zero.',
    rehearsingWithheld: 'Ensaiando a liberação retida…',
    rehearseWithheld: 'Ensaiar liberação para expedição retida',
    qualityResultsLabel: 'Resultados do limite de qualidade',
    differentQuestions: 'Ensaque e permissão respondem a perguntas diferentes',
    recordedIdea: 'Ideia registrada: {idea}.',
    noneRecorded: 'nada registrado nesta execução',
    keepOpen: '{reason} Mantenham a pergunta em aberto.',
    withheldArm:
      '{arrangement} com liberação retida: {low} a {high} kg ensacados a mais; saída condicional de {lower} a {upper} kg.',
    alreadyHeld:
      'A liberação já estava retida nos fatos capturados. Este ensaio não concede nenhuma nova permissão.',
    alreadyZero:
      'Os limites de saída originais já eram zero. Esta comparação não pode atribuir esse zero original apenas à qualidade.',
    independentEvidence:
      'De quais evidências independentes a Qualidade e a coordenação precisariam antes de uma saída real? Ensacar mais não supre uma liberação nem um comprovante de coleta que falte.',
    resetQuality: 'Redefinir palpite de qualidade',
    reviewLabel: 'Revisão do palpite de ensaque',
    rehearsalShowed: 'O que o ensaio mostrou?',
    ourPrediction: 'Nosso palpite: {prediction}.',
    moreStock:
      'Mais estoque ensacado não comprova a saída de um caminhão. Coleta, liberação qualificada e comprovantes reais de expedição ainda precisam de evidências próprias.',
    anotherPrediction: 'Preparar outro palpite',
    conductLabel: 'Conversa sobre a conduta na passagem de turno',
    treatEachOther: 'Como nos tratamos?',
    challenges: (p: Count) =>
      `${p.countText} ${p.count === 1 ? 'contestação pública' : 'contestações públicas'};`,
    adviceUpdates: '{count} atualizações de recomendação baseadas em evidências.',
    declined: (p: Count) =>
      p.count
        ? `${p.countText} ${p.count === 1 ? 'função registrou' : 'funções registraram'} uma recusa na votação da política, sem penalidade na remuneração.`
        : 'Nenhuma recusa na votação da política foi registrada.',
    declinedNoPermission:
      'Uma recusa na votação da política não concede permissão para trabalho extra. O trabalho comum coordenado ou por maioria pode seguir conforme a regra de governança escolhida. Explicações privadas continuam opcionais.',
    roleLedger:
      ': ganhou {pay} créditos; descanso {rest} min; trabalho extra {extra} min; compensação paga {compensation}; recuperação concedida {recovery} min, devida {owed} min.',
    objections: (p: Count) =>
      `${p.countText} ${p.count === 1 ? 'objeção não resolvida' : 'objeções não resolvidas'}. Cada reparação pertence a quem levantou a objeção originalmente; uma promessa não equivale a recuperação concedida.`,
    receiptsSummary: 'Comprovantes públicos de conduta',
    receipt: '{minute} min, {actor}: {detail}',
  },
});
