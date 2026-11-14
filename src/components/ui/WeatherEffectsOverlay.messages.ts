import { defineMessages } from '../../i18n';

type WeatherType = 'storm' | 'rain' | 'wind' | 'snow' | 'clear';
type WeatherSeverity = 'low' | 'medium' | 'high';

const PT_WARNINGS: Record<WeatherType, string> = {
  storm: 'Alerta de tempestade',
  rain: 'Alerta de chuva',
  wind: 'Alerta de vento',
  snow: 'Alerta de neve',
  clear: 'Alerta climático',
};

const PT_SEVERITIES: Record<WeatherSeverity, string> = {
  low: 'baixa',
  medium: 'média',
  high: 'alta',
};

const ZH_WARNINGS: Record<WeatherType, string> = {
  storm: '风暴警报',
  rain: '降雨警报',
  wind: '大风警报',
  snow: '降雪警报',
  clear: '天气警报',
};

const ZH_SEVERITIES: Record<WeatherSeverity, string> = {
  low: '低',
  medium: '中',
  high: '高',
};

/** English shows the raw enum values, as before; pt-BR names them. */
export const weatherEffectsOverlayMessages = defineMessages({
  en: {
    warning: (p: { type: WeatherType }) => `${p.type} Warning`,
    severity: (p: { severity: WeatherSeverity }) => `Severity: ${p.severity}`,
  },
  zh: {
    warning: (p: { type: WeatherType }) => ZH_WARNINGS[p.type] ?? `${p.type} 警报`,
    severity: (p: { severity: WeatherSeverity }) =>
      `严重程度：${ZH_SEVERITIES[p.severity] ?? p.severity}`,
  },
  'pt-BR': {
    warning: (p: { type: WeatherType }) => PT_WARNINGS[p.type] ?? `Alerta: ${p.type}`,
    severity: (p: { severity: WeatherSeverity }) =>
      `Gravidade: ${PT_SEVERITIES[p.severity] ?? p.severity}`,
  },
});
