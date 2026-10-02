import type { Cv } from '../config';

export const CONTACT_ORDER = [
  'phone',
  'email',
  'telegram',
  'github',
  'linkedin',
  'location'
] as const;

export type ContactKind = (typeof CONTACT_ORDER)[number];

/** Контакт для шапки: что показать и, если это ссылка, куда вести. У локации `href` нет. */
export type ContactItem = {
  readonly kind: ContactKind;
  readonly display: string;
  readonly href?: string;
};

/** Заполненные контакты в порядке `CONTACT_ORDER`. Отсутствующие не попадают в список. */
export const buildContactLinks = (contacts: Cv['contacts']): readonly ContactItem[] =>
  CONTACT_ORDER.flatMap((kind): readonly ContactItem[] => {
    if (kind === 'location') {
      const { location } = contacts;
      return location === undefined ? [] : [{ kind, display: location.display }];
    }
    const contact = contacts[kind];
    return contact === undefined ? [] : [{ kind, display: contact.display, href: contact.href }];
  });
