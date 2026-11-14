import { defineMessages, upperFirst } from '../../i18n';

const PT_AI_MODES: Record<string, string> = {
  heuristic: 'heurístico',
  gemini: 'gemini',
  hybrid: 'híbrido',
};

const ZH_AI_MODES: Record<string, string> = {
  heuristic: '启发式',
  gemini: 'Gemini',
  hybrid: '混合',
};

export const costEstimationOverlayMessages = defineMessages({
  en: {
    title: 'BYOK API Usage',
    connected: 'Connected',
    disconnected: 'Disconnected',
    aiMode: (p: { mode: string }) => p.mode,
    usd: '${amount}',
    durationHours: '{hours}h {minutes}m',
    durationMinutes: '{minutes}m',
    sessionCostLabel: 'Paid calls including key tests ({duration})',
    requests: 'Requests',
    lastCall: 'Last Call',
    inputTokens: 'Input Tokens',
    outputTokens: 'Output Tokens',
    noCap: 'No session cap',
    cap: 'Cap ${amount}',
    inFlight: ' · ${amount} in flight or uncertain',
    onDevice: 'On-device inference has no API charge.',
    chatgptNote: 'ChatGPT plan usage is separate from BYOK API billing and this dollar cap.',
    pricingNote:
      "{model}: direct-provider estimate ${input}/1M in, ${output}/1M out; OpenRouter reports account and any upstream BYOK costs. This tab's cap is an estimate, not a provider billing limit.",
  },
  zh: {
    title: 'BYOK API 用量',
    connected: '已连接',
    disconnected: '已断开',
    aiMode: (p: { mode: string }) => ZH_AI_MODES[p.mode] ?? p.mode,
    usd: 'USD {amount}',
    durationHours: '{hours} 小时 {minutes} 分',
    durationMinutes: '{minutes} 分',
    sessionCostLabel: '付费调用（含密钥测试，{duration}）',
    requests: '请求数',
    lastCall: '上次调用',
    inputTokens: '输入 token',
    outputTokens: '输出 token',
    noCap: '无会话上限',
    cap: '上限 USD {amount}',
    inFlight: ' · USD {amount} 处理中或不确定',
    onDevice: '端侧推理不产生 API 费用。',
    chatgptNote: 'ChatGPT 计划的用量独立于 BYOK API 计费与此美元上限。',
    pricingNote:
      '{model}：按直连提供商价格估算，输入 USD {input}/1M、输出 USD {output}/1M；OpenRouter 会上报账户费用及任何上游 BYOK 成本。此标签页的上限为估算值，并非提供商的计费限额。',
  },
  'pt-BR': {
    title: 'Uso da API (BYOK)',
    connected: 'Conectado',
    disconnected: 'Desconectado',
    aiMode: (p: { mode: string }) => upperFirst(PT_AI_MODES[p.mode] ?? p.mode),
    usd: 'US$ {amount}',
    durationHours: '{hours}h {minutes}min',
    durationMinutes: '{minutes}min',
    sessionCostLabel: 'Chamadas pagas, incluindo testes de chave ({duration})',
    requests: 'Requisições',
    lastCall: 'Última chamada',
    inputTokens: 'Tokens de entrada',
    outputTokens: 'Tokens de saída',
    noCap: 'Sem limite na sessão',
    cap: 'Limite US$ {amount}',
    inFlight: ' · US$ {amount} em andamento ou incerto',
    onDevice: 'A inferência no dispositivo não tem cobrança de API.',
    chatgptNote:
      'O uso do plano do ChatGPT é separado da cobrança da API BYOK e deste limite em dólares.',
    pricingNote:
      '{model}: estimativa pelo preço direto do provedor, US$ {input}/1M de entrada, US$ {output}/1M de saída; o OpenRouter informa os custos da conta e eventuais custos BYOK do provedor de origem. O limite desta aba é uma estimativa, não um limite de cobrança do provedor.',
  },
});
