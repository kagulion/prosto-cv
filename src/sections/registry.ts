import type { SectionKey } from '../config';
import About from './About.astro';

export type SectionComponent = typeof About;

/**
 * Реестр компонентов секций: запись на каждый ключ `SECTION_ORDER`.
 * `null` значит «секция ещё не построена», на странице её нет. Новая секция заменяет свой `null`.
 */
export const SECTION_REGISTRY: Readonly<Record<SectionKey, SectionComponent | null>> = {
  about: About,
  experience: null,
  projects: null,
  skills: null,
  education: null,
  certificates: null,
  achievements: null,
  publications: null,
  openSource: null,
  languages: null,
  tools: null,
  volunteering: null,
  interests: null,
  recommendations: null,
  availability: null
};
