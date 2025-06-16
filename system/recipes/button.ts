import { defineRecipe } from '@pandacss/dev';

export const button = defineRecipe({
  className: 'button',
  description: 'The styles for a button',
  jsx: ['Button', 'Link'],

  base: {
    alignItems: 'center',
    border: '1px solid',
    display: 'inline-flex',
    flexShrink: 0,
    fontSize: 'lg',
    fontWeight: '900',
    gap: 2,
    h: '3rem',
    lineHeight: 1,
    justifyContent: 'center',
    paddingInline: 4,
    position: 'relative',
    rounded: 'full',
    textStyle: 'heading-xs',
    textTransform: 'uppercase',
    transitionProperty: 'all',
    transitionTimingFunction: 'bouncy',
    transitionDuration: 'fast',
    userSelect: 'none',
    w: 'full',
    '& [data-part="btn-icon"]': {
      opacity: 0,
      position: 'absolute',
      right: '4',
      transform: 'rotate(-90deg)',
      transformOrigin: 'center',
      transitionProperty: 'all',
      transitionTimingFunction: 'bouncy',
      transitionDuration: 'slow',
    },
    _hover: {
      animationName: 'bgColor',
      animationDuration: '6s',
      animationIterationCount: 'infinite',
      transform: 'scale(1.1)',
      shadow: '0 0 18.6px 9.7px rgba(231, 253, 254, 0.33)',
      '& [data-part="btn-icon"]': {
        transform: 'rotate(0deg)',
        opacity: 1,
        right: '1px',
      },
    },
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
    _focus: {
      boxShadow: 'none',
      outline: '2px solid',
      outlineColor: 'var(--focus-color)',
      outlineOffset: '2px',
    },
    md: {
      h: '2.75rem',
      paddingInline: 14,
      w: 'auto',
    },
  },

  variants: {
    palette: {
      primary: {
        bgColor: 'brand1.500',
        color: 'black',
        md: {
          bgColor: 'black',
          borderColor: 'brand1.600',
          color: 'brand2.600',
          _hover: {
            bgColor: 'brand1.600',
            color: 'black',
          },
        },
      },
      secondary: {
        bgColor: 'white',
        color: 'brand1.1000',
      },
    },
    usage: {
      filled: {},
      ghost: {
        bgColor: 'transparent !important',
        borderColor: 'transparent !important',
        color: 'page.text.alt',
        _hover: {
          bgColor: 'transparent',
          color: 'white !important',
        },
      },
    },
  },

  defaultVariants: {
    palette: 'primary',
    usage: 'filled',
  },
});
