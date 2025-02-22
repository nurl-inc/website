import { A, type RouteSectionProps } from '@solidjs/router';
import { createMemo, Index, lazy, Suspense } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Container, VStack } from 'styled-system/jsx';
import { vstack } from 'styled-system/patterns/vstack';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { Text, TextLink } from '~/components/ui';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';
import blogData from '~/data/generated/blog.json';

const Footer = lazy(() => import('~/components/shared/footer'));

const metadata: Metadata = {
  title: 'Nurl Blog - Tabletop RPG Development Insights',
  description:
    "Explore Nurl's TTRPG blog for expert insights, game mastering tips, and developer resources. Stay updated with the latest tabletop gaming trends and platform features.",
  keywords: `${keywords.base.join(', ')}, ${keywords.blog.join(', ')}`,
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

export default function Blog(props: RouteSectionProps<RouteData>) {
  const data = createMemo(() => Object.keys(blogData));

  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <Main>
        <Container minH="80dvh" paddingBlock="20">
          <header
            class={vstack({
              alignItems: 'flex-start',
              gap: 4,
              paddingBlockEnd: 10,
            })}
          >
            <Text as="h1" textStyle="heading-md">
              Nurl Blog
            </Text>
            <Text>
              Read our blog posts. Stay updated with the latest tabletop gaming
              trends and platform features.
            </Text>
          </header>

          <Box
            border="1px solid"
            borderColor="page.border.initial"
            paddingBlock="10"
            paddingInline="6"
            rounded="xl"
            w="full"
          >
            <VStack alignItems="flex-start" gap="6" w="full">
              <Text as="small" textTransform="uppercase">
                Featured Post
              </Text>

              <Box w="full">
                <Text as="h2" textStyle="heading-sm">
                  The Practical GM
                </Text>
                <Text>
                  Learn how to become a more effective Game Master with Nurl
                  Play.
                </Text>
              </Box>

              <TextLink href="/blog/the-practical-gm">Check it out</TextLink>
            </VStack>
          </Box>

          <Suspense>
            <Box paddingBlockStart="16" w="full">
              <Text as="h3" textStyle="heading-xs">
                All Posts
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
                    <A
                      class={css({
                        textStyle: 'link',
                        textDecoration: 'underline',
                        _hover: {
                          textDecorationColor: 'action.bg.hover',
                        },
                      })}
                      href={`/blog/${slug()}`}
                    >
                      {slug()}
                    </A>
                  </li>
                )}
              </Index>
            </ul>
          </Suspense>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
