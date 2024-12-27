import { createAsync, type RouteSectionProps } from '@solidjs/router';
import { createMemo, createSignal, For, onMount, Show } from 'solid-js';
import { Box, Container, HStack, VStack } from 'styled-system/jsx';
import { PricingCard } from '~/components/ui/pricing-card';
import { Footer, Main, Nav } from '~/components/shared';
import { Head } from '~/components/shared';
import { Tabs, Text } from '~/components/ui';
import type { Metadata } from '~/types';

import keywords from '~/data/keywords.json';
import { getSanctumPricingData } from '~/lib/db';
import { staggerFadeIn } from '~/lib/motion';

/**
 * This module is the main entry point for the sanctum page.
 * @module route:sanctum
 */

const metadata: Metadata = {
  title: 'Nurl Sanctum | Pricing',
  description:
    'Pricing for the Nurl Sanctum. Plans that scale with your growth.',
  keywords: `${keywords.base.join(', ')}, ${keywords.sanctum.join(', ')}`,
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

export default function SanctumPricing(props: RouteSectionProps<RouteData>) {
  const [activePrice, setActivePrice] = createSignal<'1' | '2'>('1');
  const data = createAsync(() => getSanctumPricingData());

  const tabs = createMemo(() => {
    return [
      { id: '1', label: 'Monthly' },
      { id: '2', label: 'Annual' },
    ];
  });

  const annualFeatures = createMemo(() => {
    const baseFeats =
      data()?.products.find((product) => product.id === '2')?.features ?? [];

    return activePrice() === '2'
      ? [...baseFeats, 'One-time implementation']
      : baseFeats;
  });

  onMount(() => {
    staggerFadeIn('#pricing-card');
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
              Transform Your Game Development
            </Text>
            <Text
              textStyle={{
                base: 'body-lg',
                md: 'body-xl',
              }}
            >
              Choose the plan that fits your creative vision. All plans include
              our core visual system mapping and testing tools.
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
                <Show when={data()?.products?.length}>
                  <HStack
                    flexWrap="wrap"
                    gap="4"
                    justify="center"
                    paddingBlockStart="12"
                    w="full"
                  >
                    <For each={data()?.products}>
                      {(product) => (
                        <PricingCard
                          {...product}
                          activePrice={activePrice()}
                          features={
                            product.id === '1'
                              ? product.features
                              : annualFeatures()
                          }
                        />
                      )}
                    </For>

                    <Show when={activePrice() === '1'}>
                      <For each={data()?.addOns}>
                        {(addOn) => (
                          <PricingCard {...addOn} palette="secondary" />
                        )}
                      </For>
                    </Show>
                  </HStack>
                </Show>
              </Tabs>
            </Box>
          </VStack>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
