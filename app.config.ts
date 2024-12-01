import { defineConfig } from '@solidjs/start/config';
import tsconfigPaths from 'vite-tsconfig-paths';

import pkg from '@vinxi/plugin-mdx';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';

// We need to destructure the default export from the plugin
const { default: vinxiMdx } = pkg;

export default defineConfig({
  server: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      failOnError: true,
    },
  },

  extensions: ['md', 'tsx'],

  vite: {
    plugins: [
      // create aliases from tsconfig.paths
      tsconfigPaths(),

      // transform markdown files to be imported as JS objects
      vinxiMdx.withImports({})({
        format: 'md',
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
        remarkPlugins: [remarkDirective, remarkDirectiveRehype],
        rehypePlugins: [],
      }),
    ],
  },
});
