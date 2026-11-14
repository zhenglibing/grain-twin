import { defineMessages } from '../i18n';

/**
 * Notices the on-device operator files when it handles a raised incident. Queue
 * names stay in English: they are the frozen rubric's options.
 */
export const onDeviceOperatorMessages = defineMessages({
  en: {
    noticeTitle: 'On-device AI · {queue}',
    handled: '{incident}: acknowledged and mitigated.',
    misrouted: '{incident}: acknowledged. Belongs with {expected}; left for you to mitigate.',
    heldBack: '{incident}: left raised.',
    unrouted: '{incident}: no route. Left raised.',
    refused: '{incident}: {problem}',
    commandReason: 'On-device AI routed this incident to {queue}.',
    paMessage: '{title}. {message}',
    stoodDown: '{incident}: left raised {problem}.',
    standDown_emergency: 'while the emergency stop is active',
    standDown_drill: 'during the egress verification drill',
    standDown_control: 'while control is not simulated',
    standDown_replay: 'during a replay',
  },
  zh: {
    noticeTitle: '端侧 AI · {queue}',
    handled: '{incident}：已确认并已缓解。',
    misrouted: '{incident}：已确认。应归入 {expected}；留待你缓解。',
    heldBack: '{incident}：保持已触发。',
    unrouted: '{incident}：无路由。保持已触发。',
    refused: '{incident}：{problem}',
    commandReason: '端侧 AI 已将此事件路由至 {queue}。',
    paMessage: '{title}。{message}',
    stoodDown: '{incident}：{problem}，保持已触发。',
    standDown_emergency: '紧急停机激活期间',
    standDown_drill: '疏散验证演练期间',
    standDown_control: '控制层未模拟期间',
    standDown_replay: '回放期间',
  },
  'pt-BR': {
    noticeTitle: 'IA no dispositivo · {queue}',
    handled: '{incident}: reconhecida e mitigada.',
    misrouted: '{incident}: reconhecida. Pertence a {expected}; deixada para você mitigar.',
    heldBack: '{incident}: mantida em aberto.',
    unrouted: '{incident}: sem encaminhamento. Mantida em aberto.',
    refused: '{incident}: {problem}',
    commandReason: 'A IA no dispositivo encaminhou esta ocorrência para {queue}.',
    paMessage: '{title}. {message}',
    stoodDown: '{incident}: mantida em aberto {problem}.',
    standDown_emergency: 'enquanto a parada de emergência está ativa',
    standDown_drill: 'durante o simulado de verificação das rotas de saída',
    standDown_control: 'enquanto o controle não é simulado',
    standDown_replay: 'durante uma reprodução',
  },
});
