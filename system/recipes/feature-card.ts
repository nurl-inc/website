import { defineRecipe } from '@pandacss/dev';

export const featureCard = defineRecipe({
  className: 'feature-card',
  description: 'The styles for a feature card',

  base: {
    h: '24rem',
    rounded: 'xl',
    w: 'full',
    md: {
      h: '36.5rem',
    },
  },

  variants: {
    cushion: {
      sm: {
        p: 6,
      },
      md: {
        paddingBlock: 12,
        paddingInline: 6,
        md: {
          paddingInline: 10,
        },
      },
    },

    palette: {
      primary: {
        bg: 'page.text.alt',
        color: '#14191A',
      },
      secondary: {
        bgGradient: 'primary',
        border: '1px solid',
        borderColor: 'page.text.alt',
        color: 'page.text.alt',
        textStyle: 'heading-sm',
        textTransform: 'initial',
      },
      tertiary: {
        bgGradient: 'secondary',
        border: '1px solid',
        borderColor: 'page.text.alt',
        color: 'page.text.initial',
        textStyle: 'heading-sm',
        textTransform: 'initial',
      },
    },
  },

  defaultVariants: {
    cushion: 'sm',
    palette: 'primary',
  },
});
