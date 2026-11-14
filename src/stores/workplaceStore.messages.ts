import { defineMessages } from '../i18n';

/** Reasons the workplace store returns to the workplace panels. */
export const workplaceStoreMessages = defineMessages({
  en: {
    useCurrentTurn:
      'Hand over to this role and use its current turn. Facilitators cannot record participant decisions.',
    challengeCannotSpeak:
      'This authored challenge cannot speak for a participant. Hand over to the affected role to raise its own objection.',
    answerChecksFirst:
      'Answer the current mandate, refusal and optional-duty checks correctly before confirming understanding.',
    simulatedResponsesDisabled:
      'Separate turns require each role decision. Simulated responses are disabled.',
    endTurnBeforeSetup: 'End the participant turn before facilitator setup or settlement.',
    finishReplayBeforeObligations:
      'Finish or forget the matched replay before continuing workplace obligations.',
    chooseModeBeforeScenario:
      'Choose the interaction mode only before opening an untouched scenario.',
    chooseFictionalRole:
      'End the previous turn and choose a fictional role in an open scenario, outside replay.',
    knownAnswerRequired: 'Use a known answer in the current participant turn.',
    answerUnchanged: 'Answer unchanged.',
    roleDecisionsOnly: 'Participant dispatch accepts role decisions only.',
    readBeforeReload: 'Read the current workplace outside replay before rehearsing reload.',
    reloadRehearsed:
      'Local reload rehearsal completed. Future authority expired; earned pay and recovery remain in review.',
    endTurnBeforeArchive: 'End the participant turn before archiving.',
    endTurnBeforeLeave: 'End the participant turn before leaving the season.',
    reviewChanged: 'The review changed. Read its current outcome first.',
    finishReplayFirst: 'Finish or forget the matched replay first.',
    completeThreeShifts: 'Complete all three shifts before archiving a review.',
    settleBeforeArchive:
      'Deliver owed recovery and settle objections and reserved pay before archiving.',
    reviewNotValidated: 'This review could not be validated for the archive.',
    openCommitmentRequired:
      'Choose an open, quality-qualified customer commitment with no active recovery challenge.',
    safetyStopHolds:
      'The safety stop holds this agreement. No new work during an emergency or drill.',
    endTurnBeforeActivation: 'End the participant turn before facilitator activation.',
    materialSessionChanged:
      'The physical material session changed. Historical receipts cannot authorise a new agreement.',
    freshAdviceRequired:
      'Plant evidence or the intended pace changed. Hear a fresh adviser response, then confirm understanding and ballots again.',
    dispatchEvidenceRequired:
      'Current quality-qualified dispatch evidence is required before funding a trial.',
  },
  zh: {
    useCurrentTurn: '交接给该角色并使用其当前回合。促成人不能记录参与者决策。',
    challengeCannotSpeak:
      '这一预先编写的挑战不能代替参与者发言。请交接给受影响的角色，由它提出自己的异议。',
    answerChecksFirst: '在确认理解之前，先正确回答当前的授权、拒绝与可选勤务检查。',
    simulatedResponsesDisabled: '分别回合需要每个角色的决定。模拟回应已停用。',
    endTurnBeforeSetup: '在促成人进行设置或结清之前，先结束参与者回合。',
    finishReplayBeforeObligations: '在继续车间义务之前，先完成或丢弃配对回放。',
    chooseModeBeforeScenario: '只能在打开一个未动过的场景之前选择交互模式。',
    chooseFictionalRole: '结束上一回合，在一个已开启的场景中选择一个虚构角色，且不处于回放中。',
    knownAnswerRequired: '在当前参与者回合中使用一个已知答案。',
    answerUnchanged: '答案未更改。',
    roleDecisionsOnly: '参与者指令分发仅接受角色决定。',
    readBeforeReload: '在预演重新加载之前，先在回放之外阅读当前车间。',
    reloadRehearsed: '本地重新加载预演已完成。未来的授权已失效；已挣报酬与补休仍在评审中。',
    endTurnBeforeArchive: '在归档之前先结束参与者回合。',
    endTurnBeforeLeave: '在离开加工季之前先结束参与者回合。',
    reviewChanged: '回顾已发生变化。请先阅读其当前结果。',
    finishReplayFirst: '请先完成或丢弃配对回放。',
    completeThreeShifts: '在归档一份回顾之前，先完成全部三个班次。',
    settleBeforeArchive: '在归档之前，先交付应补的补休，并解决异议、结清预留报酬。',
    reviewNotValidated: '这份回顾未能通过归档验证。',
    openCommitmentRequired: '请选择一个未结的、质量合格的客户承诺，并且没有进行中的恢复挑战。',
    safetyStopHolds: '安全停机扣住了本协议。紧急情况或演练期间不得开始新的工作。',
    endTurnBeforeActivation: '在促成人激活之前先结束参与者回合。',
    materialSessionChanged: '实际物料会话已发生变化。历史回执不能授权一份新协议。',
    freshAdviceRequired: '工厂证据或预期节奏已变化。请听取新的顾问回应，然后再次确认理解与表决。',
    dispatchEvidenceRequired: '在为一次试验注资之前，需要当前的质量合格发运证据。',
  },
  'pt-BR': {
    useCurrentTurn:
      'Passe para esta função e use a vez atual dela. Os facilitadores não podem registrar decisões dos participantes.',
    challengeCannotSpeak:
      'Este desafio roteirizado não pode falar por um participante. Passe a vez para a função afetada para que ela apresente a própria objeção.',
    answerChecksFirst:
      'Responda corretamente às verificações atuais de mandato, recusa e tarefa opcional antes de confirmar o entendimento.',
    simulatedResponsesDisabled:
      'Jogar cada um na sua vez exige a decisão de cada função. As respostas simuladas estão desativadas.',
    endTurnBeforeSetup:
      'Encerre a vez do participante antes da configuração ou do acerto final pelo facilitador.',
    finishReplayBeforeObligations:
      'Conclua ou descarte a reprodução pareada antes de continuar os compromissos do local de trabalho.',
    chooseModeBeforeScenario:
      'Escolha o modo de interação somente antes de abrir um cenário ainda não iniciado.',
    chooseFictionalRole:
      'Encerre a vez anterior e escolha uma função fictícia em um cenário aberto, fora da reprodução.',
    knownAnswerRequired: 'Use uma resposta conhecida na vez atual do participante.',
    answerUnchanged: 'Resposta inalterada.',
    roleDecisionsOnly: 'O envio pelo participante aceita somente decisões de função.',
    readBeforeReload:
      'Leia o local de trabalho atual fora da reprodução antes de ensaiar o recarregamento.',
    reloadRehearsed:
      'Ensaio de recarregamento local concluído. A autoridade futura expirou; a remuneração e o tempo de recuperação conquistados continuam em revisão.',
    endTurnBeforeArchive: 'Encerre a vez do participante antes de arquivar.',
    endTurnBeforeLeave: 'Encerre a vez do participante antes de sair da temporada.',
    reviewChanged: 'A revisão mudou. Leia primeiro o resultado atual.',
    finishReplayFirst: 'Conclua ou descarte primeiro a reprodução pareada.',
    completeThreeShifts: 'Conclua os três turnos antes de arquivar uma revisão.',
    settleBeforeArchive:
      'Conceda o tempo de recuperação devido e resolva as objeções e a remuneração reservada antes de arquivar.',
    reviewNotValidated: 'Não foi possível validar esta revisão para o arquivo.',
    openCommitmentRequired:
      'Escolha um compromisso de cliente em aberto, qualificado pela qualidade e sem desafio de recuperação ativo.',
    safetyStopHolds:
      'A parada de segurança retém este acordo. Nenhum trabalho novo durante uma emergência ou simulado.',
    endTurnBeforeActivation: 'Encerre a vez do participante antes da ativação pelo facilitador.',
    materialSessionChanged:
      'A sessão física de material mudou. Comprovantes históricos não podem autorizar um novo acordo.',
    freshAdviceRequired:
      'A evidência da planta ou o ritmo pretendido mudou. Ouça uma nova resposta do conselheiro e depois confirme novamente o entendimento e os votos.',
    dispatchEvidenceRequired:
      'É necessária evidência atual de expedição qualificada pela qualidade antes de financiar um teste.',
  },
});
