import { useParams, type RouteSectionProps } from '@solidjs/router';
import { createMemo } from 'solid-js';
import { Container, VStack } from 'styled-system/jsx';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { Text } from '~/components/ui';
import { makeSlug } from '~/primitives/makeSlug';
import type { Metadata } from '~/types';

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

  return (
    <>
      <Head {...metadata()} />
      <Nav />
      <Main>
        <Container>
          <VStack h="calc(100dvh - 100px)" justify="center">
            <Text as="h1" textStyle="heading-xl">
              {blogSlug}
            </Text>

            {props.children}
          </VStack>
        </Container>
      </Main>
    </>
  );
}
