import { joinFilled } from './text';

/** Строка языка: «Название: уровень (пояснение)». Пустые части не оставляют знаков. */
export const languageLine = ({
  name,
  level,
  note
}: {
  readonly name: string;
  readonly level?: string;
  readonly note?: string;
}): string => {
  const base = joinFilled([name, level], ': ');
  return note === undefined || note === '' ? base : `${base} (${note})`;
};
