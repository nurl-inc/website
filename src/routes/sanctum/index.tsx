import type { RouteSectionProps } from '@solidjs/router';
import SanctumHeroFeature from '~/components/routes/sanctum/hero-feature';
import { Footer, Main, Nav } from '~/components/shared';
import { Head } from '~/components/shared';

import keywords from '~/data/keywords.json';
import type { Metadata } from '~/types';

/**
 * This module is the main entry point for the sanctum page.
 * @module route:sanctum
 */

const metadata: Metadata = {
  title: 'Nurl Sanctum | Create TTRPG Worlds',
  description:
    'The sacred space where your game systems come to life through visual tools and powerful automation.',
  keywords: `${keywords.base.join(', ')}, ${keywords.sanctum.join(', ')}`,
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

export default function Sanctum(props: RouteSectionProps<RouteData>) {
  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <Main>
        <SanctumHeroFeature />
      </Main>

      <Footer />
    </>
  );
}
