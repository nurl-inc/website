import { defineTextStyles } from '@pandacss/dev';

const headingStyles = {
  fontFamily: 'montserrat',
  fontStyle: 'italic',
  fontWeight: '900',
  textTransform: 'uppercase',
};

const bodyStyles = {
  fontFamily: 'saira',
  fontStyle: 'normal',
  fontWeight: '400',
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
