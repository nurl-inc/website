import type { RouteSectionProps } from '@solidjs/router';
import { Box, VStack } from 'styled-system/jsx';
import { css } from 'styled-system/css';
import Head from '~/components/shared/head';
import type { Metadata } from '~/types';
import { Banner } from '~/components/ui/banner';

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

      <Banner>Launching Beta Early 2025</Banner>

      <VStack
        bgGradient="primary"
        gap="4"
        h="calc(100dvh - 40px)"
        position="relative"
        px="4"
        justify="center"
      >
        <Box alignSelf="flex-start" w="5rem">
          <img src="/logos/nurl.svg" alt="Nurl Logo" />
        </Box>

        <header>
          <h1
            class={css({
              color: 'page.text.alt',
              mb: 4,
              textGradient: 'tertiary',
              textStyle: 'heading-md',
            })}
          >
            Where Tabletop Legends Are Made
          </h1>
          <p
            class={css({
              color: 'page.text.initial',
              textStyle: 'body-xl',
            })}
          >
            Enhance your games with automation that feels like magic, create new
            worlds with tools that feel sacred.
          </p>
        </header>
      </VStack>
    </main>
  );
}
