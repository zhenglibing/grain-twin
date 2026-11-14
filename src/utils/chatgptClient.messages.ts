import { defineMessages } from '../i18n';

export const chatgptClientMessages = defineMessages({
  en: {
    companionNotRunning: 'ChatGPT local companion is not running',
    sessionExpired: 'ChatGPT session expired. Sign in again.',
    usageLimitReached: 'ChatGPT plan usage limit reached. Manage usage in ChatGPT Settings.',
    usageUnavailable:
      'ChatGPT plan usage is unavailable. Check your app access in ChatGPT Settings.',
    requestFailed: 'ChatGPT local companion request failed',
  },
  zh: {
    companionNotRunning: 'ChatGPT 本地伴侣程序未运行',
    sessionExpired: 'ChatGPT 会话已过期，请重新登录。',
    usageLimitReached: '已达到 ChatGPT 计划用量上限。请在 ChatGPT 设置中管理用量。',
    usageUnavailable: 'ChatGPT 计划用量不可用。请在 ChatGPT 设置中检查应用访问权限。',
    requestFailed: 'ChatGPT 本地伴侣程序请求失败',
  },
  'pt-BR': {
    companionNotRunning: 'O app auxiliar local para o ChatGPT não está em execução',
    sessionExpired: 'A sessão do ChatGPT expirou. Entre novamente.',
    usageLimitReached:
      'O limite de uso do plano do ChatGPT foi atingido. Gerencie o uso nas Configurações do ChatGPT.',
    usageUnavailable:
      'O uso do plano do ChatGPT está indisponível. Verifique o acesso do app nas Configurações do ChatGPT.',
    requestFailed: 'A solicitação ao app auxiliar local para o ChatGPT falhou',
  },
});
