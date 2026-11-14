import { defineMessages, formatFixed } from '../../i18n';

export const gamificationBarMessages = defineMessages({
  en: {
    closeQuickActions: 'Close Quick Actions',
    achievements: 'Achievements',
    achievementsUnlocked: (p: { count: number }) =>
      `Achievements, ${formatFixed(p.count, 0, 'en')} unlocked`,
    exitReplay: 'Exit replay',
    replayHistory: 'Replay history',
    miniMap: 'Mini-map',
  },
  zh: {
    closeQuickActions: '关闭快捷操作',
    achievements: '成就',
    achievementsUnlocked: (p: { count: number }) =>
      `成就：已解锁 ${formatFixed(p.count, 0, 'zh')} 项`,
    exitReplay: '退出回放',
    replayHistory: '回放历史',
    miniMap: '小地图',
  },
  'pt-BR': {
    closeQuickActions: 'Fechar ações rápidas',
    achievements: 'Conquistas',
    achievementsUnlocked: (p: { count: number }) =>
      `Conquistas, ${formatFixed(p.count, 0, 'pt-BR')} ${
        p.count === 1 ? 'desbloqueada' : 'desbloqueadas'
      }`,
    exitReplay: 'Sair da reprodução',
    replayHistory: 'Reproduzir o histórico',
    miniMap: 'Minimapa',
  },
});
