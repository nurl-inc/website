import { defineSemanticTokens } from '@pandacss/dev';
import { page } from './page';
import { action } from './action';
import { secondaryAction } from './secondary-action';
import { info } from './info';

export const semanticTokens = defineSemanticTokens({
  colors: {
    page,
    action,
    secondaryAction,
    info,
  },
});
