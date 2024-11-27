import { getMarkdownContent } from '~/lib/db/markdown';
import { createAsync } from '@solidjs/router';
import { css } from 'styled-system/css';

interface MarkdownProps {
  content: string;
  class?: string;
}

/**
 * A component that renders sanitized markdown content
 * @param props - The props for the component
 * @returns The rendered component
 */
export function Markdown(props: MarkdownProps) {
  const data = createAsync(() => getMarkdownContent(props.content));
  return (
    <div
      class={css({
        color: 'page.text.initial',
        '& h1': {
          marginBottom: 4,
          textStyle: 'heading-2xl',
        },
        '& h2': {
          marginBottom: 4,
          textStyle: 'heading-xl',
        },
        '& h3': {
          marginBottom: 4,
          textStyle: 'heading-lg',
        },
        '& h4': {
          marginBottom: 4,
          textStyle: 'heading-md',
        },
        '& h5': {
          marginBottom: 4,
          textStyle: 'heading-sm',
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
      })}
      innerHTML={data()}
    />
  );
}
