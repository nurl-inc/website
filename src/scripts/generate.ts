import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { unified } from 'unified';

import remarkParse from 'remark-parse';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkCodeFrontmatter from 'remark-code-frontmatter';
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

async function convertToHtml(content: string) {
  try {
    const html = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkDirective)
      .use(remarkDirectiveRehype)
      .use(remarkCodeFrontmatter)
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

async function generateLegal() {
  try {
    const legalDir = path.join(process.cwd(), 'src', 'content', 'legal');
    const files = fs.readdirSync(legalDir);

    // Create a directory within legal called `generated`
    const generatedDir = path.join(legalDir, 'generated');
    fs.mkdirSync(generatedDir, { recursive: true });

    // Convert each file to HTML and save it in the `generated` directory
    for (const file of files) {
      const content = fs.readFileSync(path.join(legalDir, file), 'utf8');
      const html = await convertToHtml(content);
      // save the html as a json file
      const jsonFile = path.join(generatedDir, `${file}.json`);
      fs.writeFileSync(jsonFile, JSON.stringify({ file, html }));
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function generateBlog() {
  try {
    const blogDir = path.join(process.cwd(), 'src', 'content', 'blog');
    const files = fs.readdirSync(blogDir);

    // Create a directory within legal called `generated`
    const generatedDir = path.join(blogDir, 'generated');
    fs.mkdirSync(generatedDir, { recursive: true });

    // Convert each file to HTML and save it in the `generated` directory
    for (const file of files) {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
      const html = await convertToHtml(content);
      // save the html as a json file
      const jsonFile = path.join(generatedDir, `${file}.json`);
      fs.writeFileSync(jsonFile, JSON.stringify({ file, html }));
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function generate() {
  try {
    await generateLegal();
    await generateBlog();
    console.log('Generated all files');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

generate();
