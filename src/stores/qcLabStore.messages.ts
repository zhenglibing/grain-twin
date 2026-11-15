import { defineMessages } from '../i18n';

export const qcLabStoreMessages = defineMessages({
  en: {
    auditNoteReleased: 'Grade {grade}: material released for dispatch.',
    auditNoteHeld: 'Grade {grade}: material held for investigation.',
    testReason: 'Test {id}: {grade}',
    retestReason: 'Retest {id}: {grade}',
    contaminationNoteDefault: 'Foreign material investigation opened',
    recallReason: 'Material recalled under {alertId}',
    clearedReason: 'Investigation {alertId} cleared material',
  },
  zh: {
    auditNoteReleased: '等级 {grade}：物料已放行发运。',
    auditNoteHeld: '等级 {grade}：物料因调查被扣留。',
    testReason: '检测 {id}：{grade}',
    retestReason: '复检 {id}：{grade}',
    contaminationNoteDefault: '已启动异物调查',
    recallReason: '物料因 {alertId} 被召回',
    clearedReason: '调查 {alertId} 已放行物料',
  },
  'pt-BR': {
    auditNoteReleased: 'Classe {grade}: material liberado para expedição.',
    auditNoteHeld: 'Classe {grade}: material retido para investigação.',
    testReason: 'Teste {id}: {grade}',
    retestReason: 'Reteste {id}: {grade}',
    contaminationNoteDefault: 'Investigação de material estranho aberta',
    recallReason: 'Material recolhido conforme {alertId}',
    clearedReason: 'A investigação {alertId} liberou o material',
  },
});
