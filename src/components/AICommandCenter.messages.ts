import { defineMessages, upperFirst } from '../i18n';

const PT_WEATHER: Record<string, string> = {
  clear: 'céu limpo',
  cloudy: 'nublado',
  rain: 'chuva',
  storm: 'tempestade',
};

const PT_RUN_WINDOW: Record<string, string> = {
  morning: 'manhã',
  afternoon: 'tarde',
  night: 'noite',
};

const PT_DECISION_TYPE: Record<string, string> = {
  coordination: 'coordenação',
  optimization: 'otimização',
  prediction: 'previsão',
  maintenance: 'manutenção',
  safety: 'segurança',
};

const PT_PRIORITY: Record<string, string> = {
  low: 'baixa',
  medium: 'média',
  high: 'alta',
  critical: 'crítica',
};

const PT_DISPOSITION: Record<string, string> = {
  accepted: 'aceita',
  modified: 'modificada',
  rejected: 'rejeitada',
  deferred: 'adiada',
  automatic: 'automática',
};

const ZH_WEATHER: Record<string, string> = {
  clear: '晴',
  cloudy: '多云',
  rain: '雨',
  storm: '风暴',
};

const ZH_RUN_WINDOW: Record<string, string> = {
  morning: '清晨',
  afternoon: '下午',
  night: '夜间',
};

const ZH_DECISION_TYPE: Record<string, string> = {
  coordination: '协调',
  optimization: '优化',
  prediction: '预测',
  maintenance: '维护',
  safety: '安全',
};

const ZH_PRIORITY: Record<string, string> = {
  low: '低',
  medium: '中',
  high: '高',
  critical: '危急',
};

const ZH_DISPOSITION: Record<string, string> = {
  accepted: '已接受',
  modified: '已修改',
  rejected: '已拒绝',
  deferred: '已推迟',
  automatic: '自动',
};

/*
 * Enum values (weather, run window, decision type, priority, response) were
 * rendered raw and styled by CSS. English keeps the raw value; pt-BR maps the
 * known values and falls back to the raw value for anything new.
 */
export const aiCommandCenterMessages = defineMessages({
  en: {
    chatgptPlan: 'ChatGPT plan',
    modeLocal: 'Local',
    modeHybrid: 'Hybrid',
    modeHeuristic: 'Heuristic',
    title: 'AI Partner',
    reviewing: 'reviewing...',
    settingsLabel: 'AI settings, current mode: {mode}',
    settingsTitleLocal: 'Local AI Active: configure',
    settingsTitleCloud: '{label} AI Active: configure',
    settingsTitleHybrid: 'Hybrid Mode Active - Click to configure',
    settingsTitleHeuristic: 'Heuristic Mode - Click to configure AI backend',
    sessionCost: '{cost} est.',
    noApiCost: 'NO API COST',
    egressDrill: 'EGRESS DRILL IN PROGRESS',
    weather: (p: { value: string }) => p.value,
    runWindow: (p: { value: string }) => `${p.value} run window`,
    efficiency: 'Eff: {value}%',
    tabsLabel: 'AI Partner views',
    tabDecisions: 'Decisions ({count})',
    tabStrategic: 'Strategic',
    tabAdvisory: 'Advisory',
    newDecision: 'New AI decision: {action}',
    decisionType: (p: { value: string }) => p.value,
    priority: (p: { value: string }) => p.value,
    response: (p: { value: string }) => `Response: ${p.value}`,
    inspectEvidence: 'Inspect evidence',
    accept: 'Accept',
    defer: 'Defer',
    reject: 'Reject',
    showingDecisions: 'Showing 15 of {count} decisions',
    noRecommendations: 'No recommendations have been recorded.',
  },
  zh: {
    chatgptPlan: 'ChatGPT 计划',
    modeLocal: '本地',
    modeHybrid: '混合',
    modeHeuristic: '启发式',
    title: 'AI 伙伴',
    reviewing: '审阅中……',
    settingsLabel: 'AI 设置，当前模式：{mode}',
    settingsTitleLocal: '本地 AI 已启用：配置',
    settingsTitleCloud: '{label} AI 已启用：配置',
    settingsTitleHybrid: '混合模式已启用——点击配置',
    settingsTitleHeuristic: '启发式模式——点击配置 AI 后端',
    sessionCost: '预估 {cost}',
    noApiCost: '无 API 费用',
    egressDrill: '疏散验证演练进行中',
    weather: (p: { value: string }) => ZH_WEATHER[p.value] ?? p.value,
    runWindow: (p: { value: string }) => `运行时段：${ZH_RUN_WINDOW[p.value] ?? p.value}`,
    efficiency: '效率：{value}%',
    tabsLabel: 'AI 伙伴视图',
    tabDecisions: '决策（{count}）',
    tabStrategic: '战略',
    tabAdvisory: '建议',
    newDecision: '新的 AI 决策：{action}',
    decisionType: (p: { value: string }) => ZH_DECISION_TYPE[p.value] ?? p.value,
    priority: (p: { value: string }) => ZH_PRIORITY[p.value] ?? p.value,
    response: (p: { value: string }) => `响应：${ZH_DISPOSITION[p.value] ?? p.value}`,
    inspectEvidence: '查看证据',
    accept: '接受',
    defer: '推迟',
    reject: '拒绝',
    showingDecisions: '正在显示 {count} 条决策中的 15 条',
    noRecommendations: '尚未记录任何建议。',
  },
  'pt-BR': {
    chatgptPlan: 'Plano ChatGPT',
    modeLocal: 'Local',
    modeHybrid: 'Híbrido',
    modeHeuristic: 'Heurístico',
    title: 'Parceiro de IA',
    reviewing: 'revisando...',
    settingsLabel: 'Configurações de IA, modo atual: {mode}',
    settingsTitleLocal: 'IA local ativa: configurar',
    settingsTitleCloud: 'IA {label} ativa: configurar',
    settingsTitleHybrid: 'Modo híbrido ativo - clique para configurar',
    settingsTitleHeuristic: 'Modo heurístico - clique para configurar o backend de IA',
    sessionCost: '{cost} estim.',
    noApiCost: 'SEM CUSTO DE API',
    egressDrill: 'VERIFICAÇÃO DAS ROTAS DE SAÍDA EM ANDAMENTO',
    weather: (p: { value: string }) => upperFirst(PT_WEATHER[p.value] ?? p.value),
    runWindow: (p: { value: string }) => `Período: ${PT_RUN_WINDOW[p.value] ?? p.value}`,
    efficiency: 'Efic.: {value}%',
    tabsLabel: 'Visões do parceiro de IA',
    tabDecisions: 'Decisões ({count})',
    tabStrategic: 'Estratégia',
    tabAdvisory: 'Recomendações',
    newDecision: 'Nova decisão da IA: {action}',
    decisionType: (p: { value: string }) => PT_DECISION_TYPE[p.value] ?? p.value,
    priority: (p: { value: string }) => PT_PRIORITY[p.value] ?? p.value,
    response: (p: { value: string }) => `Resposta: ${PT_DISPOSITION[p.value] ?? p.value}`,
    inspectEvidence: 'Ver evidências',
    accept: 'Aceitar',
    defer: 'Adiar',
    reject: 'Rejeitar',
    showingDecisions: 'Mostrando 15 de {count} decisões',
    noRecommendations: 'Nenhuma recomendação foi registrada.',
  },
});
