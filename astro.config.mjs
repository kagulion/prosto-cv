/* global process, URL */
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

/**
 * Dev-only: статическая страница не видит `?data=` в `Astro.url`, поэтому режим данных
 * (demo / worst / minimal) читается тут и передаётся странице через `process.env`.
 */
const devDataMode = () => ({
  name: 'dev-data-mode',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (
        req.headers['sec-fetch-dest'] === 'document' ||
        req.headers.accept?.includes('text/html')
      ) {
        const mode = new URL(req.url ?? '/', 'http://localhost').searchParams.get('data');
        process.env.CV_DEV_DATA = mode ?? 'demo';
      }
      next();
    });
  }
});

export default defineConfig({
  // На GitHub Pages сайт лежит в подпапке репозитория, путь задаёт CI.
  base: process.env.BASE_PATH ?? '/',
  server: {
    host: '127.0.0.1'
  },
  vite: {
    plugins: [tailwindcss(), devDataMode()]
  }
});
