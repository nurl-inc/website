import { defineRecipe } from '@pandacss/dev';

export const featureCard = defineRecipe({
  className: 'feature-card',
  description: 'The styles for a feature card',
  jsx: [
    'HeadingFeatureCard',
    'FeatureCardWithPointsItem',
    'FeatureCardWithPoints',
  ],

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
        bgColor: {
          _sanctumTheme: 'brand2.600',
          _playTheme: 'brand1.500',
        },
        color: '#14191A',
      },
      secondary: {
        bgGradient: 'primary',
        border: '1px solid',
        borderColor: {
          _sanctumTheme: 'brand2.600',
          _playTheme: 'brand1.500',
        },
        color: {
          _sanctumTheme: 'brand2.600',
          _playTheme: 'brand1.500',
        },
        paddingBlockEnd: 'initial',
        textStyle: 'heading-sm',
        textTransform: 'initial',
      },
      tertiary: {
        bgColor: {
          _sanctumTheme: 'brand2.1000',
          _playTheme: 'brand1.1000',
        },
        border: '1px solid',
        borderColor: {
          _sanctumTheme: 'brand2.600',
          _playTheme: 'brand1.500',
        },
        color: {
          _sanctumTheme: 'brand2.600',
          _playTheme: 'brand1.500',
        },
        paddingBlockEnd: 'initial',
        textStyle: 'heading-sm',
        textTransform: 'initial',
      },
      accent: {
        bgColor: {
          _sanctumTheme: 'brand2.700',
          _playTheme: 'brand1.700',
        },
        border: '1px solid',
        borderColor: {
          _sanctumTheme: 'brand2.600',
          _playTheme: 'brand1.600',
        },
        color: 'white',
        paddingBlockEnd: 'initial',
      },
    },
  },

  defaultVariants: {
    cushion: 'md',
    palette: 'primary',
  },
});
