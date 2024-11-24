import { defineSlotRecipe } from '@pandacss/dev';
import { button } from './button';

export const tabs = defineSlotRecipe({
  className: 'tabs',
  description: 'The styles for the Tabs component',
  slots: ['list', 'trigger', 'content', 'indicator'],

  base: {
    list: {
      paddingBlockStart: 11,
      paddingInline: 8,
      paddingBlockEnd: 20,
      position: 'relative',
      overflowX: 'auto',
      w: 'full',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    trigger: {
      ...button.base,
      border: '1px solid',
      borderColor: '#032E30',
      fontFamily: 'montserrat',
      fontWeight: 1000,
      flexShrink: 0,
      rounded: 'full',
      transitionProperty: 'background-color, border-color',
      transitionDuration: 'fast',
      w: 'full',
      _hover: {
        bgColor: '#054B4F/20',
        bgImage: 'none',
      },
      _selected: {
        bgColor: '#032E30',
        _hover: {
          bgColor: '#032E30',
        },
      },
      md: {
        borderColor: 'transparent',
        w: '23rem',
      },
    },
    content: {
      w: 'full',
    },
    indicator: {
      ...button.base,
      animationName: 'fadeIn',
      animationDuration: 'slow',
      animationDelay: '500ms',
      animationFillMode: 'forwards',
      border: '1px solid',
      borderColor: 'page.text.initial',
      flexShrink: 0,
      left: 0,
      opacity: 0,
      position: 'absolute',
      rounded: 'full',
      transitionProperty: 'all',
      transitionDuration: 'slow',
      w: 'full',
      zIndex: 'decorator',
      _hover: {
        bgImage: 'none',
      },
      md: {
        w: '23rem',
      },
    },
  },
});
