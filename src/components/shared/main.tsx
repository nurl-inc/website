import type { ParentProps } from 'solid-js';

/**
 * An accessible wrapper for the main content of the page.
 */
export default function Main(props: ParentProps) {
  return <main role="main" {...props} />;
}
