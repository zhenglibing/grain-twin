import { defineMessages, upperFirst } from '../../i18n';

/**
 * Store enums render as their raw value in English (underscores spaced, and the
 * phase is capitalised by CSS), so the English messages reproduce that exactly.
 */
const PT_PART: Record<string, string> = {
  bearings: 'rolamentos',
  belts: 'correias',
  filters: 'filtros',
  motors: 'motores',
  sensors: 'sensores',
};

const PT_FAILURE: Record<string, string> = {
  mechanical: 'falha mecânica',
  electrical: 'falha elétrica',
  overheating: 'superaquecimento',
  vibration_failure: 'falha por vibração',
};

export const PT_PHASE: Record<string, string> = {
  diagnosed: 'diagnosticada',
  awaiting_parts: 'aguardando peças',
  repairing: 'em reparo',
  verification: 'em verificação',
  ready_to_restart: 'pronta para reiniciar',
  restart_requested: 'reinício solicitado',
  returned_to_service: 'de volta à operação',
};

const PT_PRIORITY: Record<string, string> = {
  high: 'alta',
  medium: 'média',
  low: 'baixa',
};

const PT_TASK_TYPE: Record<string, string> = {
  preventive: 'Preventiva',
  predictive: 'Preditiva',
};

// zh maps mirror the PT_* tables; values follow the work-order-phase pins in
// GLOSSARY (批次② work order phase row). ZH_PHASE is exported so SCADAPanel
// can share it instead of keeping a local mirror.
const ZH_PART: Record<string, string> = {
  bearings: '轴承',
  belts: '皮带',
  filters: '滤芯',
  motors: '电机',
  sensors: '传感器',
};

const ZH_FAILURE: Record<string, string> = {
  mechanical: '机械故障',
  electrical: '电气故障',
  overheating: '过热',
  vibration_failure: '振动故障',
};

export const ZH_PHASE: Record<string, string> = {
  diagnosed: '已诊断',
  awaiting_parts: '等待备件',
  repairing: '维修中',
  verification: '验证中',
  ready_to_restart: '待重启',
  restart_requested: '已请求重启',
  returned_to_service: '已恢复运行',
};

const ZH_PRIORITY: Record<string, string> = {
  high: '高',
  medium: '中',
  low: '低',
};

const ZH_TASK_TYPE: Record<string, string> = {
  preventive: '预防性',
  predictive: '预测性',
};

