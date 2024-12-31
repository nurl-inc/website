import { createAsync, type RouteSectionProps } from '@solidjs/router';
import { createMemo, createSignal, For, onMount, Show } from 'solid-js';
import { Box, Container, HStack, VStack } from 'styled-system/jsx';
import { PricingCard } from '~/components/ui/pricing-card';
import { Footer, Main, Markdown, Nav, TextList } from '~/components/shared';
import { Head } from '~/components/shared';
import { Accordion, AccordionItem, Link, Tabs, Text } from '~/components/ui';
import type { Metadata } from '~/types';
import { staggerSlideInFromBottom } from '~/lib/motion';
import { MailIcon } from '~/components/icons';
import { css } from 'styled-system/css';
import { getPlayPricingPageData } from '~/lib/db/play';

import keywords from '~/data/keywords.json';
import HeroQuote from '~/components/ui/hero-quote';

/**
 * This module is the main entry point for the play page.
 * @module route:play
 */

const metadata: Metadata = {
  title: 'Nurl Play | Pricing',
  description: 'Pricing for the Nurl Play. Plans that scale with your growth.',
  keywords: `${keywords.base.join(', ')}, ${keywords.play.join(', ')}`,
  image: 'https://nurl.website/og-meta-play.png',
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

export default function PlayPricing(props: RouteSectionProps<RouteData>) {
  const [activePrice, setActivePrice] = createSignal<'1' | '2'>('1');

  const data = createAsync(() => getPlayPricingPageData());

  const tabs = createMemo(() => {
    return [
      { id: '1', label: 'Monthly' },
      { id: '2', label: 'Annual' },
    ];
  });

  onMount(() => {
    staggerSlideInFromBottom('#pricing-card');
  });

  return (
    <>
      <Head {...props.data.metadata} />
      <Nav />

      <Main>
        <Container
          paddingBlock={{
            base: '20',
            md: '32',
          }}
        >
          <VStack alignItems="flex-start" w="full">
            <Text
              as="h1"
              lineHeight="1.2"
              textStyle={{
                base: 'heading-sm',
                md: 'heading-lg',
              }}
            >
              Enhance Your Tabletop Experience
            </Text>
            <Text
              textStyle={{
                base: 'body-lg',
                md: 'body-xl',
              }}
            >
              Keep the physical play you love while automating the complex.
              Choose the plan that fits your group's style.
            </Text>

            <Text
              as="h2"
              paddingBlockStart="12"
              paddingBlockEnd="4"
              textStyle="heading-xs"
              md={{
                paddingBlockEnd: 20,
                textStyle: 'heading-md',
              }}
            >
              Pricing Plans
            </Text>

            <Box w="full">
              <Tabs
                defaultValue="1"
                onChange={setActivePrice}
                tabs={tabs()}
                value={activePrice()}
              >
                <Show when={data()?.pricing?.products?.length}>
                  <HStack
                    flexWrap="wrap"
                    gap="4"
                    justify="center"
                    paddingBlockStart="12"
                    w="full"
                  >
                    <For each={data()?.pricing?.products}>
                      {(product) => (
                        <PricingCard
                          {...product}
                          activePrice={activePrice()}
                          variant="play"
                          palette={product.id === '3' ? 'secondary' : 'primary'}
                        />
                      )}
                    </For>
                  </HStack>

                  <Box paddingBlockStart="12" w="full">
                    <Text
                      as="h2"
                      lineHeight="1.2"
                      paddingBlockEnd="4"
                      textAlign="center"
                      textStyle="heading-sm"
                    >
                      Add-Ons
                    </Text>
                    <HStack
                      flexWrap="wrap"
                      gap="4"
                      justify="center"
                      paddingBlockStart="12"
                      w="full"
                    >
                      <For each={data()?.pricing?.addOns}>
                        {(addOn) => (
                          <PricingCard
                            {...addOn}
                            palette="secondary"
                            variant="play"
                          />
                        )}
                      </For>
                    </HStack>
                  </Box>
                </Show>
              </Tabs>
            </Box>

            <Box
              paddingBlockStart={{
                base: '20',
                md: '44',
              }}
              paddingBlockEnd="20"
              w="full"
            >
              <Text
                as="h2"
                lineHeight="1.2"
                paddingBlockEnd="10"
                textStyle={{
                  base: 'heading-sm',
                  md: 'heading-md',
                }}
              >
                All Plans Include
              </Text>

              <Show when={data()?.features?.include}>
                <Text as="h3" textStyle="heading-xs">
                  Core Features
                </Text>
                <TextList>
                  <For each={data()?.features?.include.core}>
                    {(item) => <li>{item}</li>}
                  </For>
                </TextList>

                <Text as="h3" textStyle="heading-xs">
                  Security &amp; Support
                </Text>
                <TextList>
                  <For each={data()?.features?.include.security}>
                    {(item) => <li>{item}</li>}
                  </For>
                </TextList>
              </Show>
            </Box>

            <Box paddingBlockEnd="20" w="full">
              <Text
                as="h2"
                lineHeight="1.2"
                paddingBlockEnd="10"
                textStyle={{
                  base: 'heading-sm',
                  md: 'heading-md',
                }}
              >
                Made for Every Player
              </Text>

              <Show when={data()?.features?.madeFor}>
                <Text as="h3" textStyle="heading-xs">
                  Players
                </Text>
                <TextList>
                  <For each={data()?.features?.madeFor.players}>
                    {(item) => <li>{item}</li>}
                  </For>
                </TextList>

                <Text as="h3" textStyle="heading-xs">
                  Game Masters
                </Text>
                <TextList>
                  <For each={data()?.features?.madeFor.gameMasters}>
                    {(item) => <li>{item}</li>}
                  </For>
                </TextList>
              </Show>
            </Box>

            <Box paddingBlockEnd="24" w="full">
              <Text
                as="h2"
                lineHeight="1.2"
                paddingBlockEnd="10"
                textStyle={{
                  base: 'heading-sm',
                  md: 'heading-md',
                }}
              >
                Frequently Asked Questions
              </Text>

              <Show when={data()?.faq?.length}>
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
              </Show>
            </Box>

            <Box w="full">
              <Text
                as="h2"
                lineHeight="1.2"
                paddingBlockEnd="10"
                textStyle={{
                  base: 'heading-sm',
                  md: 'heading-md',
                }}
              >
                Why Players Love Nurl Play
              </Text>

              <Show when={data()?.features?.madeFor}>
                <Text as="h3" textStyle="heading-xs">
                  Alpha Success Metrics
                </Text>
                <TextList>
                  <li>40% less time spent on rules lookup</li>
                  <li>60% faster combat resolution</li>
                  <li>90% reduction in math errors</li>
                  <li>75% less time tracking states</li>
                </TextList>
              </Show>
            </Box>

            <Box paddingBlockStart="20" w="full">
              <Container
                maxWidth="70rem"
                paddingBlock="36"
                paddingInline="8"
                w="full"
                md={{
                  paddingBlockEnd: 'initial',
                }}
              >
                <VStack w="full">
                  <Text
                    as="h2"
                    id="social-proof-heading"
                    lineHeight="1"
                    fontSize="lg"
                    textStyle="heading-xs"
                    textWrap="balance"
                  >
                    Tales from the Nurl tavern
                  </Text>

                  <VStack
                    justify="center"
                    gap="4"
                    paddingBlock="24"
                    w="full"
                    md={{
                      gap: 6,
                      paddingBlock: 56,
                    }}
                  >
                    <HeroQuote
                      author="Alex, D&D Player"
                      quote="Finally, I can focus on the story instead of constantly checking rules."
                    />
                    <HeroQuote
                      author="Sarah, Game Master"
                      quote="My group's combat flows like a video game now, but we still get to roll our dice!"
                    />
                  </VStack>
                </VStack>
              </Container>
            </Box>

            <Box w="full">
              <Text
                as="h2"
                lineHeight="1.2"
                paddingBlockEnd="4"
                textStyle={{
                  base: 'heading-sm',
                  md: 'heading-md',
                }}
              >
                Still have questions?
              </Text>
              <Text
                as="em"
                fontStyle="oblique"
                textStyle={{
                  base: 'body-lg',
                  md: 'body-xl',
                }}
              >
                Ask us how Nurl Play can enhance your tabletop experience today.
              </Text>

              <Box paddingBlockStart="12" w="full">
                <Link href="/contact">
                  <span class={css({ w: '5' })}>
                    <MailIcon />
                  </span>
                  Contact Us
                </Link>
              </Box>
            </Box>
          </VStack>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
