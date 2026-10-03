import type { Cv } from '../config';
import { loadConfig, parseConfig } from '../config';
import { minimalCase, worstCase } from './worst-case';

export type DataMode = 'demo' | 'worst' | 'minimal';

export const DATA_MODES: readonly { readonly mode: DataMode; readonly label: string }[] = [
  { mode: 'demo', label: 'Demo data' },
  { mode: 'worst', label: 'Worst case' },
  { mode: 'minimal', label: 'Minimal' }
];

/** Режим из `?data=`, всё незнакомое это demo. */
export const readMode = (param: string | null): DataMode =>
  DATA_MODES.find(({ mode }) => mode === param)?.mode ?? 'demo';

/** Dev-only: подменяет конфиг на границе загрузки, компоненты о подмене не знают. */
export const pickConfig = (mode: DataMode): Cv =>
  mode === 'worst'
    ? parseConfig(worstCase)
    : mode === 'minimal'
      ? parseConfig(minimalCase)
      : loadConfig();
