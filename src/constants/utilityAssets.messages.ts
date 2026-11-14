import { defineMessages } from '../i18n';

/**
 * Display names for what each utility vessel holds. The vessel labels
 * (FUEL OIL 01, LPG 01...) are painted designations and SCADA tag names, so
 * they are not here; neither is the canonical English `contents` field, which
 * also feeds the English SCADA tag descriptions.
 */
export const utilityAssetsMessages = defineMessages({
  en: {
    lowSulphurFuelOil: 'Low sulphur fuel oil',
    foodGradeProcessOil: 'Food-grade process oil',
    standbyGeneratorDiesel: 'Standby generator diesel',
    liquefiedPetroleumGas: 'Liquefied petroleum gas',
  },
  zh: {
    lowSulphurFuelOil: '低硫燃料油',
    foodGradeProcessOil: '食品级工艺用油',
    standbyGeneratorDiesel: '备用发电机柴油',
    liquefiedPetroleumGas: '液化石油气',
  },
  'pt-BR': {
    lowSulphurFuelOil: 'Óleo combustível com baixo teor de enxofre',
    foodGradeProcessOil: 'Óleo de processo de grau alimentício',
    standbyGeneratorDiesel: 'Diesel do gerador de reserva',
    liquefiedPetroleumGas: 'Gás liquefeito de petróleo',
  },
});
