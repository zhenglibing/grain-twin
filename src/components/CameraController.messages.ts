import { defineMessages } from '../i18n';

/**
 * CAMERA_PRESETS keeps its English `name` and `description`: importers find a
 * preset by name ('Packing', guide.view) and key menu rows by it. The words are
 * translated where they are shown, from that English id.
 */
const PT_PRESET_NAMES: Record<string, string> = {
  Overview: 'Visão geral',
  Silos: 'Silos',
  Milling: 'Moagem',
  Sifting: 'Peneiramento',
  Packing: 'Ensaque',
  Shipping: 'Expedição',
  Receiving: 'Recebimento',
};

const PT_PRESET_DESCRIPTIONS: Record<string, string> = {
  'Whole mill and logistics site': 'Todo o moinho e a área de logística',
  'Raw material storage (Zone 1)': 'Armazenagem de matéria-prima (Zona 1)',
  'Roller mills (Zone 2)': 'Moinhos de rolos (Zona 2)',
  'Plansifters (Zone 3)': 'Plansifters (Zona 3)',
  'Packaging lines (Zone 4)': 'Linhas de ensaque (Zona 4)',
  'Shipping dock (front)': 'Doca de expedição (frente)',
  'Receiving dock (back)': 'Doca de recebimento (fundos)',
};

const ZH_PRESET_NAMES: Record<string, string> = {
  Overview: '概览',
  Silos: '筒仓',
  Milling: '制粉',
  Sifting: '筛理',
  Packing: '包装',
  Shipping: '发运',
  Receiving: '接收',
};

const ZH_PRESET_DESCRIPTIONS: Record<string, string> = {
  'Whole mill and logistics site': '整座磨坊与物流场地',
  'Raw material storage (Zone 1)': '原料仓储（区域 1）',
  'Roller mills (Zone 2)': '磨辊机（区域 2）',
  'Plansifters (Zone 3)': '平筛（区域 3）',
  'Packaging lines (Zone 4)': '包装线（区域 4）',
  'Shipping dock (front)': '发运装卸区（前）',
  'Receiving dock (back)': '接收装卸区（后）',
};

export const cameraControllerMessages = defineMessages({
  en: {
    cameraView: 'Camera view',
    presetName: (p: { name: string }) => p.name,
    presetDescription: (p: { description: string }) => p.description,
  },
  zh: {
    cameraView: '相机视图',
    presetName: (p: { name: string }) => ZH_PRESET_NAMES[p.name] ?? p.name,
    presetDescription: (p: { description: string }) =>
      ZH_PRESET_DESCRIPTIONS[p.description] ?? p.description,
  },
  'pt-BR': {
    cameraView: 'Visão da câmera',
    presetName: (p: { name: string }) => PT_PRESET_NAMES[p.name] ?? p.name,
    presetDescription: (p: { description: string }) =>
      PT_PRESET_DESCRIPTIONS[p.description] ?? p.description,
  },
});
