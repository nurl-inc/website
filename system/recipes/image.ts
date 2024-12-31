import { defineRecipe } from '@pandacss/dev';

export const image = defineRecipe({
  className: 'image',
  description: 'The styles for a image',

  base: {
    objectFit: 'cover',
    objectPosition: 'center',
    w: 'full',
  },

  variants: {
    // Avoid conflict with `height` prop
    vFit: {
      default: {
        h: 'auto',
      },
      full: {
        h: {
          base: 'full',
          xl: 'auto',
        },
      },
    },
  },

  defaultVariants: {
    vFit: 'default',
  },
});
