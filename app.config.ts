import { defineConfig } from '@solidjs/start/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
