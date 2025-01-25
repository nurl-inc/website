import { css } from 'styled-system/css';

/**
 * CSS for markdown content.
 */
export const proseCss = css.raw({
  color: 'page.text.initial',
  '& h1': {
    textStyle: 'heading-md',
  },
  '& h2': {
    textStyle: 'heading-sm',
  },
  '& h3': {
    textStyle: 'heading-xs',
  },
  '& h4': {
    textStyle: 'heading-xs',
  },
  '& h5': {
    textStyle: 'heading-xs',
  },
  '& h6': {
    textStyle: 'heading-xs',
  },
  '& :is(h1, h2, h3, h4, h5, h6)': {
    marginBlock: 8,
  },
  '& :is(h1, h2, h3, h4, h5, h6) > a': {
    display: 'inline-block',
    marginInline: 2,
    textDecoration: 'none',
    _hover: {
      textDecoration: 'underline',
    },
  },
  '& p': {
    marginBlockEnd: 10,
    textStyle: 'body-md',
  },
  '& :is(strong)': {
    fontVariationSettings: "'wght' 600",
  },
  '& a': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.2rem',
    _hover: {
      textDecorationColor: 'action.bg.hover',
    },
    _currentPage: {
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
  '& blockquote': {
    borderLeftWidth: '0.25rem',
    borderLeftStyle: 'solid',
    bgColor: 'page.surface.200',
    paddingInlineStart: 4,
    paddingInlineEnd: 4,
    paddingBlockStart: 4,
    paddingBlockEnd: 2,
    marginBlockStart: 6,
    marginBlockEnd: 6,
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
