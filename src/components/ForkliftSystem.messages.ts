import { defineMessages } from '../i18n';

export const forkliftSystemMessages = defineMessages({
  en: {
    roleShipping: 'SHIPPING',
    roleReceiving: 'RECEIVING',
    fleetLabel: '{tag} · {role}',
    operationLoading: 'LOADING',
    operationUnloading: 'UNLOADING',
    routeCornerAmbiguous:
      '{id} occupies a changed or ambiguous route corner. Run to an unchanged leg, then pause and try again.',
  },
  zh: {
    roleShipping: '发运',
    roleReceiving: '接收',
    fleetLabel: '{tag}·{role}',
    operationLoading: '装载中',
    operationUnloading: '卸货中',
    routeCornerAmbiguous: '{id} 停在已变更或歧义的路线拐点上。请先行驶到未变更路段，再暂停重试。',
  },
  'pt-BR': {
    roleShipping: 'EXPEDIÇÃO',
    roleReceiving: 'RECEBIMENTO',
    fleetLabel: '{tag} · {role}',
    operationLoading: 'CARREGANDO',
    operationUnloading: 'DESCARREGANDO',
    routeCornerAmbiguous:
      '{id} está em uma curva de rota alterada ou ambígua. Deixe a simulação rodar até um trecho inalterado, depois pause e tente de novo.',
  },
});
