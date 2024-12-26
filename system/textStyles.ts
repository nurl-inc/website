import { defineTextStyles } from '@pandacss/dev';

const headingStyles = {
  fontFamily: 'sans',
  fontStyle: 'oblique',
  fontWeight: '700',
  letterSpacing: '0.03em',
  textTransform: 'uppercase',
};

const bodyStyles = {
  fontFamily: 'sans',
  fontStyle: 'normal',
  fontWeight: '400',
  textWrap: 'pretty',
};

export const textStyles = defineTextStyles({
  'heading-3xl': {
    value: {
      ...headingStyles,
      fontSize: '9xl',
    },
  },
  'heading-2xl': {
    value: {
      ...headingStyles,
      fontSize: '8xl',
    },
  },
  'heading-xl': {
    value: {
      ...headingStyles,
      fontSize: '7xl',
    },
  },
  'heading-lg': {
    value: {
      ...headingStyles,
      fontSize: '6xl',
    },
  },
  'heading-md': {
    value: {
      ...headingStyles,
      fontSize: '5xl',
      lineHeight: '1',
    },
  },
  'heading-sm': {
    value: {
      ...headingStyles,
      fontSize: '4xl',
    },
  },
  'heading-xs': {
    value: {
      ...headingStyles,
      fontSize: '3xl',
    },
  },
  'body-2xl': {
    value: {
      ...bodyStyles,
      fontSize: '2xl',
    },
  },
  'body-xl': {
    value: {
      ...bodyStyles,
      fontSize: 'xl',
    },
  },
  'body-lg': {
    value: {
      ...bodyStyles,
      fontSize: 'lg',
    },
  },
  'body-md': {
    value: {
      ...bodyStyles,
      fontSize: 'md',
    },
  },
  'body-sm': {
    value: {
      ...bodyStyles,
      fontSize: 'sm',
    },
  },
});
