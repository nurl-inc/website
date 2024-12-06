import { useParams, type RouteSectionProps } from '@solidjs/router';
import { createMemo, createResource, lazy, Show, Suspense } from 'solid-js';
import { Box, Container } from 'styled-system/jsx';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { makeSlug } from '~/primitives/makeSlug';
import { getBlogContent } from '~/api';
import type { Metadata } from '~/types';
import { css } from 'styled-system/css';
import { proseCss } from '~/styles/prose';
import { Breadcrumb } from '~/components/shared/breadcrumb';

import keywords from '~/data/keywords.json';

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

export default function BlogPage(props: RouteSectionProps<RouteData>) {
  const params = useParams();
  const slug = () => params.blogSlug;
  const metadataSlug = () => makeSlug(params.legalSlug);

  const metadata = createMemo(() => {
    return {
      ...props.data.metadata,
      title: `Nurl | ${metadataSlug()} Blog`,
      description: `Read our ${metadataSlug()} blog post.`,
    };
  });

  const [data] = createResource(slug, getBlogContent);

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
                <div innerHTML={data()!.html as string} />
              </Box>
            </Show>
          </Suspense>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
