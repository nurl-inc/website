import type { RouteSectionProps } from '@solidjs/router';
import { Container, VStack } from 'styled-system/jsx';
import Footer from '~/components/shared/footer';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { Text } from '~/components/ui';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';
import schema from '~/data/schema/home.json';

// Route Data

const metadata: Metadata = {
  title: 'Nurl Game Systems | Game System Library',
  description:
    'Nurl is an end-to-end solution for building, testing, and validating your tabletop roleplay games in a safe and version-controlled environment.',
  keywords: keywords.base.join(', '),
  image: 'https://nurlttrpg.com/og-meta.png',
};

export const route = {
  preload(): RouteData {
    return {
      metadata,
    };
  },
};

// Component

interface RouteData {
  metadata: Metadata;
}

export default function GameSystems(props: RouteSectionProps<RouteData>) {
  return (
    <>
      <Head {...props.data.metadata}>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <Nav />

      <Main>
        <Container>
          <VStack h="calc(100dvh - 100px)" justify="center">
            <Text as="h1" textStyle="heading-xl">
              Nurl Game Systems
            </Text>
            <Text textStyle="2xl">We're working on it.</Text>
            <Text textStyle="body-lg">
              Once we have launched, you'll be able to find a library of game
              systems we support here.
            </Text>
          </VStack>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
