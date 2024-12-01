/// <reference types="@solidjs/start/env" />

// For some reason, the Metadata type is not available in the global scope.
declare global {
  export interface Metadata {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    robots?: string[];
  }
}

declare module 'solid-mdx' {
  export { MDXProvider } from 'solid-mdx';
}