export const predictiveMaintenancePanelMessages = defineMessages({
  en: {
    title: 'Predictive Maintenance',

    partsInventory: 'Parts Inventory',
    low: 'LOW',
    partBearings: 'Bearings',
    partBelts: 'Belts',
    partFilters: 'Filters',
    partMotors: 'Motors',
    partSensors: 'Sensors',
    /** Lower-case part name as listed in work orders and tasks. */
    part: (p: { part: string }) => p.part,

    predictiveAlerts: 'Predictive Alerts',
    noPredictedFailures: 'No predicted failures',
    failureType: (p: { type: string }) => p.type.replaceAll('_', ' '),
    modelConfidence: 'model confidence',
    estimatedWindow: 'Estimated window: {window} game time',
    windowHours: '{hours} h',
    windowMinutes: '{minutes} min',
    alreadyScheduledFor: 'Maintenance already scheduled for {machine}',
    scheduleFor: 'Schedule maintenance for {machine}',
    scheduled: 'Scheduled',
    schedule: 'Schedule',
    acknowledgeFor: 'Acknowledge prediction for {machine}',
    acknowledge: 'Acknowledge',

    activeFaults: 'Active Faults',
    phase: (p: { phase: string }) => p.phase.replaceAll('_', ' '),
    service: 'Service:',
    serviceUnit: 'Autonomous service unit',
    downtime: 'Downtime:',
    parts: 'Parts: {parts}',
    awaitingStock: 'Awaiting stock: {parts}',
    repairProgress: 'Repair progress',
    dispatchServiceUnit: 'Dispatch service unit',
    repairRemaining: 'Service unit at work: {minutes} min of game time left',
    verifyRepair: 'Verify repair',
    restartMachine: 'Restart machine',
    restartQueued: 'Controlled restart queued',

    scheduledMaintenance: 'Scheduled Maintenance',
    noScheduledMaintenance: 'No scheduled maintenance',
    taskType: (p: { type: string }) => p.type.charAt(0).toUpperCase() + p.type.slice(1),
    inspectionOnly: 'inspection only',
    priority: (p: { priority: string }) => p.priority,
    completeMaintenanceOn: 'Complete maintenance on {machine}',
    underRepairHint: 'Machine is under repair: complete the work order first',
    completeHint: 'Complete maintenance and consume listed parts',
    partsUnavailableHint: 'Required parts are unavailable',
    belowMinimumHint: 'Not needed yet: wear is below the {minimum}% service minimum',
    complete: 'Complete',
    maintenanceNotPerformed: 'Maintenance Not Performed',
  },
  zh: {
    title: '预测性维护',

    partsInventory: '备件库存',
    low: '偏低',
    partBearings: '轴承',
    partBelts: '皮带',
    partFilters: '滤芯',
    partMotors: '电机',
    partSensors: '传感器',
    /** Lower-case part name as listed in work orders and tasks. */
    part: (p: { part: string }) => ZH_PART[p.part] ?? p.part,

    predictiveAlerts: '预测性警报',
    noPredictedFailures: '暂无预测故障',
    failureType: (p: { type: string }) => ZH_FAILURE[p.type] ?? p.type.replaceAll('_', ' '),
    modelConfidence: '模型置信度',
    estimatedWindow: '预计时间窗：{window} 游戏时间',
    windowHours: '{hours} 小时',
    windowMinutes: '{minutes} 分钟',
    alreadyScheduledFor: '{machine} 已安排维护',
    scheduleFor: '为 {machine} 安排维护',
    scheduled: '已安排',
    schedule: '安排',
    acknowledgeFor: '确认 {machine} 的预测',
    acknowledge: '确认',

    activeFaults: '活动故障',
    phase: (p: { phase: string }) => ZH_PHASE[p.phase] ?? p.phase.replaceAll('_', ' '),
    service: '维护：',
    serviceUnit: '自主维护单位',
    downtime: '停机时长：',
    parts: '备件：{parts}',
    awaitingStock: '等待备件：{parts}',
    repairProgress: '维修进度',
    dispatchServiceUnit: '派遣维护单位',
    repairRemaining: '维护单位作业中：剩余 {minutes} 分钟游戏时间',
    verifyRepair: '验证维修',
    restartMachine: '重启设备',
    restartQueued: '受控重启已排队',

    scheduledMaintenance: '计划维护',
    noScheduledMaintenance: '暂无计划维护',
    taskType: (p: { type: string }) =>
      ZH_TASK_TYPE[p.type] ?? p.type.charAt(0).toUpperCase() + p.type.slice(1),
    inspectionOnly: '仅检查',
    priority: (p: { priority: string }) => ZH_PRIORITY[p.priority] ?? p.priority,
    completeMaintenanceOn: '完成 {machine} 的维护',
    underRepairHint: '设备维修中：请先完成工单',
    completeHint: '完成维护并消耗所列备件',
    partsUnavailableHint: '所需备件不可用',
    belowMinimumHint: '暂不需要：磨损低于 {minimum}% 的维护下限',
    complete: '完成',
    maintenanceNotPerformed: '未执行维护',
  },
  'pt-BR': {
    title: 'Manutenção preditiva',

    partsInventory: 'Estoque de peças',
    low: 'BAIXO',
    partBearings: 'Rolamentos',
    partBelts: 'Correias',
    partFilters: 'Filtros',
    partMotors: 'Motores',
    partSensors: 'Sensores',
    part: (p: { part: string }) => PT_PART[p.part] ?? p.part,

    predictiveAlerts: 'Alertas preditivos',
    noPredictedFailures: 'Nenhuma falha prevista',
    failureType: (p: { type: string }) => PT_FAILURE[p.type] ?? p.type.replaceAll('_', ' '),
    modelConfidence: 'confiança do modelo',
    estimatedWindow: 'Janela estimada: {window} no tempo de jogo',
    windowHours: '{hours} h',
    windowMinutes: '{minutes} min',
    alreadyScheduledFor: 'Manutenção já agendada para {machine}',
    scheduleFor: 'Agendar manutenção para {machine}',
    scheduled: 'Agendada',
    schedule: 'Agendar',
    acknowledgeFor: 'Reconhecer a previsão de {machine}',
    acknowledge: 'Reconhecer',

    activeFaults: 'Falhas ativas',
    phase: (p: { phase: string }) => upperFirst(PT_PHASE[p.phase] ?? p.phase.replaceAll('_', ' ')),
    service: 'Atendimento:',
    serviceUnit: 'Unidade de serviço autônoma',
    downtime: 'Tempo de parada:',
    parts: 'Peças: {parts}',
    awaitingStock: 'Aguardando estoque: {parts}',
    repairProgress: 'Progresso do reparo',
    dispatchServiceUnit: 'Enviar unidade de serviço',
    repairRemaining: 'Unidade de serviço em ação: faltam {minutes} min no tempo de jogo',
    verifyRepair: 'Verificar reparo',
    restartMachine: 'Reiniciar máquina',
    restartQueued: 'Reinício controlado na fila',

    scheduledMaintenance: 'Manutenção agendada',
    noScheduledMaintenance: 'Nenhuma manutenção agendada',
    taskType: (p: { type: string }) =>
      PT_TASK_TYPE[p.type] ?? p.type.charAt(0).toUpperCase() + p.type.slice(1),
    inspectionOnly: 'somente inspeção',
    priority: (p: { priority: string }) => PT_PRIORITY[p.priority] ?? p.priority,
    completeMaintenanceOn: 'Concluir a manutenção de {machine}',
    underRepairHint: 'A máquina está em reparo: conclua primeiro a ordem de serviço',
    completeHint: 'Concluir a manutenção e consumir as peças listadas',
    partsUnavailableHint: 'As peças necessárias não estão disponíveis',
    belowMinimumHint: 'Ainda não é necessária: o desgaste está abaixo do mínimo de {minimum}%',
    complete: 'Concluir',
    maintenanceNotPerformed: 'Manutenção não realizada',
  },
});
