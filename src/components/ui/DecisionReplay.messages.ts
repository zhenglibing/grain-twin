import { defineMessages, upperFirst } from '../../i18n';

/** pt-BR names for AIDecision enum values; English shows the raw value, as before. */
export const PT_DECISION_TYPES: Record<string, string> = {
  coordination: 'coordenação',
  optimization: 'otimização',
  prediction: 'previsão',
  maintenance: 'manutenção',
  safety: 'segurança',
};

export const PT_DECISION_STATUSES: Record<string, string> = {
  pending: 'pendente',
  in_progress: 'em andamento',
  completed: 'concluída',
  superseded: 'substituída',
};

export const PT_DECISION_PRIORITIES: Record<string, string> = {
  low: 'baixa',
  medium: 'média',
  high: 'alta',
  critical: 'crítica',
};

const PT_DISPOSITIONS: Record<string, string> = {
  accepted: 'aceita',
  modified: 'modificada',
  rejected: 'rejeitada',
  deferred: 'adiada',
  automatic: 'automática',
};

const PT_SOURCES: Record<string, string> = {
  simulation: 'simulação',
  scada: 'SCADA',
  control: 'controle',
  schedule: 'programação',
  prediction: 'previsão',
};

const PT_QUALITIES: Record<string, string> = {
  good: 'boa',
  uncertain: 'incerta',
  stale: 'desatualizada',
  bad: 'ruim',
};

/** zh names for the same enums, mirroring the pt-BR maps above. */
const ZH_DECISION_TYPES: Record<string, string> = {
  coordination: '协调',
  optimization: '优化',
  prediction: '预测',
  maintenance: '维护',
  safety: '安全',
};

const ZH_DECISION_STATUSES: Record<string, string> = {
  pending: '待定',
  in_progress: '进行中',
  completed: '已完成',
  superseded: '已取代',
};

export const ZH_DECISION_PRIORITIES: Record<string, string> = {
  low: '低',
  medium: '中',
  high: '高',
  critical: '危急',
};

const ZH_DISPOSITIONS: Record<string, string> = {
  accepted: '已接受',
  modified: '已修改',
  rejected: '已拒绝',
  deferred: '已推迟',
  automatic: '自动',
};

const ZH_SOURCES: Record<string, string> = {
  simulation: '模拟',
  scada: 'SCADA',
  control: '控制',
  schedule: '排程',
  prediction: '预测',
};

const ZH_QUALITIES: Record<string, string> = {
  good: '良好',
  uncertain: '不确定',
  stale: '过期',
  bad: '较差',
};

const ZH_MEASUREMENTS: Record<string, string> = {
  throughput: '产量',
  efficiency: '效率',
  uptime: '运行率',
  quality: '质量',
  totalBagsProduced: '生产总袋数',
};

/* Keys of AIDecision.measuredOutcome.measurements (productionStore). */
const EN_MEASUREMENTS: Record<string, string> = {
  totalBagsProduced: 'total bags produced',
};
const PT_MEASUREMENTS: Record<string, string> = {
  throughput: 'vazão',
  efficiency: 'eficiência',
  uptime: 'disponibilidade',
  quality: 'qualidade',
  totalBagsProduced: 'sacos produzidos',
};
// An unknown camelCase key still reads as words: "someMetric" -> "some metric".
const spacedKey = (key: string): string => key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase();

