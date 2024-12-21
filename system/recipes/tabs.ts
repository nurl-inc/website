import { defineSlotRecipe } from '@pandacss/dev';

export const tabs = defineSlotRecipe({
  className: 'tabs',
  description: 'The styles for the Tabs component',
  slots: ['list', 'trigger', 'content', 'indicator'],

  base: {
    list: {
      alignItems: 'center',
      bgColor: 'neutral.900',
      display: 'flex',
      h: '3.06rem',
      justifyContent: 'center',
      position: 'relative',
      rounded: 'full',
      w: 'full',
      md: {
        marginInline: 'auto',
        w: '3/4',
      },
      xl: {
        w: '1/3',
      },
    },
    trigger: {
      color: 'brand1.200',
      h: 'full',
      fontSize: 'md',
      fontWeight: 800,
      rounded: 'full',
      textStyle: 'heading-xs',
      textTransform: 'uppercase',
      transitionProperty: 'all',
      transitionDuration: 'slow',
      w: '1/2',
      zIndex: 'decorator',
      _hover: {
        '&:not([aria-selected=true])': {
          color: 'page.text.alt',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
        },
      },
      _selected: {
        color: 'brand1.1000',
      },
      md: {
        fontSize: 'lg',
      },
    },
    content: {
      paddingBlockStart: '8',
      w: 'full',
      md: {
        paddingBlockStart: 'initial',
      },
    },
    indicator: {
      animationName: 'fadeIn',
      animationDuration: 'slow',
      animationDelay: '100ms',
      animationFillMode: 'forwards',
      bgGradient: 'tertiary',
      border: '1px solid',
      borderColor: 'brand1.500',
      bottom: 0,
      h: 'full',
      left: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      rounded: 'full',
      transitionProperty: 'all',
      transitionDuration: 'slow',
      zIndex: 'base',
    },
  },
});
