import { useParams, type RouteSectionProps } from '@solidjs/router';
import { createMemo, createResource, Show, Suspense } from 'solid-js';
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

const metadata: Metadata = {
  title: 'Nurl | Blog',
  description: 'Read our blog posts.',
  keywords: 'nurl, blog',
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
  const { blogSlug } = useParams();
  const slug = makeSlug(blogSlug);

  const metadata = createMemo(() => {
    return {
      ...props.data.metadata,
      title: `Nurl | ${slug()} Blog`,
      description: `Read our ${slug()} blog post.`,
      keywords: `nurl, blog, ${slug()}`,
    };
  });

  const [data] = createResource(() => getBlogContent(blogSlug));

  return (
    <>
      <Head {...metadata()} />
      <Nav />
      <Main>
        <Container>
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
    </>
  );
}
