import { unified } from 'unified';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { defaultSchema } from 'rehype-sanitize';

import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkDirective from 'remark-directive';
import remarkDirectiveRehype from 'remark-directive-rehype';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';

export async function convertToHtml(content: string) {
  'use server';
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
