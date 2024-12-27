import { query } from '@solidjs/router';
import { marked } from 'marked';
import DOMPurify from 'isomorphic-dompurify';

/**
 * Get the sanitized markdown content
 * @param content - The markdown content to sanitize
 * @returns The sanitized markdown content
 */
export const getMarkdownContent = query(async (content: string) => {
  const rawMarkup = await marked(content);
  const cleanMarkup = DOMPurify.sanitize(rawMarkup);
  return cleanMarkup;
}, 'markdownContent');
