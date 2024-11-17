import type { RouteSectionProps } from '@solidjs/router';
import Head from '~/components/shared/head';
import type { Metadata } from '~/types';

/**
 * This module is the main entry point for the home page.
 * @module route:home
 */

const metadata: Metadata = {
  title: 'Nurl | Where Tabletop Legends Are Made',
  description:
    'Enhance your games with automation that feels like magic, create new worlds with tools that feel sacred.',
  keywords:
    'nurl, tabletop, automation, tools, magic, sacred, tabletop gaming tools, TTRPG digital tools, D&D gaming tools, tabletop automation, TTRPG enhancement',
  image: 'https://nurl.website/og-meta.png',
};

export const route = {
  preload(): RouteData {
    return {
      metadata,
    };
  },
};

interface RouteData {
  metadata: Metadata;
}

export default function Home(props: RouteSectionProps<RouteData>) {
  return (
    <main role="main">
      <Head {...props.data.metadata} />

      <h1>Home</h1>
      <p class="ubuntu-regular">This is a test of the Ubuntu font.</p>
    </main>
  );
}
