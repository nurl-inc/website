import { A, type RouteSectionProps } from '@solidjs/router';
import { createMemo, Index, lazy, Show, Suspense } from 'solid-js';
import { css } from 'styled-system/css';
import { Container } from 'styled-system/jsx';
import { vstack } from 'styled-system/patterns/vstack';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { Text } from '~/components/ui';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';
import legalData from '~/data/generated/legal.json';
import schema from '~/data/schema/home.json';

const Footer = lazy(() => import('~/components/shared/footer'));

const metadata: Metadata = {
  title: 'Nurl Legal - Anything you need to know about Nurl',
  description:
    "Review Nurl's legal documents. Learn about user rights, responsibilities, and platform policies for both our Nurl Sanctum and Nurl Play platform.",
  keywords: `${keywords.base.join(', ')}, ${keywords.help.join(', ')}`,
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

export default function Legal(props: RouteSectionProps<RouteData>) {
  const data = createMemo(() => Object.keys(legalData));

  return (
    <>
      <Head {...props.data.metadata}>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
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
              Legal Documents
            </Text>
            <Text>
              Review Nurl's legal documents. Learn about user rights,
              responsibilities, and platform policies for both our Nurl Sanctum
              and Nurl Play platform.
            </Text>
          </header>

          <Suspense>
            <ul class={vstack({ alignItems: 'flex-start', gap: 4 })}>
              <Index each={data()}>
                {(slug) => (
                  <Show when={slug() !== 'generated'}>
                    <li>
                      <A
                        class={css({
                          textStyle: 'link',
                          textDecoration: 'underline',
                          _hover: {
                            textDecorationColor: 'action.bg.hover',
                          },
                        })}
                        href={`/legal/${slug()}`}
                      >
                        {slug()}
                      </A>
                    </li>
                  </Show>
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
