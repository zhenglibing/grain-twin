import { defineMessages } from '../i18n';

const PT_CRISIS_CAUSE: Record<string, string> = {
  fire: 'condição de incêndio',
  power_outage: 'condição de queda de energia',
  supply_emergency: 'condição de emergência de abastecimento',
  inspection: 'condição de inspeção',
  weather: 'condição climática',
};

/** Mirrors PT_CRISIS_CAUSE for zh; unknown values fall back to the raw id. */
const ZH_CRISIS_CAUSE: Record<string, string> = {
  fire: '火灾状况',
  power_outage: '断电状况',
  supply_emergency: '供应紧急状况',
  inspection: '检查状况',
  weather: '天气状况',
};

export const gameSimulationStoreMessages = defineMessages({
  en: {
    egressFront: 'Front Service Egress',
    egressBack: 'Back Service Egress',
    egressWest: 'West Service Egress',
    egressEast: 'East Service Egress',
    facilityStopCause: 'Facility emergency stop command',
    interlockCause: '{machineId} interlock',
    facilityStopResponse: 'Production and mobile equipment placed in a fail-safe stop.',
    facilityStopRecovery: 'Awaiting explicit interlock clearance.',
    facilityStopCleared: 'Interlock cleared after state verification.',
    drillCause: 'Automated emergency egress verification',
    drillResponse: 'All equipment stopped while egress sensors run their verification sequence.',
    drillRecovery: 'Awaiting all service egress zones.',
    drillCleared: 'Automated egress verification closed.',
    crisisCause: (p: { type: string }) => `${p.type.replaceAll('_', ' ')} condition`,
    crisisInterlockedResponse: 'Fail-safe process stop applied.',
    crisisMonitoredResponse: 'Condition isolated for autonomous monitoring.',
    crisisRecovery: 'Awaiting verified recovery state.',
    crisisCleared: 'Recovery state verified and interlocks released.',
  },
  zh: {
    egressFront: '前侧疏散出口',
    egressBack: '后侧疏散出口',
    egressWest: '西侧疏散出口',
    egressEast: '东侧疏散出口',
    facilityStopCause: '设施紧急停机指令',
    interlockCause: '{machineId} 联锁',
    facilityStopResponse: '生产与移动设备已置于故障保护停机。',
    facilityStopRecovery: '等待明确的联锁解除。',
    facilityStopCleared: '状态核验后联锁已解除。',
    drillCause: '自动紧急疏散验证',
    drillResponse: '所有设备已停机，疏散传感器正在执行验证序列。',
    drillRecovery: '等待全部疏散出口区域。',
    drillCleared: '自动疏散验证已结束。',
    crisisCause: (p: { type: string }) =>
      ZH_CRISIS_CAUSE[p.type] ?? `${p.type.replaceAll('_', ' ')} 状况`,
    crisisInterlockedResponse: '已实施故障保护的过程停机。',
    crisisMonitoredResponse: '状况已隔离，交由自主监测。',
    crisisRecovery: '等待经核验的恢复状态。',
    crisisCleared: '恢复状态已核验，联锁已解除。',
  },
  'pt-BR': {
    egressFront: 'Rota de saída de serviço frontal',
    egressBack: 'Rota de saída de serviço dos fundos',
    egressWest: 'Rota de saída de serviço oeste',
    egressEast: 'Rota de saída de serviço leste',
    facilityStopCause: 'Comando de parada de emergência da instalação',
    interlockCause: 'Intertravamento de {machineId}',
    facilityStopResponse: 'Produção e equipamentos móveis colocados em parada à prova de falhas.',
    facilityStopRecovery: 'Aguardando liberação explícita do intertravamento.',
    facilityStopCleared: 'Intertravamento liberado após a verificação do estado.',
    drillCause: 'Verificação automatizada das rotas de saída de emergência',
    drillResponse:
      'Todos os equipamentos parados enquanto os sensores das rotas de saída executam a sequência de verificação.',
    drillRecovery: 'Aguardando todas as zonas de saída de serviço.',
    drillCleared: 'Verificação automatizada das rotas de saída encerrada.',
    crisisCause: (p: { type: string }) =>
      PT_CRISIS_CAUSE[p.type] ?? `condição: ${p.type.replaceAll('_', ' ')}`,
    crisisInterlockedResponse: 'Parada de processo à prova de falhas aplicada.',
    crisisMonitoredResponse: 'Condição isolada para monitoramento autônomo.',
    crisisRecovery: 'Aguardando estado de recuperação verificado.',
    crisisCleared: 'Estado de recuperação verificado e intertravamentos liberados.',
  },
});
