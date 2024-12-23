import type { RouteSectionProps } from '@solidjs/router';
import { Footer, Main, Nav } from '~/components/shared';
import { Head } from '~/components/shared';
import { Text } from '~/components/ui';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';

/**
 * This module is the main entry point for the sanctum page.
 * @module route:sanctum
 */

const metadata: Metadata = {
  title: 'Nurl Sanctum | Pricing',
  description:
    'Pricing for the Nurl Sanctum. Plans that scale with your growth.',
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

export default function SanctumPricing(props: RouteSectionProps<RouteData>) {
  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <Main>
        <Text>Coming soon</Text>
      </Main>

      <Footer />
    </>
  );
}
