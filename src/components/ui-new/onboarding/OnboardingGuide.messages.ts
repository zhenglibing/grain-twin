import { defineMessages } from '../../../i18n';

export const onboardingGuideMessages = defineMessages({
  en: {
    regionLabel: 'Getting started, step {step} of {count}',
    eyebrow: 'Getting started {step}/{count}',
    close: 'Close getting started for this session',
    cameraControls: 'Camera controls',
    cameraHelp:
      'Drag to orbit; scroll or pinch to zoom. Use W A S D to move and Q or E to change height.',
    back: 'Back',
    skip: 'Skip tour',
    next: 'Next',
    start: 'Start operating',
  },
  zh: {
    regionLabel: '新手引导，第 {step} 步，共 {count} 步',
    eyebrow: '新手引导 {step}/{count}',
    close: '在本次会话中关闭新手引导',
    cameraControls: '相机控制',
    cameraHelp: '拖动可环绕视角，滚轮或捏合可缩放。使用 W A S D 移动，按 Q 或 E 调整高度。',
    back: '上一步',
    skip: '跳过引导',
    next: '下一步',
    start: '开始运行',
  },
  'pt-BR': {
    regionLabel: 'Primeiros passos, etapa {step} de {count}',
    eyebrow: 'Primeiros passos {step}/{count}',
    close: 'Fechar os primeiros passos nesta sessão',
    cameraControls: 'Controles da câmera',
    cameraHelp:
      'Arraste para girar; role ou faça pinça para aproximar. Use W A S D para se mover e Q ou E para mudar a altura.',
    back: 'Voltar',
    skip: 'Pular tour',
    next: 'Avançar',
    start: 'Começar a operar',
  },
});
