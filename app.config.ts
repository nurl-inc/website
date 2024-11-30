import { defineConfig } from '@solidjs/start/config';
import tsconfigPaths from 'vite-tsconfig-paths';

import vinxiMdx from '@vinxi/plugin-mdx';

export default defineConfig({
  server: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
    },
  },

  extensions: ['.mdx', '.md', '.tsx'],

  vite: {
    plugins: [
      tsconfigPaths(),
      vinxiMdx.withImports({
        define: {},
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'marked',
        remarkPlugins: [],
        rehypePlugins: [],
      }),
    ],
  },
});
