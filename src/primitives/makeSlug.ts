/**
 * This module contains primitives. `make` is non-reactive and `create` is
 * reactive.
 * @module
 */

/**
 * Convert a slug to a human readable string.
 * @param slug - The slug to convert.
 * @returns The human readable string.
 */
export function makeSlug(slug?: string) {
  if (!slug) return '';
  return slug?.replaceAll(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
}
