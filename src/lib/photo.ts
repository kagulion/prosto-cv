import type { ImageMetadata } from 'astro';
import type { ConfigIssue } from '../config';

/** Параметры `getImage`: источник 192 пикселя, на экране 64 и 96. Один набор на всю страницу. */
export const PHOTO_OPTIONS = {
  width: 192,
  height: 192,
  format: 'webp',
  fit: 'cover',
  position: 'center'
} as const;

/** Готовое для шапки фото: адрес, размеры и описание. */
export type PhotoView = {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
};

/** Карта `import.meta.glob` по `/src/assets/**`: ключ это путь от корня проекта. */
export type PhotoAssets = Readonly<Record<string, { readonly default: ImageMetadata }>>;

export type PhotoResolution =
  | { readonly ok: true; readonly image: ImageMetadata; readonly alt: string }
  | { readonly ok: false; readonly issue: ConfigIssue };

const ASSETS_PREFIX = '/src/assets/';

/** Ключ карты для `src` из конфига: без ведущих `./` и `/`. */
const assetKey = (src: string): string => `${ASSETS_PREFIX}${src.replace(/^(?:\.?\/)+/, '')}`;

/**
 * Ищет фото среди картинок `src/assets`. Читаются только файлы из карты, произвольный
 * путь прочитать нельзя. Нет файла, значит явный результат с проблемой поля `photo.src`.
 */
export const resolvePhoto = (
  photo: { readonly src: string; readonly alt: string },
  assets: PhotoAssets
): PhotoResolution => {
  const key = assetKey(photo.src);
  const asset = assets[key];
  if (asset !== undefined) return { ok: true, image: asset.default, alt: photo.alt };
  const available = Object.keys(assets)
    .map((path) => path.slice(ASSETS_PREFIX.length))
    .sort();
  const found = available.length === 0 ? 'картинок нет' : `лежат: ${available.join(', ')}`;
  return {
    ok: false,
    issue: {
      path: 'photo.src',
      message: `файл «${photo.src}» не найден в src/assets (${found})`
    }
  };
};
