import { defineMessages } from '../../i18n';
import { PT_DECISION_PRIORITIES, ZH_DECISION_PRIORITIES } from './DecisionReplay.messages';

export const decisionHistoryPanelMessages = defineMessages({
  en: {
    toggle: 'Toggle decision history',
    title: 'Decision History',
    empty: 'No decisions yet',
    priority: (p: { value: string }) => p.value,
    previousPage: 'Previous page',
    nextPage: 'Next page',
  },
  zh: {
    toggle: '显示/隐藏决策历史',
    title: '决策历史',
    empty: '暂无决策',
    priority: (p: { value: string }) => ZH_DECISION_PRIORITIES[p.value] ?? p.value,
    previousPage: '上一页',
    nextPage: '下一页',
  },
  'pt-BR': {
    toggle: 'Mostrar ou ocultar o histórico de decisões',
    title: 'Histórico de decisões',
    empty: 'Nenhuma decisão ainda',
    priority: (p: { value: string }) => PT_DECISION_PRIORITIES[p.value] ?? p.value,
    previousPage: 'Página anterior',
    nextPage: 'Próxima página',
  },
});
