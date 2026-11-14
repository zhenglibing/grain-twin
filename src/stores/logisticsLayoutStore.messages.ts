import { defineMessages } from '../i18n';

export const logisticsLayoutStoreMessages = defineMessages({
  en: {
    sessionRestoring: 'Wait for the saved shift to finish restoring.',
    safetyHold: 'Resolve the site safety hold first.',
    replayActive: 'Finish the replay experiment before changing logistics.',
    localControlOnly:
      'Logistics changes require local simulation control, never live or hybrid SCADA.',
    pauseFirst: 'Pause the mill before applying or undoing a layout.',
    layoutChanged: 'The live layout changed. Capture current again.',
    clearanceFailed:
      'The proposal fails the live clearance check. Capture current again and resolve its conflicts.',
    nothingToUndo: 'There is no applied layout to undo.',
  },
  zh: {
    sessionRestoring: '请等待已保存班次完成恢复。',
    safetyHold: '请先解除厂区安全扣留。',
    replayActive: '更改物流前请先完成回放实验。',
    localControlOnly: '物流更改需要本地模拟控制，绝不可在实时或混合 SCADA 下进行。',
    pauseFirst: '应用或撤销布局前请先暂停磨坊。',
    layoutChanged: '实时布局已变化。请重新采集当前方案。',
    clearanceFailed: '方案未通过实时净空检查。请重新采集当前方案并解决冲突。',
    nothingToUndo: '没有可撤销的已应用布局。',
  },
  'pt-BR': {
    sessionRestoring: 'Aguarde o turno salvo terminar de ser restaurado.',
    safetyHold: 'Resolva primeiro a retenção de segurança do local.',
    replayActive: 'Conclua o experimento de reprodução antes de alterar a logística.',
    localControlOnly:
      'Alterações na logística exigem controle local da simulação, nunca SCADA ao vivo ou híbrido.',
    pauseFirst: 'Pause o moinho antes de aplicar ou desfazer um layout.',
    layoutChanged: 'O layout em operação mudou. Capture o estado atual de novo.',
    clearanceFailed:
      'A proposta não passa na verificação de folga do layout em operação. Capture o estado atual de novo e resolva os conflitos.',
    nothingToUndo: 'Não há layout aplicado para desfazer.',
  },
});
