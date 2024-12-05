import { useParams, type RouteSectionProps } from '@solidjs/router';
import { createMemo, createResource, lazy, Show, Suspense } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Container } from 'styled-system/jsx';
import { getLegalContent } from '~/api';
import { Breadcrumb } from '~/components/shared/breadcrumb';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { makeSlug } from '~/primitives/makeSlug';
import { proseCss } from '~/styles/prose';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';

const Footer = lazy(() => import('~/components/shared/footer'));

const metadata: Metadata = {
  title: 'Nurl | Legal',
  description: 'Read our terms and privacy policy.',
  keywords: `${keywords.base.join(', ')}, ${keywords.help.join(', ')}`,
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

export default function LegalPage(props: RouteSectionProps<RouteData>) {
  const { legalSlug } = useParams();
  const slug = makeSlug(legalSlug);

  const metadata = createMemo(() => {
    return {
      ...props.data.metadata,
      title: `Nurl | ${slug()}`,
      description: `Read our ${slug()}`,
    };
  });

  const [data] = createResource(() => getLegalContent(legalSlug));

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

      <Footer />
    </>
  );
}
