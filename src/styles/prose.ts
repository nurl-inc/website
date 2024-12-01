import { css } from 'styled-system/css';

/**
 * CSS for markdown content.
 */
export const proseCss = css.raw({
  color: 'page.text.initial',
  '& h1': {
    marginBottom: 4,
    textStyle: 'heading-lg',
  },
  '& h2': {
    marginBottom: 4,
    textStyle: 'heading-md',
  },
  '& h3': {
    marginBottom: 4,
    textStyle: 'heading-sm',
  },
  '& h4': {
    marginBottom: 4,
    textStyle: 'heading-xs',
  },
  '& h5': {
    marginBottom: 4,
    textStyle: 'heading-xs',
  },
  '& h6': {
    marginBottom: 4,
    textStyle: 'heading-xs',
  },
  '& p': {
    marginBottom: 4,
    textStyle: 'body-md',
  },
  '& strong': {
    fontWeight: 'bold',
  },
  '& a': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.2rem',
    _hover: {
      textDecorationColor: 'action.bg.hover',
    },
  },
  '& ul': {
    listStyle: 'disc',
    listStylePosition: 'inside',
    marginInlineStart: 4,
    marginBlockEnd: 4,
  },
  '& ol': {
    listStyle: 'decimal',
    listStylePosition: 'inside',
    marginInlineStart: 4,
    marginBlockEnd: 4,
  },
  '& li': {
    marginBlockEnd: 2,
  },
});

/**
 * CSS for markdown containers like (static) routes.
 */
export const proseContainerCss = css.raw({
  '& .prose': {
    paddingBlock: 10,
    maxWidth: 'prose',
    mx: 'auto',
    ...proseCss,
  },
});
