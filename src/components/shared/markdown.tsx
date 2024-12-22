/* eslint-disable solid/no-innerhtml */

import { getMarkdownContent } from '~/lib/db/markdown';
import { createAsync } from '@solidjs/router';
import { css } from 'styled-system/css';
import { proseCss } from '~/styles/prose';

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
  return <div class={css(proseCss)} innerHTML={data()} />;
}
