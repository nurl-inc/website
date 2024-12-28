import { animate, scroll } from 'motion';
import { onMount } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, HStack, VStack } from 'styled-system/jsx';
import { BookIcon } from '~/components/icons';
import {
  FeatureCardWithPoints,
  FeatureCardWithPointsItem,
  HeadingFeatureCard,
} from '~/components/ui';

export default function KeyPlayFeatures() {
  onMount(() => {
    const firstColumn = document.getElementById('player-features-first-column');
    const lastColumn = document.getElementById('player-features-last-column');
    const cards = document.querySelectorAll('.feature-card');

    if (firstColumn && lastColumn) {
      scroll(animate(firstColumn, { y: '-50%' }));
      scroll(animate(lastColumn, { y: '50%' }));
    }
    if (cards) {
      cards.forEach((item) => {
        scroll(animate(item, { opacity: [0, 1, 1, 0] }, { ease: 'linear' }), {
          target: item,
          offset: ['start end', 'end end', 'start start', 'end start'],
        });
      });
    }
  });

  return (
    <HStack flexWrap="wrap" gap="4" w="full">
      <VStack
        id="player-features-first-column"
        gap="4"
        paddingBlockStart="20"
        w="full"
        md={{ w: 'calc(50% - 1rem)' }}
      >
        <FeatureCardWithPoints heading="Realtime group notes">
          <FeatureCardWithPointsItem
            icon={<BookIcon color="#435356" />}
            label="Reference anything from your group"
          />
          <FeatureCardWithPointsItem
            icon={<BookIcon color="#435356" />}
            label="One-click character dictionary"
          />
        </FeatureCardWithPoints>
        <HeadingFeatureCard
          heading="Combat Arena"
          description="Automated combat in all the right places so you can focus on the battle."
          palette="secondary"
        >
          <Box
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            mx="auto"
            maxW="37.5rem"
            overflow="hidden"
          >
            <img
              alt="Combat Arena screen shot"
              class={css({
                w: 'full',
              })}
              decoding="async"
              loading="lazy"
              src="/images/combat-arena.webp"
            />
          </Box>
        </HeadingFeatureCard>
      </VStack>

      <VStack
        id="player-features-last-column"
        gap="4"
        w="full"
        md={{
          marginBlockStart: '-10rem',
          w: 'calc(50% - 1rem)',
        }}
      >
        <HeadingFeatureCard
          heading="Customizable"
          description="Install or build custom plugins to enhance and personalize your experience."
          palette="tertiary"
        />
        <HeadingFeatureCard
          heading="Realtime Group Chat"
          description="Talk, get help, or share quick links to anything in the game."
          palette="accent"
        >
          <Box
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            mx="auto"
            maxW="37.5rem"
            overflow="hidden"
          >
            <img
              alt="Chat screen shot"
              class={css({
                w: 'full',
              })}
              decoding="async"
              loading="lazy"
              src="/images/chat.webp"
            />
          </Box>
        </HeadingFeatureCard>
      </VStack>
    </HStack>
  );
}
