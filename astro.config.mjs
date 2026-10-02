import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: '127.0.0.1'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
