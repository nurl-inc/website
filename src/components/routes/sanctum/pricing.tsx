import { createAsync } from '@solidjs/router';
import { For, onMount } from 'solid-js';
import { Box, HStack } from 'styled-system/jsx';
import { Text } from '~/components/ui';
import { PricingCard } from '~/components/ui/pricing-card';
import { getSanctumPricingData } from '~/lib/db';
import { scrollFadeInOut } from '~/lib/motion';

export default function SanctumPricing() {
  const data = createAsync(() => getSanctumPricingData());

  onMount(() => {
    const target = document.getElementById('sanctum-pricing');
    scrollFadeInOut(target);
  });

  return (
    <Box
      id="sanctum-pricing"
      paddingBlock={{
        base: 20,
        md: 20,
      }}
      w="full"
    >
      <Text
        as="h2"
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
        <For each={data()?.products}>{(item) => <PricingCard {...item} />}</For>
      </HStack>
    </Box>
  );
}
