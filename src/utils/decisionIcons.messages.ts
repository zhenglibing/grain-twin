import { defineMessages } from '../i18n';

/** Accessible names for the decision status icons. */
export const decisionIconsMessages = defineMessages({
  en: {
    statusCompleted: 'Completed',
    statusInProgress: 'In progress',
    statusPending: 'Pending',
    statusSuperseded: 'Superseded',
    statusUnknown: 'Status unknown',
  },
  zh: {
    statusCompleted: '已完成',
    statusInProgress: '进行中',
    statusPending: '待定',
    statusSuperseded: '已取代',
    statusUnknown: '状态未知',
  },
  'pt-BR': {
    statusCompleted: 'Concluída',
    statusInProgress: 'Em andamento',
    statusPending: 'Pendente',
    statusSuperseded: 'Substituída',
    statusUnknown: 'Status desconhecido',
  },
});
