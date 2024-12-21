import { createAsync } from '@solidjs/router';
import { For, onMount } from 'solid-js';
import { Box, HStack, VStack } from 'styled-system/jsx';
import { SocialCard, Text } from '~/components/ui';
import { getSocialProofData } from '~/lib/db';
import { scrollFadeInOut } from '~/lib/motion';

export default function SocialProof() {
  const socialProof = createAsync(() => getSocialProofData());

  onMount(() => {
    const target = document.getElementById('social-proof-heading');
    const socialCards = document.querySelectorAll('.social-card');
    if (target) scrollFadeInOut(target);
    if (socialCards) {
      socialCards.forEach((card) => {
        scrollFadeInOut(card);
      });
    }
  });

  return (
    <Box
      paddingBlock="36"
      paddingInline="8"
      w="full"
      md={{
        paddingInline: 16,
        paddingBlock: 60,
      }}
    >
      <HStack
        alignItems="flex-start"
        justify="space-between"
        flexWrap={{
          base: 'wrap',
          md: 'nowrap',
        }}
        w="full"
      >
        <Text
          as="h2"
          id="social-proof-heading"
          lineHeight="1"
          maxW="28rem"
          textStyle={{
            base: 'heading-sm',
            md: 'heading-md',
          }}
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
            w: '1/2',
          }}
        >
          <For each={socialProof()}>
            {(item) => <SocialCard quote={item.quote} author={item.author} />}
          </For>
        </VStack>
      </HStack>
    </Box>
  );
}
