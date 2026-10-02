import { z } from 'astro/zod';
import { suggestKey } from './suggest';

/** Любая строка обрезается по краям. Пустое после обрезки потом убирает `pruneEmpty`. */
export const text = z.string().trim();

/** Обязательная строка поля. */
export const required = text.min(1, 'обязательное поле');

/** Пункт списка строк: пустой пункт это ошибка с индексом. */
export const filled = text.min(1, 'не может быть пустым');

export const optionalText = text.optional();

export const stringList = z.array(filled).optional();

/** Необязательный список элементов. Пустой список потом считается «секции нет». */
export const list = <T extends z.ZodType>(item: T) => z.array(item).optional();

/** Необязательная внешняя ссылка: только http и https, пустая строка значит «нет ссылки». */
export const optionalUrl = text
  .transform((value) => (value === '' ? undefined : value))
  .pipe(
    z
      .url({ protocol: /^https?$/, error: 'ожидалась ссылка, начинающаяся с http:// или https://' })
      .optional()
  )
  .optional();

const unknownKeyMessage = (key: string, known: readonly string[]): string => {
  const suggestion = suggestKey(key, known);
  return suggestion === undefined
    ? 'неизвестный ключ'
    : `неизвестный ключ, возможно, имелось в виду ${suggestion}`;
};

/**
 * Объект, где лишний ключ это ошибка. Сообщение содержит по строке на каждый
 * лишний ключ, `toConfigIssues` разносит их по путям.
 */
export const strictObject = <T extends z.core.$ZodShape>(shape: T) => {
  const known = Object.keys(shape);
  return z.strictObject(shape, {
    error: (issue) =>
      issue.code === 'unrecognized_keys'
        ? issue.keys.map((key) => unknownKeyMessage(key, known)).join('\n')
        : undefined
  });
};
