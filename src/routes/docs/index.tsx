import { type RouteSectionProps } from '@solidjs/router';
import { createMemo, Suspense, Index } from 'solid-js';
import { Box, Container, VStack } from 'styled-system/jsx';
import { vstack } from 'styled-system/patterns';
import Footer from '~/components/shared/footer';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { Text, TextLink } from '~/components/ui';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';
import docsKeywords from '~/data/keywords/docs.json';
import docsData from '~/data/generated/docs.json';
import schema from '~/data/schema/home.json';

const metadata: Metadata = {
  title: 'Nurl Docs - Helpful guides and tutorials for Nurl products',
  description:
    'Learn how to get up and running with Nurl Sanctum and Play through tutorials and guides.',
  keywords: `${keywords.base.join(', ')}, ${docsKeywords.join(', ')}`,
  image: 'https://nurlttrpg.com/og-meta.png',
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

export default function Docs(props: RouteSectionProps<RouteData>) {
  const data = createMemo(() => Object.keys(docsData));

  return (
    <>
      <Head {...props.data.metadata}>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
      <Nav />

      <Main>
        <header>
          <Container paddingBlock="20">
            <VStack
              alignItems="flex-start"
              gap="4"
              maxW="44ch"
              paddingBlockEnd="10"
            >
              <Text as="h1" textStyle="heading-md">
                Nurl Docs
              </Text>
              <Text textStyle="body-lg">
                Learn how to get up and running with Nurl Sanctum and Play
                through tutorials and guides.
              </Text>
            </VStack>
          </Container>
        </header>

        <Suspense>
          <Box bgColor="page.surface.100/60" paddingBlock="24" w="full">
            <Container>
              <Box w="full">
                <Text as="h3" textStyle="heading-xs">
                  All Documentation
                </Text>
              </Box>

              <ul
                class={vstack({
                  alignItems: 'flex-start',
                  gap: 4,
                  paddingBlockStart: 6,
                })}
              >
                <Index each={data()}>
                  {(slug) => (
                    <li>
                      <TextLink capitalize href={`/docs/${slug()}`}>
                        {slug().replace(/-/g, ' ')}
                      </TextLink>
                    </li>
                  )}
                </Index>
              </ul>
            </Container>
          </Box>
        </Suspense>
      </Main>

      <Footer />
    </>
  );
}
