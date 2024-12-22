import { defineSlotRecipe } from '@pandacss/dev';
import { fieldAnatomy } from '@ark-ui/anatomy';

const inputStyles = {
  appearance: 'none',
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
};

export const field = defineSlotRecipe({
  className: 'field',
  slots: [...fieldAnatomy.keys(), 'selectIndicator'],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
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
    input: inputStyles,
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
      ...inputStyles,
      position: 'relative',
      w: 'full',
    },
    selectIndicator: {
      color: 'page.text.initial/40',
      position: 'absolute',
      right: 4,
      top: '50%',
      transform: 'translateY(-50%)',
      w: 4,
      zIndex: 'decorator',
    },
    textarea: {
      ...inputStyles,
      minH: '10rem',
      resize: 'vertical',
    },
  },
});
