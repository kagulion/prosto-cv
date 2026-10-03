import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

export type OgFont = {
  readonly name: 'Geist' | 'Geist Cyrillic';
  readonly data: Buffer;
  readonly weight: 400 | 700;
  readonly style: 'normal';
};

export type OgFontsResult =
  | { readonly ok: true; readonly fonts: readonly OgFont[] }
  | { readonly ok: false; readonly message: string };

const FONT_FILES = [
  { file: 'geist-latin-400-normal.woff', name: 'Geist', weight: 400 },
  { file: 'geist-latin-700-normal.woff', name: 'Geist', weight: 700 },
  { file: 'geist-cyrillic-400-normal.woff', name: 'Geist Cyrillic', weight: 400 },
  { file: 'geist-cyrillic-700-normal.woff', name: 'Geist Cyrillic', weight: 700 }
] as const;

const require = createRequire(import.meta.url);

/**
 * Satori берёт глифы из одного шрифта на (имя, вес), поэтому кириллица идёт отдельным именем,
 * а в `fontFamily` оба имени перечислены как запасные друг для друга.
 */
export const OG_FONT_FAMILY = 'Geist, "Geist Cyrillic"';

/** Край: читает четыре статичных woff (satori не понимает woff2). Нет файла, значит `ok: false` с его именем. */
export const loadOgFonts = async (): Promise<OgFontsResult> => {
  try {
    const fonts = await Promise.all(
      FONT_FILES.map(async ({ file, name, weight }) => ({
        name,
        data: await readFile(require.resolve(`@fontsource/geist/files/${file}`)),
        weight,
        style: 'normal' as const
      }))
    );
    return { ok: true, fonts };
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    return {
      ok: false,
      message: `не удалось загрузить шрифт для OG картинки (нужны ${FONT_FILES.map((f) => f.file).join(', ')} из @fontsource/geist): ${reason}`
    };
  }
};
