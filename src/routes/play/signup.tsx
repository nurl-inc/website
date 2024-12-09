import { createMemo, Index, lazy, Suspense } from 'solid-js';
import type { RouteSectionProps } from '@solidjs/router';
import { Box, Container, VStack } from 'styled-system/jsx';
import { TextList, Head, Main, Nav } from '~/components/shared';
import { SectionHeading, SocialCard, Text } from '~/components/ui';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';
import signup from '~/data/signup.json';

const PlaySignupForm = lazy(() => import('~/forms/play-signup'));
const Footer = lazy(() => import('~/components/shared/footer'));

/**
 * This module is the main entry point for the play signup page.
 * @module route:play:signup
 */

const metadata: Metadata = {
  title: 'Nurl | Join Nurl Play: Enhance Your Tabletop RPG Experience',
  description:
    'Join the waitlist for Nurl Play and enhance your tabletop RPG experience with video game-like automation. Keep the physical experience you love while automating the complex. Early access and exclusive benefits for beta users.',
  keywords: `${keywords.base.join(', ')}, ${keywords.play.join(', ')} , nurl play signup`,
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

export default function Signup(props: RouteSectionProps<RouteData>) {
  const data = createMemo(() => signup.play);

  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <Main>
        <Container
          minH="70dvh"
          paddingBlock={{
            base: '20',
            md: '32',
          }}
        >
          <VStack alignItems="flex-start" gap={{ base: 8, md: 12 }} w="full">
            <Box w="full">
              <Text
                as="h1"
                lineHeight="1"
                textGradient="tertiary"
                textStyle={{
                  base: 'heading-sm',
                  md: 'heading-md',
                }}
              >
                Join the future of Tabletop Gaming
              </Text>
              <Text
                as="h2"
                lineHeight="1"
                marginBlock={{
                  base: 4,
                  md: 8,
                }}
                textStyle={{
                  base: 'heading-xs',
                  md: 'heading-sm',
                }}
              >
                Enhance Your Games, Keep the Magic
              </Text>
              <Text
                maxW="prose"
                textStyle={{
                  base: 'body-md',
                  md: 'body-lg',
                }}
              >
                Experience tabletop gaming with video game-like automation while
                preserving the physical experience you love. Join the waitlist
                for early access to Nurl Play.
              </Text>
            </Box>

            <Box w="full">
              <SectionHeading>What to Expect</SectionHeading>
              <TextList>
                <Index each={data().expect}>
                  {(content) => (
                    <li>
                      <Text>
                        <Text as="strong">{content().title}</Text>{' '}
                        {content().description}
                      </Text>
                    </li>
                  )}
                </Index>
              </TextList>
            </Box>

            <Box w="full">
              <SectionHeading>Why Join the Waitlist?</SectionHeading>
              <TextList>
                <Index each={data().why}>
                  {(content) => (
                    <li>
                      <Text>{content()}</Text>
                    </li>
                  )}
                </Index>
              </TextList>
            </Box>

            <Suspense>
              <PlaySignupForm />
            </Suspense>

            <Box w="full">
              <SectionHeading>What Happens Next?</SectionHeading>
              <TextList>
                <Index each={data().next}>
                  {(content) => (
                    <li>
                      <Text>
                        <Text as="strong">{content().title}:</Text>{' '}
                        {content().description}
                      </Text>
                    </li>
                  )}
                </Index>
              </TextList>
            </Box>

            <Box w="full">
              <SectionHeading>Beta Timeline</SectionHeading>
              <TextList>
                <Index each={data().timeline}>
                  {(content) => (
                    <li>
                      <Text>
                        <Text as="strong">{content().title}:</Text>{' '}
                        {content().description}
                      </Text>
                    </li>
                  )}
                </Index>
              </TextList>
            </Box>

            <Box w="full">
              <SectionHeading>Community Previews</SectionHeading>
              <VStack
                alignItems="flex-start"
                gap={{
                  base: 4,
                  md: 8,
                }}
                w="full"
              >
                <Index each={data().community}>
                  {(content) => (
                    <SocialCard
                      quote={content().quote}
                      author={content().author}
                    />
                  )}
                </Index>
              </VStack>
            </Box>

            <Box w="full">
              <SectionHeading>FAQ</SectionHeading>
              Make new accordion
            </Box>
          </VStack>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
