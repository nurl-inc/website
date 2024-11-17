import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  html: {
    '--global-color-placeholder': 'slate.800',
    backgroundColor: 'page.surface.initial',
    color: 'page.text.initial',
    fontFamily: 'sans',
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    fontSize: '1em',
    fontWeight: 400,
    lineHeight: '1.5',
    textRendering: 'geometricprecision',
    textSizeAdjust: '100%',
  },

  body: {
    fontSize: '1rem',
    _scrollbar: {
      width: '0.5em',
    },
    _scrollbarTrack: {
      backgroundColor: 'page.surface.200',
      outline: 'none',
    },
    _scrollbarThumb: {
      backgroundColor: 'page.border.100',
      borderRadius: '5px',
      outline: 'none',
    },
  },
});
