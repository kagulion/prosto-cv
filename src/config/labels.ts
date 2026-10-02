import { DEFAULT_LABELS } from './defaults';
import type { Cv } from './schema';
import { mapSectionKeys, type LabelKey } from './sections';

export type ResolvedLabels = {
  readonly sections: Readonly<Record<LabelKey, { readonly title: string; readonly nav: string }>>;
  readonly pdfButton: string;
};

/**
 * Тексты интерфейса для страницы: конфиг поверх русских значений по умолчанию.
 * Имя для меню: `nav` из конфига, затем `title` из конфига, затем `nav` и `title` по умолчанию.
 */
export const resolveLabels = (cv: Cv): ResolvedLabels => ({
  sections: mapSectionKeys((key) => {
    const custom = cv.labels?.sections?.[key];
    const fallback = DEFAULT_LABELS.sections[key];
    return {
      title: custom?.title ?? fallback.title,
      nav: custom?.nav ?? custom?.title ?? fallback.nav ?? fallback.title
    };
  }),
  pdfButton: cv.labels?.pdfButton ?? DEFAULT_LABELS.pdfButton
});
