import { defineMessages } from '../../../i18n';

const PT_GRAIN: Record<string, string> = {
  wheat_grain: 'grão de trigo',
  corn_grain: 'grão de milho',
};

const ZH_GRAIN: Record<string, string> = {
  wheat_grain: '小麦粒',
  corn_grain: '玉米粒',
};

export const deliveryJourneyMessages = defineMessages({
  en: {
    dueNow: 'Due now (simulated)',
    durationHours: '{hours}h {minutes}m',
    durationMinutes: '{minutes}m',
    overdueBy: 'Overdue by {duration} (simulated)',
    dueIn: 'Due in {duration} (simulated)',
    chooseTitle: 'Choose a delivery',
    chooseDetail: 'Choose an available customer in Your shift commitment in Overview.',
    qualityTarget: 'Recipe quality target: {minimum}/100.',
    fulfilledTitle: 'Delivery fulfilled',
    repairTitle: 'Repair {machine}',
    repairDetail:
      '{machine} has broken down and its part of the line has stopped. Open Mill Overview, Maintenance: dispatch service on work order {workOrderId}, complete and verify the repair, then request a controlled restart.',
    fulfilledDetail:
      '{kg} kg of {product} dispatched for {customer} in recorded manifests. Departed manifests credit this customer. Inspection is a separate milestone.',
    inspectTitle: 'Inspect the line',
    inspectDetail:
      'Select a silo, roller mill, plansifter or packer in the scene, or use Inspect a roller mill below. Read its status and buffers before changing the line. Full output buffers can reveal a downstream bottleneck.',
    returnTitle: 'Return to your commitment',
    returnDetail:
      'A different order is active. Choose this customer in Your shift commitment in Overview to continue its live route.',
    checkTitle: 'Check {product}',
    qualityHoldDetail:
      '{qualityTarget} {reason} Review the QC controls in Overview and resolve the release condition before loading.',
    qualityHoldUnknown: 'Dispatch quality release is unavailable.',
    departureRule:
      'Only a departed manifest credits this customer; packed {product} alone does not.',
    packedRest:
      ' The rest of this order is already packed; the line rests until the next truck collects it.',
    packedRestNext:
      ' The rest of this order is already packed and waits for the next truck, so the line has moved on to the next commitment, for {customer}.',
    tripStatus: (p: { loads: number; loadsText: string; capacity: string; left: string }) =>
      ` At least ${p.loadsText} ${p.loads === 1 ? 'load' : 'loads'} needed (up to ${p.capacity} kg each); ${p.left} kg still to ship.`,
    nextTruckOnWay: ' The next truck is on its way to the dock.',
    nextTruckDue: ' The next truck is due on site in {minutes} min (simulated).',
    readyToLoadTitle: 'Ready for the shipping truck',
    releasedWaiting: '{kg} kg of released {product} is waiting at shipping.',
    loadingTitle: 'Loading the shipping truck',
    readyToDepartTitle: 'Ready to depart',
    loadingDetail: 'Follow the pallets from the packing line to the docked truck.',
    readyToDepartDetail: 'The outbound load is ready. Watch its departure from the shipping bay.',
    departedTitle: 'Truck departed',
    departedDetail:
      '{lastKg} kg left the shipping bay. Customer receipt: {shippedKg} / {requiredKg} kg for {customer}.',
    grain: (p: { material: string }) => p.material.replace('_', ' '),
    qualityRule: '{qualityTarget} Conforming output must pass QC before loading.',
    prepareTitle: 'Prepare {product}',
    planningDetail:
      "Scheduled grain: {grain}. {quality} Resume the shift to refresh this customer's stock and line setpoint.",
    followTitle: 'Follow the grain',
    followDetail:
      'Source inventory: {sourceKg} kg of {grain}. Line setpoint: {setpoint}%. Released {product}: {releasedKg} kg. {quality} Open SCADA for live line telemetry, or select a machine to read its buffers.',
  },
  zh: {
    dueNow: '现在到期（模拟）',
    durationHours: '{hours} 小时 {minutes} 分钟',
    durationMinutes: '{minutes} 分钟',
    overdueBy: '已逾期 {duration}（模拟）',
    dueIn: '{duration}后到期（模拟）',
    chooseTitle: '选择一个交付',
    chooseDetail: '请在概览的“你的班次承诺”中选择一位可用客户。',
    qualityTarget: '配方质量目标：{minimum}/100。',
    fulfilledTitle: '交付已完成',
    repairTitle: '维修 {machine}',
    repairDetail:
      '{machine} 已故障停机，它负责的产线段已停止。请打开磨坊概览的“维护”：在工单 {workOrderId} 上派发维修，完成并核验维修后，再申请受控重启。',
    fulfilledDetail:
      '已按记录在案的运单为 {customer} 发运 {kg} kg {product}。只有已离场的运单才计入该客户。检查是单独的里程碑。',
    inspectTitle: '检查产线',
    inspectDetail:
      '在场景中选择筒仓、磨辊机、平筛或包装线，或使用下方的“检查一台磨辊机”。改变产线前，先看设备的状态与缓冲。出料缓冲全满，可能说明下游有瓶颈。',
    returnTitle: '回到你的承诺',
    returnDetail:
      '当前活动的是另一个订单。请在概览的“你的班次承诺”中选择该客户，继续它的实时路线。',
    checkTitle: '检查 {product}',
    qualityHoldDetail: '{qualityTarget} {reason}请在概览中查看质检控制项，并在装载前解除放行条件。',
    qualityHoldUnknown: '发运质量放行暂不可用。',
    departureRule: '只有已离场的运单才计入该客户；仅包装好 {product} 并不算数。',
    packedRest: ' 本订单其余部分已包装完毕；产线待机，直到下一辆卡车前来取货。',
    packedRestNext:
      ' 本订单其余部分已包装完毕，正在等待下一辆卡车；产线已转入 {customer} 的下一个承诺。',
    tripStatus: (p: { loads: number; loadsText: string; capacity: string; left: string }) =>
      ` 至少还需 ${p.loadsText} 车（每车最多 ${p.capacity} kg）；还需发运 ${p.left} kg。`,
    nextTruckOnWay: ' 下一辆卡车正在驶往装卸区。',
    nextTruckDue: ' 下一辆卡车将在 {minutes} 分钟后到场（模拟）。',
    readyToLoadTitle: '已就绪，等待发运卡车',
    releasedWaiting: '{kg} kg 已放行的 {product} 正在发运装卸区等候。',
    loadingTitle: '正在装载发运卡车',
    readyToDepartTitle: '准备离场',
    loadingDetail: '跟着托盘，从包装线一路到停靠的卡车。',
    readyToDepartDetail: '外发货物已就绪。看着它驶出发运装卸区。',
    departedTitle: '卡车已离场',
    departedDetail: '{lastKg} kg 已驶出发运装卸区。{customer} 已收到 {shippedKg}/{requiredKg} kg。',
    grain: (p: { material: string }) => ZH_GRAIN[p.material] ?? p.material.replace('_', ' '),
    qualityRule: '{qualityTarget} 合格产出必须先通过质检，才能装载。',
    prepareTitle: '准备 {product}',
    planningDetail: '计划谷物：{grain}。{quality}恢复班次运行，刷新该客户的库存与产线设定值。',
    followTitle: '跟随谷物',
    followDetail:
      '原料库存：{grain} 共 {sourceKg} kg。产线设定值：{setpoint}%。已放行 {product}：{releasedKg} kg。{quality}打开 SCADA 查看产线实时遥测，或选择一台设备查看它的缓冲。',
  },
  'pt-BR': {
    dueNow: 'Vence agora (tempo simulado)',
    durationHours: '{hours}h {minutes}min',
    durationMinutes: '{minutes}min',
    overdueBy: 'Atrasado em {duration} (tempo simulado)',
    dueIn: 'Vence em {duration} (tempo simulado)',
    chooseTitle: 'Escolha uma entrega',
    chooseDetail: 'Escolha um cliente disponível em Seu compromisso do turno, na Visão geral.',
    qualityTarget: 'Meta de qualidade da receita: {minimum}/100.',
    fulfilledTitle: 'Entrega concluída',
    repairTitle: 'Reparar {machine}',
    repairDetail:
      'A máquina {machine} entrou em pane e a parte dela na linha parou. Abra Visão geral do moinho, Manutenção: envie a equipe na ordem de serviço {workOrderId}, conclua e verifique o reparo e, depois, solicite um reinício controlado.',
    fulfilledDetail:
      '{kg} kg de {product} expedidos para {customer} em romaneios registrados. Os romaneios com saída registrada são creditados a este cliente. A inspeção é uma etapa à parte.',
    inspectTitle: 'Inspecione a linha',
    inspectDetail:
      'Selecione um silo, moinho de rolos, plansifter ou ensacadeira na cena, ou use Inspecionar um moinho de rolos abaixo. Leia o status e os estoques intermediários antes de alterar a linha. Estoques intermediários de saída cheios podem revelar um gargalo mais adiante no fluxo.',
    returnTitle: 'Volte ao seu compromisso',
    returnDetail:
      'Outro pedido está ativo. Escolha este cliente em Seu compromisso do turno, na Visão geral, para continuar a rota ao vivo dele.',
    checkTitle: 'Verifique {product}',
    qualityHoldDetail:
      '{qualityTarget} {reason} Revise os controles do CQ na Visão geral e resolva a condição de liberação antes do carregamento.',
    qualityHoldUnknown: 'A liberação de qualidade para expedição não está disponível.',
    departureRule:
      'Só um romaneio com saída registrada é creditado a este cliente; apenas ensacar {product} não basta.',
    packedRest:
      ' O restante deste pedido já está ensacado; a linha fica parada até o próximo caminhão buscá-lo.',
    packedRestNext:
      ' O restante deste pedido já está ensacado e aguarda o próximo caminhão, então a linha já passou ao próximo compromisso, para {customer}.',
    tripStatus: (p: { loads: number; loadsText: string; capacity: string; left: string }) =>
      ` ${p.loads === 1 ? 'É necessária pelo menos' : 'São necessárias pelo menos'} ${p.loadsText} ${p.loads === 1 ? 'carga' : 'cargas'} (até ${p.capacity} kg cada); faltam expedir ${p.left} kg.`,
    nextTruckOnWay: ' O próximo caminhão está a caminho da doca.',
    nextTruckDue: ' O próximo caminhão chega ao pátio em {minutes} min (tempo simulado).',
    readyToLoadTitle: 'Pronto para o caminhão de expedição',
    releasedWaiting: '{kg} kg liberados de {product} aguardam na expedição.',
    loadingTitle: 'Carregando o caminhão de expedição',
    readyToDepartTitle: 'Pronto para sair',
    loadingDetail: 'Acompanhe os paletes da linha de ensaque até o caminhão na doca.',
    readyToDepartDetail:
      'A carga de saída está pronta. Acompanhe a saída dela pela área de expedição.',
    departedTitle: 'Caminhão saiu',
    departedDetail:
      '{lastKg} kg saíram da área de expedição. Creditado ao cliente {customer}: {shippedKg} / {requiredKg} kg.',
    grain: (p: { material: string }) => PT_GRAIN[p.material] ?? p.material.replace('_', ' '),
    qualityRule:
      '{qualityTarget} A produção conforme precisa passar pelo CQ antes do carregamento.',
    prepareTitle: 'Prepare {product}',
    planningDetail:
      'Grão programado: {grain}. {quality} Retome o turno para atualizar o estoque deste cliente e o setpoint da linha.',
    followTitle: 'Acompanhe o grão',
    followDetail:
      'Estoque de origem: {sourceKg} kg de {grain}. Setpoint da linha: {setpoint}%. Estoque liberado de {product}: {releasedKg} kg. {quality} Abra o SCADA para ver a telemetria da linha ao vivo, ou selecione uma máquina para ler os estoques intermediários dela.',
  },
});
