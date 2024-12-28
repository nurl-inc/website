import { createAsync } from '@solidjs/router';
import { For, onMount } from 'solid-js';
import { Box, Container, HStack } from 'styled-system/jsx';
import { Text } from '~/components/ui';
import { PricingCard } from '~/components/ui/pricing-card';
import { getPlayPricingData } from '~/lib/db/play';
import { scrollFadeInOut } from '~/lib/motion';

export default function PlayPricing() {
  const data = createAsync(() => getPlayPricingData());

  onMount(() => {
    const target = document.getElementById('play-pricing-heading');
    scrollFadeInOut(target);
  });

  return (
    <Box
      paddingBlock={{
        base: 20,
        md: 20,
      }}
      w="full"
      zIndex="decorator"
    >
      <Container>
        <Text
          as="h2"
          id="play-pricing-heading"
          textAlign="center"
          textStyle={{
            base: 'heading-sm',
            md: 'heading-lg',
          }}
        >
          Plans &amp; Pricing
        </Text>

        <HStack
          paddingBlock={{
            base: 20,
            md: 44,
          }}
          flexWrap="wrap"
          gap="4"
          justify="center"
          w="full"
        >
          <For each={data()?.products}>
            {(item, index) => (
              <PricingCard
                {...item}
                palette={index() === 2 ? 'secondary' : 'primary'}
                teaser
                variant="play"
              />
            )}
          </For>
        </HStack>
      </Container>
    </Box>
  );
}
