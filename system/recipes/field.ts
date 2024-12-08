import { defineSlotRecipe } from '@pandacss/dev';
import { fieldAnatomy } from '@ark-ui/anatomy';

export const field = defineSlotRecipe({
  className: 'field',
  slots: fieldAnatomy.keys(),

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'montserrat',
      gap: 2,
      w: 'full',
    },
    label: {
      fontFamily: 'inherit',
      textStyle: 'md',
      md: {
        textStyle: 'lg',
      },
    },
    input: {
      bgColor: 'page.surface.initial/50',
      border: '1px solid',
      borderColor: '#032E30',
      fontFamily: 'inherit',
      h: '2.75rem',
      paddingInline: '4',
      rounded: 'md',
      _focus: {
        boxShadow: '0 0 0 1px var(--focus-color)',
        borderColor: 'var(--focus-color)',
        outline: 'none',
      },
      _disabled: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
    errorText: {
      color: '#F06B42',
      letterSpacing: '0.02em',
      textStyle: 'xs',
    },
    helperText: {
      letterSpacing: '0.02em',
      textStyle: 'xs',
    },
    select: {
      bgColor: 'page.bg.initial',
      border: '1px solid',
      borderColor: 'page.border.initial',
    },
    textarea: {
      bgColor: 'page.bg.initial',
      border: '1px solid',
      borderColor: 'page.border.initial',
    },
  },
});
