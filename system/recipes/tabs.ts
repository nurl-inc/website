import { defineSlotRecipe } from '@pandacss/dev';

export const tabs = defineSlotRecipe({
  className: 'tabs',
  description: 'The styles for the Tabs component',
  slots: ['list', 'trigger', 'content', 'indicator'],

  base: {
    list: {
      alignItems: 'center',
      bgColor: '#1C1F23',
      display: 'flex',
      h: '3.06rem',
      justifyContent: 'center',
      position: 'relative',
      rounded: 'full',
      w: 'full',
      md: {
        marginInline: 'auto',
        w: '1/3',
      },
    },
    trigger: {
      color: '#CFFAFC',
      fontWeight: 1000,
      fontStyle: 'italic',
      h: 'full',
      rounded: 'full',
      textStyle: 'body-sm',
      textTransform: 'uppercase',
      transitionProperty: 'color',
      transitionDuration: 'slow',
      w: '1/2',
      zIndex: 'decorator',
      _selected: {
        color: '#032E30',
      },
      md: {
        fontWeight: 1000,
        fontStyle: 'italic',
        textStyle: 'body-md',
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
      borderColor: '#3DECF5',
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
