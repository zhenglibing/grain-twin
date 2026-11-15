import { defineMessages } from '../i18n';

const sentenceStart = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

export const operationsCampaignMessages = defineMessages({
  en: {
    // Recipes
    recipeStrongWhite: 'Strong white bread flour',
    recipeFineSemolina: 'Fine corn semolina',
    recipeCommunityFlour: 'Community all-purpose flour',

    // Incidents
    bearingOverheatTitle: 'Roller mill bearing overheat',
    bearingOverheatDescription: 'R.M. 101 bearing temperature is rising toward the trip point.',
    dustFilterPressureTitle: 'Dust filter differential pressure',
    dustFilterPressureDescription: 'Extraction resistance is increasing around the sifting floor.',
    powerSagTitle: 'Site power sag',
    powerSagDescription: 'Incoming voltage is unstable and motor protection is limiting load.',
    delayedTruckTitle: 'Delayed dispatch truck',
    delayedTruckDescription:
      'The scheduled collection is delayed, increasing finished goods pressure.',
    supplierContaminationTitle: 'Supplier contamination alert',
    supplierContaminationDescription:
      'A source lot notification requires an immediate hold and traceability review.',
    packagingShortageTitle: 'Packaging material shortage',
    packagingShortageDescription: 'Packer consumables are below the active order requirement.',
    severeRainTitle: 'Severe rain and drainage loading',
    severeRainDescription: 'Yard drainage and the stream are rising, slowing vehicle movements.',
    controlNetworkDegradedTitle: 'Control network degraded',
    controlNetworkDegradedDescription:
      'Redundant control links have fallen below the required availability threshold.',

    // Logbook sources
    sourceRecoveryChallenge: 'Recovery challenge',
    sourceOrderScheduler: 'Order scheduler',
    sourceAutonomousExecution: 'Autonomous execution',
    sourceIncidentController: 'Incident controller',
    sourceDispatchController: 'Dispatch controller',
    sourceProductionExecution: 'Production execution',
    sourceControlLayer: 'Control layer',
    sourceScada: 'SCADA',

    // Logbook messages
    logChallengeStarted: 'Started the recovery challenge: {label}.',
    logChallengeAbandoned: 'Challenge abandoned; its incident controls remain active.',
    logProgrammeAccepted:
      'Accepted programme {number}: rush {customer} {rushKg} kg, {totalKg} kg in all. Existing material and genealogy remain unchanged.',
    logProgrammeInitialized: 'Production programme initialized from equipment and inventory state.',
    logOrderActivated: '{customer}: {recipe} is now the active commitment.',
    logIncidentAcknowledged: '{title} acknowledged.',
    logSetpointWritten: '{tag} set to {reading}.',
    logIncidentMitigated: '{title} mitigated; residual effect halved.',
    logIncidentResolved: '{title} resolved and controls returned to normal.',
    logManifestAllocated:
      '{manifest} allocated {kg} kg of evidenced dispatch across active commitments.',

    // Execution stage messages
    execPlanning: 'Production route planned.',
    execPackedResting:
      'The rest of this order is already packed; the line rests until shipping collects it.',
    execPackedPrestaging:
      'The rest of this order is packed and waits for its truck, so the line has started the next commitment for {customer}.',
    execProcessing: 'Processing {material} for the active recipe.',
    materialWheatGrain: 'wheat grain',
    materialCornGrain: 'corn grain',
    materialScheduledGrain: 'scheduled grain',
    execQualityHold: 'Finished goods are held at the quality gate.',
    execReadyToLoad: 'Released finished goods are ready at the shipping bay.',
    execLoading: 'Shipping load is {loaded} of {capacity} kg.',
    execReadyToDispatch: 'The outbound load is ready for departure.',
    execDispatched: '{kg} kg left the shipping bay.',
    execAllFulfilled:
      'All commitments fulfilled. Accept the next production programme or review the completed period.',
    execFulfilled: 'Commitment fulfilled.',

    // Constraints
    constraintStorageLabel: 'Storage capacity',
    constraintStorageDetail: '{percent}% of material capacity is occupied.',
    constraintFeedLabel: 'Recipe feed unavailable',
    constraintFeedDetail: (p: { material: string }) =>
      `${sentenceStart(p.material)} inventory is empty.`,
    constraintOverdueLabel: 'Commitment overdue',
    constraintDueSoonLabel: 'Commitment due soon',
    constraintOverdueDetail: (p: { customer: string; minutes: string; count: number }) =>
      `${p.customer} is ${p.minutes} simulated minutes overdue.`,
    constraintDueSoonDetail: (p: { customer: string; minutes: string; count: number }) =>
      `${p.minutes} simulated minutes remain for ${p.customer}.`,
    constraintDispatchLabel: 'Dispatch isolated',
    constraintDispatchDetail:
      'An active incident requires the shipping quality gate to remain closed.',
    constraintMaintenanceLabel: 'Machine stopped for repair',
    constraintMaintenanceDetail: (p: { count: number; countText: string }) =>
      `${p.countText} work order${p.count === 1 ? '' : 's'} open. Open Mill Overview, Maintenance to dispatch service, verify the repair and restart.`,
    constraintMachineDownDetail: (p: {
      machine: string;
      workOrderId: string;
      others: number;
      othersText: string;
    }) =>
      `${p.machine} is stopped on work order ${p.workOrderId}${
        p.others > 0 ? `, with ${p.othersText} more open` : ''
      }. Open Mill Overview, Maintenance to dispatch service, verify the repair and restart it.`,
  },
  zh: {
    // Recipes
    recipeStrongWhite: '高筋面包粉',
    recipeFineSemolina: '细玉米粗粒粉',
    recipeCommunityFlour: '社区多用途面粉',

    // Incidents
    bearingOverheatTitle: '磨辊机轴承过热',
    bearingOverheatDescription: 'R.M. 101 轴承温度正逼近跳闸值。',
    dustFilterPressureTitle: '除尘器压差',
    dustFilterPressureDescription: '筛理楼层附近的抽风阻力正在增大。',
    powerSagTitle: '厂区电压骤降',
    powerSagDescription: '进线电压不稳定，电机保护正在限制负载。',
    delayedTruckTitle: '发运卡车延误',
    delayedTruckDescription: '计划提货延误，成品库存压力增大。',
    supplierContaminationTitle: '供应商污染警报',
    supplierContaminationDescription: '一则原料批通报要求立即扣留并审查追溯记录。',
    packagingShortageTitle: '包装材料短缺',
    packagingShortageDescription: '包装线耗材已低于活动订单需求。',
    severeRainTitle: '强降雨与排水负荷',
    severeRainDescription: '堆场排水与溪流水位上涨，车辆移动放缓。',
    controlNetworkDegradedTitle: '控制网络劣化',
    controlNetworkDegradedDescription: '冗余控制链路的可用性已低于要求阈值。',

    // Logbook sources
    sourceRecoveryChallenge: '恢复挑战',
    sourceOrderScheduler: '订单排程',
    sourceAutonomousExecution: '自主执行',
    sourceIncidentController: '事件控制器',
    sourceDispatchController: '发运控制器',
    sourceProductionExecution: '生产执行',
    sourceControlLayer: '控制层',
    sourceScada: 'SCADA 系统',

    // Logbook messages
    logChallengeStarted: '已开始恢复挑战：{label}。',
    logChallengeAbandoned: '挑战已放弃；其事件控制仍处于活动状态。',
    logProgrammeAccepted:
      '已接受计划 {number}：{customer} 加急 {rushKg} kg，共 {totalKg} kg。既有物料与谱系保持不变。',
    logProgrammeInitialized: '已根据设备与库存状态初始化生产计划。',
    logOrderActivated: '{customer}：{recipe}现为活动承诺。',
    logIncidentAcknowledged: '已确认事件：{title}。',
    logSetpointWritten: '{tag} 已设定为 {reading}。',
    logIncidentMitigated: '已缓解事件：{title}；残余影响减半。',
    logIncidentResolved: '已解决事件：{title}；控制已恢复正常。',
    logManifestAllocated: '{manifest} 已向各活动承诺分配 {kg} kg 的已证实发运量。',

    // Execution stage messages
    execPlanning: '生产路线已规划。',
    execPackedResting: '本订单其余部分已包装完毕，产线待机，等待发运提货。',
    execPackedPrestaging:
      '本订单其余部分已包装完毕、正在等待卡车，产线已开始 {customer} 的下一个承诺。',
    execProcessing: '正在为活动配方加工{material}。',
    materialWheatGrain: '小麦粒',
    materialCornGrain: '玉米粒',
    materialScheduledGrain: '计划谷物',
    execQualityHold: '成品被扣留在质量门。',
    execReadyToLoad: '已放行的成品在发运装卸区待命。',
    execLoading: '发运装载量 {loaded}/{capacity} kg。',
    execReadyToDispatch: '外运货物已就绪，等待出发。',
    execDispatched: '{kg} kg 已离开发运装卸区。',
    execAllFulfilled: '所有承诺均已完成。可接受下一个生产计划，或回顾已完成的时段。',
    execFulfilled: '承诺已完成。',

    // Constraints
    constraintStorageLabel: '仓储容量',
    constraintStorageDetail: '物料容量已占用 {percent}%。',
    constraintFeedLabel: '配方进料不可用',
    constraintFeedDetail: (p: { material: string }) => `${p.material}库存为空。`,
    constraintOverdueLabel: '承诺逾期',
    constraintDueSoonLabel: '承诺即将到期',
    constraintOverdueDetail: (p: { customer: string; minutes: string; count: number }) =>
      `${p.customer} 已逾期 ${p.minutes} 模拟分钟。`,
    constraintDueSoonDetail: (p: { customer: string; minutes: string; count: number }) =>
      `${p.customer} 还剩 ${p.minutes} 模拟分钟。`,
    constraintDispatchLabel: '发运隔离',
    constraintDispatchDetail: '存在活动事件，发运质量门须保持关闭。',
    constraintMaintenanceLabel: '设备停机维修',
    constraintMaintenanceDetail: (p: { count: number; countText: string }) =>
      `当前有 ${p.countText} 个未结工单。请打开磨坊概览的维护，派发维修、核验维修并重启设备。`,
    constraintMachineDownDetail: (p: {
      machine: string;
      workOrderId: string;
      others: number;
      othersText: string;
    }) =>
      `${p.machine} 因工单 ${p.workOrderId} 停机${
        p.others > 0 ? `，另有 ${p.othersText} 个未结` : ''
      }。请打开磨坊概览的维护，派发维修、核验维修并重启设备。`,
  },
  'pt-BR': {
    recipeStrongWhite: 'Farinha de trigo forte para pão',
    recipeFineSemolina: 'Semolina fina de milho',
    recipeCommunityFlour: 'Farinha comunitária multiuso',

    bearingOverheatTitle: 'Superaquecimento de rolamento no moinho de rolos',
    bearingOverheatDescription:
      'A temperatura do rolamento do R.M. 101 está subindo em direção ao ponto de desarme.',
    dustFilterPressureTitle: 'Pressão diferencial do filtro de pó',
    dustFilterPressureDescription:
      'A resistência da exaustão está aumentando no piso de peneiramento.',
    powerSagTitle: 'Queda de tensão na unidade',
    powerSagDescription:
      'A tensão de entrada está instável e a proteção dos motores está limitando a carga.',
    delayedTruckTitle: 'Caminhão de expedição atrasado',
    delayedTruckDescription:
      'A coleta programada está atrasada, aumentando a pressão sobre os produtos acabados.',
    supplierContaminationTitle: 'Alerta de contaminação do fornecedor',
    supplierContaminationDescription:
      'Uma notificação sobre um lote de origem exige retenção imediata e revisão de rastreabilidade.',
    packagingShortageTitle: 'Falta de material de embalagem',
    packagingShortageDescription:
      'Os insumos da ensacadeira estão abaixo do necessário para o pedido ativo.',
    severeRainTitle: 'Chuva forte e sobrecarga da drenagem',
    severeRainDescription:
      'A drenagem do pátio e o córrego estão subindo, o que desacelera a movimentação de veículos.',
    controlNetworkDegradedTitle: 'Rede de controle degradada',
    controlNetworkDegradedDescription:
      'Os links de controle redundantes caíram abaixo do limite de disponibilidade exigido.',

    sourceRecoveryChallenge: 'Desafio de recuperação',
    sourceOrderScheduler: 'Programador de pedidos',
    sourceAutonomousExecution: 'Execução autônoma',
    sourceIncidentController: 'Controlador de ocorrências',
    sourceDispatchController: 'Controlador de expedição',
    sourceProductionExecution: 'Execução da produção',
    sourceControlLayer: 'Camada de controle',
    sourceScada: 'SCADA',

    logChallengeStarted: 'Desafio de recuperação iniciado: {label}.',
    logChallengeAbandoned: 'Desafio abandonado; os controles da ocorrência continuam ativos.',
    logProgrammeAccepted:
      'Programa {number} aceito: urgência {customer} {rushKg} kg, {totalKg} kg no total. O material e a genealogia existentes permanecem inalterados.',
    logProgrammeInitialized:
      'Programa de produção inicializado a partir do estado dos equipamentos e do estoque.',
    logOrderActivated: '{customer}: {recipe} agora é o compromisso ativo.',
    logIncidentAcknowledged: 'Ocorrência reconhecida: {title}.',
    logSetpointWritten: '{tag} ajustado para {reading}.',
    logIncidentMitigated: 'Ocorrência mitigada: {title}; efeito residual reduzido à metade.',
    logIncidentResolved: 'Ocorrência resolvida: {title}; controles de volta ao normal.',
    logManifestAllocated:
      '{manifest} alocou {kg} kg de expedição comprovada entre os compromissos ativos.',

    execPlanning: 'Rota de produção planejada.',
    execPackedResting:
      'O restante deste pedido já está ensacado; a linha aguarda até a expedição coletá-lo.',
    execPackedPrestaging:
      'O restante deste pedido está ensacado e aguarda o caminhão, então a linha já começou o próximo compromisso, para {customer}.',
    execProcessing: 'Processando {material} para a receita ativa.',
    materialWheatGrain: 'trigo em grão',
    materialCornGrain: 'milho em grão',
    materialScheduledGrain: 'o grão programado',
    execQualityHold: 'Os produtos acabados estão retidos na barreira de qualidade.',
    execReadyToLoad: 'Os produtos acabados liberados estão prontos na doca de expedição.',
    execLoading: 'A carga de expedição está em {loaded} de {capacity} kg.',
    execReadyToDispatch: 'A carga de saída está pronta para partir.',
    execDispatched: '{kg} kg saíram da doca de expedição.',
    execAllFulfilled:
      'Todos os compromissos foram cumpridos. Aceite o próximo programa de produção ou revise o período concluído.',
    execFulfilled: 'Compromisso cumprido.',

    constraintStorageLabel: 'Capacidade de armazenagem',
    constraintStorageDetail: '{percent}% da capacidade de material está ocupada.',
    constraintFeedLabel: 'Alimentação da receita indisponível',
    constraintFeedDetail: (p: { material: string }) => `O estoque de ${p.material} está vazio.`,
    constraintOverdueLabel: 'Compromisso atrasado',
    constraintDueSoonLabel: 'Compromisso com prazo próximo',
    constraintOverdueDetail: (p: { customer: string; minutes: string; count: number }) =>
      `Compromisso de ${p.customer} atrasado em ${p.minutes} ${p.count === 1 ? 'minuto simulado' : 'minutos simulados'}.`,
    constraintDueSoonDetail: (p: { customer: string; minutes: string; count: number }) =>
      p.count === 1
        ? `Resta ${p.minutes} minuto simulado para ${p.customer}.`
        : `Restam ${p.minutes} minutos simulados para ${p.customer}.`,
    constraintDispatchLabel: 'Expedição isolada',
    constraintDispatchDetail:
      'Uma ocorrência ativa exige que a barreira de qualidade da expedição permaneça fechada.',
    constraintMaintenanceLabel: 'Máquina parada para reparo',
    constraintMaintenanceDetail: (p: { count: number; countText: string }) =>
      `${
        p.count === 1
          ? `${p.countText} ordem de serviço aberta.`
          : `${p.countText} ordens de serviço abertas.`
      } Abra Visão geral do moinho, Manutenção para enviar a equipe, verificar o reparo e reiniciar.`,
    constraintMachineDownDetail: (p: {
      machine: string;
      workOrderId: string;
      others: number;
      othersText: string;
    }) =>
      `A máquina ${p.machine} está parada na ordem de serviço ${p.workOrderId}${
        p.others > 0 ? `, com mais ${p.othersText} em aberto` : ''
      }. Abra Visão geral do moinho, Manutenção para enviar a equipe, verificar o reparo e reiniciá-la.`,
  },
});
