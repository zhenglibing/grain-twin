import { defineMessages } from '../i18n';

export const emergencyOverlayMessages = defineMessages({
  en: {
    drillTitle: 'Simulated fire drill',
    forkliftStopTitle: 'Forklift emergency stop',
    facilityStopTitle: 'Facility emergency stop',
    drillGuidance:
      'Drill in progress. Production and forklifts hold while each service egress verifies itself; it ends once every egress checks in, or from the Safety panel.',
    forkliftStopGuidance:
      'Every forklift is holding position; the mill keeps running. Press Space or release it from the Safety panel.',
    facilityStopGuidance:
      'Everything is stopped. Find the cause, fix it, then clear the interlock from the Safety panel.',
    chronicleFireGuidance:
      'Everything is stopped by a duct fire. Answer its prompt in the Mill Chronicle to suppress or clean it.',
    liveRegion: '{title}. {guidance}',
  },
  zh: {
    drillTitle: '模拟疏散演练',
    forkliftStopTitle: '叉车紧急停机',
    facilityStopTitle: '设施紧急停机',
    drillGuidance:
      '演练进行中。各疏散出口逐个自检期间，生产与叉车保持停止；全部出口确认后自动结束，也可在安全面板提前结束。',
    forkliftStopGuidance: '所有叉车原地待命，磨坊继续运转。按空格键或在安全面板解除。',
    facilityStopGuidance: '全线已停机。请查明原因并处理，然后在安全面板解除联锁。',
    chronicleFireGuidance: '管道火灾导致全线停机。请在磨坊纪事中回应其提示，扑灭或清理火源。',
    liveRegion: '{title}。{guidance}',
  },
  'pt-BR': {
    drillTitle: 'Simulado de incêndio',
    forkliftStopTitle: 'Parada de emergência das empilhadeiras',
    facilityStopTitle: 'Parada de emergência da unidade',
    drillGuidance:
      'Simulado em andamento. A produção e as empilhadeiras ficam paradas enquanto cada rota de saída de serviço é verificada; o simulado termina quando todas as rotas de saída forem confirmadas ou quando for encerrado pelo painel de Segurança.',
    forkliftStopGuidance:
      'Todas as empilhadeiras estão paradas na posição; o moinho continua funcionando. Pressione Espaço ou libere a parada pelo painel de Segurança.',
    facilityStopGuidance:
      'Tudo está parado. Encontre a causa, corrija-a e depois libere o intertravamento pelo painel de Segurança.',
    chronicleFireGuidance:
      'Tudo está parado por um incêndio no duto. Responda ao aviso na Crônica do moinho para suprimir ou limpar o duto.',
    liveRegion: '{title}. {guidance}',
  },
});
