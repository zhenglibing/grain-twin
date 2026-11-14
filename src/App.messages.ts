import { defineMessages } from './i18n';

export const appMessages = defineMessages({
  en: {
    startupStatus: 'Bringing operations online',
    viewStoppedTitle: '3D view stopped',
    viewStoppedBody: 'The 3D view hit an unexpected problem. Reloading usually restores it.',
    reloadApplication: 'Reload Application',
    skipToMain: 'Skip to main content',
    skipToNavigation: 'Skip to navigation',
    keyboardNoteLabel: '3D visualization keyboard controls',
    keyboardNote:
      'The 3D factory visualization is interactive. Use W, A, S, D or the arrow keys to move, Q and E to move down and up, and Shift to move faster. Press V to toggle first-person view mode. Press 1-7 to switch camera presets. Keyboard movement pauses while an interface control has focus. Press Space to toggle the forklift emergency stop, and the question mark key for the full list of shortcuts.',
    operationsControls: 'Operations controls',
    mainLabel: '3D factory visualization',
    pageHeading: 'MillOS Industrial Factory Simulation',
  },
  zh: {
    startupStatus: '正在启动运行系统',
    viewStoppedTitle: '3D 视图已停止',
    viewStoppedBody: '3D 视图遇到意外问题。重新加载通常可以恢复。',
    reloadApplication: '重新加载应用',
    skipToMain: '跳到主内容',
    skipToNavigation: '跳到导航',
    keyboardNoteLabel: '3D 可视化键盘控制',
    keyboardNote:
      '3D 工厂可视化是可交互的。使用 W、A、S、D 或方向键移动，Q 和 E 向下与向上移动，Shift 加速移动。按 V 切换第一人称视角模式。按 1-7 切换相机预设。当界面控件获得焦点时，键盘移动会暂停。按空格键切换叉车紧急停机，按问号键查看完整的快捷键列表。',
    operationsControls: '运行控制',
    mainLabel: '3D 工厂可视化',
    pageHeading: 'MillOS 工业工厂模拟',
  },
  'pt-BR': {
    startupStatus: 'Iniciando as operações',
    viewStoppedTitle: 'A visualização 3D parou',
    viewStoppedBody:
      'A visualização 3D encontrou um problema inesperado. Recarregar a página normalmente resolve.',
    reloadApplication: 'Recarregar aplicativo',
    skipToMain: 'Pular para o conteúdo principal',
    skipToNavigation: 'Pular para a navegação',
    keyboardNoteLabel: 'Controles de teclado da visualização 3D',
    keyboardNote:
      'A visualização 3D da fábrica é interativa. Use W, A, S, D ou as setas para se mover, Q e E para descer e subir, e Shift para se mover mais rápido. Pressione V para alternar a visão em primeira pessoa. Pressione 1-7 para trocar as posições predefinidas da câmera. O movimento pelo teclado pausa enquanto um controle da interface estiver em foco. Pressione Espaço para acionar ou liberar a parada de emergência das empilhadeiras e a tecla de ponto de interrogação para ver a lista completa de atalhos.',
    operationsControls: 'Painel de operações',
    mainLabel: 'Visualização 3D da fábrica',
    pageHeading: 'Simulação de fábrica industrial MillOS',
  },
});
