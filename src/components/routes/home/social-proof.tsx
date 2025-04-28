import { createAsync } from '@solidjs/router';
import { For, lazy, onMount, Suspense } from 'solid-js';
import { Box, Container, VStack } from 'styled-system/jsx';
import { Text } from '~/components/ui';
import { getSocialProofData } from '~/lib/db';
import { scrollFadeInOut } from '~/lib/motion';

const HeroQuote = lazy(() => import('~/components/ui/hero-quote'));

export default function SocialProof() {
  const socialProof = createAsync(() => getSocialProofData());

  onMount(() => {
    const target = document.getElementById('social-proof-heading');
    const socialCards = document.querySelectorAll('.hero-quote');
    if (target) scrollFadeInOut(target);
    if (socialCards) {
      socialCards.forEach((card) => {
        if (card) scrollFadeInOut(card);
      });
    }
  });

  return (
    <Box w="full" bgColor="#0B0D0E">
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
            <Suspense>
              <For each={socialProof()}>
                {(item) => (
                  <HeroQuote quote={item.quote} author={item.author} />
                )}
              </For>
            </Suspense>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
}
