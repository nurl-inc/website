import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import solid from 'eslint-plugin-solid/configs/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      '**/node_modules/**/*',
      'styled-system/**/*',
      'src/data/generated/**/*',
      '.vercel/**/*',
      '.vinxi/**/*',
      'app.config.timestamp_*.js',
      'postcss.config.cjs',
    ],
  },
  { files: ['**/*.{js,mjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  solid,
  ...tseslint.configs.recommended,
];
