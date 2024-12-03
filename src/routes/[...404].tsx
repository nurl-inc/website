import type { RouteSectionProps } from '@solidjs/router';
import { Container, VStack } from 'styled-system/jsx';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { Text } from '~/components/ui';
import type { Metadata } from '~/types';

const metadata: Metadata = {
  title: 'Nurl | Page Not Found',
  description: 'The page you are looking for does not exist.',
  keywords: 'nurl, page not found, 404',
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

export default function NotFound(props: RouteSectionProps<RouteData>) {
  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />
      <Main>
        <Container>
          <VStack h="calc(100dvh - 100px)" justify="center">
            <Text as="h1" textStyle="heading-xl">
              Crit Fail
            </Text>
            <Text textStyle="body-xl">
              You've stumbled into the void. The page you are looking for does
              not exist.
            </Text>
          </VStack>
        </Container>
      </Main>
    </>
  );
}
