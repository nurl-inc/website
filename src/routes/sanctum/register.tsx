import { For, Index, lazy, Suspense } from 'solid-js';
import { Box, Container, VStack } from 'styled-system/jsx';
import { createAsync, type RouteSectionProps } from '@solidjs/router';
import { Footer, Main, Markdown, Nav, TextList } from '~/components/shared';
import { Head } from '~/components/shared';
import {
  Accordion,
  AccordionItem,
  SectionHeading,
  Text,
} from '~/components/ui';
import type { Metadata } from '~/types';
import { getSanctumRegisterData } from '~/lib/db';

// data
import baseKeywords from '~/data/keywords/base.json';
import sanctumKeywords from '~/data/keywords/sanctum-register.json';

const SanctumRegisterForm = lazy(() => import('~/forms/sanctum-register'));

/**
 * This module is the main entry point for the sanctum page.
 * @module route:sanctum
 */

const metadata: Metadata = {
  title: 'Nurl Sanctum Register: TTRPG Development Platform',
  description:
    'Join the Nurl Sanctum beta program. Transform your tabletop RPG development with visual system mapping, instant validation, and seamless play-testing. Cut development time in half.',
  keywords: `${baseKeywords.join(', ')}, ${sanctumKeywords.join(', ')}`,
  image: 'https://nurl.website/og-meta-sanctum.png',
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

export default function SanctumRegister(props: RouteSectionProps<RouteData>) {
  const data = createAsync(() => getSanctumRegisterData());

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
                Transform Your Game Development with Nurl Sanctum
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
                The Sacred Space Where Games Take Shape
              </Text>
              <Text
                maxW="prose"
                textStyle={{
                  base: 'body-md',
                  md: 'body-lg',
                }}
              >
                Visualize your entire game system at a glance. Test rule
                interactions instantly. Cut development time in half. Request
                beta access to start transforming your game development process.
              </Text>
            </Box>

            <Box w="full">
              <SectionHeading>Why Sanctum?</SectionHeading>
              <TextList>
                <Index each={data()?.why}>
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
              <SectionHeading>What Beta Partners Get</SectionHeading>
              <TextList>
                <Index each={data()?.what}>
                  {(content) => (
                    <li>
                      <Text>{content()}</Text>
                    </li>
                  )}
                </Index>
              </TextList>
            </Box>

            <Suspense>
              <SanctumRegisterForm />
            </Suspense>

            <Box w="full">
              <SectionHeading>Beta Timeline</SectionHeading>
              <TextList>
                <Index each={data()?.timeline}>
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
              <SectionHeading>FAQ</SectionHeading>
              <Accordion>
                <For each={data()?.faq}>
                  {(item) => (
                    <AccordionItem
                      heading={item.question}
                      value={item.question}
                    >
                      <Markdown content={item.answer} />
                    </AccordionItem>
                  )}
                </For>
              </Accordion>
            </Box>

            <Box w="full">
              <SectionHeading>Stay Updated</SectionHeading>
              <Text>
                Can't commit to beta yet? Stay informed about our progress:
              </Text>
              <TextList>
                <Index each={data()?.timeline}>
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
          </VStack>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
