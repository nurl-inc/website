import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { unified } from 'unified';

import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkRehype from 'remark-rehype';
import remarkGfm from 'remark-gfm';

import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';

/**
 * This module contains a script to transform the markdown files into
 * HTML.
 * @module
 */

export async function convertToHtml(content: string) {
  try {
    const html = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkDirective)
      .use(remarkDirectiveRehype)
      .use(remarkFrontmatter)
      .use(remarkMdxFrontmatter)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        properties: { class: 'header-link' },
        content: {
          type: 'text',
          value: '#',
        },
      })
      .use(rehypeSanitize, defaultSchema)
      .use(rehypeStringify)
      .process(content);
    return html.value as string;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * Generate the legal documents via a single JSON file used to dynamically
 * load the legal documents on the client in the [...legalSlug].tsx route.
 */
async function generateLegal() {
  try {
    const legalDir = path.join(process.cwd(), 'src', 'content', 'legal');
    const files = fs.readdirSync(legalDir);

    // Create the data/generated directory
    const generatedDir = path.join(process.cwd(), 'src', 'data', 'generated');
    fs.mkdirSync(generatedDir, { recursive: true });

    // Create an object to store all legal documents
    const legalDocs: Record<string, string> = {};

    // Convert each file to HTML and add to the legalDocs object
    for (const file of files) {
      const content = fs.readFileSync(path.join(legalDir, file), 'utf8');
      const html = await convertToHtml(content);
      // Remove the .md extension from the key
      const key = file.replace(/\.md$/, '');
      legalDocs[key] = html;
    }

    // Save all documents to a single JSON file
    const jsonFile = path.join(generatedDir, 'legal.json');
    fs.writeFileSync(jsonFile, JSON.stringify(legalDocs, null, 2));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * Generate the legal documents via a single JSON file used to dynamically
 * load the legal documents on the client in the [...legalSlug].tsx route.
 */
async function generateBlog() {
  try {
    const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
    const files = fs.readdirSync(blogDir);

    // Create the data/generated directory
    const generatedDir = path.join(process.cwd(), 'src', 'data', 'generated');
    fs.mkdirSync(generatedDir, { recursive: true });

    // Create an object to store all legal documents
    const blogDocs: Record<string, string> = {};

    // Convert each file to HTML and add to the legalDocs object
    for (const file of files) {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
      const html = await convertToHtml(content);
      // Remove the .md extension from the key
      const key = file.replace(/\.md$/, '');
      blogDocs[key] = html;
    }

    // Save all documents to a single JSON file
    const jsonFile = path.join(generatedDir, 'blog.json');
    fs.writeFileSync(jsonFile, JSON.stringify(blogDocs, null, 2));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * Generate the legal documents via a single JSON file used to dynamically
 * load the legal documents on the client in the [...legalSlug].tsx route.
 */
async function generateFooter() {
  try {
    const footerDir = path.join(process.cwd(), 'src', 'content', 'footer');
    const files = fs.readdirSync(footerDir);

    // Create the data/generated directory
    const generatedDir = path.join(process.cwd(), 'src', 'data', 'generated');
    fs.mkdirSync(generatedDir, { recursive: true });

    // Create an object to store all legal documents
    const footerDocs: Record<string, string> = {};

    // Convert each file to HTML and add to the legalDocs object
    for (const file of files) {
      const content = fs.readFileSync(path.join(footerDir, file), 'utf8');
      const html = await convertToHtml(content);
      // Remove the .md extension from the key
      const key = file.replace(/\.md$/, '');
      footerDocs[key] = html;
    }

    // Save all documents to a single JSON file
    const jsonFile = path.join(generatedDir, 'footer.json');
    fs.writeFileSync(jsonFile, JSON.stringify(footerDocs, null, 2));
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function generate() {
  try {
    await generateLegal();
    await generateBlog();
    await generateFooter();
    console.log('Generated all files ✅');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

generate();
