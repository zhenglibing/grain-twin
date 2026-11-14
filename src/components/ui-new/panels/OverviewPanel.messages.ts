import { defineMessages, upperFirst } from '../../../i18n';

/*
 * Store enums (run window, weather, manifest kind, disposition, dock status,
 * material type) render as their raw value in English, exactly as before; the
 * CSS does the capitalising. pt-BR maps known values and passes unknown ones
 * through unchanged.
 */
const PT_RUN_WINDOW: Record<string, string> = {
  morning: 'manhã',
  afternoon: 'tarde',
  night: 'noite',
};
const PT_WEATHER: Record<string, string> = {
  clear: 'limpo',
  cloudy: 'nublado',
  rain: 'chuva',
  storm: 'tempestade',
};
const PT_MANIFEST_KIND: Record<string, string> = {
  receiving: 'recebimento',
  shipping: 'expedição',
};
export const PT_DISPOSITION: Record<string, string> = {
  released: 'liberado',
  hold: 'retido',
  recalled: 'recolhido',
  shipped: 'expedido',
};
const PT_DOCK_STATUS: Record<string, string> = {
  clear: 'livre',
  arriving: 'chegando',
  loading: 'carregando',
  departing: 'saindo',
};
export const PT_MATERIAL: Record<string, string> = {
  wheat_grain: 'grão de trigo',
  corn_grain: 'grão de milho',
  flour: 'farinha',
  bran: 'farelo',
  middlings: 'farelinho',
  semolina: 'semolina',
};
const ZH_RUN_WINDOW: Record<string, string> = {
  morning: '清晨',
  afternoon: '下午',
  night: '夜间',
};
const ZH_WEATHER: Record<string, string> = {
  clear: '晴',
  cloudy: '多云',
  rain: '雨',
  storm: '风暴',
};
const ZH_MANIFEST_KIND: Record<string, string> = {
  receiving: '接收',
  shipping: '发运',
};
export const ZH_DISPOSITION: Record<string, string> = {
  released: '已放行',
  hold: '扣留',
  recalled: '已召回',
  shipped: '已发运',
};
const ZH_DOCK_STATUS: Record<string, string> = {
  clear: '空闲',
  arriving: '到达中',
  loading: '装载中',
  departing: '离开中',
};
export const ZH_MATERIAL: Record<string, string> = {
  wheat_grain: '小麦粒',
  corn_grain: '玉米粒',
  flour: '面粉',
  bran: '麸皮',
  middlings: '次粉',
  semolina: '粗粒粉',
};

