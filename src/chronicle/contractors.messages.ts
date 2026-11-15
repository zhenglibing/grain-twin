import { defineMessages, translate, type MessageParams } from '../i18n';

const catalog = defineMessages({
  en: {
    m0: 'Thrifty',
    m1: 'Diligent',
    m2: 'Careful',
    m3: 'Expeditious',
    m4: 'Wasteful',
    m5: 'Neglectful',
    m6: 'Reckless',
    m7: 'Passive',
    m8: '{name}: install cost {sign}{magnitude}%',
    m9: '{name}: plan effect {sign}{magnitude}%',
    m10: '{name}: snag chance {sign}{magnitude}%',
    m11: '{name}: install time {sign}{magnitude}%',
  },
  zh: {
    m0: '节俭',
    m1: '勤勉',
    m2: '细心',
    m3: '高效',
    m4: '浪费',
    m5: '疏忽',
    m6: '鲁莽',
    m7: '拖沓',
    m8: '{name}：安装成本 {sign}{magnitude}%',
    m9: '{name}：方案效果 {sign}{magnitude}%',
    m10: '{name}：遇阻概率 {sign}{magnitude}%',
    m11: '{name}：安装工期 {sign}{magnitude}%',
  },
  'pt-BR': {
    m0: 'Econômica',
    m1: 'Diligente',
    m2: 'Cuidadosa',
    m3: 'Ágil',
    m4: 'Desperdiçadora',
    m5: 'Negligente',
    m6: 'Imprudente',
    m7: 'Lenta',
    m8: '{name}: custo de instalação {sign}{magnitude}%',
    m9: '{name}: efeito do plano {sign}{magnitude}%',
    m10: '{name}: chance de contratempo {sign}{magnitude}%',
    m11: '{name}: prazo de instalação {sign}{magnitude}%',
  },
});
const keys = new Map<string, keyof typeof catalog.en>(
  Object.entries(catalog.en).map(([key, value]) => [value, key as keyof typeof catalog.en])
);
/** Resolve authored copy when read; canonical definitions remain English. */
export function copy(text: string, params?: MessageParams): string {
  const key = keys.get(text);
  return key === undefined ? text : translate(catalog, key, params);
}
