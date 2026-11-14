import { defineMessages } from '../i18n';

export const aiSettingsModalMessages = defineMessages({
  en: {
    // Visualization toggles
    toggleCascade: 'Cascade Visualization',
    toggleStrategic: 'Strategic Overlay',
    toggleTarget: 'Production Target',
    toggleEnergy: 'Energy Dashboard',
    toggleMultiObjective: 'Multi-Objective',
    toggleCost: 'API Cost Tracker',
    toggleVcl: 'VCL Context',
    overlaysHeading: 'AI Visualization Overlays',
    overlaysHint: 'Toggle overlays with keyboard shortcuts or buttons above',

    // Local WebGPU panel
    localCoreTitle: 'Local Neural Core',
    online: 'Online',
    modelInfo: 'Model: {model}',
    backendInfo: 'Backend: WebGPU',
    webgpuUnavailable:
      'WebGPU is unavailable in this browser. Use a WebGPU-capable browser (recent Chrome, Edge, or Safari 17+) or select a cloud BYOK model.',
    compilingShaders: 'Compiling shaders',
    downloadingWeights: 'Downloading weights',
    cancelDownload: 'Cancel download',
    tryAgain: 'Try again',
    loadModel: 'Load model',
    downloadAndLoad: 'Download & load model',
    unloadModel: 'Unload model (free GPU memory)',
    deleting: 'Deleting...',
    deleteModel: 'Delete downloaded model',
    lightsOutLabel: 'Lights-out: the on-device AI handles incidents',
    fastLaneLabel: 'Fast routing lane (+{size} GB GPU memory)',
    cachedInBrowser: 'Cached in this browser',
    cachedWithSize: 'Cached in this browser (~{size} used)',
    notDownloaded: 'Not downloaded yet',
    modelDownloadNote:
      'The model ({model}, ~{size} GB) downloads automatically when you select this backend, once, from the Hugging Face CDN, and is cached in your browser. After that all inference runs on your GPU and your simulation data never leaves your device — no API key, no cost. Use “Delete downloaded model” any time to remove it and free the space.',

    // ChatGPT panel
    modelCatalogUnavailable: 'Model catalog unavailable.',
    chatgptOperationFailed: 'ChatGPT operation failed.',
    chatgptTitle: 'ChatGPT plan login',
    chatgptIntroBefore: 'Available in the local MillOS companion. Run ',
    chatgptIntroAfter:
      ' and open its 127.0.0.1 address. Public-site ChatGPT plan access requires OpenAI approval. This plan route is separate from the dollar cap on BYOK calls.',
    connectedAs: 'Connected as {account}',
    chatgptAccountFallback: 'ChatGPT account',
    chatgptAccountLabel: 'ChatGPT account',
    planModelLabel: 'ChatGPT plan model',
    selectPlanModel: 'Select a plan model',
    signOutUnconfirmed:
      'Signed out locally; remote revocation was not confirmed. Disconnect MillOS in ChatGPT Settings.',
    signOutLocally: 'Sign out locally',
    addAccount: 'Add another ChatGPT account',
    reconnectAccount: 'Reconnect ChatGPT account',
    continueWithChatGPT: 'Continue with ChatGPT',

    // Key test / save results
    keyVerifiedOpenRouter:
      'OpenRouter key and spending limit verified. Model access is checked on first request.',
    keyVerified: 'Key and model access verified for this session.',
    connectionFailed: 'Connection failed.',
    connectedForSession: 'Connected for this page session.',

    // Dialog
    title: 'AI Settings',
    closeSettings: 'Close settings',
    backendLabel: 'AI Backend',
    chatgptPlan: 'ChatGPT plan',
    recommended: 'Recommended',
    localCompanion: 'Local companion',
    localWebGPU: 'Local (WebGPU)',
    onDeviceFree: 'On-device • free',
    localModelLabel: 'Local',

    // Cost cap
    invalidCostCap: 'Invalid cost cap.',
    costCapLabel: 'BYOK session cost cap (USD)',
    costCapPlaceholder: 'Off',
    apply: 'Apply',
    costUsage: (p: { used: string; pending: string }) =>
      `Used $${p.used}; in flight or uncertain $${p.pending}.`,
    noCap: ' No cap set.',
    capSet: (p: { cap: string }) => ` Cap: $${p.cap}.`,
    costNote:
      'OpenRouter needs a cap and a lifetime spend-limited inference key that includes BYOK usage. Its key check is free; direct-provider key tests on localhost are billable. This tab reserves an estimate before paid calls; charges can exceed it. OpenRouter reports its account charge and any upstream BYOK charge. Verify your provider bill.',

    // Current status
    currentMode: 'Current Mode:',
    localOnly: 'Local Only',
    modelOnly: '{model} Only',
    hybridMode: 'Hybrid Mode',
    heuristic: 'Heuristic',
    connectedStatus: 'Connected • {model} • key held in memory',
    localCoreOnline: 'Local neural core online • {model}',

    // Cloud key flow
    apiKeyLabel: '{provider} API Key',
    placeholderUpdate: 'Enter new key to update...',
    placeholderEnter: 'Enter your {provider} API key...',
    replaceKey: 'Replace {provider} API key',
    enterKey: 'Enter {provider} API key',
    getKeyFrom: 'Get your API key from',
    providerConsole: '{provider} Console',
    openRouterKeyAdvice:
      'Set a session cap above, then use a lifetime spend-limited OpenRouter inference key with BYOK usage included in its limit. MillOS checks that limit before every paid request.',
    openRouterConsent:
      'Send simulated plant telemetry to OpenRouter and its model provider. My account pays for strategic requests. The app cap is an estimate; my provider bill is authoritative.',
    keyMemoryNote:
      'Your key stays in this page’s memory and is sent directly to {provider} with plant telemetry. Reloading clears it. MillOS has no server-side key vault; page scripts and browser extensions can access a key while this page is open.',
    keyCheckFree: 'The key check is free; strategic requests are billable.',
    keyTestsBillable: 'Key tests and strategic requests are billable.',

    // Operating mode
    operatingMode: 'AI Operating Mode',
    fastRules: 'Fast rules',
    hybrid: 'Hybrid',
    bestOfBoth: 'Best of both',
    llmOnly: 'LLM only',
    modeHeuristicDesc: 'Fast rule-based decisions. No API cost.',
    modeLocalOnlyDesc:
      'Strategic decisions from the local model only (every 45s); the fast rules layer is paused.',
    modeModelOnlyDesc:
      'Strategic decisions from {model} only (every 45s); the fast rules layer is paused.',
    modeLocalHybridDesc: 'Tactical (heuristic 6s) + Strategic (local model 45s).',
    modeModelHybridDesc: 'Tactical (heuristic 6s) + Strategic ({model} 45s).',

    // LLM-only confirmation
    considerHybrid: 'Consider Hybrid Mode?',
    hybridExplanation:
      ' combines fast heuristic decisions (every 6s) with strategic insights (every 45s), giving you the best of both worlds.',
    llmOnlyExplanation:
      'runs only the strategic LLM layer and pauses the fast rules layer, so the plant responds to changes more slowly.',
    useHybrid: 'Use Hybrid',
    useLocalOnly: 'Use Local Only',
    useModelOnly: 'Use {model} Only',
    cancel: 'Cancel',

    // Footer actions
    disconnectKey: 'Disconnect Key',
    testConnection: 'Test Connection',
    connectForSession: 'Connect for Session',
  },
  zh: {
    // Visualization toggles
    toggleCascade: '级联可视化',
    toggleStrategic: '战略覆盖层',
    toggleTarget: '产量目标',
    toggleEnergy: '能源仪表盘',
    toggleMultiObjective: '多目标',
    toggleCost: 'API 费用跟踪器',
    toggleVcl: 'VCL 上下文',
    overlaysHeading: 'AI 可视化覆盖层',
    overlaysHint: '使用键盘快捷键或上方按钮开关覆盖层',

    // Local WebGPU panel
    localCoreTitle: '本地神经核心',
    online: '在线',
    modelInfo: '模型：{model}',
    backendInfo: '后端：WebGPU',
    webgpuUnavailable:
      '此浏览器不支持 WebGPU。请使用支持 WebGPU 的浏览器（新版 Chrome、Edge 或 Safari 17+），或改选需要自备密钥的云端模型。',
    compilingShaders: '正在编译着色器',
    downloadingWeights: '正在下载权重',
    cancelDownload: '取消下载',
    tryAgain: '重试',
    loadModel: '加载模型',
    downloadAndLoad: '下载并加载模型',
    unloadModel: '卸载模型（释放显存）',
    deleting: '正在删除……',
    deleteModel: '删除已下载的模型',
    lightsOutLabel: '黑灯模式：由端侧 AI 处理事件',
    fastLaneLabel: '快速路由通道（+{size} GB 显存）',
    cachedInBrowser: '已缓存于此浏览器',
    cachedWithSize: '已缓存于此浏览器（约占用 {size}）',
    notDownloaded: '尚未下载',
    modelDownloadNote:
      '该模型（{model}，约 {size} GB）会在你选择此后端时自动从 Hugging Face CDN 下载一次，并缓存在你的浏览器中。此后所有推理都在你的 GPU 上运行，模拟数据绝不离开你的设备——无需 API 密钥，也没有费用。随时可以使用“删除已下载的模型”将其移除并释放空间。',

    // ChatGPT panel
    modelCatalogUnavailable: '模型目录不可用。',
    chatgptOperationFailed: 'ChatGPT 操作失败。',
    chatgptTitle: 'ChatGPT 计划登录',
    chatgptIntroBefore: '可在本地 MillOS 伴侣程序中使用。运行 ',
    chatgptIntroAfter:
      '，然后打开它的 127.0.0.1 地址。公开站点的 ChatGPT 计划访问需经 OpenAI 审批。这条计划路线与自备密钥调用的美元上限相互独立。',
    connectedAs: '已连接为 {account}',
    chatgptAccountFallback: 'ChatGPT 账户',
    chatgptAccountLabel: 'ChatGPT 账户',
    planModelLabel: 'ChatGPT 计划模型',
    selectPlanModel: '选择一个计划模型',
    signOutUnconfirmed:
      '已在本地退出登录；远程吊销未获确认。请在 ChatGPT 设置中与 MillOS 断开连接。',
    signOutLocally: '在本地退出登录',
    addAccount: '添加另一个 ChatGPT 账户',
    reconnectAccount: '重新连接 ChatGPT 账户',
    continueWithChatGPT: '通过 ChatGPT 继续',

    // Key test / save results
    keyVerifiedOpenRouter: 'OpenRouter 密钥与消费限额已验证。模型访问将在首次请求时检查。',
    keyVerified: '本次会话的密钥与模型访问已验证。',
    connectionFailed: '连接失败。',
    connectedForSession: '已连接，仅在本页面会话内有效。',

    // Dialog
    title: 'AI 设置',
    closeSettings: '关闭设置',
    backendLabel: 'AI 后端',
    chatgptPlan: 'ChatGPT 计划',
    recommended: '推荐',
    localCompanion: '本地伴侣程序',
    localWebGPU: '本地（WebGPU）',
    onDeviceFree: '端侧 • 免费',
    localModelLabel: '本地',

    // Cost cap
    invalidCostCap: '费用上限无效。',
    costCapLabel: '自备密钥（BYOK）会话费用上限（USD）',
    costCapPlaceholder: '关闭',
    apply: '应用',
    costUsage: (p: { used: string; pending: string }) =>
      `已用 $${p.used}；在途或不确定 $${p.pending}。`,
    noCap: ' 未设置上限。',
    capSet: (p: { cap: string }) => ` 上限：$${p.cap}。`,
    costNote:
      'OpenRouter 需要设置上限，并使用把自备密钥用量计入终身消费限额的推理密钥。其密钥检测免费；在 localhost 上直接向提供商测试密钥会产生费用。本标签页会在付费调用前预留一个估算值；实际费用可能超出该值。OpenRouter 会报告其账户扣费及任何上游自备密钥扣费。请核对你的提供商账单。',

    // Current status
    currentMode: '当前模式：',
    localOnly: '仅本地',
    modelOnly: '仅 {model}',
    hybridMode: '混合模式',
    heuristic: '启发式',
    connectedStatus: '已连接 • {model} • 密钥仅存于内存',
    localCoreOnline: '本地神经核心在线 • {model}',

    // Cloud key flow
    apiKeyLabel: '{provider} API 密钥',
    placeholderUpdate: '输入新密钥以更新……',
    placeholderEnter: '输入你的 {provider} API 密钥……',
    replaceKey: '替换 {provider} API 密钥',
    enterKey: '输入 {provider} API 密钥',
    getKeyFrom: '从以下位置获取你的 API 密钥',
    providerConsole: '{provider} 控制台',
    openRouterKeyAdvice:
      '请先在上方设置会话上限，再使用把自备密钥用量计入终身消费限额的 OpenRouter 推理密钥。MillOS 会在每次付费请求前检查该限额。',
    openRouterConsent:
      '将模拟的工厂遥测发送给 OpenRouter 及其模型提供商。战略请求由我的账户付费。应用内上限只是估算；以我的提供商账单为准。',
    keyMemoryNote:
      '你的密钥只保存在本页面的内存中，并随工厂遥测直接发送给 {provider}。重新加载页面即会清除。MillOS 没有服务器端密钥保管库；本页面打开期间，页面脚本与浏览器扩展都能访问密钥。',
    keyCheckFree: '密钥检测免费；战略请求产生费用。',
    keyTestsBillable: '密钥测试与战略请求均产生费用。',

    // Operating mode
    operatingMode: 'AI 运行模式',
    fastRules: '快速规则',
    hybrid: '混合',
    bestOfBoth: '两者兼得',
    llmOnly: '仅 LLM',
    modeHeuristicDesc: '快速的基于规则的决策。无 API 费用。',
    modeLocalOnlyDesc: '战略决策仅来自本地模型（每 45 秒）；快速规则层暂停。',
    modeModelOnlyDesc: '战略决策仅来自 {model}（每 45 秒）；快速规则层暂停。',
    modeLocalHybridDesc: '战术（启发式 6 秒）+ 战略（本地模型 45 秒）。',
    modeModelHybridDesc: '战术（启发式 6 秒）+ 战略（{model} 45 秒）。',

    // LLM-only confirmation
    considerHybrid: '考虑使用混合模式？',
    hybridExplanation:
      '将快速启发式决策（每 6 秒）与战略洞察（每 45 秒）相结合，让你兼得两者之长。',
    llmOnlyExplanation: '仅运行战略 LLM 层并暂停快速规则层，工厂对变化的响应会变慢。',
    useHybrid: '使用混合',
    useLocalOnly: '使用仅本地',
    useModelOnly: '使用仅 {model}',
    cancel: '取消',

    // Footer actions
    disconnectKey: '断开密钥',
    testConnection: '测试连接',
    connectForSession: '在本次会话中连接',
  },
  'pt-BR': {
    toggleCascade: 'Visualização em cascata',
    toggleStrategic: 'Camada estratégica',
    toggleTarget: 'Meta de produção',
    toggleEnergy: 'Painel de energia',
    toggleMultiObjective: 'Multiobjetivo',
    toggleCost: 'Monitor de custos da API',
    toggleVcl: 'Contexto VCL',
    overlaysHeading: 'Camadas de visualização da IA',
    overlaysHint: 'Ative ou desative as camadas com os atalhos de teclado ou os botões acima',

    localCoreTitle: 'Núcleo neural local',
    online: 'On-line',
    modelInfo: 'Modelo: {model}',
    backendInfo: 'Backend: WebGPU',
    webgpuUnavailable:
      'O WebGPU não está disponível neste navegador. Use um navegador compatível com WebGPU (Chrome recente, Edge ou Safari 17+) ou selecione um modelo em nuvem BYOK.',
    compilingShaders: 'Compilando shaders',
    downloadingWeights: 'Baixando pesos',
    cancelDownload: 'Cancelar download',
    tryAgain: 'Tentar novamente',
    loadModel: 'Carregar modelo',
    downloadAndLoad: 'Baixar e carregar modelo',
    unloadModel: 'Descarregar modelo (liberar memória da GPU)',
    deleting: 'Excluindo...',
    deleteModel: 'Excluir modelo baixado',
    lightsOutLabel: 'Luzes apagadas: a IA no dispositivo trata as ocorrências',
    fastLaneLabel: 'Via rápida de encaminhamento (+{size} GB de memória da GPU)',
    cachedInBrowser: 'Em cache neste navegador',
    cachedWithSize: 'Em cache neste navegador (~{size} em uso)',
    notDownloaded: 'Ainda não baixado',
    modelDownloadNote:
      'O modelo ({model}, ~{size} GB) é baixado automaticamente uma única vez, da CDN do Hugging Face, quando você seleciona este backend, e fica armazenado no seu navegador. Depois disso, toda a inferência roda na sua GPU e os dados da sua simulação nunca saem do seu dispositivo — sem chave de API, sem custo. Use “Excluir modelo baixado” a qualquer momento para removê-lo e liberar o espaço.',

    modelCatalogUnavailable: 'Catálogo de modelos indisponível.',
    chatgptOperationFailed: 'A operação do ChatGPT falhou.',
    chatgptTitle: 'Login com o plano ChatGPT',
    chatgptIntroBefore: 'Disponível no app auxiliar local do MillOS. Execute ',
    chatgptIntroAfter:
      ' e abra o endereço 127.0.0.1 que ele indicar. O acesso pelo plano ChatGPT no site público depende de aprovação da OpenAI. Esta rota pelo plano é separada do limite em dólares das chamadas BYOK.',
    connectedAs: 'Conectado como {account}',
    chatgptAccountFallback: 'conta ChatGPT',
    chatgptAccountLabel: 'Conta ChatGPT',
    planModelLabel: 'Modelo do plano ChatGPT',
    selectPlanModel: 'Selecione um modelo do plano',
    signOutUnconfirmed:
      'Sessão encerrada localmente; a revogação remota não foi confirmada. Desconecte o MillOS nas Configurações do ChatGPT.',
    signOutLocally: 'Sair localmente',
    addAccount: 'Adicionar outra conta ChatGPT',
    reconnectAccount: 'Reconectar conta ChatGPT',
    continueWithChatGPT: 'Continuar com o ChatGPT',

    keyVerifiedOpenRouter:
      'Chave e limite de gastos da OpenRouter verificados. O acesso ao modelo é verificado na primeira solicitação.',
    keyVerified: 'Chave e acesso ao modelo verificados para esta sessão.',
    connectionFailed: 'Falha na conexão.',
    connectedForSession: 'Conectado nesta sessão da página.',

    title: 'Configurações de IA',
    closeSettings: 'Fechar configurações',
    backendLabel: 'Backend de IA',
    chatgptPlan: 'Plano ChatGPT',
    recommended: 'Recomendado',
    localCompanion: 'App auxiliar local',
    localWebGPU: 'Local (WebGPU)',
    onDeviceFree: 'No dispositivo • grátis',
    localModelLabel: 'Local',

    invalidCostCap: 'Limite de custo inválido.',
    costCapLabel: 'Limite de custo da sessão BYOK (USD)',
    costCapPlaceholder: 'Sem limite',
    apply: 'Aplicar',
    costUsage: (p: { used: string; pending: string }) =>
      `Usado: US$ ${p.used}; em andamento ou incerto: US$ ${p.pending}.`,
    noCap: ' Nenhum limite definido.',
    capSet: (p: { cap: string }) => ` Limite: US$ ${p.cap}.`,
    costNote:
      'A OpenRouter exige um limite e uma chave de inferência com limite de gastos vitalício que inclua o uso BYOK. A verificação dessa chave é gratuita; testes de chave feitos diretamente com o provedor no localhost são cobrados. Esta aba reserva uma estimativa antes das chamadas pagas; as cobranças podem ultrapassá-la. A OpenRouter informa a cobrança da sua conta e qualquer cobrança BYOK do provedor de origem. Confira a fatura do seu provedor.',

    currentMode: 'Modo atual:',
    localOnly: 'Somente local',
    modelOnly: 'Somente {model}',
    hybridMode: 'Modo híbrido',
    heuristic: 'Heurístico',
    connectedStatus: 'Conectado • {model} • chave mantida na memória',
    localCoreOnline: 'Núcleo neural local on-line • {model}',

    apiKeyLabel: 'Chave de API da {provider}',
    placeholderUpdate: 'Digite uma nova chave para atualizar...',
    placeholderEnter: 'Digite sua chave de API da {provider}...',
    replaceKey: 'Substituir chave de API da {provider}',
    enterKey: 'Inserir chave de API da {provider}',
    getKeyFrom: 'Obtenha sua chave de API no',
    providerConsole: 'Console da {provider}',
    openRouterKeyAdvice:
      'Defina um limite de sessão acima e depois use uma chave de inferência da OpenRouter com limite de gastos vitalício que inclua o uso BYOK. O MillOS verifica esse limite antes de cada solicitação paga.',
    openRouterConsent:
      'Enviar a telemetria simulada da planta para a OpenRouter e o provedor do modelo. Minha conta paga as solicitações estratégicas. O limite do app é uma estimativa; a fatura do meu provedor é a referência oficial.',
    keyMemoryNote:
      'Sua chave fica na memória desta página e é enviada diretamente à {provider} com a telemetria da planta. Recarregar a página a apaga. O MillOS não tem cofre de chaves no servidor; scripts da página e extensões do navegador podem acessar uma chave enquanto esta página estiver aberta.',
    keyCheckFree: 'A verificação da chave é gratuita; as solicitações estratégicas são cobradas.',
    keyTestsBillable: 'Testes de chave e solicitações estratégicas são cobrados.',

    operatingMode: 'Modo de operação da IA',
    fastRules: 'Regras rápidas',
    hybrid: 'Híbrido',
    bestOfBoth: 'O melhor dos dois',
    llmOnly: 'Somente LLM',
    modeHeuristicDesc: 'Decisões rápidas baseadas em regras. Sem custo de API.',
    modeLocalOnlyDesc:
      'Decisões estratégicas apenas do modelo local (a cada 45 s); a camada de regras rápidas fica pausada.',
    modeModelOnlyDesc:
      'Decisões estratégicas apenas do {model} (a cada 45 s); a camada de regras rápidas fica pausada.',
    modeLocalHybridDesc: 'Tático (heurístico 6 s) + Estratégico (modelo local 45 s).',
    modeModelHybridDesc: 'Tático (heurístico 6 s) + Estratégico ({model} 45 s).',

    considerHybrid: 'Considerar o modo híbrido?',
    hybridExplanation:
      ' combina decisões heurísticas rápidas (a cada 6 s) com análises estratégicas (a cada 45 s), oferecendo o melhor dos dois mundos.',
    llmOnlyExplanation:
      'executa apenas a camada estratégica de LLM e pausa a camada de regras rápidas, então a planta reage mais devagar às mudanças.',
    useHybrid: 'Usar híbrido',
    useLocalOnly: 'Usar somente local',
    useModelOnly: 'Usar somente {model}',
    cancel: 'Cancelar',

    disconnectKey: 'Desconectar chave',
    testConnection: 'Testar conexão',
    connectForSession: 'Conectar nesta sessão',
  },
});
