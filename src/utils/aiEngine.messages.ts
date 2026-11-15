import { defineMessages } from '../i18n';

/**
 * Decision cards written by the autonomous plant decision engine.
 *
 * aiEngine.ts classifies decisions by matching words in this copy (prevented
 * shutdowns, audio cues). Its patterns list the pt-BR and zh words beside the
 * English ones, so keep "manutenção", "estado seguro" and "anomalia" in the
 * pt-BR maintenance, safety and prediction texts (维护, 安全状态 and 异常 in
 * zh), and out of the others.
 */
export const aiEngineMessages = defineMessages({
  en: {
    coordinationAction: 'Allocate autonomous service route to {machine}',
    coordinationReasoning:
      'The route planner detected equipment demand at {machineId} with {load} percent load.',
    coordinationImpact: 'Keeps service traffic deterministic and clears shared aisles.',
    maintenanceAction: 'Queue condition-based maintenance for {machine}',
    maintenanceReasoning:
      'Telemetry reports {temperature} C, {vibration} mm/s vibration, and {wear} percent wear.',
    maintenanceImpact: 'Reduces breakdown risk while preserving the controlled production path.',
    safetyAction: 'Engage interlocked safe state around {machine}',
    safetyReasoning:
      'The autonomous safety layer detected a limit or test condition requiring isolation.',
    safetyImpact:
      'Stops hazardous motion, closes affected routes, and preserves diagnostic evidence.',
    predictionAction: 'Statistical anomaly detected on {machine}',
    predictionReasoning:
      'Trend analysis combines {temperature} C, {vibration} mm/s vibration, {load} percent load, and {wear} percent wear.',
    predictionImpact: 'Provides lead time for an automatic derate or maintenance queue entry.',
    optimizationAction: 'Balance process load through {machine}',
    optimizationReasoning:
      'The line is carrying {load} percent load at {efficiency} percent local efficiency.',
    optimizationImpact:
      'Lowers the line rate by 2% (never below 55%) to smooth material flow, limit recirculation and protect downstream capacity.',
    completedAutomatic: 'Completed by autonomous control layer',
    completedConfirmed: 'Completed after control confirmation',
    strategicReasoningFallback: 'Strategic analysis complete.',
    strategicAction: 'Strategic: {priority}',
    strategicAdditionalPriorities: 'Additional priorities: {priorities}',
    strategicRecorded: 'Strategic guidance recorded for the tactical controller.',
    chatgptRequestFailed: 'ChatGPT request failed.',
  },
  zh: {
    coordinationAction: '为 {machine} 分配自主服务路线',
    coordinationReasoning: '路线规划器检测到 {machineId} 存在设备需求，负载 {load}%。',
    coordinationImpact: '保持服务交通的确定性，并清空共享通道。',
    maintenanceAction: '为 {machine} 安排基于状态的维护',
    maintenanceReasoning: '遥测报告：{temperature} °C、振动 {vibration} mm/s、磨损 {wear}%。',
    maintenanceImpact: '在保持受控生产路径的同时，降低故障停机风险。',
    safetyAction: '在 {machine} 周围启用联锁安全状态',
    safetyReasoning: '自主安全层检测到需要隔离的限值或测试状况。',
    safetyImpact: '停止危险动作，关闭受影响路线，并保留诊断证据。',
    predictionAction: '在 {machine} 上检测到统计异常',
    predictionReasoning:
      '趋势分析综合了 {temperature} °C、振动 {vibration} mm/s、负载 {load}% 与磨损 {wear}%。',
    predictionImpact: '为自动降载或进入维护队列预留提前量。',
    optimizationAction: '通过 {machine} 均衡过程负载',
    optimizationReasoning: '产线当前负载 {load}%，局部效率 {efficiency}%。',
    optimizationImpact: '将产线速率降低 2%（不低于 55%），以平滑物料流、限制回流并保护下游产能。',
    completedAutomatic: '由自主控制层完成',
    completedConfirmed: '经控制确认后完成',
    strategicReasoningFallback: '战略分析完成。',
    strategicAction: '战略：{priority}',
    strategicAdditionalPriorities: '其他优先级：{priorities}',
    strategicRecorded: '已为战术控制器记录战略指引。',
    chatgptRequestFailed: 'ChatGPT 请求失败。',
  },
  'pt-BR': {
    coordinationAction: 'Alocar rota de serviço autônoma para {machine}',
    coordinationReasoning:
      'O planejador de rotas detectou demanda de equipamento em {machineId} com {load}% de carga.',
    coordinationImpact:
      'Mantém o tráfego de serviço determinístico e libera os corredores compartilhados.',
    maintenanceAction: 'Programar manutenção baseada em condição para {machine}',
    maintenanceReasoning:
      'A telemetria indica {temperature} °C, vibração de {vibration} mm/s e {wear}% de desgaste.',
    maintenanceImpact: 'Reduz o risco de pane e preserva o caminho de produção controlado.',
    safetyAction: 'Acionar estado seguro intertravado em torno de {machine}',
    safetyReasoning:
      'A camada de segurança autônoma detectou uma condição de limite ou de teste que exige isolamento.',
    safetyImpact:
      'Interrompe movimentos perigosos, fecha as rotas afetadas e preserva as evidências de diagnóstico.',
    predictionAction: 'Anomalia estatística detectada em {machine}',
    predictionReasoning:
      'A análise de tendência combina {temperature} °C, vibração de {vibration} mm/s, {load}% de carga e {wear}% de desgaste.',
    predictionImpact:
      'Dá antecedência para uma redução automática de carga ou uma entrada na fila de manutenção.',
    optimizationAction: 'Equilibrar a carga do processo em {machine}',
    optimizationReasoning:
      'A linha opera com {load}% de carga e {efficiency}% de eficiência local.',
    optimizationImpact:
      'Reduz a taxa da linha em 2% (nunca abaixo de 55%) para suavizar o fluxo de material, limitar a recirculação e proteger a capacidade a jusante.',
    completedAutomatic: 'Concluída pela camada de controle autônoma',
    completedConfirmed: 'Concluída após confirmação do controle',
    strategicReasoningFallback: 'Análise estratégica concluída.',
    strategicAction: 'Estratégia: {priority}',
    strategicAdditionalPriorities: 'Prioridades adicionais: {priorities}',
    strategicRecorded: 'Orientação estratégica registrada para o controlador tático.',
    chatgptRequestFailed: 'A solicitação ao ChatGPT falhou.',
  },
});
