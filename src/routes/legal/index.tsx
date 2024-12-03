import { A, type RouteSectionProps } from '@solidjs/router';
import { createResource, Index, Suspense } from 'solid-js';
import { css } from 'styled-system/css';
import { Container } from 'styled-system/jsx';
import { vstack } from 'styled-system/patterns/vstack';
import { getLegalList } from '~/api';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { Text } from '~/components/ui';
import type { Metadata } from '~/types';

const metadata: Metadata = {
  title: 'Nurl | Legal',
  description: 'Read our legal documents.',
  keywords: 'nurl, legal, documents, terms, privacy',
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

export default function Legal(props: RouteSectionProps<RouteData>) {
  const [data] = createResource(getLegalList);

  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />
      <Main>
        <Container paddingBlock="20">
          <header
            class={vstack({
              alignItems: 'flex-start',
              gap: 4,
              paddingBlockEnd: 10,
            })}
          >
            <Text as="h1" textStyle="heading-md">
              Legal
            </Text>
            <Text>Anything you need to know about Nurl.</Text>
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
                      href={`/legal/${slug()}`}
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
    </>
  );
}