export const overviewPanelMessages = defineMessages({
  en: {
    paused: 'PAUSED',
    runWindow: 'Run window',
    runWindowValue: (p: { value: string }) => p.value,

    materialTraceability: 'Material Traceability',
    received: 'Received',
    shipped: 'Shipped',
    awaitingFirstTransfer: 'Awaiting first dock transfer',
    latestManifests: 'Latest material manifests',
    manifestKind: (p: { value: string }) => p.value,
    material: (p: { value: string }) => p.value.replaceAll('_', ' '),

    batchGenealogy: 'Batch genealogy and quality',
    lotSummary: '{lots} source lots, {batches} production batches',
    genealogyBalance: 'Genealogy {sign}{value} kg',
    firstBatch: 'Packing is building the first traceable batch.',
    batchListLabel: 'Held and investigated batches, then recent production',
    batchAvailable: '{material}, {kg} kg available',
    disposition: (p: { value: string }) => p.value,
    hideTrace: 'Hide trace',
    traceBatch: 'Trace batch',
    testBatch: 'Test batch',
    placeHold: 'Place hold',
    retestAndRelease: 'Retest and release',
    recallBatch: 'Recall batch',
    recallConfirm:
      'A recall cannot be undone. {kg} kg of {material} in this batch is written off as waste and never ships. Other released batches keep shipping.',
    confirmRecall: 'Confirm recall',
    cancelRecall: 'Cancel',
    writtenOff: '{kg} kg written off as waste',
    investigationActive: 'Investigation active',
    traceFor: 'Trace for {id}',
    upstreamProvenance: 'Upstream provenance',
    pathJoiner: ' to ',

    noteRetest: 'Conforming retest completed after corrective investigation',
    noteRoutineTest: 'Routine batch release test completed',
    noteRetestReleased: 'Conforming retest released the investigated scope',
    noteRecallInvestigation: 'Targeted batch recall investigation',
    noteRecalled: 'Affected batch recalled and isolated from dispatch',
    noteHold: 'Automated targeted quality hold initiated',

    productionSummary: 'Production Summary',
    throughput: 'Throughput',
    bagsPerHr: 'bags/hr',
    efficiency: 'Efficiency',
    uptime: 'Uptime',
    quality: 'Quality',
    dailyTarget: 'Daily Target',
    percentComplete: '{value}% complete',

    machineStatus: 'Machine Status',
    running: 'Running',
    warning: 'Warning',
    critical: 'Critical',
    idle: 'Idle',

    weather: 'Weather',
    weatherValue: (p: { value: string }) => p.value,
    siteMode: 'Site Mode',
    siteModeValue: 'Staffed · Autonomous logistics',

    safetyScore: 'Safety Score',
    nearMisses: 'Near Misses',
    safetyStops: 'Safety Stops',
    daysSafe: 'Days Safe',

    dockStatus: 'Dock Status',
    receiving: 'Receiving',
    shipping: 'Shipping',
    dockState: (p: { value: string }) => p.value,
    unloading: 'Unloading',
    nextTruck: 'Next truck in {minutes} min',
    eta: 'ETA: {minutes} min',

    planLogistics: 'Plan logistics',
    predictiveMaintenance: 'Predictive maintenance',
    maintenanceSection: 'Maintenance and repairs',
    loadingMaintenance: 'Loading maintenance panel...',
    totalBagsProduced: 'Total Bags Produced',

    quickActions: 'Quick Actions',
    achievements: 'Achievements',
    replayHistory: 'Replay History',
    replay: 'Replay',
    miniMap: 'Mini-map',
    screenshot: 'Screenshot',
    exportReport: 'Export Report',
    export: 'Export',
  },
  zh: {
    paused: '已暂停',
    runWindow: '运行时段',
    runWindowValue: (p: { value: string }) => ZH_RUN_WINDOW[p.value] ?? p.value,

    materialTraceability: '物料追溯',
    received: '已接收',
    shipped: '已发运',
    awaitingFirstTransfer: '等待首次装卸区转运',
    latestManifests: '最新物料运单',
    manifestKind: (p: { value: string }) => ZH_MANIFEST_KIND[p.value] ?? p.value,
    material: (p: { value: string }) => ZH_MATERIAL[p.value] ?? p.value.replaceAll('_', ' '),

    batchGenealogy: '批次谱系与质量',
    lotSummary: '{lots} 个原料批，{batches} 个生产批次',
    genealogyBalance: '谱系 {sign}{value} kg',
    firstBatch: '包装线正在建立首个可追溯批次。',
    batchListLabel: '扣留与调查中的批次，其后为近期生产',
    batchAvailable: '{material}，可用 {kg} kg',
    disposition: (p: { value: string }) => ZH_DISPOSITION[p.value] ?? p.value,
    hideTrace: '隐藏追溯',
    traceBatch: '追溯批次',
    testBatch: '检测批次',
    placeHold: '扣留',
    retestAndRelease: '复检并放行',
    recallBatch: '召回批次',
    recallConfirm:
      '召回无法撤销。该批次中 {kg} kg 的 {material} 将报废核销，永不发运。其他已放行批次继续发运。',
    confirmRecall: '确认召回',
    cancelRecall: '取消',
    writtenOff: '{kg} kg 已报废核销',
    investigationActive: '调查进行中',
    traceFor: '追溯 {id}',
    upstreamProvenance: '上游来源',
    pathJoiner: ' 至 ',

    noteRetest: '纠正性调查后完成合格复检',
    noteRoutineTest: '例行批次放行检测已完成',
    noteRetestReleased: '合格复检放行了调查范围',
    noteRecallInvestigation: '定向批次召回调查',
    noteRecalled: '受影响批次已召回并隔离出发运',
    noteHold: '已自动发起定向质量扣留',

    productionSummary: '生产摘要',
    throughput: '产量',
    bagsPerHr: '袋/时',
    efficiency: '效率',
    uptime: '运行率',
    quality: '质量',
    dailyTarget: '日目标',
    percentComplete: '已完成 {value}%',

    machineStatus: '设备状态',
    running: '运行中',
    warning: '警告',
    critical: '危急',
    idle: '空闲',

    weather: '天气',
    weatherValue: (p: { value: string }) => ZH_WEATHER[p.value] ?? p.value,
    siteMode: '厂区模式',
    siteModeValue: '有人值守 · 自主物流',

    safetyScore: '安全评分',
    nearMisses: '未遂事件',
    safetyStops: '安全停机',
    daysSafe: '安全天数',

    dockStatus: '装卸区状态',
    receiving: '接收',
    shipping: '发运',
    dockState: (p: { value: string }) => ZH_DOCK_STATUS[p.value] ?? p.value,
    unloading: '卸货中',
    nextTruck: '{minutes} 分钟后下一辆卡车',
    eta: '预计 {minutes} 分钟',

    planLogistics: '规划物流',
    predictiveMaintenance: '预测性维护',
    maintenanceSection: '维护与维修',
    loadingMaintenance: '正在加载维护面板……',
    totalBagsProduced: '累计生产袋数',

    quickActions: '快捷操作',
    achievements: '成就',
    replayHistory: '回放历史',
    replay: '回放',
    miniMap: '小地图',
    screenshot: '截图',
    exportReport: '导出报告',
    export: '导出',
  },
  'pt-BR': {
    paused: 'PAUSADO',
    runWindow: 'Janela de operação',
    runWindowValue: (p: { value: string }) => upperFirst(PT_RUN_WINDOW[p.value] ?? p.value),

    materialTraceability: 'Rastreabilidade de materiais',
    received: 'Recebido',
    shipped: 'Expedido',
    awaitingFirstTransfer: 'Aguardando a primeira transferência na doca',
    latestManifests: 'Romaneios de material mais recentes',
    manifestKind: (p: { value: string }) => PT_MANIFEST_KIND[p.value] ?? p.value,
    material: (p: { value: string }) => PT_MATERIAL[p.value] ?? p.value.replaceAll('_', ' '),

    batchGenealogy: 'Genealogia e qualidade dos lotes',
    lotSummary: '{lots} lotes de origem, {batches} lotes de produção',
    genealogyBalance: 'Genealogia {sign}{value} kg',
    firstBatch: 'O ensaque está formando o primeiro lote rastreável.',
    batchListLabel: 'Lotes retidos e em investigação, depois a produção recente',
    batchAvailable: '{material}, {kg} kg disponíveis',
    disposition: (p: { value: string }) => PT_DISPOSITION[p.value] ?? p.value,
    hideTrace: 'Ocultar rastreio',
    traceBatch: 'Rastrear lote',
    testBatch: 'Testar lote',
    placeHold: 'Reter lote',
    retestAndRelease: 'Retestar e liberar',
    recallBatch: 'Recolher lote',
    recallConfirm:
      'O recolhimento não pode ser desfeito. {kg} kg de {material} deste lote são baixados como perda e nunca serão expedidos. Os outros lotes liberados continuam sendo expedidos.',
    confirmRecall: 'Confirmar recolhimento',
    cancelRecall: 'Cancelar',
    writtenOff: '{kg} kg baixados como perda',
    investigationActive: 'Investigação em andamento',
    traceFor: 'Rastreio de {id}',
    upstreamProvenance: 'Procedência a montante',
    pathJoiner: ' para ',

    noteRetest: 'Reteste conforme concluído após investigação corretiva',
    noteRoutineTest: 'Teste de rotina para liberação do lote concluído',
    noteRetestReleased: 'O reteste conforme liberou o escopo investigado',
    noteRecallInvestigation: 'Investigação para recolhimento direcionado do lote',
    noteRecalled: 'Lote afetado recolhido e isolado da expedição',
    noteHold: 'Retenção de qualidade direcionada iniciada automaticamente',

    productionSummary: 'Resumo da produção',
    throughput: 'Vazão',
    bagsPerHr: 'sacos/h',
    efficiency: 'Eficiência',
    uptime: 'Disponibilidade',
    quality: 'Qualidade',
    dailyTarget: 'Meta diária',
    percentComplete: '{value}% concluído',

    machineStatus: 'Status das máquinas',
    running: 'Ativas',
    warning: 'Em alerta',
    critical: 'Críticas',
    idle: 'Ociosas',

    weather: 'Clima',
    weatherValue: (p: { value: string }) => upperFirst(PT_WEATHER[p.value] ?? p.value),
    siteMode: 'Modo da unidade',
    siteModeValue: 'Com equipe · Logística autônoma',

    safetyScore: 'Índice de segurança',
    nearMisses: 'Quase acidentes',
    safetyStops: 'Paradas de segurança',
    daysSafe: 'Dias sem ocorrência',

    dockStatus: 'Status das docas',
    receiving: 'Recebimento',
    shipping: 'Expedição',
    dockState: (p: { value: string }) => upperFirst(PT_DOCK_STATUS[p.value] ?? p.value),
    unloading: 'Descarregando',
    nextTruck: 'Próximo caminhão em {minutes} min',
    eta: 'Previsão: {minutes} min',

    planLogistics: 'Planejar logística',
    predictiveMaintenance: 'Manutenção preditiva',
    maintenanceSection: 'Manutenção e reparos',
    loadingMaintenance: 'Carregando o painel de manutenção...',
    totalBagsProduced: 'Total de sacos produzidos',

    quickActions: 'Ações rápidas',
    achievements: 'Conquistas',
    replayHistory: 'Reproduzir o histórico',
    replay: 'Reproduzir',
    miniMap: 'Minimapa',
    screenshot: 'Capturar tela',
    exportReport: 'Exportar relatório',
    export: 'Exportar',
  },
});
