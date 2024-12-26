import type { RouteSectionProps } from '@solidjs/router';
import { lazy, onMount, Suspense } from 'solid-js';
import { scrollFadeInOut } from '~/lib/motion';
import SanctumHero from '~/components/routes/sanctum/hero';
import { Footer, Main, Nav } from '~/components/shared';
import { Head } from '~/components/shared';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';
import { Box } from 'styled-system/jsx';

// Below the window content
const SanctumValueSection = lazy(
  () => import('~/components/routes/sanctum/value-section'),
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
  onMount(() => {
    const targets = document.querySelectorAll('#sanctum-value-section');
    targets.forEach((target) => {
      scrollFadeInOut(target);
    });
  });

  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <Main>
        <SanctumHero />

        <Box
          id="learn-more"
          paddingBlock={{
            base: 10,
            md: 80,
          }}
          position="relative"
          w="full"
          _before={{
            bgGradient: 'to-b',
            gradientFrom: 'page.surface.initial',
            gradientTo: 'transparent',
            content: '""',
            h: '15rem',
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 'decorator',
          }}
          _after={{
            bgGradient: 'to-t',
            gradientFrom: 'page.surface.initial',
            gradientTo: 'transparent',
            content: '""',
            h: '15rem',
            left: 0,
            position: 'absolute',
            right: 0,
            bottom: 0,
            zIndex: 'decorator',
          }}
        >
          <Box
            bgGradient="bigGlow"
            h="100dvh"
            left={0}
            position="fixed"
            right={0}
            top={0}
            zIndex="hide"
          />

          <Suspense>
            <SanctumValueSection
              idx={1}
              heading="Visualize your game"
              description="See your entire game system at a glance. Spot connections, balance issues, and opportunities instantly."
              image="sanctum"
            />
            <SanctumValueSection
              idx={2}
              heading="Create with Confidence"
              description="Our visual tools make complex game design intuitive. Build, test, and iterate faster than ever."
            />
            <SanctumValueSection
              idx={3}
              heading="Publish with Power"
              description="From rules to content, manage your entire game library in one professional platform."
            />
          </Suspense>
        </Box>
      </Main>

      <Footer />
    </>
  );
}
