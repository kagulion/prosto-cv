import { z } from 'astro/zod';
import { optionalLink, optionalLocation } from './contacts';
import {
  filled,
  list,
  optionalText,
  optionalUrl,
  required,
  strictObject,
  stringList,
  text
} from './fields';
import { mapSectionKeys, type SectionKey } from './sections';

const contacts = strictObject({
  phone: optionalLink('phone'),
  email: optionalLink('email'),
  telegram: optionalLink('telegram'),
  github: optionalLink('github'),
  linkedin: optionalLink('linkedin'),
  location: optionalLocation
}).refine(
  ({ phone, email, telegram, github, linkedin }) =>
    [phone, email, telegram, github, linkedin].some((contact) => contact !== undefined),
  { error: 'нужен хотя бы один контакт: phone, email, telegram, github или linkedin' }
);

/** Пункт публичного следа: строка или `{ text, url? }`, на выходе всегда `{ text, url? }`. */
const linkItem = z
  .union(
    [filled, strictObject({ text: required, url: optionalUrl })],
    'ожидалась строка или объект { text, url }'
  )
  .transform((item) => (typeof item === 'string' ? { text: item } : item));

const linkList = list(linkItem);

/** Год, строка или число, на выходе строка. */
const year = z
  .union([z.number().int(), text], 'ожидалась строка или число')
  .transform(String)
  .optional();

// `satisfies` не даёт забыть секцию из `SECTION_ORDER` и добавить лишнюю.
const sectionSchemas = {
  about: optionalText,
  experience: list(
    strictObject({ position: required, company: required, period: required, bullets: stringList })
  ),
  projects: list(
    strictObject({
      name: required,
      description: optionalText,
      tech: stringList,
      url: optionalUrl,
      tag: optionalText
    })
  ),
  skills: stringList,
  education: list(
    strictObject({
      institution: required,
      degree: optionalText,
      field: optionalText,
      period: optionalText
    })
  ),
  certificates: list(strictObject({ title: required, issuer: optionalText, year })),
  achievements: linkList,
  publications: linkList,
  openSource: linkList,
  languages: list(strictObject({ name: required, level: optionalText, note: optionalText })),
  tools: stringList,
  volunteering: optionalText,
  interests: optionalText,
  recommendations: list(
    strictObject({ quote: required, author: required, role: optionalText, company: optionalText })
  ),
  availability: strictObject({
    format: optionalText,
    employment: optionalText,
    salary: optionalText,
    start: optionalText
  }).optional()
} satisfies Record<SectionKey, z.ZodType>;

const sectionLabel = strictObject({ title: optionalText, nav: optionalText }).optional();

const pdfButtonMessage = 'ожидалась строка или false';

/** Подпись кнопки печати или `false`, чтобы убрать кнопку. `true` и числа это ошибка. */
const pdfButton = z
  .union(
    [
      text,
      z
        .boolean()
        .refine((value) => !value, pdfButtonMessage)
        .transform(() => false as const)
    ],
    pdfButtonMessage
  )
  .optional();

const labels = strictObject({
  sections: strictObject(mapSectionKeys(() => sectionLabel)).optional(),
  pdfButton,
  skipLink: optionalText
}).optional();

/** Фото в шапке: файл из `src/assets` и обязательное описание для читалки с экрана. */
const photo = strictObject({ src: required, alt: required }).optional();

const footer = strictObject({ show: z.boolean().default(true), credit: optionalText }).default({
  show: true
});

export const cvSchema = strictObject({
  lang: text
    .regex(/^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/, 'ожидался код языка, например ru или en-US')
    .default('ru'),
  name: required,
  position: required,
  photo,
  contacts,
  ...sectionSchemas,
  labels,
  footer
});

/** Что пишет автор в `cv.config.ts`. */
export type CvInput = z.input<typeof cvSchema>;

/** Что получает страница: проверенный и очищенный конфиг. */
export type Cv = z.output<typeof cvSchema>;
