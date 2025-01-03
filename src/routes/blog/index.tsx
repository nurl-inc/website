import { A, type RouteSectionProps } from '@solidjs/router';
import { createMemo, Index, lazy, Suspense } from 'solid-js';
import { css } from 'styled-system/css';
import { Container } from 'styled-system/jsx';
import { vstack } from 'styled-system/patterns/vstack';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { Text } from '~/components/ui';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';
import blogData from '~/data/generated/blog.json';

const Footer = lazy(() => import('~/components/shared/footer'));

const metadata: Metadata = {
  title: 'Nurl | Blog',
  description: 'Read our blog posts.',
  keywords: `${keywords.base.join(', ')}, ${keywords.blog.join(', ')}`,
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
              Blog
            </Text>
            <Text>Read our blog posts.</Text>
          </header>

          <Suspense>
            <ul class={vstack({ alignItems: 'flex-start', gap: 4 })}>
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
