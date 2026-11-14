import { defineMessages } from '../../i18n';

/** PA notices and event captions spoken by the plant's control systems. */
export const sharedMessages = defineMessages({
  en: {
    processPathVerified: 'Process path verified, receiving through packing. All interlocks ready.',
    siloInventoryReconciled:
      'Silo inventory reconciled. Mass balance within tolerance — nothing unaccounted for.',
    rollerGapStable:
      'Roller gap control is stable. Extraction load is tracking the current recipe.',
    plansifterPressureNominal:
      'Plansifter differential pressure is nominal across all active sections.',
    packingLineVerified: 'Packing line verified. Checkweigher and reject gate standing by.',
    dockSequencingCleared: 'Dock sequencing has cleared a path for the next delivery.',
    forkliftRoutesDeconflicted: 'Forklift routes deconflicted. Trucks and conveyors accounted for.',
    geofencesMatch: 'Mobile equipment geofences match the active production zones.',
    dustExtractionStable: 'Dust extraction stable. Differential pressure inside the control band.',
    waterwayHealthy: 'Waterway telemetry is healthy. The stream is doing what streams do.',
    weatherFeedChecked:
      'Weather feed checked. Lighting and vehicle limits match the conditions outside.',
    millIsCalm: 'The mill is calm. This is a measured condition, not optimism.',
    vibrationTrendReviewed:
      'Vibration trend reviewed on the busiest asset. Nothing outside its envelope.',
    constraintAnalysisUpdated: 'Constraint analysis updated. The bottleneck is marked in SCADA.',
    cycleTimeVarianceCorrected:
      'Short cycle-time variance detected and corrected. The line controller handled it.',
    housekeepingComplete: 'Housekeeping cycle complete. Lanes clear, sensors unobstructed.',
    daylightControlActive: 'Daylight control active. Exterior lights following the sun.',
    solarLoadingApplied:
      'Solar loading forecast applied. Ventilation and cooling setpoints adjusted.',
    nightProfileActive:
      'Night profile active. Perimeter lighting and low-visibility vehicle limits are engaged.',
    lightingTrackingSky:
      'Facility lighting is tracking the sky. The celestial clock and the electrical one agree.',
    machineWarning:
      'Warning at {machine}. Needs a diagnostic review before the next control change.',
    machineCritical: 'Critical alarm at {machine}. Process held safe until this is resolved.',
    machineRecovered: '{machine} recovery complete. Interlocks clear, production resumed.',
    milestone25: 'Daily target 25% packed. The line has found its rhythm.',
    milestone50: 'Halfway to the daily target. Packing is holding pace.',
    milestone75: 'Daily target 75% packed. The finish line is in sight.',
    milestone90: 'Daily target 90% packed. Just the last bags to fill.',
    milestone100: 'Daily target achieved. The batch record is filed in SCADA. Well done, mill.',
    safetyInterlockLogged: 'Safety interlock event logged. The affected zone is held safe.',
    nearMissTriggered:
      'Near-miss logic triggered. Mobile equipment stopped while route telemetry is reviewed.',
    vehicleProximity:
      'Vehicle proximity event. Conflicting routes are locked until the control system clears them.',
    drillStarted:
      'Egress verification drill started. Equipment is in a safe stop while service exits are checked.',
    drillSensorsUnderTest: 'Service egress sensors under test. Isolation interlocks holding.',
    drillComplete:
      'Egress verification complete. All service exits confirmed clear; production resuming.',
    drillEndedEarly: 'Egress verification drill ended early. Production restored.',
    emergencyStopActivated: 'Emergency stop activated. Everything is stationary.',
    facilityStopEngaged:
      'Facility emergency stop engaged. Restart held until the cause is found and interlocks clear.',
    vehiclesSecure: 'All vehicles secure. Route reservations locked until the all-clear.',
    forkliftStop:
      'Forklift emergency stop. Every forklift is holding position; the mill keeps running.',
  },
  zh: {
    processPathVerified: '工艺路径已验证，自接收至包装。全部联锁就绪。',
    siloInventoryReconciled: '筒仓库存已对账。物料账在容差之内——没有未入账的物料。',
    rollerGapStable: '辊隙控制稳定。提取负荷正跟随当前配方。',
    plansifterPressureNominal: '各在运分区的平筛压差均为正常。',
    packingLineVerified: '包装线已验证。检重秤与剔除闸待命。',
    dockSequencingCleared: '装卸区排序已为下一批交付清出通道。',
    forkliftRoutesDeconflicted: '叉车路线冲突已解除。卡车与输送机均已计入。',
    geofencesMatch: '移动设备电子围栏与在运生产区域一致。',
    dustExtractionStable: '除尘系统稳定。压差处于控制范围内。',
    waterwayHealthy: '水道遥测正常。溪流正在做溪流该做的事。',
    weatherFeedChecked: '气象数据已核对。照明与车辆限制与室外天气一致。',
    millIsCalm: '磨坊很平静。这是实测状态，不是乐观。',
    vibrationTrendReviewed: '已复查最繁忙设施的振动趋势。一切均在包络范围内。',
    constraintAnalysisUpdated: '约束分析已更新。瓶颈已在 SCADA 中标记。',
    cycleTimeVarianceCorrected: '检测到短暂的周期时间偏差并已纠正。产线控制器已自行处理。',
    housekeepingComplete: '现场清理周期完成。通道畅通，传感器无遮挡。',
    daylightControlActive: '昼光控制已启用。室外照明正跟随日照。',
    solarLoadingApplied: '太阳得热预测已应用。通风与制冷设定值已调整。',
    nightProfileActive: '夜间模式已启用。周界照明与低能见度车辆限制已生效。',
    lightingTrackingSky: '设施照明正跟随天色。天体时钟与电气时钟彼此一致。',
    machineWarning: '{machine} 出现警告。下次控制变更前需先进行诊断复查。',
    machineCritical: '{machine} 发生危急报警。问题解决前过程保持安全。',
    machineRecovered: '{machine} 恢复完成。联锁已清除，生产已恢复。',
    milestone25: '日目标已包装 25%。产线已找到节奏。',
    milestone50: '日目标行程过半。包装正保持节奏。',
    milestone75: '日目标已包装 75%。终点已在望。',
    milestone90: '日目标已包装 90%。只待装完最后几袋。',
    milestone100: '日目标已达成。批次记录已归档至 SCADA。干得好，磨坊。',
    safetyInterlockLogged: '安全联锁事件已记录。受影响区域保持安全。',
    nearMissTriggered: '未遂事件逻辑已触发。移动设备已停机，正在复查路线遥测。',
    vehicleProximity: '车辆接近事件。冲突路线已锁定，直至控制系统解除。',
    drillStarted: '疏散验证演练已启动。检查疏散出口期间，设备处于安全停机。',
    drillSensorsUnderTest: '疏散出口传感器测试中。隔离联锁保持生效。',
    drillComplete: '疏散验证完成。全部疏散出口确认畅通；生产正在恢复。',
    drillEndedEarly: '疏散验证演练提前结束。生产已恢复。',
    emergencyStopActivated: '紧急停机已触发。一切均已静止。',
    facilityStopEngaged: '设施紧急停机已生效。查明原因、联锁清除前暂缓重启。',
    vehiclesSecure: '全部车辆已安全就位。路线预留保持锁定，直至警报解除。',
    forkliftStop: '叉车紧急停机。每台叉车均保持原位；磨坊继续运行。',
  },
  'pt-BR': {
    processPathVerified:
      'Rota do processo verificada, do recebimento ao ensaque. Todos os intertravamentos prontos.',
    siloInventoryReconciled:
      'Estoque dos silos conciliado. Balanço de massa dentro da tolerância — tudo contabilizado.',
    rollerGapStable:
      'O controle de abertura dos rolos está estável. A carga de extração acompanha a receita atual.',
    plansifterPressureNominal:
      'A pressão diferencial dos plansifters está nominal em todas as seções ativas.',
    packingLineVerified:
      'Linha de ensaque verificada. Balança de checagem e comporta de rejeito a postos.',
    dockSequencingCleared: 'O sequenciamento das docas liberou caminho para a próxima entrega.',
    forkliftRoutesDeconflicted:
      'Rotas das empilhadeiras sem conflito. Caminhões e transportadores contabilizados.',
    geofencesMatch:
      'As cercas virtuais dos equipamentos móveis correspondem às zonas de produção ativas.',
    dustExtractionStable:
      'Exaustão de pó estável. Pressão diferencial dentro da faixa de controle.',
    waterwayHealthy:
      'A telemetria do curso d’água está saudável. O riacho está fazendo o que riachos fazem.',
    weatherFeedChecked:
      'Dados meteorológicos verificados. Iluminação e limites dos veículos de acordo com as condições lá fora.',
    millIsCalm: 'O moinho está tranquilo. Esta é uma condição medida, não otimismo.',
    vibrationTrendReviewed:
      'Tendência de vibração revisada no equipamento mais exigido. Nada fora da sua faixa.',
    constraintAnalysisUpdated: 'Análise de restrições atualizada. O gargalo está marcado no SCADA.',
    cycleTimeVarianceCorrected:
      'Breve variação no tempo de ciclo detectada e corrigida. O controlador da linha resolveu.',
    housekeepingComplete: 'Ciclo de limpeza concluído. Corredores livres, sensores desobstruídos.',
    daylightControlActive: 'Controle de luz natural ativo. A iluminação externa acompanha o sol.',
    solarLoadingApplied:
      'Previsão de carga solar aplicada. Setpoints de ventilação e resfriamento ajustados.',
    nightProfileActive:
      'Perfil noturno ativo. Iluminação perimetral e limites de veículos para baixa visibilidade acionados.',
    lightingTrackingSky:
      'A iluminação da unidade acompanha o céu. O relógio celeste e o elétrico concordam.',
    machineWarning:
      'Alerta em {machine}. Precisa de uma revisão de diagnóstico antes da próxima mudança de controle.',
    machineCritical:
      'Alarme crítico em {machine}. Processo mantido em condição segura até que isso seja resolvido.',
    machineRecovered:
      'Recuperação de {machine} concluída. Intertravamentos liberados, produção retomada.',
    milestone25: '25% da meta diária ensacada. A linha encontrou seu ritmo.',
    milestone50: 'Metade da meta diária. O ensaque está mantendo o ritmo.',
    milestone75: '75% da meta diária ensacada. A reta final está à vista.',
    milestone90: '90% da meta diária ensacada. Só faltam os últimos sacos.',
    milestone100:
      'Meta diária atingida. O registro do lote está arquivado no SCADA. Muito bem, moinho.',
    safetyInterlockLogged:
      'Evento de intertravamento de segurança registrado. A zona afetada está mantida em condição segura.',
    nearMissTriggered:
      'Lógica de quase acidente acionada. Equipamentos móveis parados enquanto a telemetria das rotas é revisada.',
    vehicleProximity:
      'Evento de proximidade de veículos. Rotas conflitantes bloqueadas até que o sistema de controle as libere.',
    drillStarted:
      'Simulado de verificação das rotas de saída iniciado. Equipamentos em parada segura enquanto as saídas de serviço são verificadas.',
    drillSensorsUnderTest:
      'Sensores das rotas de saída de serviço em teste. Intertravamentos de isolamento mantidos.',
    drillComplete:
      'Verificação das rotas de saída concluída. Todas as saídas de serviço confirmadas livres; produção sendo retomada.',
    drillEndedEarly:
      'Simulado de verificação das rotas de saída encerrado antecipadamente. Produção restabelecida.',
    emergencyStopActivated: 'Parada de emergência acionada. Tudo está parado.',
    facilityStopEngaged:
      'Parada de emergência da unidade acionada. Religamento bloqueado até que a causa seja encontrada e os intertravamentos sejam liberados.',
    vehiclesSecure:
      'Todos os veículos em segurança. Reservas de rota bloqueadas até a liberação geral.',
    forkliftStop:
      'Parada de emergência das empilhadeiras. Todas as empilhadeiras estão paradas na posição; o moinho continua funcionando.',
  },
});
