import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  html: {
    '--global-color-placeholder': 'slate.800',
    backgroundColor: 'page.surface.initial',
    color: 'page.text.initial',
    fontFamily: 'var(--font-gibson)',
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    fontSize: '1em',
    fontWeight: 400,
    lineHeight: '1.5',
    textRendering: 'geometricprecision',
    textSizeAdjust: '100%',
  },

  body: {
    fontSize: '16px',
  },

  ':is(button)': {
    cursor: 'pointer',
  },
});
