import { defineMessages } from '../i18n';

/* Workplace roles and tasks are store values compared in logic. English renders
   them verbatim; pt-BR and zh map the known values and fall back to the raw
   value. */
const pick = (table: Record<string, string>, value: string) => table[value] ?? value;

const PT_ROLE: Record<string, string> = {
  Packing: 'Ensaque',
  Quality: 'Qualidade',
  Maintenance: 'Manutenção',
  Coordinator: 'Coordenação',
};
const PT_TASK: Record<string, string> = {
  Packing: 'Ensaque',
  'Pallet checks': 'Conferência de paletes',
  'Quality release': 'Liberação de qualidade',
  Sampling: 'Amostragem',
  'Maintenance planning': 'Planejamento da manutenção',
  Coordination: 'Coordenação',
};

/** zh mirrors the WorkplaceLab enum anchors (批次④钉词). */
const ZH_ROLE: Record<string, string> = {
  Packing: '包装',
  Quality: '质量',
  Maintenance: '维护',
  Coordinator: '协调',
};
const ZH_TASK: Record<string, string> = {
  Packing: '包装',
  'Pallet checks': '托盘检查',
  'Quality release': '质量放行',
  Sampling: '取样',
  'Maintenance planning': '维护计划',
  Coordination: '协调',
};

/** Floating agreement label over a resident; route tasks stay diagnostic English. */
export const communityAgreementMessages = defineMessages({
  en: {
    role: (p: { value: string }) => p.value,
    task: (p: { value: string }) => p.value,
    awaitingAssignment: 'Awaiting a qualified assignment',
    protectedRecovery: 'Protected recovery',
    protectedRest: 'Protected rest',
    voluntaryCover: 'Voluntary cover',
    paidBriefing: 'Paid handoff briefing',
    agreed: 'Agreed: {task}',
  },
  zh: {
    role: (p: { value: string }) => pick(ZH_ROLE, p.value),
    task: (p: { value: string }) => pick(ZH_TASK, p.value),
    awaitingAssignment: '等待合格的任务指派',
    protectedRecovery: '受保护补休',
    protectedRest: '受保护休息',
    voluntaryCover: '自愿顶岗',
    paidBriefing: '带薪交接简报',
    agreed: '已约定：{task}',
  },
  'pt-BR': {
    role: (p: { value: string }) => pick(PT_ROLE, p.value),
    task: (p: { value: string }) => pick(PT_TASK, p.value),
    awaitingAssignment: 'Aguardando uma atribuição qualificada',
    protectedRecovery: 'Recuperação protegida',
    protectedRest: 'Descanso protegido',
    voluntaryCover: 'Cobertura voluntária',
    paidBriefing: 'Briefing remunerado de passagem de função',
    agreed: 'Acordado: {task}',
  },
});
