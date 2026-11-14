import { defineMessages } from '../../i18n';

/**
 * The on-device operator's session record. Queue names stay in English: they
 * are the frozen rubric's options.
 */
export const onDeviceOperatorRecordMessages = defineMessages({
  en: {
    heading: 'On-device AI record',
    summary: '{handled} handled · {left} left for you',
    minute: 'min {minute}',
    noRoute: 'No route',
    handled: 'Acknowledged and mitigated',
    misrouted: 'Acknowledged; belongs with {expected}',
    heldBack: 'Left raised',
    unrouted: 'Left raised',
    refused: 'Left raised',
    stoodDown: 'Held at a safety boundary',
    peopleHandled: 'No one called in.',
    peopleLeft: 'Left for you; no one asked.',
  },
  zh: {
    heading: '端侧 AI 记录',
    summary: '已处理 {handled} 项 · 留给你 {left} 项',
    minute: '第 {minute} 分钟',
    noRoute: '无路由',
    handled: '已确认并缓解',
    misrouted: '已确认；应归入 {expected}',
    heldBack: '保持已触发',
    unrouted: '保持已触发',
    refused: '保持已触发',
    stoodDown: '因安全边界停手',
    peopleHandled: '未呼叫任何人。',
    peopleLeft: '留给你处理；未请求任何人。',
  },
  'pt-BR': {
    heading: 'Registro da IA no dispositivo',
    summary: '{handled} tratadas · {left} deixadas para você',
    minute: 'min {minute}',
    noRoute: 'Sem encaminhamento',
    handled: 'Reconhecida e mitigada',
    misrouted: 'Reconhecida; pertence a {expected}',
    heldBack: 'Mantida em aberto',
    unrouted: 'Mantida em aberto',
    refused: 'Mantida em aberto',
    stoodDown: 'Retida em um limite de segurança',
    peopleHandled: 'Ninguém foi chamado.',
    peopleLeft: 'Deixada para você; ninguém foi solicitado.',
  },
});
