import { defineMessages } from '../i18n';

export const workplaceAdviceMessages = defineMessages({
  en: {
    assumptionHorizon:
      '{minutes} workplace minutes = {seconds} plant seconds at every resume pace.',
    assumptionEngine:
      'Real material engine at 0.5 and 0.25 physical-second steps; bounds reflect time resolution, not statistical confidence.',
    assumptionFixed:
      'Fixed machinery, recipe, quality interlock and source dispositions. No arrivals, maintenance, dock movements or shipping are simulated.',
    assumptionPacing:
      'Whole-line pacing only; buffer arrangement adds no physical storage capacity.',
    assumptionDispatch:
      'Dispatch lower bound is zero: no departure is simulated. Conditional upper requires release, a compatible truck and available load capacity within the horizon.',
    missingOrder: 'Active order and recipe are unavailable.',
    missingExecution: 'Order execution facts are stale or mismatched.',
    missingSession: 'Mission and material session do not match.',
    missingControls:
      'Finite bounded production controls and a positive resume speed (9 to 3600x) are required.',
    missingClock: 'Material clock is invalid.',
    missingRelease: 'Direct quality release is unavailable.',
    missingLoad: 'Direct dispatch load is unavailable.',
    missingBuffers: 'Required machine buffers are missing.',
    invalidMachines: 'Machine capacity or conversion facts are invalid.',
    invalidConveyors: 'Conveyor facts are invalid.',
    invalidGenealogy: 'Source genealogy is missing, unknown or unbalanced.',
    conservationFailed: 'Engine genealogy conservation failed.',
    rolePacking: 'Packing',
    roleQuality: 'Quality',
    roleMaintenance: 'Maintenance',
    roleCoordinator: 'Coordinator',
    viewPackingFloor: 'View packing floor',
    viewQualityPoint: 'View quality observation point',
    viewMillingLine: 'View milling line',
    viewShippingDock: 'View shipping dock',
    stockFact: 'At capture: {released} kg released; {held} kg held or recalled.',
    stockUnavailable: 'Usable captured stock facts are unavailable.',
    packingQuestion:
      'Ask the coordinator which released bags could actually be collected. Packed stock alone proves no departure.',
    releaseFact: 'Dispatch release at capture: {state}.',
    releaseOpen: 'open',
    releaseHeld: 'held',
    releaseUnknown: 'unknown',
    releaseUnavailable: 'Usable captured release facts are unavailable.',
    qualityQuestionOpen:
      'Which batch and source checks support release, and what new evidence would require a hold? A view cannot certify a batch.',
    qualityQuestionHeld:
      'Which qualified batch or source check is needed before release can be reconsidered? A team vote cannot clear a hold.',
    machineFact: 'At capture: {processing}/{total} machines marked processing.',
    machineUnavailable: 'Usable captured machine facts are unavailable.',
    maintenanceQuestion:
      'Ask Packing where material waits, then check upstream buffers and supply. Processing flags alone do not establish material flow.',
    truckFact: 'Truck at capture: {status}; {loaded} kg loaded / {capacity} kg capacity.',
    truckAway: 'away',
    truckLoading: 'loading',
    truckHeld: 'held',
    truckReady: 'ready',
    truckDeparted: 'departed',
    collectionUnavailable: 'Usable captured collection facts are unavailable.',
    coordinatorQuestion:
      'Check material compatibility, free capacity and collection timing with Quality. A ready load still needs an actual departure receipt.',
    predictionHigher: 'Buffer range entirely above ordinary work',
    predictionOverlap: 'No clear separation between packing ranges',
    predictionLower: 'Buffer range entirely below ordinary work',
    predictionUnsure: 'We are unsure, keep the question open',
    evidenceHigher: 'The buffer’s entire modeled packing range is above ordinary work.',
    evidenceLower: 'The buffer’s entire modeled packing range is below ordinary work.',
    evidenceOverlap:
      'The modeled packing ranges overlap or meet within 0.01 kg. They do not establish a clear ordering.',
    evidenceUnavailable:
      'This rehearsal has insufficient matching evidence to compare the packing ranges.',
    reflectionUnavailable: 'Keep the prediction open until both alternatives have usable evidence.',
    reflectionUnsure: 'We left the prediction open. Use these ranges to discuss what to test next.',
    reflectionSupport: 'These modeled packing ranges support our prediction.',
    reflectionDiffer: 'These modeled packing ranges differ from our prediction.',
    questionUnavailable: 'Which missing fact needs checking before another rehearsal?',
    questionOverlap:
      'Which shared limit could keep extra pacing from adding packed stock? Check supply, machines and quality dispositions together.',
    questionDifference:
      'Which supply, machine or pacing assumption explains the difference, and what would we check before changing the working agreement?',
  },
  zh: {
    assumptionHorizon: '{minutes} 个车间分钟 = {seconds} 个工厂秒，在任何恢复节奏下都成立。',
    assumptionEngine:
      '真实的物料流引擎以 0.5 与 0.25 物理秒步长运行；界限反映的是时间分辨率，而非统计置信度。',
    assumptionFixed: '固定的设备、配方、质量联锁与来源处置。不模拟来车、维护、装卸区移动或发运。',
    assumptionPacing: '仅限全线节奏；缓冲安排不增加物理仓储容量。',
    assumptionDispatch:
      '发运下界为零：不模拟任何离场。条件上界需要放行、一辆兼容的卡车以及时间跨度内可用的装载能力。',
    missingOrder: '活动订单与配方不可用。',
    missingExecution: '订单执行事实已过期或不匹配。',
    missingSession: '任务与物料会话不匹配。',
    missingControls: '需要有限的有界生产控制与一个正的恢复速度（9 至 3600x）。',
    missingClock: '物料时钟无效。',
    missingRelease: '直接质量放行不可用。',
    missingLoad: '直接发运装载不可用。',
    missingBuffers: '缺少所需的设备缓冲。',
    invalidMachines: '设备产能或转换事实无效。',
    invalidConveyors: '输送机事实无效。',
    invalidGenealogy: '来源谱系缺失、未知或不平衡。',
    conservationFailed: '引擎谱系守恒失败。',
    rolePacking: '包装',
    roleQuality: '质量',
    roleMaintenance: '维护',
    roleCoordinator: '协调',
    viewPackingFloor: '查看包装区',
    viewQualityPoint: '查看质量观察点',
    viewMillingLine: '查看制粉产线',
    viewShippingDock: '查看发运装卸区',
    stockFact: '捕获时：已放行 {released} kg；扣留或召回 {held} kg。',
    stockUnavailable: '无可用的已捕获库存事实。',
    packingQuestion: '询问协调哪些已放行的袋子实际上可以被收走。已包装库存本身不能证明任何离场。',
    releaseFact: '捕获时的发运放行：{state}。',
    releaseOpen: '开放',
    releaseHeld: '扣留',
    releaseUnknown: '未知',
    releaseUnavailable: '无可用的已捕获放行事实。',
    qualityQuestionOpen: '哪些批次与来源检查支持放行？什么新证据会要求扣留？视图不能认证一个批次。',
    qualityQuestionHeld: '在重新考虑放行之前，需要哪项合格的批次或来源检查？团队表决不能解除扣留。',
    machineFact: '捕获时：{processing}/{total} 台设备标记为加工中。',
    machineUnavailable: '无可用的已捕获设备事实。',
    maintenanceQuestion:
      '询问包装物料在哪里等待，然后检查上游缓冲与供给。加工标记本身不能确立物料流。',
    truckFact: '捕获时的卡车：{status}；已装载 {loaded} kg / 装载能力 {capacity} kg。',
    truckAway: '已离开装卸区',
    truckLoading: '装载中',
    truckHeld: '被扣留',
    truckReady: '就绪',
    truckDeparted: '已离场',
    collectionUnavailable: '无可用的已捕获来粮事实。',
    coordinatorQuestion:
      '与质量一起核对物料兼容性、空闲产能与来粮时间。就绪的装载仍需要一张实际的离场回执。',
    predictionHigher: '缓冲范围完全高于常规工作',
    predictionOverlap: '包装范围之间没有清晰分隔',
    predictionLower: '缓冲范围完全低于常规工作',
    predictionUnsure: '我们不确定，保持问题开放',
    evidenceHigher: '缓冲的整个模拟包装范围都高于常规工作。',
    evidenceLower: '缓冲的整个模拟包装范围都低于常规工作。',
    evidenceOverlap: '各模拟包装范围相互重叠，或相差在 0.01 kg 之内。它们不能确立清晰的排序。',
    evidenceUnavailable: '本次预演没有足够的匹配证据来比较包装范围。',
    reflectionUnavailable: '在两个备选方案都有可用证据之前，保持预测开放。',
    reflectionUnsure: '我们保留了开放的预测。请用这些范围讨论接下来测试什么。',
    reflectionSupport: '这些模拟包装范围支持我们的预测。',
    reflectionDiffer: '这些模拟包装范围与我们的预测不一致。',
    questionUnavailable: '在另一次预演之前，需要核验哪个缺失的事实？',
    questionOverlap: '哪个共同限制可能使额外节奏无法增加包装库存？请一起检查供给、设备与质量处置。',
    questionDifference:
      '哪个供给、设备或节奏假设解释了这个差异？在更改工作协议之前，我们会先核验什么？',
  },
  'pt-BR': {
    assumptionHorizon:
      '{minutes} minutos de trabalho = {seconds} segundos da planta em qualquer ritmo de retomada.',
    assumptionEngine:
      'Motor de material real em passos de 0,5 e 0,25 segundo físico; os limites refletem a resolução temporal, não uma confiança estatística.',
    assumptionFixed:
      'Maquinário, receita, intertravamento de qualidade e disposições de origem fixos. Não se simulam chegadas, manutenção, movimentações na doca nem expedição.',
    assumptionPacing:
      'Apenas ritmo da linha inteira; o arranjo com estoque intermediário não acrescenta capacidade física de armazenagem.',
    assumptionDispatch:
      'O limite inferior de saída é zero: nenhuma saída é simulada. O limite superior condicional exige liberação, um caminhão compatível e capacidade de carga disponível dentro do horizonte.',
    missingOrder: 'O pedido ativo e a receita não estão disponíveis.',
    missingExecution: 'Os fatos de execução do pedido estão desatualizados ou não correspondem.',
    missingSession: 'A missão e a sessão de material não correspondem.',
    missingControls:
      'São necessários controles de produção finitos e dentro dos limites, e uma velocidade de retomada positiva (de 9x a 3.600x).',
    missingClock: 'O relógio de material é inválido.',
    missingRelease: 'A liberação direta de qualidade não está disponível.',
    missingLoad: 'A carga direta de expedição não está disponível.',
    missingBuffers: 'Faltam os estoques intermediários obrigatórios das máquinas.',
    invalidMachines: 'Os fatos de capacidade ou de conversão das máquinas são inválidos.',
    invalidConveyors: 'Os fatos dos transportadores são inválidos.',
    invalidGenealogy: 'A genealogia de origem está ausente, desconhecida ou desbalanceada.',
    conservationFailed: 'A conservação da genealogia no motor falhou.',
    rolePacking: 'Ensaque',
    roleQuality: 'Qualidade',
    roleMaintenance: 'Manutenção',
    roleCoordinator: 'Coordenação',
    viewPackingFloor: 'Ver o setor de ensaque',
    viewQualityPoint: 'Ver o ponto de observação da qualidade',
    viewMillingLine: 'Ver a linha de moagem',
    viewShippingDock: 'Ver a doca de expedição',
    stockFact: 'Na captura: {released} kg liberados; {held} kg retidos ou recolhidos.',
    stockUnavailable: 'Não há fatos de estoque capturados utilizáveis.',
    packingQuestion:
      'Pergunte à coordenação quais sacos liberados poderiam de fato ser coletados. Estoque ensacado, por si só, não comprova nenhuma saída.',
    releaseFact: 'Liberação para expedição na captura: {state}.',
    releaseOpen: 'aberta',
    releaseHeld: 'retida',
    releaseUnknown: 'desconhecida',
    releaseUnavailable: 'Não há fatos de liberação capturados utilizáveis.',
    qualityQuestionOpen:
      'Quais verificações de lote e de origem sustentam a liberação, e que nova evidência exigiria uma retenção? Uma visualização não pode certificar um lote.',
    qualityQuestionHeld:
      'Qual verificação qualificada de lote ou de origem é necessária antes de reconsiderar a liberação? Um voto da equipe não pode suspender uma retenção.',
    machineFact: 'Na captura: {processing}/{total} máquinas marcadas como processando.',
    machineUnavailable: 'Não há fatos de máquinas capturados utilizáveis.',
    maintenanceQuestion:
      'Pergunte ao Ensaque onde o material está esperando e depois verifique os estoques intermediários a montante e o abastecimento. Indicadores de processamento, por si sós, não comprovam fluxo de material.',
    truckFact:
      'Caminhão na captura: {status}; {loaded} kg carregados / {capacity} kg de capacidade.',
    truckAway: 'ausente',
    truckLoading: 'carregando',
    truckHeld: 'retido',
    truckReady: 'pronto',
    truckDeparted: 'saiu',
    collectionUnavailable: 'Não há fatos de coleta capturados utilizáveis.',
    coordinatorQuestion:
      'Verifique com a Qualidade a compatibilidade do material, a capacidade livre e o horário da coleta. Uma carga pronta ainda precisa de um comprovante de saída real.',
    predictionHigher: 'Faixa do estoque intermediário inteiramente acima do trabalho comum',
    predictionOverlap: 'Nenhuma separação clara entre as faixas de ensaque',
    predictionLower: 'Faixa do estoque intermediário inteiramente abaixo do trabalho comum',
    predictionUnsure: 'Não temos certeza; vamos manter a pergunta em aberto',
    evidenceHigher:
      'Toda a faixa de ensaque modelada do estoque intermediário fica acima do trabalho comum.',
    evidenceLower:
      'Toda a faixa de ensaque modelada do estoque intermediário fica abaixo do trabalho comum.',
    evidenceOverlap:
      'As faixas de ensaque modeladas se sobrepõem ou ficam a até 0,01 kg uma da outra. Elas não estabelecem uma ordem clara.',
    evidenceUnavailable:
      'Este ensaio não tem evidências pareadas suficientes para comparar as faixas de ensaque.',
    reflectionUnavailable:
      'Mantenham o palpite em aberto até que as duas alternativas tenham evidências utilizáveis.',
    reflectionUnsure:
      'Deixamos o palpite em aberto. Usem estas faixas para discutir o que testar em seguida.',
    reflectionSupport: 'Estas faixas de ensaque modeladas sustentam nosso palpite.',
    reflectionDiffer: 'Estas faixas de ensaque modeladas divergem do nosso palpite.',
    questionUnavailable: 'Qual fato ausente precisa ser verificado antes de outro ensaio?',
    questionOverlap:
      'Que limite comum poderia impedir que o ritmo extra acrescente estoque ensacado? Verifiquem juntos o abastecimento, as máquinas e as disposições de qualidade.',
    questionDifference:
      'Qual premissa de abastecimento, de máquina ou de ritmo explica a diferença, e o que verificaríamos antes de mudar o acordo de trabalho?',
  },
});