export const decisionReplayMessages = defineMessages({
  en: {
    dialogLabel: 'Decision replay',
    title: 'Decision Replay',
    close: 'Close',
    type: (p: { value: string }) => p.value,
    status: (p: { value: string }) => p.value,
    timestamp: 'Timestamp',
    confidence: 'Confidence',
    expectedImpact: 'Expected Impact',
    affectedMachine: 'Affected Machine',
    evidenceSnapshot: 'Evidence snapshot',
    observation: 'Observation',
    value: 'Value',
    sourceAndQuality: 'Source and quality',
    sourceQuality: (p: { source: string; quality: string }) => `${p.source}, ${p.quality}`,
    assumptions: 'Assumptions',
    alternativesConsidered: 'Alternatives considered',
    affectedSystems: 'Affected systems',
    affectedEquipment: 'Affected equipment',
    decisionResponse: 'Decision response',
    disposition: (p: { value: string }) => p.value,
    awaitingResponse: 'Awaiting a response. Accept, defer, or reject it from the decision card.',
    noControlResponse: 'No control response was recorded.',
    measuredOutcome: 'Measured outcome',
    noMeasuredResult: 'No measured result has been recorded for this simulated decision.',
    // English is capitalised by CSS, as before.
    measurementLabel: (p: { key: string }) => EN_MEASUREMENTS[p.key] ?? spacedKey(p.key),
    closeReplay: 'Close Replay',
    viewDetails: 'View details: {action}',
  },
  zh: {
    dialogLabel: '决策回放',
    title: '决策回放',
    close: '关闭',
    type: (p: { value: string }) => ZH_DECISION_TYPES[p.value] ?? p.value,
    status: (p: { value: string }) => ZH_DECISION_STATUSES[p.value] ?? p.value,
    timestamp: '时间戳',
    confidence: '置信度',
    expectedImpact: '预期影响',
    affectedMachine: '受影响设备',
    evidenceSnapshot: '证据快照',
    observation: '观测项',
    value: '数值',
    sourceAndQuality: '来源与质量',
    sourceQuality: (p: { source: string; quality: string }) =>
      `${ZH_SOURCES[p.source] ?? p.source}，${ZH_QUALITIES[p.quality] ?? p.quality}`,
    assumptions: '前提假设',
    alternativesConsidered: '备选方案',
    affectedSystems: '受影响系统',
    affectedEquipment: '受影响设施',
    decisionResponse: '决策响应',
    disposition: (p: { value: string }) => ZH_DISPOSITIONS[p.value] ?? p.value,
    awaitingResponse: '等待响应。请在决策卡片中接受、推迟或拒绝。',
    noControlResponse: '未记录任何控制响应。',
    measuredOutcome: '实测结果',
    noMeasuredResult: '此模拟决策尚未记录实测结果。',
    // English is capitalised by CSS, as before.
    measurementLabel: (p: { key: string }) => ZH_MEASUREMENTS[p.key] ?? spacedKey(p.key),
    closeReplay: '关闭回放',
    viewDetails: '查看详情：{action}',
  },
  'pt-BR': {
    dialogLabel: 'Reprodução da decisão',
    title: 'Reprodução da decisão',
    close: 'Fechar',
    type: (p: { value: string }) => PT_DECISION_TYPES[p.value] ?? p.value,
    status: (p: { value: string }) => PT_DECISION_STATUSES[p.value] ?? p.value,
    timestamp: 'Horário',
    confidence: 'Confiança',
    expectedImpact: 'Impacto esperado',
    affectedMachine: 'Máquina afetada',
    evidenceSnapshot: 'Instantâneo das evidências',
    observation: 'Observação',
    value: 'Valor',
    sourceAndQuality: 'Fonte e qualidade',
    sourceQuality: (p: { source: string; quality: string }) =>
      `${PT_SOURCES[p.source] ?? p.source}, ${PT_QUALITIES[p.quality] ?? p.quality}`,
    assumptions: 'Premissas',
    alternativesConsidered: 'Alternativas consideradas',
    affectedSystems: 'Sistemas afetados',
    affectedEquipment: 'Equipamentos afetados',
    decisionResponse: 'Resposta à decisão',
    disposition: (p: { value: string }) => upperFirst(PT_DISPOSITIONS[p.value] ?? p.value),
    awaitingResponse:
      'Aguardando resposta. Aceite, adie ou rejeite a decisão no cartão de decisão.',
    noControlResponse: 'Nenhuma resposta de controle foi registrada.',
    measuredOutcome: 'Resultado medido',
    noMeasuredResult: 'Nenhum resultado medido foi registrado para esta decisão simulada.',
    measurementLabel: (p: { key: string }) =>
      upperFirst(PT_MEASUREMENTS[p.key] ?? spacedKey(p.key)),
    closeReplay: 'Fechar reprodução',
    viewDetails: 'Ver detalhes: {action}',
  },
});
