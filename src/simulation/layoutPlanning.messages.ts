import { defineMessages } from '../i18n';

/* Dock ids ('shipping', 'receiving') render verbatim in English; pt-BR maps the
   known values and falls back to the raw id. Obstacle and egress ids stay ids. */
const PT_DOCK: Record<string, string> = { shipping: 'expedição', receiving: 'recebimento' };
const ZH_DOCK: Record<string, string> = { shipping: '发运', receiving: '接收' };

export const layoutPlanningMessages = defineMessages({
  en: {
    dock: (p: { value: string }) => p.value,
    assumptionsRange: 'Planning assumptions must be finite and between 0 and 10,000.',
    invalidCoordinates: '{dock}: invalid coordinates or route/action alignment.',
    fixedPoses: '{dock}: pickup, dropoff and approach poses must stay fixed.',
    shortLeg: '{dock}: a travel leg is too short.',
    tighterCorners: '{dock}: proposed corners tighten the existing turning envelope.',
    leavesFloor: '{dock}: vehicle clearance leaves the operating floor.',
    routeMeets: '{dock}: swept route meets {obstacle}.',
    stagingLeavesApron: '{dock}: staging capacity leaves its apron.',
    stagingMeets: '{dock}: staging meets {obstacle}.',
    stagingBlocksEgress: '{dock}: staging blocks {egress} pedestrian access.',
    stagingBlocksCorridor: '{dock}: staging blocks the {other} vehicle corridor.',
  },
  zh: {
    dock: (p: { value: string }) => ZH_DOCK[p.value] ?? p.value,
    assumptionsRange: '规划假设必须为有限值，且介于 0 到 10,000 之间。',
    invalidCoordinates: '{dock}：坐标无效，或路线与动作未对齐。',
    fixedPoses: '{dock}：取货、放货与接近位姿必须保持固定。',
    shortLeg: '{dock}：某个行驶路段过短。',
    tighterCorners: '{dock}：提议的拐角收紧了现有转弯包络。',
    leavesFloor: '{dock}：车辆净空越出作业地面。',
    routeMeets: '{dock}：扫掠路线触及 {obstacle}。',
    stagingLeavesApron: '{dock}：暂存区满容量时越出其场坪。',
    stagingMeets: '{dock}：暂存区触及 {obstacle}。',
    stagingBlocksEgress: '{dock}：暂存区阻挡了 {egress} 的人行通道。',
    stagingBlocksCorridor: '{dock}：暂存区阻挡了 {other} 车辆走廊。',
  },
  'pt-BR': {
    dock: (p: { value: string }) => PT_DOCK[p.value] ?? p.value,
    assumptionsRange: 'As premissas de planejamento devem ser finitas e estar entre 0 e 10.000.',
    invalidCoordinates: '{dock}: coordenadas inválidas ou desalinhamento entre rota e ações.',
    fixedPoses: '{dock}: as posições de coleta, entrega e aproximação devem permanecer fixas.',
    shortLeg: '{dock}: um trecho do trajeto é curto demais.',
    tighterCorners: '{dock}: as curvas propostas reduzem o raio de giro existente.',
    leavesFloor: '{dock}: a margem de folga do veículo ultrapassa o piso operacional.',
    routeMeets: '{dock}: a faixa varrida pela rota atinge {obstacle}.',
    stagingLeavesApron:
      '{dock}: a área de preparação, em capacidade total, ultrapassa o pátio da doca.',
    stagingMeets: '{dock}: a área de preparação atinge {obstacle}.',
    stagingBlocksEgress: '{dock}: a área de preparação bloqueia o acesso de pedestres em {egress}.',
    stagingBlocksCorridor:
      '{dock}: a área de preparação bloqueia o corredor de veículos de {other}.',
  },
});
