import { defineMessages } from '../i18n';

/** Errors the BYOK transport raises; the AI settings and command surfaces show them. */
export const cloudAIClientMessages = defineMessages({
  en: {
    directKeysLocalOnly:
      'Direct provider keys are available only on localhost. Use OpenRouter on the public site.',
    usageMissing: 'Provider omitted usage data; check charges in your provider account.',
    keyRejected: 'API key or model access was rejected. Check your provider account.',
    creditLimit: 'Provider credit or spending limit reached.',
    rateLimit: 'Provider rate limit reached. Try again later.',
    requestFailed: 'Provider request failed (HTTP {status}).',
    haikuIncomplete: 'Haiku did not complete a text response. Try again.',
    lunaIncomplete: 'Luna did not complete a text response. Try again.',
    solIncomplete: 'Sol did not complete a text response. Try again.',
    geminiIncomplete: 'Gemini did not complete a text response. Try again.',
    openRouterIncomplete: 'OpenRouter did not complete a text response. Try again.',
    enterKey: 'Enter an API key.',
    connectKey: 'Connect an API key for the selected model.',
    cancelledAfterChange: 'Request cancelled after configuration changed.',
    billingUnverified:
      'OpenRouter billing is unverified. Check charges and reconnect a limited key.',
    invalidOpenRouterKey: 'Enter a valid OpenRouter API key.',
    capRequired: 'Set a session cost cap before connecting OpenRouter.',
    cannotVerifyLimit:
      'Cannot verify the OpenRouter key limit. Check your network or browser privacy settings.',
    limitHttpError: 'OpenRouter could not verify the key limit (HTTP {status}).',
    noVerifiableLimit: 'OpenRouter returned no verifiable key limit.',
    limitedKeyRequired:
      'Use a lifetime spend-limited OpenRouter inference key with BYOK usage included in its limit.',
    emptyRequest: 'The request is empty.',
    contextTooLarge: 'The plant context is too large.',
    invalidResponse: 'Provider returned an invalid response.',
    unverifiableCharge:
      'OpenRouter did not report a verifiable USD charge. Paid inference stopped.',
    noText: 'Provider returned no text. Try again.',
    timedOut: 'Provider request timed out. Check charges before retrying.',
    unreachable: 'Cannot reach the provider. Check your network or browser privacy settings.',
  },
  zh: {
    directKeysLocalOnly: '直连提供商密钥仅在 localhost 上可用，公共站点请使用 OpenRouter。',
    usageMissing: '提供商未返回用量数据；请在你的提供商账户中核对扣费。',
    keyRejected: 'API 密钥或模型访问被拒绝。请检查你的提供商账户。',
    creditLimit: '已达到提供商额度或消费限额。',
    rateLimit: '已触发提供商限流，请稍后重试。',
    requestFailed: '提供商请求失败（HTTP {status}）。',
    haikuIncomplete: 'Haiku 未完成文本响应，请重试。',
    lunaIncomplete: 'Luna 未完成文本响应，请重试。',
    solIncomplete: 'Sol 未完成文本响应，请重试。',
    geminiIncomplete: 'Gemini 未完成文本响应，请重试。',
    openRouterIncomplete: 'OpenRouter 未完成文本响应，请重试。',
    enterKey: '请输入 API 密钥。',
    connectKey: '请为所选模型连接 API 密钥。',
    cancelledAfterChange: '配置已变更，请求已取消。',
    billingUnverified: 'OpenRouter 计费未经核实。请核对扣费并重新连接限额密钥。',
    invalidOpenRouterKey: '请输入有效的 OpenRouter API 密钥。',
    capRequired: '连接 OpenRouter 前请先设置会话费用上限。',
    cannotVerifyLimit: '无法验证 OpenRouter 密钥限额。请检查网络或浏览器隐私设置。',
    limitHttpError: 'OpenRouter 无法验证密钥限额（HTTP {status}）。',
    noVerifiableLimit: 'OpenRouter 未返回可验证的密钥限额。',
    limitedKeyRequired: '请使用把自备密钥（BYOK）用量计入终身消费限额的 OpenRouter 推理密钥。',
    emptyRequest: '请求为空。',
    contextTooLarge: '工厂上下文过大。',
    invalidResponse: '提供商返回了无效响应。',
    unverifiableCharge: 'OpenRouter 未报告可核实的 USD 扣费。付费推理已停止。',
    noText: '提供商未返回文本，请重试。',
    timedOut: '提供商请求已超时。重试前请核对扣费。',
    unreachable: '无法连接提供商。请检查网络或浏览器隐私设置。',
  },
  'pt-BR': {
    directKeysLocalOnly:
      'Chaves diretas de provedor só funcionam em localhost. No site público, use o OpenRouter.',
    usageMissing:
      'O provedor não informou os dados de uso; confira as cobranças na sua conta do provedor.',
    keyRejected:
      'A chave de API ou o acesso ao modelo foi recusado. Verifique sua conta do provedor.',
    creditLimit: 'O crédito ou o limite de gastos do provedor foi atingido.',
    rateLimit: 'O limite de requisições do provedor foi atingido. Tente novamente mais tarde.',
    requestFailed: 'A requisição ao provedor falhou (HTTP {status}).',
    haikuIncomplete: 'O Haiku não concluiu uma resposta em texto. Tente novamente.',
    lunaIncomplete: 'O Luna não concluiu uma resposta em texto. Tente novamente.',
    solIncomplete: 'O Sol não concluiu uma resposta em texto. Tente novamente.',
    geminiIncomplete: 'O Gemini não concluiu uma resposta em texto. Tente novamente.',
    openRouterIncomplete: 'O OpenRouter não concluiu uma resposta em texto. Tente novamente.',
    enterKey: 'Informe uma chave de API.',
    connectKey: 'Conecte uma chave de API para o modelo selecionado.',
    cancelledAfterChange: 'Requisição cancelada porque a configuração mudou.',
    billingUnverified:
      'A cobrança do OpenRouter não foi verificada. Confira as cobranças e reconecte uma chave com limite.',
    invalidOpenRouterKey: 'Informe uma chave de API válida do OpenRouter.',
    capRequired: 'Defina um teto de custo da sessão antes de conectar o OpenRouter.',
    cannotVerifyLimit:
      'Não foi possível verificar o limite da chave do OpenRouter. Verifique sua rede ou as configurações de privacidade do navegador.',
    limitHttpError: 'O OpenRouter não conseguiu verificar o limite da chave (HTTP {status}).',
    noVerifiableLimit: 'O OpenRouter não retornou um limite de chave verificável.',
    limitedKeyRequired:
      'Use uma chave de inferência do OpenRouter com limite de gasto total, sem renovação periódica, e com o uso BYOK incluído nesse limite.',
    emptyRequest: 'A requisição está vazia.',
    contextTooLarge: 'O contexto do moinho é grande demais.',
    invalidResponse: 'O provedor retornou uma resposta inválida.',
    unverifiableCharge:
      'O OpenRouter não informou uma cobrança verificável em USD. A inferência paga foi interrompida.',
    noText: 'O provedor não retornou texto. Tente novamente.',
    timedOut: 'A requisição ao provedor expirou. Confira as cobranças antes de tentar de novo.',
    unreachable:
      'Não foi possível acessar o provedor. Verifique sua rede ou as configurações de privacidade do navegador.',
  },
});
