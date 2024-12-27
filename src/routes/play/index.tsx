import type { RouteSectionProps } from '@solidjs/router';
import { lazy, Suspense } from 'solid-js';
import { Footer, Main, Nav } from '~/components/shared';
import { Head } from '~/components/shared';
import type { Metadata } from '~/types';
import PlayHero from '~/components/routes/play/hero';

import keywords from '~/data/keywords.json';

// Below the window content
const FeatureShowcase = lazy(
  () => import('~/components/routes/play/feature-showcase'),
);
const Pricing = lazy(() => import('~/components/routes/play/pricing'));

/**
 * This module is the main entry point for the sanctum page.
 * @module route:sanctum
 */

const metadata: Metadata = {
  title:
    'Nurl Play | Enhance Your Tabletop RPG Experience | Keep the Magic, Automate the Complex',
  description:
    'Transform your tabletop RPG sessions with video game-like automation while preserving the physical experience you love. Automate rules, track states, and enhance storytelling without losing the magic of in-person play.',
  keywords: `${keywords.base.join(', ')}, ${keywords.play.join(', ')}`,
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

export default function Play(props: RouteSectionProps<RouteData>) {
  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <Main>
        <PlayHero />

        <Suspense>
          <FeatureShowcase />
          <Pricing />
        </Suspense>
      </Main>

      <Footer />
    </>
  );
}
