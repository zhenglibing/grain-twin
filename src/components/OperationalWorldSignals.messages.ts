import { defineMessages } from '../i18n';

/**
 * Beacon labels float over live incident markers (not painted signage). Each
 * line stays within 22 characters so the 6 m label width holds two lines.
 */
export const operationalWorldSignalsMessages = defineMessages({
  en: {
    hotBearing: 'R.M. 101 HOT BEARING',
    filterPressureHigh: 'FILTER PRESSURE HIGH',
    sitePowerDip: 'SITE POWER DIP',
    shippingTruckDelay: 'SHIPPING TRUCK DELAY',
    grainLotHold: 'GRAIN LOT HOLD',
    packagingLow: 'PACKAGING LOW',
    highRiverLevel: 'HIGH RIVER LEVEL',
    networkDegraded: 'NETWORK DEGRADED',
    phaseRaised: 'NEEDS ATTENTION',
    phaseAcknowledged: 'ACKNOWLEDGED',
    phaseMitigated: 'RESPONSE APPLIED',
    phaseResolved: 'RESOLVED',
    hoverOpenResponse: '{label}\nOPEN RESPONSE',
  },
  zh: {
    hotBearing: 'R.M. 101 轴承过热',
    filterPressureHigh: '过滤器压差高',
    sitePowerDip: '厂区电压骤降',
    shippingTruckDelay: '发运卡车延误',
    grainLotHold: '谷物批次扣留',
    packagingLow: '包装用品不足',
    highRiverLevel: '河水水位高',
    networkDegraded: '网络性能下降',
    phaseRaised: '需要关注',
    phaseAcknowledged: '已确认',
    phaseMitigated: '已实施响应',
    phaseResolved: '已解决',
    hoverOpenResponse: '{label}\n打开响应',
  },
  'pt-BR': {
    hotBearing: 'R.M. 101 MANCAL QUENTE',
    filterPressureHigh: 'PRESSÃO ALTA NO FILTRO',
    sitePowerDip: 'QUEDA DE TENSÃO',
    shippingTruckDelay: 'ATRASO NA EXPEDIÇÃO',
    grainLotHold: 'LOTE DE GRÃOS RETIDO',
    packagingLow: 'POUCAS EMBALAGENS',
    highRiverLevel: 'NÍVEL ALTO DO RIO',
    networkDegraded: 'REDE DEGRADADA',
    phaseRaised: 'REQUER ATENÇÃO',
    phaseAcknowledged: 'RECONHECIDA',
    phaseMitigated: 'RESPOSTA APLICADA',
    phaseResolved: 'RESOLVIDA',
    hoverOpenResponse: '{label}\nABRIR RESPOSTA',
  },
});
