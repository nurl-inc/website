/**
 * This module contains primitives. `make` is non-reactive and `create` is
 * reactive.
 * @module
 */

import { createMemo } from 'solid-js';

/**
 * Convert a slug to a human readable string.
 * @param slug - The slug to convert.
 * @returns The human readable string.
 */
export function makeSlug(slug: string) {
  return createMemo(() =>
    slug.replaceAll(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
  );
}
