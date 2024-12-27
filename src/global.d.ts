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

declare module 'vanta/dist/vanta.fog.min' {
  export default function FOG(options: unknown): unknown;
}

declare module 'vanta/dist/vanta.dots.min' {
  export default function DOTS(options: unknown): unknown;
}

declare module 'three' {
  export default THREE;
}
