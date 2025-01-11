import { query } from '@solidjs/router';

// data
import meta from '~/data/blog/meta.json';

/**
 * This module contains all the data queries for the Blog product.
 * @module lib/db/blog
 */

/**
 * Data for the Blog meta page
 */
export const getBlogMetaData = query(async () => meta, 'blog-meta');

/**
 * Data for the Blog post page
 */
export const getBlogPostData = query(
  async (url: string) => meta[url as keyof typeof meta],
  'blog-post',
);
