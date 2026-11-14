import { defineMessages } from '../i18n';
import {
  PT_MACHINE_TYPES,
  ZH_MACHINE_TYPES,
} from '../components/ui-new/sidebar/ContextSidebar.messages';

const capitalise = (value: string): string => `${value[0].toUpperCase()}${value.slice(1)}`;

const PT_SHIFT_LABELS: Record<string, string> = {
  morning: 'Manhã',
  afternoon: 'Tarde',
  night: 'Noite',
};

/* "Turno da manhã encerrado": the shift as it reads after "Turno". */
const PT_SHIFT_OF: Record<string, string> = {
  morning: 'da manhã',
  afternoon: 'da tarde',
  night: 'da noite',
};

const PT_MATERIALS: Record<string, string> = {
  flour: 'farinha liberada',
  semolina: 'semolina liberada',
};

/* “清晨班次已结班”：班次词与 StatusHUD、班次回顾一致。 */
const ZH_SHIFT_LABELS: Record<string, string> = {
  morning: '清晨',
  afternoon: '下午',
  night: '夜间',
};

const ZH_MATERIALS: Record<string, string> = {
  flour: '面粉',
  semolina: '粗粒粉',
};

type BreakdownParams = { name: string; machineType: string; workOrderId: string; rate: string };
/* The MachineType enum ('ROLLER_MILL') in words, as the machine inspector shows it. */
const machineTypeWords = (type: string): string => type.toLowerCase().replaceAll('_', ' ');

