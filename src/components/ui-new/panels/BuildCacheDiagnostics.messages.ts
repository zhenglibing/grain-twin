import { defineMessages } from '../../../i18n';

export const buildCacheDiagnosticsMessages = defineMessages({
  en: {
    heading: 'Build and cache',
    applicationBuild: 'Application build',
    workerBuild: 'Worker build',
    cacheEntries: 'Cache entries',
    connection: 'Connection',
    reading: 'Reading',
    notControlling: 'Not controlling',
    offline: 'Offline',
    online: 'Online',

    noteUnsupported:
      'Service workers are unavailable in this browser. Network loading remains active.',
    noteInactive:
      'The service worker is inactive in this session. This is expected during normal local development.',
    noteMismatch:
      'The page and worker builds differ. Activate the waiting build, or reload after the update completes.',
    noteReady: 'A newer build is ready to activate.',
    cacheGroups: 'Cache groups ({count})',

    refreshStatus: 'Refresh status',
    checkForUpdate: 'Check for update',
    clearThisCache: 'Clear this cache',
    activateUpdate: 'Activate update',

    statusReading: 'Reading build and cache status.',
    statusCurrent: 'Build and cache status is current.',
    statusChecking: 'Looking for a newer build.',
    statusUpToDate: 'Up to date.',
    statusNoWorker: 'No service worker registered.',
    statusClearing: 'Clearing cached assets.',
    statusCleared: 'Cache cleared.',
    statusClearFailed: 'Could not clear the cache.',
    statusActivating: 'Activating the waiting build.',
    statusActivateFailed: 'The waiting build could not be activated.',
    statusRefreshing: 'Refreshing build and cache status.',
    statusWaiting: 'A newer build is waiting.',
  },
  zh: {
    heading: '版本与缓存',
    applicationBuild: '应用版本',
    workerBuild: 'Service Worker 版本',
    cacheEntries: '缓存条目',
    connection: '连接',
    reading: '读取中',
    notControlling: '未接管页面',
    offline: '离线',
    online: '在线',

    noteUnsupported: '此浏览器不支持 Service Worker。资源将继续从网络加载。',
    noteInactive: 'Service Worker 在本次会话中未激活。正常本地开发时这是预期行为。',
    noteMismatch: '页面与 Worker 版本不一致。请激活等待中的版本，或等更新完成后重新加载。',
    noteReady: '有新版本已就绪，可激活。',
    cacheGroups: '缓存分组（{count}）',

    refreshStatus: '刷新状态',
    checkForUpdate: '检查更新',
    clearThisCache: '清除此缓存',
    activateUpdate: '激活更新',

    statusReading: '正在读取版本与缓存状态。',
    statusCurrent: '版本与缓存状态已是最新。',
    statusChecking: '正在查找更新的版本。',
    statusUpToDate: '已是最新。',
    statusNoWorker: '未注册 Service Worker。',
    statusClearing: '正在清除缓存的资源。',
    statusCleared: '缓存已清除。',
    statusClearFailed: '无法清除缓存。',
    statusActivating: '正在激活等待中的版本。',
    statusActivateFailed: '无法激活等待中的版本。',
    statusRefreshing: '正在刷新版本与缓存状态。',
    statusWaiting: '有更新的版本正在等待。',
  },
  'pt-BR': {
    heading: 'Versão e cache',
    applicationBuild: 'Versão do aplicativo',
    workerBuild: 'Versão do service worker',
    cacheEntries: 'Entradas no cache',
    connection: 'Conexão',
    reading: 'Lendo',
    notControlling: 'Sem controle da página',
    offline: 'Offline',
    online: 'Online',

    noteUnsupported:
      'Service workers não estão disponíveis neste navegador. O carregamento pela rede continua ativo.',
    noteInactive:
      'O service worker está inativo nesta sessão. Isso é esperado durante o desenvolvimento local normal.',
    noteMismatch:
      'As versões da página e do service worker são diferentes. Ative a versão em espera ou recarregue depois que a atualização terminar.',
    noteReady: 'Uma versão mais recente está pronta para ser ativada.',
    cacheGroups: 'Grupos de cache ({count})',

    refreshStatus: 'Atualizar status',
    checkForUpdate: 'Verificar atualização',
    clearThisCache: 'Limpar este cache',
    activateUpdate: 'Ativar atualização',

    statusReading: 'Lendo o status da versão e do cache.',
    statusCurrent: 'O status da versão e do cache está atualizado.',
    statusChecking: 'Procurando uma versão mais recente.',
    statusUpToDate: 'Tudo atualizado.',
    statusNoWorker: 'Nenhum service worker registrado.',
    statusClearing: 'Limpando os arquivos em cache.',
    statusCleared: 'Cache limpo.',
    statusClearFailed: 'Não foi possível limpar o cache.',
    statusActivating: 'Ativando a versão em espera.',
    statusActivateFailed: 'Não foi possível ativar a versão em espera.',
    statusRefreshing: 'Atualizando o status da versão e do cache.',
    statusWaiting: 'Há uma versão mais recente em espera.',
  },
});

export type BuildCacheStatusKey =
  | 'statusReading'
  | 'statusCurrent'
  | 'statusChecking'
  | 'statusUpToDate'
  | 'statusNoWorker'
  | 'statusClearing'
  | 'statusCleared'
  | 'statusClearFailed'
  | 'statusActivating'
  | 'statusActivateFailed'
  | 'statusRefreshing'
  | 'statusWaiting';
