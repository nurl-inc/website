'use server';

import { query } from '@solidjs/router';
import meta from '~/data/docs/meta.json';

/**
 * This module contains all the data queries for the Docs section.
 * @module lib/db/docs
 */

/**
 * Data for the Docs meta page
 */
export const getDocsMetaData = query(async () => meta, 'queryDocsMeta');

/**
 * Data for the Docs post page
 */
export const getDocsPostData = query(
  async (url: string) => meta[url as keyof typeof meta],
  'queryDocsPost',
);
