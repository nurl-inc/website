import { useParams, type RouteSectionProps } from '@solidjs/router';
import { createMemo, createResource, Show } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Container, VStack } from 'styled-system/jsx';
import { getLegalContent } from '~/api';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { Text } from '~/components/ui';
import { makeSlug } from '~/primitives/makeSlug';
import { proseCss } from '~/styles/prose';
import type { Metadata } from '~/types';

const metadata: Metadata = {
  title: 'Nurl | Legal',
  description: 'Read our terms and privacy policy.',
  keywords: 'nurl, legal, terms, privacy',
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
      keywords: `nurl, legal, ${slug()}`,
    };
  });

  const [data] = createResource(() => getLegalContent(legalSlug));

  return (
    <>
      <Head {...metadata()} />
      <Nav />
      <Main>
        <Container>
          <Show when={data()}>
            <Box class={css(proseCss)} paddingBlockStart="10" w="full">
              <div innerHTML={data()!.html as string} />
            </Box>
          </Show>
        </Container>
      </Main>
    </>
  );
}
