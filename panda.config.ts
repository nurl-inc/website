import { defineConfig } from '@pandacss/dev';
import { globalVars } from './system/globalVars';
import { tokens } from './system/tokens';
import { textStyles } from './system/textStyles';
import { semanticTokens } from './system/semantic-tokens';
import { recipes, slotRecipes } from './system/recipes';
import { keyframes } from './system/keyframes';
import { conditions } from './system/conditions';
import { globalCss } from './system/globalCss';

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

  globalCss,
  globalVars,
  globalFontface: {
    Montserrat: {
      fontDisplay: 'swap',
      fontWeight: '100 900',
      src: "url(@fontsource-variable/montserrat/files/montserrat-latin-wght-italic.woff2) format('woff2-variations')",
      unicodeRange:
        'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
    },
    Saira: {
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontWeight: '100 900',
      fontStretch: '50% 125%',
      src: "url(@fontsource-variable/saira/files/saira-latin-wdth-normal.woff2) format('woff2-variations')",
      unicodeRange:
        'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD',
    },
  },

  jsxFramework: 'solid',
  outdir: 'styled-system',
});
