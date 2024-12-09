import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  className: 'button',
  description: 'The styles for a button',

  base: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    fontStyle: 'oblique',
    fontWeight: '900',
    justifyContent: 'center',
    gap: 2,
    h: '2.75rem',
    paddingInline: 4,
    textStyle: 'body-md',
    textTransform: 'uppercase',
    transitionProperty: 'background-color',
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: '150ms',
    w: 'full',
    _focus: {
      boxShadow: 'none',
      outline: '2px solid',
      outlineColor: 'var(--focus-color)',
      outlineOffset: '2px',
    },
    md: {
      paddingInline: '5rem',
      w: 'auto',
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5,
    },

    // gradient hover effect
    position: 'relative',
    overflow: 'hidden',
    isolation: 'isolate',
    _hover: {
      _before: {
        animationName: 'gradient',
        animationDuration: '3s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        content: '""',
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(90deg, var(--colors-action-bg-initial), var(--colors-action-bg-hover), var(--colors-action-bg-initial))',
        backgroundSize: '200% 100%',
        zIndex: 'hide',
      },
    },
  },

  variants: {
    palette: {
      primary: {
        colorPalette: 'action',
      },
      secondary: {
        colorPalette: 'secondaryAction',
      },
    },
    usage: {
      filled: {
        bgColor: 'colorPalette.bg.initial',
        color: 'colorPalette.text.initial',
      },
      ghost: {
        bgColor: 'transparent',
        color: 'colorPalette.text.initial',
      },
    },
  },

  defaultVariants: {
    palette: 'primary',
    usage: 'filled',
  },
});
