import { defineMessages, formatFixed } from '../../../i18n';

type CountParams = { count: number };
type DockStateParams = { status: string };

const PT_DOCK_STATUS: Record<string, string> = {
  arriving: 'chegando',
  loading: 'carregando',
  departing: 'saindo',
  clear: 'livre',
};

const ptDockStatus = (status: string): string => PT_DOCK_STATUS[status] ?? status;

// Mirrors the batch-1 OverviewPanel dock-status table (到达中/装载中/离开中/空闲).
const ZH_DOCK_STATUS: Record<string, string> = {
  arriving: '到达中',
  loading: '装载中',
  departing: '离开中',
  clear: '空闲',
};

const zhDockStatus = (status: string): string => ZH_DOCK_STATUS[status] ?? status;

export const autonomyPanelMessages = defineMessages({
  en: {
    plantStateTitle: 'Autonomous plant state',
    plantStateSubtitle: 'Process, logistics, safety, and diagnostics in one picture.',
    readinessIndex: 'readiness index',
    metricsLabel: 'Autonomy metrics',
    activeAssets: 'Active assets',
    activeAssetsDetail: (p: CountParams) =>
      `${p.count} ${p.count === 1 ? 'needs' : 'need'} diagnostic attention`,
    throughput: 'Throughput',
    throughputDetail: 'bags per simulated hour',
    target: 'Target',
    targetDetail: 'completed against the active batch plan',
    safetyStops: 'Safety stops',
    safetyStopsDetail: (p: CountParams) =>
      `${p.count} route ${p.count === 1 ? 'conflict' : 'conflicts'} recorded`,
    coordinationHeading: 'Closed-loop coordination',
    processControl: 'Process control',
    processAgree: 'Machine states and targets agree.',
    processHeld: (p: CountParams) =>
      `${p.count} ${p.count === 1 ? 'alarm is' : 'alarms are'} holding the plan back.`,
    vehicleOrchestration: 'Vehicle orchestration',
    forkliftsGrounded: 'The safety layer has grounded the forklifts.',
    forkliftsShare: 'Forklifts, docks, and crossings share reservations.',
    receivingSequence: 'Receiving sequence',
    receivingDockState: (p: DockStateParams) => `Receiving dock state: ${p.status}.`,
    shippingSequence: 'Shipping sequence',
    shippingDockState: (p: DockStateParams) => `Shipping dock state: ${p.status}.`,
    scadaHint:
      'Open Simulated SCADA for the full alarm trail, tag quality, trends, and control history.',
  },
  zh: {
    plantStateTitle: '磨坊自治状态',
    plantStateSubtitle: '过程、物流、安全与诊断，一屏尽览。',
    readinessIndex: '就绪指数',
    metricsLabel: '自治指标',
    activeAssets: '在运设备',
    activeAssetsDetail: (p: CountParams) => `${p.count} 台需要诊断关注`,
    throughput: '产量',
    throughputDetail: '袋/模拟小时',
    target: '目标',
    targetDetail: '相对当前批次计划的完成度',
    safetyStops: '安全停机',
    safetyStopsDetail: (p: CountParams) => `已记录 ${p.count} 起路线冲突`,
    coordinationHeading: '闭环协同',
    processControl: '过程控制',
    processAgree: '设备状态与目标一致。',
    processHeld: (p: CountParams) => `${p.count} 项报警正在拖住计划。`,
    vehicleOrchestration: '车辆编排',
    forkliftsGrounded: '安全层已停运全部叉车。',
    forkliftsShare: '叉车、装卸区与交叉口共用预留。',
    receivingSequence: '接收序列',
    receivingDockState: (p: DockStateParams) => `接收装卸区状态：${zhDockStatus(p.status)}。`,
    shippingSequence: '发运序列',
    shippingDockState: (p: DockStateParams) => `发运装卸区状态：${zhDockStatus(p.status)}。`,
    scadaHint: '打开 SCADA 模拟可查看完整报警轨迹、点位质量、趋势与控制历史。',
  },
  'pt-BR': {
    plantStateTitle: 'Estado da planta autônoma',
    plantStateSubtitle: 'Processo, logística, segurança e diagnóstico em uma só visão.',
    readinessIndex: 'índice de prontidão',
    metricsLabel: 'Métricas de autonomia',
    activeAssets: 'Ativos em operação',
    activeAssetsDetail: (p: CountParams) =>
      `${formatFixed(p.count, 0, 'pt-BR')} ${p.count === 1 ? 'precisa' : 'precisam'} de atenção de diagnóstico`,
    throughput: 'Vazão',
    throughputDetail: 'sacos por hora simulada',
    target: 'Meta',
    targetDetail: 'concluída em relação ao plano de lotes ativo',
    safetyStops: 'Paradas de segurança',
    safetyStopsDetail: (p: CountParams) =>
      p.count === 1
        ? `${formatFixed(p.count, 0, 'pt-BR')} conflito de rota registrado`
        : `${formatFixed(p.count, 0, 'pt-BR')} conflitos de rota registrados`,
    coordinationHeading: 'Coordenação em malha fechada',
    processControl: 'Controle de processo',
    processAgree: 'Os estados das máquinas e as metas estão de acordo.',
    processHeld: (p: CountParams) =>
      p.count === 1
        ? `${formatFixed(p.count, 0, 'pt-BR')} alarme está travando o plano.`
        : `${formatFixed(p.count, 0, 'pt-BR')} alarmes estão travando o plano.`,
    vehicleOrchestration: 'Orquestração de veículos',
    forkliftsGrounded: 'A camada de segurança imobilizou as empilhadeiras.',
    forkliftsShare: 'Empilhadeiras, docas e cruzamentos compartilham reservas.',
    receivingSequence: 'Sequência de recebimento',
    receivingDockState: (p: DockStateParams) =>
      `Estado da doca de recebimento: ${ptDockStatus(p.status)}.`,
    shippingSequence: 'Sequência de expedição',
    shippingDockState: (p: DockStateParams) =>
      `Estado da doca de expedição: ${ptDockStatus(p.status)}.`,
    scadaHint:
      'Abra o SCADA simulado para ver o histórico completo de alarmes, a qualidade das tags, as tendências e o histórico de controle.',
  },
});
