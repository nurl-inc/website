/* eslint-disable solid/no-innerhtml */

import { createAsync, query, type RouteSectionProps } from '@solidjs/router';
import { createMemo, lazy, Show, Suspense } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Container } from 'styled-system/jsx';
import { Breadcrumb } from '~/components/shared/breadcrumb';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { makeSlug } from '~/primitives/makeSlug';
import { proseCss } from '~/styles/prose';
import type { Metadata } from '~/types';
import { getLegalMetaData, getLegalPostData } from '~/lib/db/legal';

import keywords from '~/data/keywords.json';

const Footer = lazy(() => import('~/components/shared/footer'));

// Data

const legalPageData = query(async (slug: string) => {
  'use server';
  const meta = await getLegalMetaData();
  const content = await getLegalPostData(slug);
  return { meta: meta[slug as keyof typeof meta], content };
}, 'legal-page-data');

const metadata: Metadata = {
  title: 'Nurl | Legal',
  description: 'Read our terms and privacy policy.',
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

// Component

interface RouteData {
  metadata: Metadata;
}

export default function LegalPage(props: RouteSectionProps<RouteData>) {
  const slug = () => props.params.legalSlug;
  const metadataSlug = () => makeSlug(props.params.legalSlug);

  const data = createAsync(() => legalPageData(slug()));

  const metadata = createMemo(() => ({
    ...props.data.metadata,
    title:
      data()?.meta?.title ||
      `Nurl Legal | Learn about our ${metadataSlug()} policy`,
    description:
      data()?.meta?.description ||
      `Read about Nurl's ${metadataSlug()} policies and all the things you need to know about Nurl for both our Nurl Sanctum and Nurl Play platform.`,
  }));

  return (
    <>
      <Head {...metadata()} />
      <Nav />

      <Main>
        <Container minH="80dvh">
          <Suspense>
            <Show when={data()}>
              <Box class={css(proseCss)} paddingBlockStart="10" w="full">
                <Breadcrumb />
                <div innerHTML={data()?.content} />
              </Box>
            </Show>
          </Suspense>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
