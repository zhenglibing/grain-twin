import { defineMessages } from '../i18n';

export const aiConfigStoreMessages = defineMessages({
  en: {
    pricingOnDevice: 'On-device',
    pricingChatGPTPlan: 'ChatGPT plan',
    localCompanionUnavailable: 'Local companion unavailable',
    checkingWebGPU: 'Checking WebGPU compatibility...',
    webgpuUnavailable:
      'WebGPU is unavailable in this browser. Use a WebGPU-capable browser or a cloud BYOK model.',
    initializingDownload: 'Initializing model download...',
    localCoreOnline: 'Local neural core online',
    modelLoadFailed: 'The model could not be loaded. Try again or use a cloud BYOK model.',
    modelLostReloading: 'The GPU dropped the local model. Reloading it from this device.',
    modelLostAgain:
      'The GPU dropped the local model again. Load it again when the device has memory to spare.',
    connectionFailed: 'Connection failed.',
    /** Session cost in US dollars; amount is pre-formatted with formatFixed. */
    sessionCost: (p: { amount: string }) => `$${p.amount}`,
  },
  zh: {
    pricingOnDevice: '端侧',
    pricingChatGPTPlan: 'ChatGPT 计划',
    localCompanionUnavailable: '本地伴侣程序不可用',
    checkingWebGPU: '正在检查 WebGPU 兼容性……',
    webgpuUnavailable:
      '此浏览器不支持 WebGPU。请使用支持 WebGPU 的浏览器，或改用需要自备密钥的云端模型。',
    initializingDownload: '正在初始化模型下载……',
    localCoreOnline: '本地神经核心在线',
    modelLoadFailed: '模型无法加载。请重试，或改用需要自备密钥的云端模型。',
    modelLostReloading: 'GPU 已丢弃本地模型，正在从本设备重新加载。',
    modelLostAgain: 'GPU 再次丢弃了本地模型。请在设备有可用内存时重新加载。',
    connectionFailed: '连接失败。',
    /** Session cost in US dollars; amount is pre-formatted with formatFixed. */
    sessionCost: (p: { amount: string }) => `USD ${p.amount}`,
  },
  'pt-BR': {
    pricingOnDevice: 'No dispositivo',
    pricingChatGPTPlan: 'Plano ChatGPT',
    localCompanionUnavailable: 'App auxiliar local indisponível',
    checkingWebGPU: 'Verificando a compatibilidade com WebGPU...',
    webgpuUnavailable:
      'O WebGPU não está disponível neste navegador. Use um navegador compatível com WebGPU ou um modelo em nuvem BYOK.',
    initializingDownload: 'Iniciando o download do modelo...',
    localCoreOnline: 'Núcleo neural local on-line',
    modelLoadFailed:
      'Não foi possível carregar o modelo. Tente novamente ou use um modelo em nuvem BYOK.',
    modelLostReloading: 'A GPU descartou o modelo local. Recarregando-o deste dispositivo.',
    modelLostAgain:
      'A GPU descartou o modelo local de novo. Carregue-o novamente quando o dispositivo tiver memória livre.',
    connectionFailed: 'Falha na conexão.',
    sessionCost: (p: { amount: string }) => `US$ ${p.amount}`,
  },
});
