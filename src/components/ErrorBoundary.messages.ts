import { defineMessages } from '../i18n';

export const errorBoundaryMessages = defineMessages({
  en: {
    somethingWentWrong: 'Something went wrong',
    reload: 'Reload',
    featureUnavailableLabel: '{featureName} unavailable',
    featureUnavailable: '{featureName} is temporarily unavailable',
    featureLoadFailed: 'The optional feature could not be loaded.',
    retryFeature: 'Retry feature',
    closePanel: 'Close panel',
  },
  zh: {
    somethingWentWrong: '出了一些问题',
    reload: '重新加载',
    featureUnavailableLabel: '{featureName} 不可用',
    featureUnavailable: '{featureName} 暂时不可用',
    featureLoadFailed: '无法加载该可选功能。',
    retryFeature: '重试功能',
    closePanel: '关闭面板',
  },
  'pt-BR': {
    somethingWentWrong: 'Algo deu errado',
    reload: 'Recarregar',
    featureUnavailableLabel: '{featureName} indisponível',
    featureUnavailable: '{featureName} está temporariamente indisponível',
    featureLoadFailed: 'Não foi possível carregar o recurso opcional.',
    retryFeature: 'Tentar novamente',
    closePanel: 'Fechar painel',
  },
});
