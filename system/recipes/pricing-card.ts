import { defineSlotRecipe } from '@pandacss/dev';

export const pricingCard = defineSlotRecipe({
  className: 'pricingCard',
  slots: [
    'root',
    'header',
    'heading',
    'description',
    'price',
    'support',
    'content',
    'features',
    'icon',
  ],

  base: {
    root: {
      h: '40.25rem',
      maxW: '31rem',
      rounded: 'md',
      w: {
        base: 'full',
        lg: 'calc(50% - 1rem)',
      },
    },
    header: {
      borderBottom: '1px solid',
      borderColor: '#626262',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      p: 7,
    },
    heading: {
      fontSize: '2xl',
      fontWeight: '600',
      textStyle: 'heading-xs',
      textTransform: 'uppercase',
    },
    description: {
      textStyle: 'body-lg',
    },
    price: {
      lineHeight: 1,
      fontStyle: 'normal',
      textStyle: 'heading-lg',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      h: 'calc(100% - 12.75rem)',
      justifyContent: 'space-between',
      p: 7,
      w: 'full',
    },
    features: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },
    icon: {
      p: 0.5,
      rounded: 'full',
      w: '1.5rem',
    },
  },

  variants: {
    palette: {
      primary: {
        root: {
          bgColor: 'neutral.900',
          color: 'white',
        },
        icon: {
          bgColor: '#3DF58765',
          color: '#3DF587',
        },
      },
      secondary: {
        root: {
          bgColor: 'page.text.alt',
          color: 'brand2.1000',
        },
        icon: {
          bgColor: '#05200F65',
          color: 'brand2.1000',
        },
      },
    },
  },

  defaultVariants: {
    palette: 'primary',
  },
});