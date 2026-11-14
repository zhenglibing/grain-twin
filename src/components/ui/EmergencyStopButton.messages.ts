import { defineMessages } from '../../i18n';

export const emergencyStopButtonMessages = defineMessages({
  en: {
    incidentDescription: 'Emergency stop activated - all forklifts halted',
    drillTitle: 'End the active egress verification drill before using the emergency stop',
    interlockTitle:
      'Clear the facility emergency interlock from the Safety panel to release the forklifts',
    drillLabel: 'Fire drill interlock active - emergency stop cannot be changed',
    interlockLabel:
      'Emergency interlock active - clear it from the Safety panel to release the forklifts',
    stopLabel: 'Emergency stop - halt all forklifts',
    drillButton: 'DRILL INTERLOCK ACTIVE',
    interlockButton: 'INTERLOCK ACTIVE',
    releaseButton: 'RELEASE E-STOP',
    stopButton: 'EMERGENCY STOP',
  },
  zh: {
    incidentDescription: '紧急停机已触发——所有叉车已停运',
    drillTitle: '使用紧急停机前，请先结束进行中的疏散验证演练',
    interlockTitle: '请在安全面板解除设施紧急联锁，以释放叉车',
    drillLabel: '疏散演练联锁生效中——紧急停机无法切换',
    interlockLabel: '紧急联锁生效中——请在安全面板解除，以释放叉车',
    stopLabel: '紧急停机——停运所有叉车',
    drillButton: '演练联锁生效中',
    interlockButton: '联锁生效中',
    releaseButton: '解除紧急停机',
    stopButton: '紧急停机',
  },
  'pt-BR': {
    incidentDescription: 'Parada de emergência acionada - todas as empilhadeiras paradas',
    drillTitle:
      'Encerre o simulado de verificação das rotas de saída em andamento antes de usar a parada de emergência',
    interlockTitle:
      'Libere o intertravamento de emergência da instalação no painel de Segurança para destravar as empilhadeiras',
    drillLabel:
      'Intertravamento do simulado de evacuação ativo - a parada de emergência não pode ser alterada',
    interlockLabel:
      'Intertravamento de emergência ativo - libere-o no painel de Segurança para destravar as empilhadeiras',
    stopLabel: 'Parada de emergência - parar todas as empilhadeiras',
    drillButton: 'INTERTRAVAMENTO DO SIMULADO ATIVO',
    interlockButton: 'INTERTRAVAMENTO ATIVO',
    releaseButton: 'LIBERAR PARADA DE EMERGÊNCIA',
    stopButton: 'PARADA DE EMERGÊNCIA',
  },
});
