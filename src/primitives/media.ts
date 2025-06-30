import { createSignal, onCleanup } from 'solid-js';
import { isServer } from 'solid-js/web';

/**
 * This module contains primitives related to the media query.
 */

/**
 * @param query - The media query to match.
 * @returns A boolean indicating whether the media query matches.
 */
export function createMediaQuery(query: string): () => boolean {
  if (isServer) return () => false;

  const [matches, setMatches] = createSignal<boolean>(
    window.matchMedia(query).matches,
  );

  const mq = window.matchMedia(query);
  const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
  mq.addEventListener('change', listener);

  onCleanup(() => mq.removeEventListener('change', listener));

  return matches;
}
