import { defineMessages } from '../i18n';

export const alertSystemMessages = defineMessages({
  en: {
    maintenanceCompleteTitle: 'Maintenance Complete',
    maintenanceCompleteMessage: 'Roller Mill RM-103 back online',
    temperatureRisingTitle: 'Temperature Rising',
    temperatureRisingMessage: 'Plansifter B bearing temperature elevated',
    qualityCheckTitle: 'Quality Check',
    qualityCheckMessage: 'Hourly sample collection under way',
    targetMetTitle: 'Target Met',
    targetMetMessage: 'Daily production target reached',
    lowStockTitle: 'Low Stock',
    lowStockMessage: 'Packaging supplies below reorder point',
    conveyorCheckTitle: 'Conveyor Check',
    conveyorCheckMessage: 'Belt tension nominal',
    nearMissBlockedAisle: 'Forklift stopped for a blocked aisle - safety protocol activated',
    nearMissUnexpectedLoad: 'Unexpected load detected in forklift path - collision averted',
    nearMissProximity: 'Proximity alert - forklift yielded to crossing equipment',
    nearMissSafetySystem: 'Safety system engaged - near-miss avoided',
    nearMissTitle: 'Near-Miss Avoided',
    safetyLiveRegion: 'Safety alert: {title}. {message}',
    politeLiveRegion: '{title}. {message}',
    /** `type` is the alert's own type id ('critical' | 'warning'), read as-is in English. */
    typedLiveRegion: (p: { type: string; title: string; message: string }) =>
      `${p.type} alert: ${p.title}. ${p.message}`,
  },
  zh: {
    maintenanceCompleteTitle: '维护完成',
    maintenanceCompleteMessage: '磨辊机 RM-103 已恢复运行',
    temperatureRisingTitle: '温度升高',
    temperatureRisingMessage: '平筛 B 轴承温度偏高',
    qualityCheckTitle: '质量检查',
    qualityCheckMessage: '每小时取样正在进行',
    targetMetTitle: '目标达成',
    targetMetMessage: '日产量目标已达成',
    lowStockTitle: '库存不足',
    lowStockMessage: '包装用品低于再订购点',
    conveyorCheckTitle: '输送机检查',
    conveyorCheckMessage: '皮带张力正常',
    nearMissBlockedAisle: '叉车因通道受阻停车，安全协议已启动',
    nearMissUnexpectedLoad: '叉车路径上检测到意外载荷，已避免碰撞',
    nearMissProximity: '接近警报，叉车让行横穿的设备',
    nearMissSafetySystem: '安全系统已启动，避免了未遂事件',
    nearMissTitle: '未遂事件已避免',
    safetyLiveRegion: '安全警报：{title}。{message}',
    politeLiveRegion: '{title}。{message}',
    /** zh mirrors pt-BR: the English type id maps to 危急/警告. */
    typedLiveRegion: (p: { type: string; title: string; message: string }) =>
      `${p.type === 'critical' ? '危急警报' : '警告警报'}：${p.title}。${p.message}`,
  },
  'pt-BR': {
    maintenanceCompleteTitle: 'Manutenção concluída',
    maintenanceCompleteMessage: 'Moinho de rolos RM-103 de volta à operação',
    temperatureRisingTitle: 'Temperatura subindo',
    temperatureRisingMessage: 'Temperatura do rolamento do Plansifter B elevada',
    qualityCheckTitle: 'Verificação de qualidade',
    qualityCheckMessage: 'Coleta da amostra horária em andamento',
    targetMetTitle: 'Meta atingida',
    targetMetMessage: 'Meta diária de produção alcançada',
    lowStockTitle: 'Estoque baixo',
    lowStockMessage: 'Material de embalagem abaixo do ponto de reposição',
    conveyorCheckTitle: 'Verificação do transportador',
    conveyorCheckMessage: 'Tensão da esteira normal',
    nearMissBlockedAisle:
      'Empilhadeira parou diante de um corredor bloqueado - protocolo de segurança acionado',
    nearMissUnexpectedLoad:
      'Carga inesperada detectada no caminho da empilhadeira - colisão evitada',
    nearMissProximity:
      'Alerta de proximidade - empilhadeira deu passagem a um equipamento que cruzava',
    nearMissSafetySystem: 'Sistema de segurança acionado - quase acidente evitado',
    nearMissTitle: 'Quase acidente evitado',
    safetyLiveRegion: 'Alerta de segurança: {title}. {message}',
    politeLiveRegion: '{title}. {message}',
    typedLiveRegion: (p: { type: string; title: string; message: string }) =>
      `${p.type === 'critical' ? 'Alerta crítico' : 'Alerta de atenção'}: ${p.title}. ${p.message}`,
  },
});
