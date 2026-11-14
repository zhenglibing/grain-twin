import { defineMessages } from '../i18n';

/** Load failures that the feature error boundary shows as its detail line. */
export const recoverableLazyMessages = defineMessages({
  en: {
    loadTimeout: 'Optional feature load exceeded {ms}ms',
    loadFailed: 'Optional feature failed to load',
  },
  zh: {
    loadTimeout: '可选功能加载用时超过 {ms}ms',
    loadFailed: '可选功能加载失败',
  },
  'pt-BR': {
    loadTimeout: 'O carregamento do recurso opcional passou de {ms} ms',
    loadFailed: 'O recurso opcional não carregou',
  },
});
