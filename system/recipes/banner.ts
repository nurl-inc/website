import { defineRecipe } from '@pandacss/dev';

export const banner = defineRecipe({
  className: 'banner',
  description: 'The styles for a banner',

  base: {
    alignItems: 'center',
    bgColor: 'colorPalette.surface.initial',
    color: 'colorPalette.text.initial',
    display: 'flex',
    fontWeight: '600',
    justifyContent: 'center',
    py: 2,
    textStyle: 'body-md',
    w: 'full',
  },

  variants: {
    palette: {
      info: {
        colorPalette: 'info',
      },
    },
  },

  defaultVariants: {
    palette: 'info',
  },
});
