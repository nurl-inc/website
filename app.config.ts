import { defineConfig } from '@solidjs/start/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
