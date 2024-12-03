import fs from 'node:fs';
import path from 'node:path';

import { defineConfig } from '@solidjs/start/config';
import tsconfigPaths from 'vite-tsconfig-paths';

function makeBaseRoutes(): string[] {
  return ['/'];
}

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
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      failOnError: true,
      // Pre-render all the dynamic routes we need to track with SEO
      routes: [...makeBaseRoutes(), ...makeLegalRoutes(), ...makeBlogRoutes()],
    },
  },

  vite: {
    plugins: [
      // create aliases from tsconfig.paths
      tsconfigPaths(),
    ],
  },
});
