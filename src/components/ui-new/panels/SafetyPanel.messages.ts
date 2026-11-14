import { defineMessages } from '../../../i18n';

/** Safety event stages render as their raw value in English; CSS uppercases them. */
const PT_STAGE: Record<string, string> = {
  active: 'ativo',
  acknowledged: 'reconhecido',
  cleared: 'normalizado',
};

// 已确认/已清除 follow the batch-2 alarm-state pins; 活动中 extends the
// batch-3 "active" pin for the stage chip.
const ZH_STAGE: Record<string, string> = {
  active: '活动中',
  acknowledged: '已确认',
  cleared: '已清除',
};

export const safetyPanelMessages = defineMessages({
  en: {
    loading: 'Loading...',
    weatherClear: 'Clear',
    weatherCloudy: 'Cloudy',
    weatherRain: 'Rain',
    weatherStorm: 'Storm',
    tabControls: 'Controls',
    tabAnalytics: 'Analytics',
    tabConfig: 'Config',

    featureSafetyMetrics: 'Safety metrics',
    featureSafetyAnalytics: 'Safety analytics',
    featureIncidentHistory: 'Incident history',
    featureSafetyConfiguration: 'Safety configuration',
    featureZoneCustomization: 'Zone customization',

    emergencyResponse: 'Emergency Response',
    simulatedSafetyEvent: 'Simulated safety event',
    safetyInterlock: 'Safety interlock',
    stage: (p: { value: string }) => p.value,
    acknowledgementNote: 'Acknowledged in the Safety workspace',
    acknowledgeEvent: 'Acknowledge event',
    safetyStateRecovered: 'Safety state recovered',
    cleared: 'Cleared',

    drillGroupLabel: 'Emergency egress verification drill',
    drillTitle: 'Egress verification drill',
    allZonesVerified: 'All zones verified',
    zonesVerified: '{verified}/{total} zones verified',
    drillDescription:
      'Halts production and grounds every forklift while the egress sensors verify themselves. Nothing moves until they agree.',
    endDrill: 'END DRILL',
    startDrill: 'START DRILL',
    clearEmergencyBeforeDrill: 'Clear the active emergency before starting a drill',
    releaseForkliftStop: 'RELEASE FORKLIFT STOP',

    resolveCrisisFirst: 'Resolve the active crisis before clearing its interlock',
    chronicleFireInterlock:
      'A Mill Chronicle duct fire holds this interlock; answer it in the Chronicle',
    endDrillFirst: 'End the active egress verification drill before using the emergency stop',
    crisisInterlockActive: 'CRISIS INTERLOCK ACTIVE',
    drillInterlockActive: 'DRILL INTERLOCK ACTIVE',
    clearEmergency: 'CLEAR EMERGENCY',
    triggerEmergencyStop: 'TRIGGER EMERGENCY STOP',

    environment: 'Environment',
    weatherConditionsLabel: 'Weather conditions',
    weatherConditions: 'Weather Conditions',
    setWeatherTo: 'Set weather to {label}',

    confirmTitle: 'Trigger facility emergency stop?',
    confirmMessage:
      'Everything stops — machines, forklifts, the lot. The alarm stays on until you clear the interlock from this panel.',
    confirmLabel: 'Trigger emergency stop',
  },
  zh: {
    loading: '加载中……',
    weatherClear: '晴',
    weatherCloudy: '多云',
    weatherRain: '雨',
    weatherStorm: '风暴',
    tabControls: '控制',
    tabAnalytics: '分析',
    tabConfig: '配置',

    featureSafetyMetrics: '安全指标',
    featureSafetyAnalytics: '安全分析',
    featureIncidentHistory: '事件历史',
    featureSafetyConfiguration: '安全配置',
    featureZoneCustomization: '区域自定义',

    emergencyResponse: '应急响应',
    simulatedSafetyEvent: '模拟安全事件',
    safetyInterlock: '安全联锁',
    stage: (p: { value: string }) => ZH_STAGE[p.value] ?? p.value,
    acknowledgementNote: '已在安全工作区确认',
    acknowledgeEvent: '确认事件',
    safetyStateRecovered: '安全状态已恢复',
    cleared: '已清除',

    drillGroupLabel: '紧急疏散验证演练',
    drillTitle: '疏散验证演练',
    allZonesVerified: '全部区域已验证',
    zonesVerified: '{verified}/{total} 区域已验证',
    drillDescription: '停产并停运所有叉车，疏散传感器逐个自检；全部确认之前，一切保持静止。',
    endDrill: '结束演练',
    startDrill: '开始演练',
    clearEmergencyBeforeDrill: '开始演练前，请先解除当前紧急状态',
    releaseForkliftStop: '解除叉车停机',

    resolveCrisisFirst: '请先解决当前危机，再解除其联锁',
    chronicleFireInterlock: '磨坊纪事的管道火灾占用了该联锁；请前往磨坊纪事处理',
    endDrillFirst: '使用紧急停机前，请先结束进行中的疏散验证演练',
    crisisInterlockActive: '危机联锁生效中',
    drillInterlockActive: '演练联锁生效中',
    clearEmergency: '解除紧急状态',
    triggerEmergencyStop: '触发紧急停机',

    environment: '环境',
    weatherConditionsLabel: '天气状况',
    weatherConditions: '天气状况',
    setWeatherTo: '将天气设为 {label}',

    confirmTitle: '触发设施紧急停机？',
    confirmMessage: '一切立即停机——设备、叉车，全部。报警将持续鸣响，直至在本面板解除联锁。',
    confirmLabel: '触发紧急停机',
  },
  'pt-BR': {
    loading: 'Carregando...',
    weatherClear: 'Limpo',
    weatherCloudy: 'Nublado',
    weatherRain: 'Chuva',
    weatherStorm: 'Tempestade',
    tabControls: 'Controles',
    tabAnalytics: 'Análises',
    tabConfig: 'Configuração',

    featureSafetyMetrics: 'Métricas de segurança',
    featureSafetyAnalytics: 'Análises de segurança',
    featureIncidentHistory: 'Histórico de ocorrências',
    featureSafetyConfiguration: 'Configuração de segurança',
    featureZoneCustomization: 'Personalização de zonas',

    emergencyResponse: 'Resposta a emergências',
    simulatedSafetyEvent: 'Evento de segurança simulado',
    safetyInterlock: 'Intertravamento de segurança',
    stage: (p: { value: string }) => PT_STAGE[p.value] ?? p.value,
    acknowledgementNote: 'Reconhecido no espaço de trabalho de Segurança',
    acknowledgeEvent: 'Reconhecer evento',
    safetyStateRecovered: 'Estado de segurança restabelecido',
    cleared: 'Normalizado',

    drillGroupLabel: 'Simulado de verificação das rotas de saída de emergência',
    drillTitle: 'Simulado de verificação das rotas de saída',
    allZonesVerified: 'Todas as zonas verificadas',
    zonesVerified: '{verified}/{total} zonas verificadas',
    drillDescription:
      'Interrompe a produção e imobiliza todas as empilhadeiras enquanto os sensores das rotas de saída fazem a autoverificação. Nada se move até que todos confirmem.',
    endDrill: 'ENCERRAR SIMULADO',
    startDrill: 'INICIAR SIMULADO',
    clearEmergencyBeforeDrill: 'Encerre a emergência ativa antes de iniciar um simulado',
    releaseForkliftStop: 'LIBERAR PARADA DAS EMPILHADEIRAS',

    resolveCrisisFirst: 'Resolva a crise ativa antes de liberar o intertravamento',
    chronicleFireInterlock:
      'Um incêndio no duto da Crônica do moinho mantém este intertravamento; responda a ele na Crônica',
    endDrillFirst:
      'Encerre o simulado de verificação das rotas de saída em andamento antes de usar a parada de emergência',
    crisisInterlockActive: 'INTERTRAVAMENTO DE CRISE ATIVO',
    drillInterlockActive: 'INTERTRAVAMENTO DO SIMULADO ATIVO',
    clearEmergency: 'ENCERRAR EMERGÊNCIA',
    triggerEmergencyStop: 'ACIONAR PARADA DE EMERGÊNCIA',

    environment: 'Ambiente',
    weatherConditionsLabel: 'Condições climáticas',
    weatherConditions: 'Condições climáticas',
    setWeatherTo: 'Definir o clima como {label}',

    confirmTitle: 'Acionar a parada de emergência da unidade?',
    confirmMessage:
      'Tudo para — máquinas, empilhadeiras, tudo. O alarme continua ligado até você liberar o intertravamento neste painel.',
    confirmLabel: 'Acionar parada de emergência',
  },
});
