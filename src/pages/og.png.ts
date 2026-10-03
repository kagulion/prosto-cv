import { Resvg } from '@resvg/resvg-js';
import type { APIRoute } from 'astro';
import satori from 'satori';
import { loadConfig } from '../config';
import { buildOgMarkup } from '../lib/og-card';
import { loadOgFonts } from '../lib/og-fonts';
import { OG_HEIGHT, OG_WIDTH } from '../lib/seo';
import { displayUrl } from '../lib/links';

// Край: единственное место, где читаются шрифты и рисуется картинка.
export const GET: APIRoute = async () => {
  const cv = loadConfig();
  const fonts = await loadOgFonts();
  if (!fonts.ok) throw new Error(fonts.message);
  const markup = buildOgMarkup({
    name: cv.name,
    position: cv.position,
    ...(cv.seo?.url === undefined ? {} : { host: displayUrl(cv.seo.url) })
  });
  // Дерево объектов satori совместимо по форме с ReactNode, но тип пакета его не принимает.
  const svg = await satori(markup as unknown as Parameters<typeof satori>[0], {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: [...fonts.fonts]
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: OG_WIDTH } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
