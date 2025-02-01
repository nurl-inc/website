'use server';

import { query } from '@solidjs/router';
import meta from '~/data/legal/meta.json';
import legalContent from '~/data/generated/legal.json';

/**
 * This module contains all the data queries for the Legal docs.
 * @module lib/db/legal
 */

/**
 * Data for the Legal meta page
 */
export const getLegalMetaData = query(async () => meta, 'legal-meta');

/**
 * Data for the Legal doc page
 */
export const getLegalPostMetaData = query(async (slug: string) => {
  'use server';
  return meta[slug as keyof typeof meta];
}, 'legal-doc-meta');

/**
 * Data for the Legal doc page
 */
export const getLegalPostData = query(async (slug: string) => {
  'use server';
  return legalContent[slug as keyof typeof legalContent];
}, 'legal-doc');
