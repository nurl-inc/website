import { defineSlotRecipe } from '@pandacss/dev';
import { button } from './button';

export const tabs = defineSlotRecipe({
  className: 'tabs',
  description: 'The styles for the Tabs component',
  slots: ['list', 'trigger', 'content'],

  base: {
    list: {
      paddingBlockStart: 11,
      paddingInline: 8,
      paddingBlockEnd: 20,
      overflowX: 'auto',
      w: 'full',
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
        borderColor: 'page.text.initial',
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
  },
});
