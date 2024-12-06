import fs from 'node:fs';
import path from 'node:path';

import { defineConfig } from '@solidjs/start/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import Sitemap from 'vite-plugin-sitemap';

function makeLegalRoutes(): string[] {
  const legalDir = path.join(process.cwd(), 'src', 'content', 'legal');
  const files = fs.readdirSync(legalDir);
  return files.map((file) => `/legal/${file.replace('.md', '')}`);
}

function makeBlogRoutes(): string[] {
  const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const files = fs.readdirSync(blogDir);
  return files.map((file) => `/blog/${file.replace('.md', '')}`);
}

export default defineConfig({
  server: {
    compatibilityDate: '2024-12-06',
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      failOnError: true,
    },
  },

  vite: {
    plugins: [
      // create aliases from tsconfig.paths
      tsconfigPaths(),
      // create sitemap.xml
      Sitemap({
        hostname: 'https://nurl.website',
        dynamicRoutes: [...makeLegalRoutes(), ...makeBlogRoutes()],
        outDir: 'public',
        extensions: ['html'],
      }),
    ],
  },
});
