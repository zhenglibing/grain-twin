import { defineMessages, formatFixed } from '../../i18n';

export const vclDiffPanelMessages = defineMessages({
  en: {
    clipboard: 'Previous:\n{previous}\n\nCurrent:\n{current}',
    title: 'VCP Diff',
    changeCount: (p: { count: number }) =>
      `${formatFixed(p.count, 0, 'en')} ${p.count === 1 ? 'change' : 'changes'}`,
    copied: 'Copied VCP diff to clipboard',
    copyFailed: 'Failed to copy VCP diff to clipboard',
    copy: 'Copy VCP diff to clipboard',
    previous: 'Previous',
    current: 'Current',
    waiting: 'Waiting for VCP change...',
    noVcpYet: 'No VCP yet',
  },
  zh: {
    clipboard: '上一次：\n{previous}\n\n当前：\n{current}',
    title: 'VCP 差异',
    changeCount: (p: { count: number }) => `${formatFixed(p.count, 0, 'zh')} 处变更`,
    copied: '已将 VCP 差异复制到剪贴板',
    copyFailed: '复制 VCP 差异到剪贴板失败',
    copy: '复制 VCP 差异到剪贴板',
    previous: '上一次',
    current: '当前',
    waiting: '等待 VCP 变更……',
    noVcpYet: '尚无 VCP',
  },
  'pt-BR': {
    clipboard: 'Anterior:\n{previous}\n\nAtual:\n{current}',
    title: 'Diferenças do VCP',
    changeCount: (p: { count: number }) =>
      `${formatFixed(p.count, 0, 'pt-BR')} ${p.count === 1 ? 'mudança' : 'mudanças'}`,
    copied: 'Diferenças do VCP copiadas para a área de transferência',
    copyFailed: 'Falha ao copiar as diferenças do VCP para a área de transferência',
    copy: 'Copiar as diferenças do VCP para a área de transferência',
    previous: 'Anterior',
    current: 'Atual',
    waiting: 'Aguardando mudança no VCP...',
    noVcpYet: 'Ainda sem VCP',
  },
});