/** Alerts, celebrations and dispatch hold reasons raised by the unified game tick. */
export const unifiedGameTickMessages = defineMessages({
  en: {
    supplierTraceabilityNote:
      'Supplier notification requires traceability review before dispatch release.',
    incidentAlert:
      '{description} The operations workspace records the response and residual controls.',
    shiftClosedTitle: (p: { shift: string; grade: string }) =>
      `${capitalise(p.shift)} shift closed: grade ${p.grade}`,
    shiftClosedUngradedTitle: (p: { shift: string }) =>
      `${capitalise(p.shift)} shift closed: no customer commitments`,
    shiftClosedUngradedIncidentTitle: (p: { shift: string }) =>
      `${capitalise(p.shift)} shift closed: no customer commitments, an incident still open`,
    shiftClosedMessage:
      'Its review is in Overview, under Shift debrief: which orders were on time, what held the grade back and what to try next.',
    dailyTargetReached: 'Daily target reached: {target} bags!',
    dailyTargetMilestone: 'Daily target {threshold}% complete',
    certificationExpired: 'Quality certification is expired.',
    unresolvedContamination: 'A contamination alert remains unresolved.',
    failedQualityTest: 'The latest laboratory result failed.',
    incidentDispatchIsolation: 'An active operational incident requires dispatch isolation.',
    qualityInterlockNotReleased: 'The quality interlock is not released.',
    departedWithoutLoad: 'Truck departed without a released load.',
    waitingForMaterial: (p: { material: string }) =>
      `Waiting for released ${p.material} at the packers.`,
    dispatchQualityHoldTitle: 'Dispatch Quality Hold',
    shippingAwaitingProductTitle: 'Shipping Awaiting Product',
    shippingAwaitingProgrammeTitle: 'Shipping Waiting for a Programme',
    noCommitmentToShip:
      'No customer commitment is open, so packed stock stays in the warehouse for the next programme. Accept the next programme to load this truck.',
    clearBeforeRelease:
      '{reason} Clear the condition before release. While the truck waits at the dock it costs £{rate} per game hour.',
    waitingForProduct: 'Waiting for released product at the packers.',
    shiftLabel: (p: { shift: string }) => capitalise(p.shift),
    breakdownTitle: 'Machine Breakdown',
    breakdownMessage: (p: BreakdownParams) =>
      `${p.name} (${machineTypeWords(p.machineType)}) has broken down due to excessive wear. Open Mill Overview, Maintenance: work order ${p.workOrderId} needs service dispatched, the repair verified and a controlled restart. Each open work order costs £${p.rate} per game hour.`,
    wearWarningTitle: 'Wear warning',
    wearWarningMessage:
      '{name} has reached its wear warning and is losing efficiency. Schedule maintenance before it breaks down: Mill Overview, Maintenance and repairs.',
  },
  zh: {
    supplierTraceabilityNote: '供应商通报要求在发运放行前进行追溯审查。',
    incidentAlert: '{description}运行工作区会记录响应与残余控制。',
    shiftClosedTitle: (p: { shift: string; grade: string }) =>
      `${ZH_SHIFT_LABELS[p.shift] ?? p.shift}班次已结班：等级 ${p.grade}`,
    shiftClosedUngradedTitle: (p: { shift: string }) =>
      `${ZH_SHIFT_LABELS[p.shift] ?? p.shift}班次已结班：无客户承诺`,
    shiftClosedUngradedIncidentTitle: (p: { shift: string }) =>
      `${ZH_SHIFT_LABELS[p.shift] ?? p.shift}班次已结班：无客户承诺，仍有未解决的事件`,
    shiftClosedMessage:
      '回顾在“概览”的“班次回顾”中：哪些订单按时交付、什么拖累了等级，以及下一步尝试什么。',
    dailyTargetReached: '已达成日目标：{target} 袋！',
    dailyTargetMilestone: '日目标已完成 {threshold}%',
    certificationExpired: '质量认证已过期。',
    unresolvedContamination: '仍有未解决的污染警报。',
    failedQualityTest: '最新实验室检测结果不合格。',
    incidentDispatchIsolation: '存在活动运行事件，需要发运隔离。',
    qualityInterlockNotReleased: '质量联锁尚未解除。',
    departedWithoutLoad: '卡车离场时未携带已放行的货物。',
    waitingForMaterial: (p: { material: string }) =>
      `正在包装线等待已放行的${ZH_MATERIALS[p.material] ?? p.material}。`,
    dispatchQualityHoldTitle: '发运质量扣留',
    shippingAwaitingProductTitle: '发运等待产品',
    shippingAwaitingProgrammeTitle: '发运等待生产计划',
    noCommitmentToShip:
      '当前没有未结的客户承诺，包装好的库存将留在仓库中用于下一个生产计划。接受下一个生产计划后再装载这辆卡车。',
    clearBeforeRelease:
      '{reason}放行前请先解除该状况。卡车在装卸区等待期间，每游戏小时花费 £{rate}。',
    waitingForProduct: '正在包装线等待已放行的产品。',
    shiftLabel: (p: { shift: string }) => ZH_SHIFT_LABELS[p.shift] ?? p.shift,
    breakdownTitle: '设备故障停机',
    breakdownMessage: (p: BreakdownParams) =>
      `${p.name}（${ZH_MACHINE_TYPES[p.machineType] ?? machineTypeWords(p.machineType)}）因过度磨损故障停机。请打开磨坊概览的维护：工单 ${p.workOrderId} 需要派发维修、核验维修并受控重启。每张未结工单每游戏小时花费 £${p.rate}。`,
    wearWarningTitle: '磨损警告',
    wearWarningMessage:
      '{name} 已达到磨损警告阈值，效率正在下降。请在故障停机前安排维护：磨坊概览的维护与维修。',
  },
  'pt-BR': {
    supplierTraceabilityNote:
      'A notificação do fornecedor exige revisão de rastreabilidade antes da liberação para expedição.',
    incidentAlert:
      '{description} O espaço de trabalho de operações registra a resposta e os controles residuais.',
    shiftClosedTitle: (p: { shift: string; grade: string }) =>
      `Turno ${PT_SHIFT_OF[p.shift] ?? p.shift} encerrado: nota ${p.grade}`,
    shiftClosedUngradedTitle: (p: { shift: string }) =>
      `Turno ${PT_SHIFT_OF[p.shift] ?? p.shift} encerrado: sem compromissos com clientes`,
    shiftClosedUngradedIncidentTitle: (p: { shift: string }) =>
      `Turno ${PT_SHIFT_OF[p.shift] ?? p.shift} encerrado: sem compromissos com clientes, ocorrência ainda aberta`,
    shiftClosedMessage:
      'A revisão está na Visão geral, em Balanço do turno: quais pedidos chegaram no prazo, o que impediu uma nota melhor e o que tentar a seguir.',
    dailyTargetReached: 'Meta diária atingida: {target} sacos!',
    dailyTargetMilestone: 'Meta diária: {threshold}% concluída',
    certificationExpired: 'A certificação de qualidade está vencida.',
    unresolvedContamination: 'Um alerta de contaminação continua sem resolução.',
    failedQualityTest: 'O resultado de laboratório mais recente foi reprovado.',
    incidentDispatchIsolation: 'Uma ocorrência operacional ativa exige o isolamento da expedição.',
    qualityInterlockNotReleased: 'O intertravamento de qualidade não está liberado.',
    departedWithoutLoad: 'O caminhão saiu sem uma carga liberada.',
    waitingForMaterial: (p: { material: string }) =>
      `Aguardando ${PT_MATERIALS[p.material] ?? p.material} nas ensacadeiras.`,
    dispatchQualityHoldTitle: 'Retenção de qualidade na expedição',
    shippingAwaitingProductTitle: 'Expedição aguardando produto',
    shippingAwaitingProgrammeTitle: 'Expedição aguardando um programa',
    noCommitmentToShip:
      'Nenhum compromisso com cliente está aberto, então o estoque ensacado fica no armazém para o próximo programa. Aceite o próximo programa para carregar este caminhão.',
    clearBeforeRelease:
      '{reason} Resolva a condição antes da liberação. Enquanto o caminhão espera na doca, o custo é de £{rate} por hora de jogo.',
    waitingForProduct: 'Aguardando produto liberado nas ensacadeiras.',
    shiftLabel: (p: { shift: string }) => PT_SHIFT_LABELS[p.shift] ?? capitalise(p.shift),
    breakdownTitle: 'Pane de máquina',
    breakdownMessage: (p: BreakdownParams) =>
      `${p.name} (${PT_MACHINE_TYPES[p.machineType] ?? machineTypeWords(p.machineType)}) entrou em pane por desgaste excessivo. Abra Visão geral do moinho, Manutenção: a ordem de serviço ${p.workOrderId} precisa do envio da equipe, da verificação do reparo e de um reinício controlado. Cada ordem de serviço aberta custa £${p.rate} por hora de jogo.`,
    wearWarningTitle: 'Alerta de desgaste',
    wearWarningMessage:
      '{name} atingiu o alerta de desgaste e está perdendo eficiência. Agende a manutenção antes que entre em pane: Visão geral do moinho, Manutenção e reparos.',
  },
});
