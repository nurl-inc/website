import { animate, scroll } from 'motion';
import { onMount } from 'solid-js';
import { HStack, VStack } from 'styled-system/jsx';
import { BookIcon, PullRequestIcon } from '~/components/icons';
import {
  FeatureCardWithPoints,
  FeatureCardWithPointsItem,
  HeadingFeatureCard,
} from '~/components/ui';

export default function KeySanctumFeatures() {
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
        w="full"
        md={{ w: 'calc(50% - 1rem)' }}
      >
        <FeatureCardWithPoints heading="Real version control">
          <FeatureCardWithPointsItem
            icon={<PullRequestIcon color="#435356" />}
            label="Keep track of every change"
          />
          <FeatureCardWithPointsItem
            icon={<BookIcon color="#435356" />}
            label="Rollback to a previous state when needed"
          />
        </FeatureCardWithPoints>
        <HeadingFeatureCard
          heading="Automated testing"
          description="Ensure each update doesn't introduce breaking changes in your system."
          palette="secondary"
        />
      </VStack>

      <VStack
        id="player-features-last-column"
        gap="4"
        w="full"
        md={{
          pt: 28,
          w: 'calc(50% - 1rem)',
        }}
      >
        <HeadingFeatureCard
          heading="Create with Confidence"
          description="Validate your game scales correctly with each change and something doesn't break at higher levels."
          palette="tertiary"
        />
        <HeadingFeatureCard
          heading="Direct Insights"
          description="See how players interact with your games with the Nurl Play integration."
          palette="accent"
        />
      </VStack>
    </HStack>
  );
}
