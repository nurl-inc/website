import type { RouteSectionProps } from '@solidjs/router';
import { lazy, onMount, Suspense } from 'solid-js';
import { scrollFadeInOut } from '~/lib/motion';
import SanctumHero from '~/components/routes/sanctum/hero';
import { Footer, Main, Nav } from '~/components/shared';
import { Head } from '~/components/shared';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';
import schema from '~/data/schema/sanctum.json';

// Below the window content
const PublisherValues = lazy(
  () => import('~/components/routes/sanctum/publisher-values'),
);
const FeatureShowcase = lazy(
  () => import('~/components/routes/sanctum/feature-showcase'),
);
const SanctumPricing = lazy(
  () => import('~/components/routes/sanctum/pricing'),
);
const SanctumFinalCTA = lazy(
  () => import('~/components/routes/sanctum/final-cta'),
);

/**
 * This module is the main entry point for the sanctum page.
 * @module route:sanctum
 */

const metadata: Metadata = {
  title: 'Nurl Sanctum | Create TTRPG Worlds',
  description:
    'The sacred space where your game systems come to life through visual tools and powerful automation.',
  keywords: `${keywords.base.join(', ')}, ${keywords.sanctum.join(', ')}`,
  image: 'https://nurlttrpg.com/og-meta-sanctum.png',
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

export default function Sanctum(props: RouteSectionProps<RouteData>) {
  onMount(() => {
    const targets = document.querySelectorAll('#sanctum-value-section');
    targets.forEach((target) => {
      scrollFadeInOut(target);
    });
  });

  return (
    <>
      <Head {...props.data.metadata}>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <Nav />

      <Main>
        <SanctumHero />

        <Suspense>
          <PublisherValues />
          <FeatureShowcase />
          <SanctumPricing />
          <SanctumFinalCTA />
        </Suspense>
      </Main>

      <Footer />
    </>
  );
}
