import { defineMessages } from '../i18n';

/**
 * Adapter warnings, connection-test results and cache sizes shown in the AI
 * settings. maxBufferSize / maxStorageBuffer are WebGPU limit names and stay
 * as written; the prompts sent to the local model are not copy.
 */
export const webgpuClientMessages = defineMessages({
  en: {
    noAdapter: 'No WebGPU adapter available (GPU may be blocklisted or disabled).',
    smallMemory:
      'This GPU reports a small memory budget (maxBufferSize {buffer}MB, maxStorageBuffer {storage}MB). {model} needs about {vram} GB and may fail to load or stutter the 3D scene. A smaller model or a cloud BYOK model may work better.',
    probeFailed: 'WebGPU adapter probe failed.',
    modelNotLoaded: 'Model not loaded',
    modelVerified: 'Local model verified',
    responseReceived: 'Connected (response received)',
    noResponse: 'No response',
    unknownError: 'Unknown error',
    sizeGb: '{size} GB',
    sizeMb: '{size} MB',
  },
  zh: {
    noAdapter: '无可用 WebGPU 适配器（GPU 可能已被列入黑名单或已停用）。',
    smallMemory:
      '此 GPU 报告的内存预算偏小（maxBufferSize {buffer} MB、maxStorageBuffer {storage} MB）。{model} 大约需要 {vram} GB，可能加载失败或使 3D 场景卡顿。较小的模型或需要自备密钥的云端模型可能更合适。',
    probeFailed: 'WebGPU 适配器探测失败。',
    modelNotLoaded: '模型未加载',
    modelVerified: '本地模型已验证',
    responseReceived: '已连接（已收到响应）',
    noResponse: '无响应',
    unknownError: '未知错误',
    sizeGb: '{size} GB',
    sizeMb: '{size} MB',
  },
  'pt-BR': {
    noAdapter: 'Nenhum adaptador WebGPU disponível (a GPU pode estar bloqueada ou desativada).',
    smallMemory:
      'Esta GPU informa pouca memória disponível (maxBufferSize {buffer} MB, maxStorageBuffer {storage} MB). O {model} precisa de cerca de {vram} GB e pode não carregar ou deixar a cena 3D com engasgos. Um modelo menor ou um modelo BYOK na nuvem pode funcionar melhor.',
    probeFailed: 'A verificação do adaptador WebGPU falhou.',
    modelNotLoaded: 'Modelo não carregado',
    modelVerified: 'Modelo local verificado',
    responseReceived: 'Conectado (resposta recebida)',
    noResponse: 'Sem resposta',
    unknownError: 'Erro desconhecido',
    sizeGb: '{size} GB',
    sizeMb: '{size} MB',
  },
});
