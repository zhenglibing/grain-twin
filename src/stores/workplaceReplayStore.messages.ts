import { defineMessages } from '../i18n';

/** Reasons the matched plant replay returns to the Workplace Replay panel. */
export const workplaceReplayStoreMessages = defineMessages({
  en: {
    pauseFirst: 'Pause the simulation before capturing or rewinding.',
    safetyHold: 'Resolve the site safety hold first. Replay cannot clear emergency authority.',
    localControlOnly:
      'Replay is available only with local simulation control, never live or hybrid SCADA.',
    labTestRunning: 'Finish the current laboratory test before capturing or rewinding.',
    improvementActive:
      'Retain the handoff trial and its reviews. Replay cannot rewind an improvement cycle.',
    gameModeOnly: 'Choose Game mode for an operational replay.',
    recoveryOwed: 'Deliver all earned recovery before rewinding. Repayment cannot be erased.',
    seedRange: 'Choose a whole-number seed from 1 to {max}.',
    untouchedStart: 'Capture an untouched starting discussion. Complete and record this run first.',
    waitForScene: 'Wait for the complete local scene: {missing}.',
    openOrderRequired:
      'Select an open, quality-qualified customer order without a recovery challenge.',
    captureFirst: 'Capture a paused starting situation first.',
    knownCharter: 'Choose a known charter.',
    sceneChanged: 'The scene changed. Reloading or remounting invalidates an in-memory checkpoint.',
    materialSessionChanged:
      'The material session changed. Start a new experiment from an untouched discussion.',
    finishCurrentShift: 'Finish and record the current shift before starting another replay.',
    restorationFailed:
      'Restoration failed. The prior situation was restored; capture a fresh checkpoint.',
    rollbackFailed:
      'Restoration and rollback failed. The game remains paused; checkpoint disabled. Reload before another experiment. Reviewed receipts remain available.',
    startRunFirst: 'Start a checkpoint run before recording.',
    matchedEvidenceLocal:
      'Matched evidence requires local simulation control. Live or hybrid control cannot be recorded as a replay.',
    reviewBeforeRecording: 'Review the shift and deliver all earned recovery before recording.',
    evidenceChanged:
      'The linked order or material evidence changed. No matched run can be recorded.',
    finishAgreement: 'Finish the agreement and repay recovery before ending the experiment.',
    reportScope: 'Synthetic local game runs; actual ledger deltas, no real-worker efficacy claim.',
    reportLimits:
      'Starting conditions match. Frame-driven vehicle motion can differ between runs. Compare elapsed and agreement time; no winner or trust score is inferred. Raw checkpoints and consent are never exported.',
  },
  zh: {
    pauseFirst: '捕获或倒回前，请先暂停模拟。',
    safetyHold: '请先解决厂区安全扣留。回放无法撤销紧急权限。',
    localControlOnly: '回放仅在本地模拟控制下可用，不支持实时或混合 SCADA。',
    labTestRunning: '捕获或倒回前，请先完成当前的质检实验室测试。',
    improvementActive: '请保留交接实验及其评审。回放无法倒回改善循环。',
    gameModeOnly: '请选择游戏模式以进行运行回放。',
    recoveryOwed: '倒回前，请交付全部已挣得的补休。偿还无法抹除。',
    seedRange: '请从 1 到 {max} 中选择一个整数种子。',
    untouchedStart: '请捕获一个未触碰的起始讨论。请先完成并记录本次运行。',
    waitForScene: '请等待完整的本地场景：{missing}。',
    openOrderRequired: '请选择一个未结、质量合格且没有恢复挑战的客户订单。',
    captureFirst: '请先捕获一个已暂停的起始局面。',
    knownCharter: '请选择一份已知章程。',
    sceneChanged: '场景已变化。重新加载或重新挂载会使内存中的检查点失效。',
    materialSessionChanged: '物料会话已变化。请从未触碰的讨论开始新的实验。',
    finishCurrentShift: '开始另一次回放前，请先完成并记录当前班次。',
    restorationFailed: '恢复失败。已还原为先前的局面；请捕获新的检查点。',
    rollbackFailed:
      '恢复与回滚均失败。游戏保持暂停；检查点已停用。再次实验前请重新加载。已评审的回执仍可用。',
    startRunFirst: '记录前，请先启动一次检查点运行。',
    matchedEvidenceLocal: '配对证据需要本地模拟控制。实时或混合控制无法记录为回放。',
    reviewBeforeRecording: '记录前，请回顾班次并交付全部已挣得的补休。',
    evidenceChanged: '关联的订单或物料证据已变化。无法记录配对运行。',
    finishAgreement: '结束实验前，请完成协议并交付所欠的补休。',
    reportScope: '虚拟的本地游戏运行；实际的台账差值；不对真实员工作出效能断言。',
    reportLimits:
      '起始条件一致。帧驱动的车辆运动可能在不同运行之间不同。请对比经过时间与协商时间；不推断任何赢家或信任评分。原始检查点与同意绝不导出。',
  },
  'pt-BR': {
    pauseFirst: 'Pause a simulação antes de capturar ou voltar no tempo.',
    safetyHold:
      'Resolva primeiro a retenção de segurança do local. A reprodução não pode anular a autoridade de emergência.',
    localControlOnly:
      'A reprodução só está disponível com controle local da simulação, nunca com SCADA ao vivo ou híbrido.',
    labTestRunning: 'Conclua o teste de laboratório atual antes de capturar ou voltar no tempo.',
    improvementActive:
      'Guarde o teste da passagem de turno e suas revisões. A reprodução não pode desfazer um ciclo de melhoria.',
    gameModeOnly: 'Escolha o modo Jogo para uma reprodução operacional.',
    recoveryOwed:
      'Conceda todo o tempo de recuperação devido antes de voltar no tempo. A devolução desse tempo não pode ser apagada.',
    seedRange: 'Escolha uma semente inteira de 1 a {max}.',
    untouchedStart:
      'Capture uma discussão inicial ainda intocada. Conclua e registre esta execução primeiro.',
    waitForScene: 'Aguarde a cena local completa: {missing}.',
    openOrderRequired:
      'Selecione um pedido de cliente em aberto, qualificado pela qualidade e sem desafio de recuperação.',
    captureFirst: 'Capture primeiro uma situação inicial pausada.',
    knownCharter: 'Escolha um estatuto conhecido.',
    sceneChanged:
      'A cena mudou. Recarregar ou remontar invalida um ponto de controle mantido na memória.',
    materialSessionChanged:
      'A sessão de material mudou. Comece um novo experimento a partir de uma discussão ainda intocada.',
    finishCurrentShift: 'Conclua e registre o turno atual antes de iniciar outra reprodução.',
    restorationFailed:
      'A restauração falhou. A situação anterior foi restaurada; capture um novo ponto de controle.',
    rollbackFailed:
      'A restauração e a reversão falharam. O jogo continua pausado; ponto de controle desativado. Recarregue antes de outro experimento. Os comprovantes revisados continuam disponíveis.',
    startRunFirst: 'Inicie uma execução a partir do ponto de controle antes de registrar.',
    matchedEvidenceLocal:
      'A evidência pareada exige controle local da simulação. O controle ao vivo ou híbrido não pode ser registrado como reprodução.',
    reviewBeforeRecording:
      'Revise o turno e conceda todo o tempo de recuperação devido antes de registrar.',
    evidenceChanged:
      'O pedido vinculado ou a evidência de material mudou. Nenhuma execução pareada pode ser registrada.',
    finishAgreement:
      'Conclua o acordo e conceda a recuperação devida antes de encerrar o experimento.',
    reportScope:
      'Execuções sintéticas e locais do jogo; variações reais do registro contábil, sem alegação de eficácia para trabalhadores reais.',
    reportLimits:
      'As condições iniciais são as mesmas. O movimento dos veículos depende dos quadros e pode variar entre execuções. Compare o tempo decorrido e o tempo de acordo; nenhum vencedor nem índice de confiança é inferido. Pontos de controle brutos e consentimentos nunca são exportados.',
  },
});
