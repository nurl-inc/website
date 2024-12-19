import { defineConfig } from '@pandacss/dev';
import { globalVars } from './system/globalVars';
import { tokens } from './system/tokens';
import { textStyles } from './system/textStyles';
import { semanticTokens } from './system/semantic-tokens';
import { recipes, slotRecipes } from './system/recipes';
import { keyframes } from './system/keyframes';
import { conditions } from './system/conditions';
import { globalCss } from './system/globalCss';
import { patterns } from './system/patterns';

export default defineConfig({
  preflight: true,

  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],

  theme: {
    extend: {
      textStyles,
      tokens,
      semanticTokens,
      recipes,
      slotRecipes,
      keyframes,
    },
  },

  conditions,
  patterns,

  globalCss,
  globalVars,
  globalFontface: {
    Gibson: [
      {
        fontDisplay: 'swap',
        fontWeight: '100 900',
        src: [
          'url(./public/fonts/GibsonVF-Regular.woff2) format("woff2")',
          'url(./public/fonts/GibsonVF-Regular.woff) format("woff")',
        ],
      },
      {
        fontDisplay: 'swap',
        fontWeight: '100 900',
        fontStyle: 'italic',
        src: [
          'url(./public/fonts/GibsonVF-Italic.woff2) format("woff2")',
          'url(./public/fonts/GibsonVF-Italic.woff) format("woff")',
        ],
      },
    ],
  },

  jsxFramework: 'solid',
  outdir: 'styled-system',
});
