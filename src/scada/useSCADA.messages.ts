import { defineMessages } from '../i18n';

export const useSCADAMessages = defineMessages({
  en: {
    defaultControlSource: 'Autonomous control layer',
  },
  zh: {
    defaultControlSource: '自主控制层',
  },
  'pt-BR': {
    // Matches SCADAPanel's defaultControlIdentity so every acknowledgement
    // path records the same identity in a given language.
    defaultControlSource: 'Camada de controle autônomo',
  },
});
