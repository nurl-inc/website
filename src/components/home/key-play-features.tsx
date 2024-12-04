import { animate, scroll } from 'motion';
import { onMount } from 'solid-js';
import { HStack, VStack } from 'styled-system/jsx';
import { featureCard } from 'styled-system/recipes';
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
          description="Automated combat in all the right places so you can focus on the battle."
          class={featureCard({ cushion: 'md', palette: 'secondary' })}
        >
          Combat Arena
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
        <HeadingFeatureCard description="Install or build custom plugins to enhance and personalize your experience.">
          Customizable
        </HeadingFeatureCard>
        <HeadingFeatureCard
          description="Talk, get help, or share quick links to anything in the game."
          class={featureCard({ cushion: 'md', palette: 'tertiary' })}
        >
          Realtime Group Chat
        </HeadingFeatureCard>
      </VStack>
    </HStack>
  );
}
