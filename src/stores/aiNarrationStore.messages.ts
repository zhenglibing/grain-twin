import { defineMessages } from '../i18n';

/** Narration bodies. Paragraphs are separated by a blank line (parseNarrationContent). */
export const aiNarrationStoreMessages = defineMessages({
  en: {
    welcome:
      'Welcome to MillOS {version}.\n\nThis is a staffed grain-mill digital twin with autonomous logistics. The factory floor, loading yard, garage, village, farm, stream, mountains, sky, and celestial cycle form one continuous world.\n\nI coordinate process state, logistics, safety interlocks, quality genealogy, maintenance, and SCADA evidence. Open Datalinks for concise explanations of how each subsystem fits together.',
    library:
      'Datalinks explains the mill as you explore: follow waiting grain, investigate a held batch, compare useful output with running costs, and see how a completed order supplies the bakery. Optional developer references sit in a separate section.',
    extendedSession:
      'The simulation has been running for an hour. This is a useful point to review alarm history, maintenance wear, genealogy balance, and graphics performance before increasing the time scale.',
    emergencyActive:
      'A fail-safe stop is active. Production and mobile equipment remain interlocked until the recovery state is verified.',
  },
  zh: {
    welcome:
      '欢迎来到 MillOS {version}。\n\n这是一座有人值守的谷物磨坊数字孪生，配备自主物流。生产车间、装卸场院、车库、村庄、农场、溪流、群山、天空与天体循环，构成一个连续统一的世界。\n\n我负责协调过程状态、物流、安全联锁、质量谱系、维护与 SCADA 证据。打开数据链接，即可查看各子系统如何衔接的简明说明。',
    library:
      '数据链接在你探索的同时讲解这座磨坊：跟随等待中的谷物，调查一批被扣留的批次，比较有效产出与运行成本，并看看一份完成的订单如何供应面包店。可选的开发者参考资料位于单独的小节。',
    extendedSession:
      '模拟已运行一小时。在提高时间倍率之前，这是一个回顾报警历史、维护磨损、谱系账与图形性能的好时机。',
    emergencyActive: '故障保护停机生效中。生产与移动设备保持联锁，直至恢复状态通过核验。',
  },
  'pt-BR': {
    welcome:
      'Boas-vindas ao MillOS {version}.\n\nEste é um gêmeo digital de um moinho de grãos operado por pessoas, com logística autônoma. O chão de fábrica, o pátio de carregamento, a garagem, a vila, a fazenda, o riacho, as montanhas, o céu e o ciclo celeste formam um único mundo contínuo.\n\nEu coordeno o estado do processo, a logística, os intertravamentos de segurança, a genealogia de qualidade, a manutenção e as evidências do SCADA. Abra o Datalinks para explicações concisas de como cada subsistema se encaixa.',
    library:
      'O Datalinks explica o moinho enquanto você explora: acompanhe o grão em espera, investigue um lote retido, compare a produção útil com os custos de operação e veja como um pedido concluído abastece a padaria. Referências opcionais para desenvolvedores ficam em uma seção separada.',
    extendedSession:
      'A simulação está rodando há uma hora. Este é um bom momento para revisar o histórico de alarmes, o desgaste de manutenção, o balanço da genealogia e o desempenho gráfico antes de aumentar a escala de tempo.',
    emergencyActive:
      'Uma parada à prova de falhas está ativa. A produção e os equipamentos móveis continuam intertravados até que o estado de recuperação seja verificado.',
  },
});
