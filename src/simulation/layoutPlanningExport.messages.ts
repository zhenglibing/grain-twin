import { defineMessages } from '../i18n';

/* Dock and route-provenance ids render verbatim in English; pt-BR maps the
   known values and falls back to the raw id. */
const PT_DOCK: Record<string, string> = { shipping: 'expedição', receiving: 'recebimento' };
const PT_PROVENANCE: Record<string, string> = {
  rendered: 'renderizado',
  modeled: 'modelado',
  unresolved: 'não resolvido',
};

const ZH_DOCK: Record<string, string> = { shipping: '发运', receiving: '接收' };
const ZH_PROVENANCE: Record<string, string> = {
  rendered: '已渲染',
  modeled: '已建模',
  unresolved: '未解析',
};

type FlowParams = {
  key: string;
  load: string;
  rate: string;
  provenance: string;
  seconds: string;
};
type LoopParams = { dock: string; width: string };

/** Copy inside the exported plan drawing. Geometry attributes and DXF stay toFixed. */
export const layoutPlanExportMessages = defineMessages({
  en: {
    flowTitle: (p: FlowParams) =>
      `${p.key}: ${p.load} kg in transit; ${p.rate} kg/min rated; ${p.provenance} path, ${p.seconds} s`,
    machineTitle: '{id} at +{height} m; {input} kg in / {output} kg out',
    loopTitle: (p: LoopParams) =>
      `${p.dock} forklift loop, full ${p.width} m clearance corridor checked`,
    shippingStaging: '50 pallet spaces',
    receivingStaging: 'Return pallets',
    ariaLabel: '{title} dimensioned mill logistics plan',
    svgTitle: '{title}: mill logistics and captured material queues',
    factoryWidth: '80 m factory width',
    factoryDepth: '100 m factory depth',
    legendPaths: 'Solid: rendered pipes. Dashed: modeled paths.',
    legendColours: 'Amber/cyan: forklift loops. Green: protected access.',
    queueSnapshot: 'Queue snapshot at material clock {clock} s. Coordinates in metres.',
    legendMachines: 'S: silo. M: mill. SF: sifter (+{heights} m). P: packer. %: buffer fill.',
  },
  zh: {
    flowTitle: (p: FlowParams) =>
      `${p.key}：在途 ${p.load} kg；额定 ${p.rate} kg/min；${ZH_PROVENANCE[p.provenance] ?? p.provenance}路径，${p.seconds} s`,
    machineTitle: '{id} 位于 +{height} m；输入 {input} kg / 输出 {output} kg',
    loopTitle: (p: LoopParams) =>
      `${ZH_DOCK[p.dock] ?? p.dock}叉车环线，已校验完整 ${p.width} m 净空走廊`,
    shippingStaging: '50 个托盘位',
    receivingStaging: '回空托盘',
    ariaLabel: '{title} 带尺寸标注的磨坊物流规划图',
    svgTitle: '{title}：磨坊物流与采集的物料队列',
    factoryWidth: '厂房宽度 80 m',
    factoryDepth: '厂房进深 100 m',
    legendPaths: '实线：已渲染管道。虚线：建模路径。',
    legendColours: '琥珀色/青色：叉车环线。绿色：受保护通道。',
    queueSnapshot: '物料时钟 {clock} s 时的队列快照。坐标单位为米。',
    legendMachines: 'S：筒仓。M：磨辊机。SF：平筛（+{heights} m）。P：包装线。%：缓冲占用。',
  },
  'pt-BR': {
    flowTitle: (p: FlowParams) =>
      `${p.key}: ${p.load} kg em trânsito; ${p.rate} kg/min nominais; trajeto ${PT_PROVENANCE[p.provenance] ?? p.provenance}, ${p.seconds} s`,
    machineTitle: '{id} a +{height} m; {input} kg de entrada / {output} kg de saída',
    loopTitle: (p: LoopParams) =>
      `Circuito da empilhadeira de ${PT_DOCK[p.dock] ?? p.dock}, corredor de folga completo de ${p.width} m verificado`,
    shippingStaging: '50 posições de palete',
    receivingStaging: 'Paletes de retorno',
    ariaLabel: '{title}: plano logístico cotado do moinho',
    svgTitle: '{title}: logística do moinho e filas de material capturadas',
    factoryWidth: '80 m de largura da fábrica',
    factoryDepth: '100 m de profundidade da fábrica',
    legendPaths: 'Contínuo: tubulações renderizadas. Tracejado: trajetos modelados.',
    legendColours: 'Âmbar/ciano: circuitos das empilhadeiras. Verde: acesso protegido.',
    queueSnapshot: 'Instantâneo das filas no relógio de material {clock} s. Coordenadas em metros.',
    legendMachines:
      'S: silo. M: moinho de rolos. SF: plansifter (+{heights} m). P: ensacadeira. %: ocupação.',
  },
});
