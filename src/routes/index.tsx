import type { RouteSectionProps } from '@solidjs/router';
import Head from '~/components/shared/head';
import type { Metadata } from '~/types';
import { Banner } from '~/components/ui/banner';
import Hero from './components/hero';
import { css } from 'styled-system/css';
import { vstack } from 'styled-system/patterns/vstack';
import { Button } from '~/components/ui/button';
import { Box, VStack } from 'styled-system/jsx';
import Nav from '~/components/shared/nav';

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
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <main role="main">
        <Hero />
      </main>

      <Box>
        <Box mt="10" w="full">
          <VStack
            alignItems="flex-start"
            bgColor="page.surface.initial"
            border="4px solid"
            borderColor="page.border.initial"
            gap="10"
            justify="flex-start"
            pb="12"
            pt="4"
            px="4"
            rounded="md"
          >
            <p class={css({ mb: 4, textStyle: 'body-sm' })}>For Players</p>

            <div>
              <p class={css({ textStyle: 'heading-sm' })}>NURL PLAY</p>
              <p class={css({ mb: 10 })}>
                Automate the complex. Keep the magic.
              </p>
            </div>

            <ul
              class={vstack({
                alignItems: 'flex-start',
              })}
            >
              <li>Video game-like automation</li>
              <li>Physical play enhancement</li>
              <li>Seamless group tools</li>
            </ul>

            <Button>Join the Waitlist</Button>
          </VStack>
        </Box>
      </Box>
    </>
  );
}
