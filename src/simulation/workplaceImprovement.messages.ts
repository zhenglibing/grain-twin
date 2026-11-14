import { defineMessages } from '../i18n';

const evidenceLabels: Record<string, string> = {
  current: 'atual',
  stale: 'desatualizada',
  'quality-failed': 'reprovada no controle de qualidade',
  missing: 'ausente',
};

// zh mirror of the pt evidence labels above (mission-evidence coin, Task 3).
const zhEvidenceLabels: Record<string, string> = {
  current: '当前',
  stale: '已过期',
  'quality-failed': '质量未通过',
  missing: '缺失',
};

export const workplaceImprovementMessages = defineMessages({
  en: {
    briefingTitle: 'Packing proposes a paid handoff briefing',
    briefingDetail:
      'Pause line pacing for five paid minutes, then use a clearer handoff sequence. All work stays within current qualifications.',
    bufferTitle: 'Maintenance proposes a small packing buffer',
    bufferDetail:
      'Fund a reusable staging arrangement. Higher modeled line capacity costs more upfront; quality release and machine safety remain unchanged.',
    lateTruckTitle: 'The collection truck is late',
    lateTruckPremise: 'Assume collection loses the first 45 minutes of this 90-minute window.',
    lateTruckRecommendation:
      'Recommend deferral if collection cannot be confirmed. Packed stock can wait; extra work cannot make a truck arrive.',
    qualityHoldTitle: 'Quality asks the line to wait',
    qualityHoldPremise: 'Assume the finished stock is held pending a qualified quality review.',
    qualityHoldRecommendation:
      'Recommend a quality review or deferral. A deadline grants no release authority.',
    tightCashTitle: 'The team has little cash to spare',
    tightCashPremise:
      'Assume only 116 credits are available: 108 reserved for ordinary wages, 8 for an arrangement.',
    tightCashRecommendation:
      'Recommend ordinary pacing or the 8-credit paid briefing. A new 32-credit buffer would invade the wage reserve.',
    choiceOrdinary: 'Keep qualified ordinary work',
    choiceSmallerDelivery: 'Discuss a smaller delivery',
    choiceDefer: 'Defer this trial',
    choiceDecline: 'Decline extra duty',
    outcomeDecline:
      'Extra duty is declined in this rehearsal. Ordinary pay and rest stay protected. No live role ballot or consent has been recorded.',
    outcomeDefer:
      'The rehearsal trial is deferred. No purchase is made. The customer commitment remains outstanding; a conversation does not renegotiate an order.',
    outcomeQualityHold:
      'Conditional departure is 0 kg while this assumed hold remains. Qualified review or a new collection window is needed; this choice cannot release a real batch.',
    outcomeTightCash:
      'After the 108-credit wage reserve, 8 credits remain in this scenario. Ordinary pacing costs 0; a new paid briefing costs 8; a new buffer costs 32 and is unaffordable. Actual cash is unchanged.',
    outcomeSmallerKnown:
      'Discuss at most {kg} kg from known released stock, subject to collection and quality. The rest stays owed. No delivery or customer acceptance is assumed.',
    outcomeSmallerUnknown:
      'Discuss a smaller delivery once released stock and the remaining commitment are known. The customer must still accept any change; no credit is created.',
    outcomeOrdinary:
      '45 minutes remain for collection in this scenario. Packing can continue within qualified ordinary work; departure remains unverified and rest is retained.',
    obligationRecovery: 'Deliver owed recovery before continuing.',
    obligationObjections: 'Each objection must be resolved by its original raiser.',
    obligationSettle: 'Settle reserved pay and optional work first.',
    nextChooseProposal: 'Choose a worker proposal.',
    nextChallenge: 'Challenge the forecast or hear the adviser response.',
    nextConfirm:
      'Confirm each role’s understanding and current policy ballot in Fresh role decisions here in Handoff.',
    nextWatch: 'Watch the packing floor. Any role may stop the arrangement immediately.',
    nextHearComparison: 'Hear the adviser compare its forecast with actual dispatch.',
    nextVerdicts: 'Each member records adopt, amend or stop, then finalise the review.',
    nextOpenShift: 'Open the next shift with carried cash and a fresh agreement.',
    nextCloseExperiment: 'Close the handoff experiment.',
    evidenceEndedAfter: 'Ended after',
    evidenceCompleted: 'Completed',
    evidenceHorizon: '{prefix} {minute} of 90 minutes. {status}',
    evidenceStopped: 'The arrangement was stopped. Any remaining work uses ordinary pacing.',
    evidenceAvailable: 'The selected arrangement stayed available until this shift ended.',
    evidenceDispatch: 'Qualifying dispatch this shift: {kg} kg. {receipts}',
    evidenceReceipts: (p: { credited: string; owed: string; evidence: string }) =>
      `Customer receipts: ${p.credited} kg credited; ${p.owed} kg still owed. Source evidence: ${p.evidence}.`,
    evidenceTeachingCounter: 'This teaching counter is separate from customer shipment receipts.',
    evidenceWorkshop:
      'Workshop records no plant shipment. Its teaching output cannot establish customer delivery.',
    evidenceAbstained:
      'The adviser abstained: {reason} This outcome supplies no missing prior forecast.',
    evidenceBound:
      'Frozen conditional departure bound: 0 to {kg} kg for the original 90-minute assumptions. Packing potential and actual collection remain separate.',
    evidenceNoForecast: 'No plant-grounded departure forecast was retained for this shift.',
    questionRemedy:
      'Let each of the {count} unresolved objection raisers say what would address their concern. Which remedy remains theirs to confirm?',
    questionRecovery:
      '{minutes} minutes of recovery remain owed. How will the next handoff deliver that time before asking for more work?',
    questionEvidence:
      'Which customer receipt or material-session fact needs checking before calling any further delivery verified?',
    questionTrial:
      'What did each role observe before the ending or stop? Which single assumption would you test next while keeping pay and refusal protected?',
    questionDelivery:
      'Where did packing or collection wait, and which one handoff change would you compare without borrowing another role’s rest?',
    questionComparison:
      'Let each role predict what another arrangement would change. Which observation would change your minds, and where do you still disagree?',
    limitationEarly:
      'This shortened trial cannot be treated as a completed 90-minute result. One trial cannot establish the arrangement’s causal effect.',
    limitationComplete:
      'One trial cannot establish the arrangement’s causal effect. A matched comparison keeps shared inputs fixed; real collection still needs its own receipts.',
  },
  zh: {
    briefingTitle: '包装提议一次带薪交接简报',
    briefingDetail:
      '将产线节奏暂停五个带薪分钟，然后采用更清晰的交接顺序。所有工作都保持在当前资质范围内。',
    bufferTitle: '维护提议一个小型包装缓冲',
    bufferDetail:
      '为一个可复用的暂存安排注资。更高的模拟产线产能需要更多前期投入；质量放行与设备安全保持不变。',
    lateTruckTitle: '来粮卡车迟到了',
    lateTruckPremise: '假设来粮会失去这个 90 分钟窗口的前 45 分钟。',
    lateTruckRecommendation:
      '如果无法确认来粮，建议延期。已包装的库存可以等待；额外工作无法让卡车到来。',
    qualityHoldTitle: '质量请求产线等待',
    qualityHoldPremise: '假设成品库存被扣留，等待一次合格的质量评审。',
    qualityHoldRecommendation: '建议进行质量评审或延期。期限不授予放行职权。',
    tightCashTitle: '团队几乎没有多余现金',
    tightCashPremise: '假设只有 116 点数可用：108 点数预留为常规工资，8 点数用于一项安排。',
    tightCashRecommendation:
      '建议采用常规节奏，或 8 点数的带薪简报。新的 32 点数缓冲会侵入工资预留。',
    choiceOrdinary: '保持合格的常规工作',
    choiceSmallerDelivery: '商讨更小的交付',
    choiceDefer: '延期本次试验',
    choiceDecline: '拒绝额外勤务',
    outcomeDecline:
      '在本次预演中拒绝了额外勤务。常规报酬与休息保持受保护。没有记录任何真实的角色表决或同意。',
    outcomeDefer: '预演试验已延期。没有进行任何采购。客户承诺仍未结；一次对话不能重新协商订单。',
    outcomeQualityHold:
      '只要这一假设的扣留仍然存在，条件离场量就是 0 kg。需要合格评审或新的来粮窗口；这个选择不能放行真实的批次。',
    outcomeTightCash:
      '在这个场景中，扣除 108 点数的工资预留后还剩 8 点数。常规节奏花费 0；新的带薪简报花费 8；新的缓冲花费 32，无力负担。实际现金保持不变。',
    outcomeSmallerKnown:
      '最多商讨从已知已放行库存中交付 {kg} kg，并以来粮与质量为前提。其余仍为欠付。不假定任何交付或客户接受。',
    outcomeSmallerUnknown:
      '在已放行库存与剩余承诺已知之后，再商讨更小的交付。客户仍必须接受任何变更；不会产生任何计入。',
    outcomeOrdinary:
      '在这个场景中，来粮还剩 45 分钟。包装可以在合格的常规工作内继续；离场仍未验证，休息得到保留。',
    obligationRecovery: '在继续之前先交付应补的补休。',
    obligationObjections: '每条异议必须由其原提出人解决。',
    obligationSettle: '先结清预留报酬与可选工作。',
    nextChooseProposal: '选择一份工人提案。',
    nextChallenge: '质疑该预测，或听取顾问回应。',
    nextConfirm: '在“交接”的“新的角色决定”中，确认每个角色的理解与当前政策表决。',
    nextWatch: '查看包装区。任何角色都可以立即停止该安排。',
    nextHearComparison: '听取顾问将其预测与实际发运进行比较。',
    nextVerdicts: '每名成员记录采纳、调整或停止，然后完成回顾。',
    nextOpenShift: '以结转的现金和一份新协议开启下一个班次。',
    nextCloseExperiment: '关闭交接实验。',
    evidenceEndedAfter: '结束于',
    evidenceCompleted: '已完成',
    evidenceHorizon: '{prefix} {minute} / 90 分钟。{status}',
    evidenceStopped: '该安排已被停止。任何剩余工作都采用常规节奏。',
    evidenceAvailable: '所选安排保持可用，直到本班次结束。',
    evidenceDispatch: '本班次符合条件的发运：{kg} kg。{receipts}',
    evidenceReceipts: (p: { credited: string; owed: string; evidence: string }) =>
      `客户回执：已计入 ${p.credited} kg；仍欠 ${p.owed} kg。来源证据：${zhEvidenceLabels[p.evidence] ?? p.evidence}。`,
    evidenceTeachingCounter: '这个教学计数与客户发运回执是分开的。',
    evidenceWorkshop: '工作坊没有记录工厂发运。其教学产出不能确立客户交付。',
    evidenceAbstained: '顾问弃权：{reason}本结果不补足缺失的事前预测。',
    evidenceBound:
      '冻结的条件离场界限：按最初的 90 分钟假设为 0 至 {kg} kg。包装潜力与实际来粮保持分开。',
    evidenceNoForecast: '本班次没有保留基于工厂的离场预测。',
    questionRemedy:
      '让 {count} 位未解决异议的提出人各自说明什么能解决他们的顾虑。哪项补救仍需由他们确认？',
    questionRecovery: '仍欠 {minutes} 分钟补休。下一次交接将如何在要求更多工作之前交付这段时间？',
    questionEvidence: '在宣布任何进一步交付已验证之前，需要核验哪项客户回执或物料会话事实？',
    questionTrial:
      '在结束或停止之前，每个角色观察到了什么？在保持报酬与拒绝权受保护的同时，你们接下来会测试哪一个假设？',
    questionDelivery:
      '包装或来粮在哪里等待了？在不借用其他角色休息的情况下，你们会对比哪一项交接变更？',
    questionComparison:
      '让每个角色预测另一种安排会改变什么。哪种观察会让你们改变想法？你们在哪些方面仍有分歧？',
    limitationEarly:
      '这次缩短的试验不能被当作完成了 90 分钟的结果。一次试验不能确立该安排的因果效应。',
    limitationComplete:
      '一次试验不能确立该安排的因果效应。配对比较保持共享输入固定；真实的来粮仍需要自己的回执。',
  },
  'pt-BR': {
    briefingTitle: 'O Ensaque propõe um briefing remunerado de passagem de turno',
    briefingDetail:
      'Pause o ritmo da linha por cinco minutos remunerados e depois use uma sequência de passagem de turno mais clara. Todo o trabalho fica dentro das qualificações atuais.',
    bufferTitle: 'A Manutenção propõe um pequeno estoque intermediário no ensaque',
    bufferDetail:
      'Financie uma estrutura de preparação reutilizável. A maior capacidade modelada da linha custa mais no início; a liberação de qualidade e a segurança das máquinas não mudam.',
    lateTruckTitle: 'O caminhão de coleta está atrasado',
    lateTruckPremise:
      'Suponha que a coleta perca os primeiros 45 minutos desta janela de 90 minutos.',
    lateTruckRecommendation:
      'Recomenda-se adiar se a coleta não puder ser confirmada. O estoque ensacado pode esperar; trabalho extra não faz um caminhão chegar.',
    qualityHoldTitle: 'A Qualidade pede que a linha espere',
    qualityHoldPremise:
      'Suponha que o estoque acabado esteja retido aguardando uma revisão de qualidade qualificada.',
    qualityHoldRecommendation:
      'Recomenda-se uma revisão de qualidade ou o adiamento. Um prazo não concede autoridade de liberação.',
    tightCashTitle: 'A equipe tem pouco caixa disponível',
    tightCashPremise:
      'Suponha que só 116 créditos estejam disponíveis: 108 reservados para a remuneração normal e 8 para um arranjo.',
    tightCashRecommendation:
      'Recomenda-se o ritmo normal ou o briefing remunerado de 8 créditos. Um novo estoque intermediário de 32 créditos invadiria a reserva de remuneração.',
    choiceOrdinary: 'Manter o trabalho normal qualificado',
    choiceSmallerDelivery: 'Discutir uma entrega menor',
    choiceDefer: 'Adiar este teste',
    choiceDecline: 'Recusar a tarefa extra',
    outcomeDecline:
      'A tarefa extra foi recusada neste ensaio. A remuneração normal e o descanso continuam protegidos. Nenhuma votação real das funções nem consentimento foi registrado.',
    outcomeDefer:
      'O teste do ensaio foi adiado. Nenhuma compra é feita. O compromisso com o cliente continua pendente; uma conversa não renegocia um pedido.',
    outcomeQualityHold:
      'A saída condicional é de 0 kg enquanto esta retenção presumida continuar. É preciso uma revisão qualificada ou uma nova janela de coleta; esta escolha não pode liberar um lote real.',
    outcomeTightCash:
      'Depois da reserva de remuneração de 108 créditos, restam 8 créditos neste cenário. O ritmo normal custa 0; um novo briefing remunerado custa 8; um novo estoque intermediário custa 32 e não cabe no orçamento. O caixa real não muda.',
    outcomeSmallerKnown:
      'Discuta no máximo {kg} kg do estoque liberado conhecido, sujeito à coleta e à qualidade. O restante continua devido. Nenhuma entrega ou aceite do cliente é presumido.',
    outcomeSmallerUnknown:
      'Discuta uma entrega menor quando o estoque liberado e o compromisso restante forem conhecidos. O cliente ainda precisa aceitar qualquer mudança; nenhum crédito é criado.',
    outcomeOrdinary:
      'Restam 45 minutos para a coleta neste cenário. O ensaque pode continuar dentro do trabalho normal qualificado; a saída continua não verificada e o descanso é mantido.',
    obligationRecovery: 'Cumpra o tempo de recuperação devido antes de continuar.',
    obligationObjections: 'Cada objeção deve ser resolvida por quem a levantou originalmente.',
    obligationSettle: 'Acerte primeiro a remuneração reservada e o trabalho opcional.',
    nextChooseProposal: 'Escolha uma proposta dos trabalhadores.',
    nextChallenge: 'Conteste a previsão ou ouça a resposta do conselheiro.',
    nextConfirm:
      'Confirme o entendimento de cada função e o voto atual sobre a política em Novas decisões das funções, aqui na Passagem de turno.',
    nextWatch:
      'Acompanhe o setor de ensaque. Qualquer função pode interromper o arranjo imediatamente.',
    nextHearComparison: 'Ouça o conselheiro comparar a previsão dele com a expedição real.',
    nextVerdicts:
      'Cada cooperado registra adotar, ajustar ou interromper e, depois, finaliza a revisão.',
    nextOpenShift: 'Abra o próximo turno com o caixa acumulado e um novo acordo.',
    nextCloseExperiment: 'Encerre o experimento de passagem de turno.',
    evidenceEndedAfter: 'Encerrado após',
    evidenceCompleted: 'Concluídos',
    evidenceHorizon: '{prefix} {minute} de 90 minutos. {status}',
    evidenceStopped: 'O arranjo foi interrompido. O trabalho restante segue o ritmo normal.',
    evidenceAvailable: 'O arranjo escolhido ficou disponível até o fim deste turno.',
    evidenceDispatch: 'Expedição qualificada neste turno: {kg} kg. {receipts}',
    evidenceReceipts: (p: { credited: string; owed: string; evidence: string }) =>
      `Comprovantes do cliente: ${p.credited} kg creditados; ${p.owed} kg ainda devidos. Evidência de origem: ${evidenceLabels[p.evidence] ?? p.evidence}.`,
    evidenceTeachingCounter:
      'Este contador didático é separado dos comprovantes de expedição ao cliente.',
    evidenceWorkshop:
      'A oficina não registra expedição da planta. O resultado didático dela não comprova entrega ao cliente.',
    evidenceAbstained:
      'O conselheiro se absteve: {reason} Este resultado não supre a previsão anterior que falta.',
    evidenceBound:
      'Limite congelado de saída condicional: de 0 a {kg} kg para as premissas originais de 90 minutos. O potencial de ensaque e a coleta real continuam separados.',
    evidenceNoForecast: 'Nenhuma previsão de saída baseada na planta foi mantida para este turno.',
    questionRemedy:
      'Deixem cada uma das {count} pessoas com objeções não resolvidas dizer o que resolveria sua preocupação. Qual solução continua cabendo a elas confirmar?',
    questionRecovery:
      'Ainda são devidos {minutes} minutos de recuperação. Como a próxima passagem de turno vai entregar esse tempo antes de pedir mais trabalho?',
    questionEvidence:
      'Qual comprovante do cliente ou fato da sessão de material precisa ser verificado antes de considerar qualquer nova entrega como verificada?',
    questionTrial:
      'O que cada função observou antes do encerramento ou da parada? Qual premissa única vocês testariam a seguir, mantendo a remuneração e a recusa protegidas?',
    questionDelivery:
      'Onde o ensaque ou a coleta ficaram esperando, e qual mudança de passagem de turno vocês comparariam sem tomar o descanso de outra função?',
    questionComparison:
      'Deixem cada função prever o que outro arranjo mudaria. Qual observação mudaria a opinião de vocês, e onde ainda discordam?',
    limitationEarly:
      'Este teste encurtado não pode ser tratado como um resultado completo de 90 minutos. Um único teste não estabelece o efeito causal do arranjo.',
    limitationComplete:
      'Um único teste não estabelece o efeito causal do arranjo. Uma comparação pareada mantém fixos os insumos compartilhados; a coleta real ainda precisa dos próprios comprovantes.',
  },
});
