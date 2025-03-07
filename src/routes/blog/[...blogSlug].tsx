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
import blogData from '~/data/generated/blog.json';
import { getBlogPostData } from '~/lib/db/blog';

const Footer = lazy(() => import('~/components/shared/footer'));

const metadata: Metadata = {
  title: 'Nurl | Blog',
  description: 'Read our blog posts.',
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

export default function BlogPage(props: RouteSectionProps<RouteData>) {
  const slug = () => props.params.blogSlug as keyof typeof blogData;
  const metadataSlug = () => makeSlug(props.params.blogSlug);

  const metaData = createAsync(() => getBlogPostData(slug()));

  const metadata = createMemo(() => {
    return {
      ...props.data.metadata,
      title: metaData()?.title || `Nurl Blog | ${metadataSlug()}`,
      description:
        metaData()?.description || `Read our ${metadataSlug()} blog post.`,
    };
  });

  const data = createMemo(() => blogData[slug()]);

  return (
    <>
      <Head {...metadata()} />
      <Nav />

      <Main>
        <Container maxW="100ch" minH="80dvh" paddingBlock="4" paddingInline="4">
          <Breadcrumb />
          <Suspense>
            <Show when={data()}>
              <Box class={css(proseCss)} paddingBlockStart="10" w="full">
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
