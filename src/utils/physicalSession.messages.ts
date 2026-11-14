import { defineMessages } from '../i18n';

/** Alerts raised when the saved physical shift cannot be restored or written. */
export const physicalSessionMessages = defineMessages({
  en: {
    saveNeedsAttention: 'Shift save needs attention',
    resetHint: '{reason} Settings > Simulation > Reset Simulation starts a fresh shift.',
    storageUnavailable:
      'Browser storage is unavailable. This shift is paused and cannot be saved in this browser.',
    restoreFailed:
      'The saved physical shift could not be restored. Its record is retained. The clock is paused and this tab will not overwrite it.',
    otherTabTitle: 'Autosave off in this tab',
    otherTabMessage:
      'The saved shift changed outside this tab. This tab keeps running but will not overwrite that record; reload to use it.',
    autosaveSkippedTitle: 'Autosave skipped',
    autosaveSkippedQuota:
      'Autosave skipped: browser storage is full. The shift continues and the last good save is kept.',
    autosaveSkippedMessage: 'Autosave skipped; the shift continues and the last good save is kept.',
    autosaveStoppedTitle: 'Autosave stopped',
    autosaveTooLarge:
      "This shift's record has outgrown the browser save, so autosave cannot write it. The shift continues, but a reload returns to the last good save.",
    continuationFailed:
      'Scene continuation could not be restored. The saved record is retained and the clock is paused.',
    sceneWaitingTitle: 'Saved shift is waiting',
    sceneWaitingMessage:
      'Part of the scene did not load, so the saved shift cannot resume. The clock stays paused and the saved record is kept. Reload the page to try again; Settings > Simulation > Reset Simulation starts a fresh shift.',
    autosavePausedTitle: 'Autosave paused',
    autosavePausedMessage:
      'Part of the scene stopped running, so autosave is paused. The shift continues and the last good save is kept. Reload the page to resume saving.',
  },
  zh: {
    saveNeedsAttention: '班次存档需要关注',
    resetHint: '{reason}可通过 设置 > 模拟 > 重置模拟 开始全新班次。',
    storageUnavailable: '浏览器存储不可用。本班次已暂停，无法在此浏览器中保存。',
    restoreFailed: '无法恢复已保存的物理班次。其记录已保留。时钟已暂停，本标签页不会覆盖它。',
    otherTabTitle: '本标签页已关闭自动保存',
    otherTabMessage:
      '已保存的班次在本标签页之外被更改。本标签页继续运行，但不会覆盖该记录；重新加载即可使用它。',
    autosaveSkippedTitle: '自动保存已跳过',
    autosaveSkippedQuota: '自动保存已跳过：浏览器存储已满。班次继续进行，上次有效保存已保留。',
    autosaveSkippedMessage: '自动保存已跳过；班次继续进行，上次有效保存已保留。',
    autosaveStoppedTitle: '自动保存已停止',
    autosaveTooLarge:
      '本班次的记录已超出浏览器保存上限，自动保存无法写入。班次继续进行，但重新加载后将回到上次有效保存。',
    continuationFailed: '无法恢复场景续接。已保存的记录保留，时钟已暂停。',
    sceneWaitingTitle: '已保存的班次正在等待',
    sceneWaitingMessage:
      '部分场景未能加载，已保存的班次无法恢复。时钟保持暂停，已保存的记录保留。重新加载页面重试；可通过 设置 > 模拟 > 重置模拟 开始全新班次。',
    autosavePausedTitle: '自动保存已暂停',
    autosavePausedMessage:
      '部分场景停止运行，自动保存已暂停。班次继续进行，上次有效保存已保留。重新加载页面即可恢复保存。',
  },
  'pt-BR': {
    saveNeedsAttention: 'O salvamento do turno precisa de atenção',
    resetHint: '{reason} Configurações > Simulação > Reiniciar simulação inicia um turno novo.',
    storageUnavailable:
      'O armazenamento do navegador não está disponível. Este turno está pausado e não pode ser salvo neste navegador.',
    restoreFailed:
      'Não foi possível restaurar o turno físico salvo. O registro foi mantido. O relógio está pausado e esta aba não vai sobrescrevê-lo.',
    otherTabTitle: 'Salvamento automático desligado nesta aba',
    otherTabMessage:
      'O turno salvo foi alterado fora desta aba. Esta aba continua funcionando, mas não vai sobrescrever esse registro; recarregue a página para usá-lo.',
    autosaveSkippedTitle: 'Salvamento automático não realizado',
    autosaveSkippedQuota:
      'Salvamento automático não realizado: o armazenamento do navegador está cheio. O turno continua e o último salvamento válido é mantido.',
    autosaveSkippedMessage:
      'Salvamento automático não realizado; o turno continua e o último salvamento válido é mantido.',
    autosaveStoppedTitle: 'Salvamento automático interrompido',
    autosaveTooLarge:
      'O registro deste turno ficou maior do que o salvamento do navegador permite, então o salvamento automático não consegue gravá-lo. O turno continua, mas recarregar a página volta ao último salvamento válido.',
    continuationFailed:
      'Não foi possível restaurar a continuação da cena. O registro salvo foi mantido e o relógio está pausado.',
    sceneWaitingTitle: 'O turno salvo está aguardando',
    sceneWaitingMessage:
      'Parte da cena não carregou, então o turno salvo não pode ser retomado. O relógio continua pausado e o registro salvo é mantido. Recarregue a página para tentar de novo; Configurações > Simulação > Reiniciar simulação inicia um turno novo.',
    autosavePausedTitle: 'Salvamento automático pausado',
    autosavePausedMessage:
      'Parte da cena parou de funcionar, então o salvamento automático está pausado. O turno continua e o último salvamento válido é mantido. Recarregue a página para voltar a salvar.',
  },
});
