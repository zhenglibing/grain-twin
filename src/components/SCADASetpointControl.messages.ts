import { defineMessages } from '../i18n';

const PT_SCADA_MODE: Record<string, string> = {
  simulation: 'simulação',
  live: 'tempo real',
  hybrid: 'híbrido',
  disconnected: 'desconectado',
};

// Same wording as SCADAPanel.messages ZH_SCADA_MODE (batch 2 terminology).
const ZH_SCADA_MODE: Record<string, string> = {
  simulation: '模拟',
  live: '实时',
  hybrid: '混合',
  disconnected: '已断开',
};

export const scadaSetpointMessages = defineMessages({
  en: {
    legend: 'Operator setpoint',
    inputLabel: 'New setpoint for {tag} ({unit})',
    apply: 'Apply',
    currentSetpoint: 'Setpoint now {reading}',
    currentReading: '{tag} reads {reading}',
    noReading: 'No reading yet',
    helperFollows:
      'Moves the simulated {tag} toward this value over a few seconds. It does not change throughput: the order plan sets the line rate.',
    helperAlarmBand: 'The reading alarms below {low} or above {high} {unit}.',
    helperNoFollower:
      'Changes this simulated setpoint value only. It does not change throughput: the order plan sets the line rate.',
    invalidNumber: 'Enter a number.',
    outOfRange: 'Enter a value from {low} to {high} {unit}.',
    disabledNotConnected: 'SCADA is not connected, so setpoints cannot be written.',
    disabledMode: (p: { mode: string }) =>
      `Setpoint writes are limited to the local simulation. This SCADA is in ${p.mode} mode.`,
    applied: 'Setpoint {reading} applied.',
    refused: 'The write was refused; the setpoint is unchanged.',
    applying: 'Applying...',
  },
  zh: {
    legend: '操作员设定值',
    inputLabel: '点位 {tag} 的新设定值（{unit}）',
    apply: '应用',
    currentSetpoint: '当前设定值 {reading}',
    currentReading: '点位 {tag} 当前读数 {reading}',
    noReading: '暂无读数',
    helperFollows: '模拟的 {tag} 将在几秒内向该值靠拢。这不会改变产量：产线速率由订单计划决定。',
    helperAlarmBand: '读数低于 {low} 或高于 {high} {unit} 时报警。',
    helperNoFollower: '仅更改此模拟设定值。这不会改变产量：产线速率由订单计划决定。',
    invalidNumber: '请输入数字。',
    outOfRange: '请输入 {low} 至 {high} {unit} 之间的数值。',
    disabledNotConnected: 'SCADA 未连接，无法写入设定值。',
    disabledMode: (p: { mode: string }) =>
      `设定值写入仅限本地模拟。此 SCADA 当前处于${ZH_SCADA_MODE[p.mode] ?? p.mode}模式。`,
    applied: '已应用设定值 {reading}。',
    refused: '写入被拒绝，设定值未改变。',
    applying: '正在应用……',
  },
  'pt-BR': {
    legend: 'Setpoint do operador',
    inputLabel: 'Novo setpoint para {tag} ({unit})',
    apply: 'Aplicar',
    currentSetpoint: 'Setpoint atual {reading}',
    currentReading: '{tag}: leitura {reading}',
    noReading: 'Ainda sem leitura',
    helperFollows:
      'Leva a leitura simulada de {tag} até este valor em alguns segundos. Não altera a produção: o plano de pedidos define o ritmo da linha.',
    helperAlarmBand: 'A leitura entra em alarme abaixo de {low} ou acima de {high} {unit}.',
    helperNoFollower:
      'Altera apenas este valor de setpoint simulado. Não altera a produção: o plano de pedidos define o ritmo da linha.',
    invalidNumber: 'Digite um número.',
    outOfRange: 'Digite um valor de {low} a {high} {unit}.',
    disabledNotConnected: 'O SCADA não está conectado, então não é possível escrever setpoints.',
    disabledMode: (p: { mode: string }) =>
      `Escritas de setpoint são limitadas à simulação local. Este SCADA está em modo ${PT_SCADA_MODE[p.mode] ?? p.mode}.`,
    applied: 'Setpoint {reading} aplicado.',
    refused: 'A escrita foi recusada; o setpoint não mudou.',
    applying: 'Aplicando...',
  },
});
