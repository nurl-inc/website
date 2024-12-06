import fs from 'node:fs';
import path from 'node:path';

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
export async function getBlogContent(slug: string): Promise<Content> {
  'use server';
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'blog',
    'generated',
    `${slug}.md.json`,
  );
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

/**
 * Get the generated legal document.
 * @param slug - The slug of the legal document.
 * @returns The legal document.
 */
export async function getLegalContent(slug: string): Promise<Content> {
  'use server';
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'legal',
    'generated',
    `${slug}.md.json`,
  );
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

/**
 * Get the list of legal documents.
 * @returns The list of legal documents.
 */
export async function getLegalList(): Promise<string[]> {
  'use server';
  const legalDir = path.join(process.cwd(), 'src', 'content', 'legal');
  const files = fs.readdirSync(legalDir);
  return files.map((file) => file.replace('.md', ''));
}

/**
 * Get the list of blog posts.
 * @returns The list of blog posts.
 */
export async function getBlogList(): Promise<string[]> {
  'use server';
  return fs
    .readdirSync(
      path.join(process.cwd(), 'src', 'content', 'blog', 'generated'),
    )
    .map((file) => file.replace('.md.json', ''));
}
