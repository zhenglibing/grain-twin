import { defineMessages } from '../../i18n';

/**
 * Words only. The VCP glyphs in the legend are protocol documentation and stay
 * in VCLDebugPanel.tsx; the encoded string itself is never translated.
 */
export const vclDebugPanelMessages = defineMessages({
  en: {
    // Example verbose text that VCL replaces. Its length drives the savings figures.
    verboseExample: `Current time: 14:30, autonomous run window B
Weather: clear
Production line status:
- Silos: 5 of 5 running at 65% average load
- Roller mills: 4 of 4 running at 78% average load
- Plansifters: 3 of 3 running at 71% average load
- Packers: 3 of 3 running at 82% average load
- Control network: online
Active critical alarms: none`,
    encodingError: 'Error encoding VCL',
    savedBadge: '{percent}% SAVED',
    subtitle: 'Compact emoji encoding for AI context',
    liveFactoryState: 'Live Factory State',
    chars: '{count} chars',
    howItWorks: 'How It Works',
    howItWorksBefore: 'This example compares compact and verbose formats, with a',
    howItWorksAfter: 'size reduction. Live strategic requests use structured telemetry.',
    hideComparison: 'Hide Comparison',
    showComparison: 'Show Comparison',
    traditionalText: 'Traditional Text',
    vcpEncoded: 'VCP Encoded',
    sameInformation: 'Same information, {percent}% fewer tokens',
    sizeReduction: 'Size Reduction',
    tokensSaved: 'Tokens Saved',
    example: 'Example',
    notLiveSavings: 'Not live savings',
    copied: 'Copied!',
    copyFailed: 'Copy failed',
    copy: 'Copy',
    emojiDictionary: 'Emoji Dictionary',
    timeEnvironment: 'Time & Environment',
    morning: 'Morning',
    afternoon: 'Afternoon',
    evening: 'Evening',
    night: 'Night',
    clear: 'Clear',
    cloudy: 'Cloudy',
    rain: 'Rain',
    storm: 'Storm',
    machinesStatus: 'Machines & Status',
    silo: 'Silo',
    mill: 'Mill',
    sifter: 'Sifter',
    packer: 'Packer',
    running: 'Running',
    idle: 'Idle',
    warning: 'Warning',
    critical: 'Critical',
    loadLevels: 'Load Levels',
    controlAlarms: 'Control & Alarms',
    control: 'Control',
    alarmsClear: 'Clear',
    criticalAlarmCount: 'Critical alarm count',
    format: 'Format: ',
    formatSpec: 'TIME|WINDOW|WEATHER | SILO→MILL→SIFTER→PACKER→CONTROL | ALARMS',
  },
  zh: {
    // Example verbose text that VCL replaces. Its length drives the savings figures.
    verboseExample: `当前时间：14:30，自主运行时段 B
天气：晴
生产线状态：
- 筒仓：5/5 运行中，平均负载 65%
- 磨辊机：4/4 运行中，平均负载 78%
- 平筛：3/3 运行中，平均负载 71%
- 包装线：3/3 运行中，平均负载 82%
- 控制网络：在线
活动危急报警：无`,
    encodingError: 'VCL 编码出错',
    savedBadge: '节省 {percent}%',
    subtitle: '面向 AI 上下文的紧凑 emoji 编码',
    liveFactoryState: '实时工厂状态',
    chars: '{count} 字符',
    howItWorks: '工作原理',
    howItWorksBefore: '本示例对比紧凑与冗长两种格式，',
    howItWorksAfter: '的体积缩减。实际战略请求使用结构化遥测。',
    hideComparison: '隐藏对比',
    showComparison: '显示对比',
    traditionalText: '传统文本',
    vcpEncoded: 'VCP 编码',
    sameInformation: '信息相同，token 减少 {percent}%',
    sizeReduction: '体积缩减',
    tokensSaved: '已节省 token',
    example: '示例',
    notLiveSavings: '非实时节省数据',
    copied: '已复制！',
    copyFailed: '复制失败',
    copy: '复制',
    emojiDictionary: 'Emoji 字典',
    timeEnvironment: '时间与环境',
    morning: '清晨',
    afternoon: '下午',
    evening: '傍晚',
    night: '夜间',
    clear: '晴',
    cloudy: '多云',
    rain: '雨',
    storm: '风暴',
    machinesStatus: '设备与状态',
    silo: '筒仓',
    mill: '磨辊机',
    sifter: '平筛',
    packer: '包装线',
    running: '运行中',
    idle: '空闲',
    warning: '警告',
    critical: '危急',
    loadLevels: '负载档位',
    controlAlarms: '控制与报警',
    control: '控制',
    alarmsClear: '无报警',
    criticalAlarmCount: '危急报警数',
    format: '格式：',
    formatSpec: '时间|运行时段|天气 | 筒仓→磨辊机→平筛→包装线→控制 | 报警',
  },
  'pt-BR': {
    verboseExample: `Hora atual: 14:30, janela de operação autônoma B
Clima: céu limpo
Status da linha de produção:
- Silos: 5 de 5 operando com carga média de 65%
- Moinhos de rolos: 4 de 4 operando com carga média de 78%
- Plansifters: 3 de 3 operando com carga média de 71%
- Ensacadeiras: 3 de 3 operando com carga média de 82%
- Rede de controle: online
Alarmes críticos ativos: nenhum`,
    encodingError: 'Erro ao codificar o VCL',
    savedBadge: '{percent}% DE ECONOMIA',
    subtitle: 'Codificação compacta em emoji para o contexto da IA',
    liveFactoryState: 'Estado da fábrica ao vivo',
    chars: '{count} caracteres',
    howItWorks: 'Como funciona',
    howItWorksBefore: 'Este exemplo compara os formatos compacto e detalhado, com',
    howItWorksAfter:
      'de redução de tamanho. As solicitações estratégicas reais usam telemetria estruturada.',
    hideComparison: 'Ocultar comparação',
    showComparison: 'Mostrar comparação',
    traditionalText: 'Texto tradicional',
    vcpEncoded: 'Codificado em VCP',
    sameInformation: 'Mesma informação, {percent}% menos tokens',
    sizeReduction: 'Redução de tamanho',
    tokensSaved: 'Tokens economizados',
    example: 'Exemplo',
    notLiveSavings: 'Não é economia ao vivo',
    copied: 'Copiado!',
    copyFailed: 'Falha ao copiar',
    copy: 'Copiar',
    emojiDictionary: 'Dicionário de emojis',
    timeEnvironment: 'Hora e ambiente',
    morning: 'Manhã',
    afternoon: 'Tarde',
    evening: 'Fim de tarde',
    night: 'Noite',
    clear: 'Céu limpo',
    cloudy: 'Nublado',
    rain: 'Chuva',
    storm: 'Tempestade',
    machinesStatus: 'Máquinas e status',
    silo: 'Silo',
    mill: 'Moinho',
    sifter: 'Plansifter',
    packer: 'Ensacadeira',
    running: 'Em operação',
    idle: 'Ociosa',
    warning: 'Alerta',
    critical: 'Crítico',
    loadLevels: 'Níveis de carga',
    controlAlarms: 'Controle e alarmes',
    control: 'Controle',
    alarmsClear: 'Sem alarmes',
    criticalAlarmCount: 'Nº de alarmes críticos',
    format: 'Formato: ',
    formatSpec: 'HORA|JANELA|CLIMA | SILO→MOINHO→PLANSIFTER→ENSACADEIRA→CONTROLE | ALARMES',
  },
});
