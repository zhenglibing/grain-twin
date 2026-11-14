import { defineMessages } from '../i18n';

/** Unlock toast and celebration; the achievement's own name and description come from its store. */
export const achievementTrackerMessages = defineMessages({
  en: {
    unlockedTitle: 'Achievement Unlocked',
    unlockedMessage: '{name} - {description}',
    unlockedCelebration: 'Achievement unlocked: {name}',
  },
  zh: {
    unlockedTitle: '成就已解锁',
    unlockedMessage: '{name}——{description}',
    unlockedCelebration: '成就已解锁：{name}',
  },
  'pt-BR': {
    unlockedTitle: 'Conquista desbloqueada',
    unlockedMessage: '{name} - {description}',
    unlockedCelebration: 'Conquista desbloqueada: {name}',
  },
});
