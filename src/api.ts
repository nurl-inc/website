/**
 * This module contains API helpers. We don't need endpoints on this site.
 * @module
 */

interface Content {
  file: string;
  html: string;
}

/**
 * Get the generated blog post.
 * @param slug - The slug of the blog post.
 * @returns The blog post.
 */
export async function getBlogPostContent(slug: string): Promise<Content> {
  'use server';
  return import(`./content/blog/generated/${slug}.md.json`);
}

/**
 * Get the generated legal document.
 * @param slug - The slug of the legal document.
 * @returns The legal document.
 */
export async function getLegalContent(slug: string): Promise<Content> {
  'use server';
  return import(`./content/legal/generated/${slug}.md.json`);
}
