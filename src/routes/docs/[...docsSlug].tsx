/* eslint-disable solid/no-innerhtml */

import { createAsync, type RouteSectionProps } from '@solidjs/router';
import { createMemo, lazy, Show, Suspense } from 'solid-js';
import { Box, Container } from 'styled-system/jsx';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { makeSlug } from '~/primitives/makeSlug';
import type { Metadata } from '~/types';
import { css } from 'styled-system/css';
import { proseCss } from '~/styles/prose';
import { Breadcrumb } from '~/components/shared/breadcrumb';

import keywords from '~/data/keywords.json';
import docsKeywords from '~/data/keywords/docs.json';
import docsData from '~/data/generated/docs.json';
import { getDocsPostData } from '~/lib/db/docs';

const Footer = lazy(() => import('~/components/shared/footer'));

const metadata: Metadata = {
  title: 'Nurl Docs | Learn how to use Nurl',
  description: 'Read our docs.',
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

export default function BlogPage(props: RouteSectionProps<RouteData>) {
  const slug = () => props.params.docsSlug as keyof typeof docsData;
  const metadataSlug = () => makeSlug(props.params.docsSlug);

  const metaData = createAsync(() => getDocsPostData(slug()));

  const metadata = createMemo(() => {
    return {
      ...props.data.metadata,
      title: metaData()?.title || `Nurl Docs | ${metadataSlug()}`,
      description:
        metaData()?.description || `Learn how to use Nurl | ${metadataSlug()}`,
    };
  });

  const data = createMemo(() => docsData[slug()]);

  return (
    <>
      <Head {...metadata()} />
      <Nav />

      <Main>
        <Container maxW="100ch" minH="80dvh" paddingBlock="4" paddingInline="4">
          <Breadcrumb />

          <Suspense>
            <Show when={data()}>
              <Box class={css(proseCss)} w="full">
                <div innerHTML={data()} />
              </Box>
            </Show>
          </Suspense>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
