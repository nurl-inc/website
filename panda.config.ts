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
import { animationStyles } from './system/animationStyles';

export default defineConfig({
  preflight: true,

  include: ['./src/**/*.{ts,tsx}'],
  exclude: [],

  theme: {
    extend: {
      animationStyles,
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

  jsxFramework: 'solid',
  outdir: 'styled-system',
});
