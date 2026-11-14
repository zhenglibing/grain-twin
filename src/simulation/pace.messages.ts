import { defineMessages } from '../i18n';

// One vocabulary for every pace control (Shift pace select, Overview and
// mobile buttons, the P key). A pace speeds the whole plant with the clock, so
// no label needs a caveat about deadlines.
export const paceMessages = defineMessages({
  en: {
    pace0: 'Paused, inspect freely',
    pace15: 'Slow, 1/2x',
    pace30: 'Standard, 1x',
    pace60: 'Fast, 2x',
    pace120: 'Fastest, 4x',
    paceCustom: 'Current custom pace',
    paceTitle:
      'The pace runs the whole plant faster or slower: clock, deadlines, production, trucks and forklifts together.',
    heldBy_player: 'Paused. Choose a pace to resume.',
    heldBy_shortcut: 'Paused with P. Press P again to resume.',
    heldBy_tour: 'Paused for the tour. It resumes when the tour closes.',
    heldBy_restore: 'Paused while your saved shift is restored.',
    heldBy_restoreFailed:
      'Paused: the saved shift could not be restored. Choose a pace to continue, or reset in Settings.',
    heldBy_workplace:
      'Paused for a cooperative workplace step. Finish it in the Bilateral Autonomy System (BAS) panel, or choose a pace.',
    heldBy_handoff:
      "Held while the team decides the handoff experiment, so the adviser's forecast stays true. A pace you choose now starts when it resumes. To resume, cancel the experiment or finish its member review in the Bilateral Autonomy System (BAS) panel.",
    heldBy_layout: 'Paused for the layout planner. Run the mill from the planner to resume.',
    heldBy_scada: 'Paused: live SCADA control is active, so the simulation clock is held.',
  },
  zh: {
    pace0: '已暂停，可自由查看',
    pace15: '慢速，1/2x',
    pace30: '标准，1x',
    pace60: '快速，2x',
    pace120: '最快，4x',
    paceCustom: '当前自定义节奏',
    paceTitle: '节奏控制整座工厂的快慢：时钟、期限、生产、卡车与叉车一起加快或减慢。',
    heldBy_player: '已暂停。选择一个节奏以继续。',
    heldBy_shortcut: '已按 P 暂停。再按一次 P 继续。',
    heldBy_tour: '因导览而暂停。导览结束后自动恢复。',
    heldBy_restore: '恢复已保存班次期间保持暂停。',
    heldBy_restoreFailed: '已暂停：无法恢复已保存的班次。请选择一个节奏继续，或在设置中重置。',
    heldBy_workplace:
      '因工作场所协作步骤而暂停。请在双边自治系统（BAS）面板完成该步骤，或选择一个节奏。',
    heldBy_handoff:
      '在团队决定交接实验期间保持暂停，以确保顾问的预测保持成立。你现在选择的节奏将在恢复后生效。要恢复运行，请取消实验，或在双边自治系统（BAS）面板完成其成员评审。',
    heldBy_layout: '因布局规划器而暂停。在规划器中运行磨坊即可恢复。',
    heldBy_scada: '已暂停：实时 SCADA 控制处于活动状态，模拟时钟保持暂停。',
  },
  'pt-BR': {
    pace0: 'Pausado, inspecione à vontade',
    pace15: 'Devagar, 1/2x',
    pace30: 'Padrão, 1x',
    pace60: 'Rápido, 2x',
    pace120: 'Mais rápido, 4x',
    paceCustom: 'Ritmo personalizado atual',
    paceTitle:
      'O ritmo acelera ou desacelera o moinho inteiro: relógio, prazos, produção, caminhões e empilhadeiras juntos.',
    heldBy_player: 'Pausado. Escolha um ritmo para continuar.',
    heldBy_shortcut: 'Pausado com P. Pressione P de novo para continuar.',
    heldBy_tour: 'Pausado para o tour. Continua quando o tour fechar.',
    heldBy_restore: 'Pausado enquanto o turno salvo é restaurado.',
    heldBy_restoreFailed:
      'Pausado: não foi possível restaurar o turno salvo. Escolha um ritmo para continuar ou reinicie em Configurações.',
    heldBy_workplace:
      'Pausado para uma etapa do trabalho cooperativo. Conclua-a no painel Sistema de Autonomia Bilateral (BAS) ou escolha um ritmo.',
    heldBy_handoff:
      'Parado enquanto a equipe decide o experimento de passagem de turno, para que a previsão do conselheiro continue válida. O ritmo que você escolher agora começa quando o relógio voltar. Para continuar, cancele o experimento ou conclua a avaliação dos cooperados no painel Sistema de Autonomia Bilateral (BAS).',
    heldBy_layout:
      'Pausado para o planejador de layout. Coloque o moinho para rodar pelo planejador para continuar.',
    heldBy_scada:
      'Pausado: o controle SCADA ao vivo está ativo, então o relógio da simulação fica parado.',
  },
});
