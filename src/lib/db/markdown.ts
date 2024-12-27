import { query } from '@solidjs/router';
import { convertToHtml } from '~/scripts/generate';

/**
 * Get the sanitized markdown content
 * @param content - The markdown content to sanitize
 * @returns The sanitized markdown content
 */
export const getMarkdownContent = query(async (content: string) => {
  const cleanMarkup = await convertToHtml(content);
  return cleanMarkup;
}, 'markdownContent');
