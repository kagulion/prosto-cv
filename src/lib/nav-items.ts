import type { ResolvedLabels } from '../config';
import { CONTACTS_ID } from './page-sections';

/** Пункт меню: на какой якорь ведёт и что написано. */
export type NavItem = {
  readonly id: string;
  readonly label: string;
};

/**
 * Пункты меню из тех же секций, что рисует страница, и «Контакты» последним.
 * Секций нет, значит меню нет: возвращает пустой список.
 */
export const buildNavItems = (
  sections: readonly { readonly id: string; readonly nav: string }[],
  labels: ResolvedLabels
): readonly NavItem[] =>
  sections.length === 0
    ? []
    : [
        ...sections.map(({ id, nav }) => ({ id, label: nav })),
        { id: CONTACTS_ID, label: labels.sections.contacts.nav }
      ];
