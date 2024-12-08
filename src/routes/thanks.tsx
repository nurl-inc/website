import { A, type RouteSectionProps } from '@solidjs/router';
import { Box, Container, VStack } from 'styled-system/jsx';
import { button } from 'styled-system/recipes';
import Footer from '~/components/shared/footer';
import Head from '~/components/shared/head';
import Main from '~/components/shared/main';
import Nav from '~/components/shared/nav';
import { Button, Text } from '~/components/ui';

import keywords from '~/data/keywords.json';
import type { Metadata } from '~/types';

const metadata: Metadata = {
  title: 'Nurl | Thanks',
  description: 'Thanks for contacting us, we will get back to you soon.',
  keywords: `${keywords.base.join(', ')}}`,
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

export default function Thanks(props: RouteSectionProps<RouteData>) {
  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <Main>
        <Container h="75dvh">
          <VStack gap="6" h="full" justify="center" w="full">
            <Text
              as="h1"
              animationName="slideFromBottom, fadeIn"
              animationDuration="slow"
              animationFillMode="forwards"
              animationDelay="400ms"
              opacity="0"
              textStyle={{
                base: 'heading-sm',
                md: 'heading-lg',
              }}
            >
              Send message worked!
            </Text>
            <Text
              animationName="slideFromBottom, fadeIn"
              animationDuration="slow"
              animationFillMode="forwards"
              animationDelay="400ms"
              opacity="0"
              maxW="prose"
              textStyle={{ base: 'body-md', md: 'body-xl' }}
              textWrap="pretty"
            >
              Thankfully, we are on the same plane of existence so we can
              communicate successfully.
            </Text>

            <Text
              animationName="slideFromBottom, fadeIn"
              animationDuration="slow"
              animationFillMode="forwards"
              animationDelay="400ms"
              opacity="0"
              paddingBlockStart="4"
            >
              Please check your email. We will get back to you soon.
            </Text>

            <Box
              animationName="slideFromBottom, fadeIn"
              animationDuration="slow"
              animationFillMode="forwards"
              animationDelay="600ms"
              opacity="0"
              paddingBlockStart="10"
            >
              <A class={button()} href="/">
                Return home
              </A>
            </Box>
          </VStack>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
