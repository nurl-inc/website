import type { RouteSectionProps } from '@solidjs/router';
import { Box, HStack, VStack } from 'styled-system/jsx';
import { css } from 'styled-system/css';
import Head from '~/components/shared/head';
import type { Metadata } from '~/types';
import { Button } from '~/components/ui/button';

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

      <HStack
        justify="center"
        bgColor="info.surface.initial"
        color="info.text.initial"
        py="2"
        textStyle="body-md"
        w="100%"
      >
        This is a banner of information
      </HStack>

      <VStack
        bgColor="page.surface.initial"
        h="calc(100dvh - 40px)"
        px="4"
        justify="center"
      >
        <h1
          class={css({
            color: 'page.text.alt',
            textStyle: 'heading-md',
          })}
        >
          Home
        </h1>
        <p
          class={css({
            color: 'page.text.initial',
            textStyle: 'body-md',
          })}
        >
          This is a test of the Saira font.
        </p>
        <Button>Click me</Button>
      </VStack>
    </main>
  );
}
