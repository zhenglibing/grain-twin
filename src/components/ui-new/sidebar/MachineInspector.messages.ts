import { defineMessages, upperFirst } from '../../../i18n';

const PT_STATUS: Record<string, string> = {
  running: 'em operação',
  idle: 'em espera',
  warning: 'em alerta',
  critical: 'em estado crítico',
};

const PT_MAINTENANCE_TYPES: Record<string, string> = {
  preventive: 'preventiva',
  corrective: 'corretiva',
  emergency: 'emergencial',
};

const PT_PARTS: Record<string, string> = {
  filters: 'filtros',
  bearings: 'rolamentos',
  belts: 'correias',
  sensors: 'sensores',
  motors: 'motores',
};

const ZH_STATUS: Record<string, string> = {
  running: '运行中',
  idle: '空闲',
  warning: '警告',
  critical: '危急',
};

const ZH_MAINTENANCE_TYPES: Record<string, string> = {
  preventive: '预防性',
  corrective: '纠正性',
  emergency: '紧急',
};

const ZH_PARTS: Record<string, string> = {
  filters: '滤芯',
  bearings: '轴承',
  belts: '皮带',
  sensors: '传感器',
  motors: '电机',
};

export const machineInspectorMessages = defineMessages({
  en: {
    criticalRestartGuidance:
      'Critical fault. Restart is locked until maintenance or a repair clears it.',
    repairGuidance:
      'Active repair work order. Use Mill Overview to dispatch service, complete and verify the repair, then request a controlled restart.',
    warningGuidance: "Something's off. Check the metrics and maintenance log.",

    flowUnavailable: 'Flow unavailable',
    storageInventory: 'Storage inventory',
    waitingForMaterial: 'Waiting for material',
    waitingForOutputSpace: 'Waiting for output space',
    processingStopped: 'Processing stopped',
    materialReady: 'Material ready',

    // Status, maintenance type and part ids are store values shown as words.
    status: (p: { status: string }) => p.status,
    statusLabel: (p: { status: string }) => `Machine status: ${p.status}`,
    maintenanceType: (p: { type: string }) => p.type,

    feedRate: 'Feed rate',
    rpm: 'RPM',
    motorLoad: 'Motor load',
    temperature: 'Temperature',
    vibration: 'Vibration',
    inspect: 'Inspect',
    materialFlowEvidence: 'Material-flow evidence',
    inputBuffer: 'Input buffer',
    outputBuffer: 'Output buffer',

    hideLogs: 'Hide Maintenance Logs',
    viewLogs: 'View Maintenance Logs',
    outOfParts: 'Out of spare parts — maintenance needs one to proceed.',
    wearAndService: 'Wear and service',
    wear: 'Wear',
    wearThresholds:
      'Warning at {warning}%, breakdown at {breakdown}%. Efficiency {efficiency}%. Maintenance lowers wear; a restart does not.',
    maintenanceCost: (p: { part: string; count: string }) =>
      `Uses 1 spare part: ${p.part} (${p.count} in stock).`,
    maintenanceTitle: (p: { part: string }) =>
      `Reduces machine wear (consumes 1 spare part: ${p.part})`,
    maintenanceBelowMinimum:
      'Not needed yet: wear {wear}% is below the {minimum}% service minimum, so the unit runs at full efficiency.',
    performingMaintenance: 'Performing Maintenance...',
    performMaintenance: 'Perform Maintenance',
    restarting: 'Restarting...',
    restartUnit: 'Restart Unit',
    recentMaintenance: 'Recent Maintenance',
    noMaintenance: 'No maintenance on record. Either it is new, or it has been very lucky.',
    serviceUnit: 'Service unit: {unit}',
    focusMachine: 'Focus machine',

    noPartsTitle: 'No Spare Parts',
    noPartsMessage:
      'Cannot perform maintenance on {name}: parts inventory is empty. Wait for a parts delivery.',
    maintenanceNotNeededTitle: 'Maintenance Not Needed',
    maintenanceNotNeededMessage: '{name}: {message}',
    machineRecoveredTitle: 'Machine Recovered',
    machineRestartedTitle: 'Machine Restarted',
    machineRecoveredMessage: '{name} has been restarted and metrics reset to healthy values.',
    machineRestartedMessage: '{name} has been successfully restarted.',
    machineRestartedWornTitle: 'Restarted, Still Worn',
    machineRestartedWornMessage:
      '{name} restarted, but wear is still {wear}% (it warns from {threshold}%). A restart does not reduce wear: use Perform Maintenance.',

    trendLabel: 'Recorded feed rate trend in {unit}',
    trendWaiting: 'Waiting for the historian to collect enough to draw a line.',
    trendCaption: 'Feed rate ({unit}), recorded samples',
  },
  zh: {
    criticalRestartGuidance: '危急故障。维护或维修清除故障前，重启处于锁定状态。',
    repairGuidance: '维修工单进行中。请使用磨坊概览派发维修，完成并核验维修后，再申请受控重启。',
    warningGuidance: '情况有异。请查看指标和维护记录。',

    flowUnavailable: '物料流不可用',
    storageInventory: '库存量',
    waitingForMaterial: '等待物料',
    waitingForOutputSpace: '等待出料空间',
    processingStopped: '加工已停止',
    materialReady: '物料就绪',

    // Status, maintenance type and part ids are store values shown as words.
    status: (p: { status: string }) => ZH_STATUS[p.status] ?? p.status,
    statusLabel: (p: { status: string }) => `设备状态：${ZH_STATUS[p.status] ?? p.status}`,
    maintenanceType: (p: { type: string }) => ZH_MAINTENANCE_TYPES[p.type] ?? p.type,

    feedRate: '喂料速率',
    rpm: '转速',
    motorLoad: '电机负载',
    temperature: '温度',
    vibration: '振动',
    inspect: '检查',
    materialFlowEvidence: '物料流证据',
    inputBuffer: '进料缓冲',
    outputBuffer: '出料缓冲',

    hideLogs: '隐藏维护记录',
    viewLogs: '查看维护记录',
    outOfParts: '备件不足——维护需要一件备件才能继续。',
    wearAndService: '磨损与维护',
    wear: '磨损',
    wearThresholds:
      '{warning}% 时警告，{breakdown}% 时故障停机。效率 {efficiency}%。维护可降低磨损，重启不能。',
    maintenanceCost: (p: { part: string; count: string }) =>
      `使用 1 件备件：${ZH_PARTS[p.part] ?? p.part}（库存 ${p.count} 件）。`,
    maintenanceTitle: (p: { part: string }) =>
      `降低设备磨损（消耗 1 件备件：${ZH_PARTS[p.part] ?? p.part}）`,
    maintenanceBelowMinimum:
      '暂不需要：磨损 {wear}% 低于 {minimum}% 的维护下限，设备仍以全效率运行。',
    performingMaintenance: '正在执行维护……',
    performMaintenance: '执行维护',
    restarting: '正在重启……',
    restartUnit: '重启设备',
    recentMaintenance: '近期维护',
    noMaintenance: '暂无维护记录。设备要么是新的，要么一直很走运。',
    serviceUnit: '维护单位：{unit}',
    focusMachine: '聚焦设备',

    noPartsTitle: '无备件',
    noPartsMessage: '无法对 {name} 执行维护：备件库存为空。请等待备件到货。',
    maintenanceNotNeededTitle: '无需维护',
    maintenanceNotNeededMessage: '{name}：{message}',
    machineRecoveredTitle: '设备已恢复',
    machineRestartedTitle: '设备已重启',
    machineRecoveredMessage: '{name} 已重启，指标已恢复健康值。',
    machineRestartedMessage: '{name} 已成功重启。',
    machineRestartedWornTitle: '已重启，仍有磨损',
    machineRestartedWornMessage:
      '{name} 已重启，但磨损仍为 {wear}%（自 {threshold}% 起警告）。重启不会降低磨损：请使用「执行维护」。',

    trendLabel: '以 {unit} 记录的喂料速率趋势',
    trendWaiting: '等待历史库采集足够数据以绘制曲线。',
    trendCaption: '喂料速率（{unit}），记录样本',
  },
  'pt-BR': {
    criticalRestartGuidance:
      'Falha crítica. O reinício fica bloqueado até que uma manutenção ou um reparo resolva a falha.',
    repairGuidance:
      'Ordem de serviço de reparo ativa. Use a Visão geral do moinho para enviar a equipe de manutenção, concluir e verificar o reparo e, depois, solicitar um reinício controlado.',
    warningGuidance: 'Algo não está certo. Confira as métricas e o registro de manutenção.',

    flowUnavailable: 'Fluxo indisponível',
    storageInventory: 'Estoque armazenado',
    waitingForMaterial: 'Aguardando material',
    waitingForOutputSpace: 'Aguardando espaço na saída',
    processingStopped: 'Processamento parado',
    materialReady: 'Material disponível',

    status: (p: { status: string }) => upperFirst(PT_STATUS[p.status] ?? p.status),
    statusLabel: (p: { status: string }) => `Status da máquina: ${PT_STATUS[p.status] ?? p.status}`,
    maintenanceType: (p: { type: string }) => upperFirst(PT_MAINTENANCE_TYPES[p.type] ?? p.type),

    feedRate: 'Vazão de alimentação',
    rpm: 'RPM',
    motorLoad: 'Carga do motor',
    temperature: 'Temperatura',
    vibration: 'Vibração',
    inspect: 'Inspecionar',
    materialFlowEvidence: 'Evidências do fluxo de material',
    inputBuffer: 'Estoque intermediário de entrada',
    outputBuffer: 'Estoque intermediário de saída',

    hideLogs: 'Ocultar registros de manutenção',
    viewLogs: 'Ver registros de manutenção',
    outOfParts: 'Sem peças de reposição: a manutenção precisa de uma para continuar.',
    wearAndService: 'Desgaste e manutenção',
    wear: 'Desgaste',
    wearThresholds:
      'Alerta em {warning}%, pane em {breakdown}%. Eficiência de {efficiency}%. A manutenção reduz o desgaste; o reinício, não.',
    maintenanceCost: (p: { part: string; count: string }) =>
      `Usa 1 peça de reposição: ${PT_PARTS[p.part] ?? p.part} (${p.count} em estoque).`,
    maintenanceTitle: (p: { part: string }) =>
      `Reduz o desgaste da máquina (consome 1 peça de reposição: ${PT_PARTS[p.part] ?? p.part})`,
    maintenanceBelowMinimum:
      'Ainda não é necessária: o desgaste de {wear}% está abaixo do mínimo de {minimum}% para manutenção, e a unidade opera com eficiência total.',
    performingMaintenance: 'Fazendo manutenção...',
    performMaintenance: 'Fazer manutenção',
    restarting: 'Reiniciando...',
    restartUnit: 'Reiniciar unidade',
    recentMaintenance: 'Manutenções recentes',
    noMaintenance: 'Nenhuma manutenção registrada. Ou a máquina é nova, ou tem tido muita sorte.',
    serviceUnit: 'Unidade de serviço: {unit}',
    focusMachine: 'Focar na máquina',

    noPartsTitle: 'Sem peças de reposição',
    noPartsMessage:
      'Não é possível fazer manutenção em {name}: o estoque de peças está vazio. Aguarde uma entrega de peças.',
    maintenanceNotNeededTitle: 'Manutenção desnecessária',
    maintenanceNotNeededMessage: '{name}: {message}',
    machineRecoveredTitle: 'Máquina recuperada',
    machineRestartedTitle: 'Máquina reiniciada',
    machineRecoveredMessage:
      '{name}: reinício concluído e métricas redefinidas para valores saudáveis.',
    machineRestartedMessage: '{name}: reinício concluído com sucesso.',
    machineRestartedWornTitle: 'Reiniciada, ainda desgastada',
    machineRestartedWornMessage:
      '{name} reiniciou, mas o desgaste continua em {wear}% (o alerta começa em {threshold}%). Reiniciar não reduz o desgaste: use Fazer manutenção.',

    trendLabel: 'Tendência registrada da vazão de alimentação em {unit}',
    trendWaiting: 'Aguardando o histórico reunir dados suficientes para traçar uma linha.',
    trendCaption: 'Vazão de alimentação ({unit}), amostras registradas',
  },
});
