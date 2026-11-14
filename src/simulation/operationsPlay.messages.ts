import { defineMessages } from '../i18n';

/* Source material ids ('wheat_grain', 'corn_grain') render as words in
   English; pt-BR and zh map the known values and fall back to the English words. */
const PT_MATERIAL: Record<string, string> = {
  wheat_grain: 'grão de trigo',
  corn_grain: 'grão de milho',
};
const ZH_MATERIAL: Record<string, string> = {
  wheat_grain: '小麦粒',
  corn_grain: '玉米粒',
};

export const operationsPlayMessages = defineMessages({
  en: {
    blockActiveChallenge: 'Finish or abandon the active challenge first.',
    blockNoCommitment: 'Accept a production programme with an open commitment first.',
    blockOpenIncidents: 'Recover existing incidents before adding another challenge.',
    blockPlanning: 'Wait for the selected route to refresh its inventory and quality readings.',
    blockNoFeedstock: 'Receive the active recipe feedstock before starting.',
    blockQualityHold: 'Resolve the existing quality hold before starting.',

    challengePowerRecovery: 'Recover from a power sag',
    challengePackagingRecovery: 'Restore packaging throughput',
    challengeNetworkRecovery: 'Recover control availability',
    challengeFallback: 'Recovery challenge',

    acknowledgeLabel: 'Acknowledge incident',
    acknowledgeConsequence:
      '{title}: acknowledgement records ownership; its production and safety effects remain active.',
    mitigateLabel: 'Apply incident mitigation',
    mitigateConsequence:
      'Halves the incident’s throughput and quality penalties. Existing equipment failures and quality holds still require their own recovery.',
    resumeLabel: 'Resume shift for controller response',
    resumeConsequence:
      'Resumes the whole shift at standard pace. Production and customer deadlines advance; the shift stays running until you pause it.',
    resolveLabel: 'Restore challenge controller',
    resolveConsequenceActive:
      'Restores this effect-only controller scenario to normal. Complete the challenge by dispatching its target mass through the real quality and shipping gates.',
    resolveConsequenceEnded:
      'Restores the abandoned or expired scenario controller to normal. Its recorded challenge result remains unchanged; a fresh challenge can then be started.',
    repairLabel: 'Repair the stopped machine in Overview',
    programmeLabel: 'Accept next production programme',
    programmeConsequence:
      'Creates three customer commitments, {dayKg} kg in all ({nightKg} kg on the night shift): a one-truck rush that pays {premium}% more but is due within {window} and costs double the usual late penalty, a {standardKg} kg order and a two-truck bulk order. The rush customer changes with each programme. Existing stock remains available; no goods or revenue are created.',
    qualityLabel: 'Review the quality hold in Overview',
    qualityConsequence:
      'Inspect source traceability and tests in the QC lab. Held batches cannot satisfy a customer commitment.',
    receivingLabel: 'Check incoming grain in SCADA',
    sourceMaterial: (p: { value: string }) => p.value.replaceAll('_', ' '),
    receivingConsequence:
      'The {material} route is empty. Receiving and releasing the matching source lot permits milling to resume.',
    dispatchLabel: 'Check shipping in SCADA',
    dispatchConsequence:
      'Only material recorded on a departed shipping manifest credits the commitment. Loading and released stock alone earn no revenue.',
    residualLabel: 'Check remaining incident effects in SCADA',
    productionLabel: 'Check the production line in SCADA',
    residualConsequence:
      '{title} retains residual effects. Recover the affected equipment or hold in its owning workspace; acknowledgement alone cannot restore it.',
    productionConsequence:
      'Follow feedstock through mills, sifters and packers. The scheduler sets recipe throughput; quality release precedes shipment.',

    instructionInspect: 'Inspect the incident in the operations workspace.',
    instructionAcknowledge: 'Acknowledge the incident, then apply mitigation.',
    instructionMitigate: "Apply mitigation to reduce the controller's penalties.",
    instructionRestored:
      'Controller restored. Dispatch fresh, quality-released goods through the shipping bay.',
    instructionRestore:
      'Restore the challenge controller, then dispatch fresh, quality-released goods.',
    instructionQueued:
      'The response is queued. Resume the shift to process it before restoring the controller.',
  },
  zh: {
    blockActiveChallenge: '请先完成或放弃当前挑战。',
    blockNoCommitment: '请先接受一个含未结承诺的生产计划。',
    blockOpenIncidents: '请先从既有事件中恢复，再添加其他挑战。',
    blockPlanning: '请等待所选路线刷新库存与质量读数。',
    blockNoFeedstock: '开始前请先接收活动配方的原料。',
    blockQualityHold: '开始前请先解除现有的质量扣留。',

    challengePowerRecovery: '电压骤降后恢复',
    challengePackagingRecovery: '恢复包装产量',
    challengeNetworkRecovery: '恢复控制可用性',
    challengeFallback: '恢复挑战',

    acknowledgeLabel: '确认事件',
    acknowledgeConsequence: '{title}：确认即记录责任归属；其生产与安全影响仍保持生效。',
    mitigateLabel: '实施事件缓解',
    mitigateConsequence: '将事件的产量与质量惩罚减半。既有设备故障与质量扣留仍需各自恢复。',
    resumeLabel: '恢复班次以处理控制器响应',
    resumeConsequence:
      '以标准节奏恢复整个班次。生产与客户期限继续推进；班次将持续运行，直到你暂停它。',
    resolveLabel: '恢复挑战控制器',
    resolveConsequenceActive:
      '将该仅施加效果的控制器场景恢复正常。将目标量通过真实的质量门与发运门发出，即完成挑战。',
    resolveConsequenceEnded:
      '将已放弃或已过期的场景控制器恢复正常。已记录的挑战结果保持不变；随后可开始新的挑战。',
    repairLabel: '在概览中维修停机设备',
    programmeLabel: '接受下一个生产计划',
    programmeConsequence:
      '创建三个客户承诺，共 {dayKg} kg（夜班 {nightKg} kg）：一个单卡车加急单，多付 {premium}%，但期限仅 {window}，且迟交罚金为常规的两倍；一个 {standardKg} kg 订单；以及一个双卡车散装订单。加急客户随每个计划更换。既有库存仍可使用；不会创建任何货物或收入。',
    qualityLabel: '在概览中审查质量扣留',
    qualityConsequence: '在质检实验室检查原料追溯与检测。被扣留批次无法用于履行客户承诺。',
    receivingLabel: '在 SCADA 检查来粮',
    sourceMaterial: (p: { value: string }) => ZH_MATERIAL[p.value] ?? p.value.replaceAll('_', ' '),
    receivingConsequence: '{material}路线为空。接收并放行对应的原料批后才能恢复制粉。',
    dispatchLabel: '在 SCADA 检查发运',
    dispatchConsequence:
      '只有记录在已离场发运运单上的物料才计入承诺；仅靠装载和已放行库存不会产生收入。',
    residualLabel: '在 SCADA 检查事件残余影响',
    productionLabel: '在 SCADA 检查产线',
    residualConsequence:
      '{title}仍存在残余影响。请恢复受影响设备或在其所属工作区处理扣留；仅靠确认无法恢复。',
    productionConsequence:
      '跟随原料经过磨辊机、平筛与包装线。排程器设定配方产量；质量放行先于发运。',

    instructionInspect: '在运行工作区检查该事件。',
    instructionAcknowledge: '确认事件，然后实施缓解。',
    instructionMitigate: '实施缓解以减轻控制器的惩罚。',
    instructionRestored: '控制器已恢复。请通过发运装卸区发运新产出、已质量放行的货物。',
    instructionRestore: '恢复挑战控制器，然后发运新产出、已质量放行的货物。',
    instructionQueued: '响应已排队。请先恢复班次运行处理该响应，再恢复控制器。',
  },
  'pt-BR': {
    blockActiveChallenge: 'Primeiro conclua ou abandone o desafio ativo.',
    blockNoCommitment: 'Primeiro aceite um programa de produção com um compromisso em aberto.',
    blockOpenIncidents: 'Recupere as ocorrências existentes antes de adicionar outro desafio.',
    blockPlanning: 'Aguarde a rota selecionada atualizar as leituras de estoque e de qualidade.',
    blockNoFeedstock: 'Receba a matéria-prima da receita ativa antes de começar.',
    blockQualityHold: 'Resolva a retenção de qualidade existente antes de começar.',

    challengePowerRecovery: 'Recuperar-se de uma queda de tensão',
    challengePackagingRecovery: 'Restabelecer a vazão de embalagem',
    challengeNetworkRecovery: 'Recuperar a disponibilidade do controle',
    challengeFallback: 'Desafio de recuperação',

    acknowledgeLabel: 'Reconhecer ocorrência',
    acknowledgeConsequence:
      '{title}: o reconhecimento registra quem é responsável; os efeitos na produção e na segurança continuam ativos.',
    mitigateLabel: 'Aplicar mitigação da ocorrência',
    mitigateConsequence:
      'Reduz à metade as penalidades de vazão e de qualidade da ocorrência. As falhas de equipamento e as retenções de qualidade existentes ainda exigem sua própria recuperação.',
    resumeLabel: 'Retomar o turno para a resposta do controlador',
    resumeConsequence:
      'Retoma o turno inteiro em ritmo padrão. A produção e os prazos dos clientes avançam; o turno continua rodando até você pausá-lo.',
    resolveLabel: 'Restaurar o controlador do desafio',
    resolveConsequenceActive:
      'Restaura ao normal este cenário do controlador, que atua apenas sobre os efeitos. Conclua o desafio expedindo a massa-alvo pelas etapas reais de qualidade e de expedição.',
    resolveConsequenceEnded:
      'Restaura ao normal o controlador do cenário abandonado ou expirado. O resultado registrado do desafio não muda; depois disso, um novo desafio pode ser iniciado.',
    repairLabel: 'Reparar a máquina parada na Visão geral',
    programmeLabel: 'Aceitar o próximo programa de produção',
    programmeConsequence:
      'Cria três compromissos com clientes, {dayKg} kg no total ({nightKg} kg no turno da noite): um pedido urgente de um caminhão, que paga {premium}% a mais, mas vence em {window} e custa o dobro da multa usual por atraso, um pedido de {standardKg} kg e um pedido a granel de dois caminhões. O cliente urgente muda a cada programa. O estoque existente continua disponível; nenhum produto ou faturamento é criado.',
    qualityLabel: 'Revisar a retenção de qualidade na Visão geral',
    qualityConsequence:
      'Inspecione a rastreabilidade da origem e os testes no laboratório de CQ. Lotes retidos não podem atender a um compromisso com o cliente.',
    receivingLabel: 'Verificar o grão recebido no SCADA',
    sourceMaterial: (p: { value: string }) => PT_MATERIAL[p.value] ?? p.value.replaceAll('_', ' '),
    receivingConsequence:
      'A rota de {material} está vazia. Receber e liberar o lote de origem correspondente permite retomar a moagem.',
    dispatchLabel: 'Verificar a expedição no SCADA',
    dispatchConsequence:
      'Somente o material registrado em um romaneio de expedição que já saiu conta para o compromisso. O carregamento e o estoque liberado, por si sós, não geram faturamento.',
    residualLabel: 'Verificar os efeitos restantes da ocorrência no SCADA',
    productionLabel: 'Verificar a linha de produção no SCADA',
    residualConsequence:
      '{title} mantém efeitos residuais. Recupere o equipamento afetado ou resolva a retenção no espaço de trabalho correspondente; só o reconhecimento não basta para restabelecer a operação.',
    productionConsequence:
      'Acompanhe a matéria-prima pelos moinhos de rolos, plansifters e ensacadeiras. A programação da produção define a vazão da receita; a liberação de qualidade vem antes da expedição.',

    instructionInspect: 'Inspecione a ocorrência no espaço de trabalho de operações.',
    instructionAcknowledge: 'Reconheça a ocorrência e depois aplique a mitigação.',
    instructionMitigate: 'Aplique a mitigação para reduzir as penalidades do controlador.',
    instructionRestored:
      'Controlador restaurado. Expeça pela doca de expedição produtos recém-produzidos e liberados pela qualidade.',
    instructionRestore:
      'Restaure o controlador do desafio e depois expeça produtos recém-produzidos e liberados pela qualidade.',
    instructionQueued:
      'A resposta está na fila. Retome o turno para processá-la antes de restaurar o controlador.',
  },
});
