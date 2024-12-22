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
        <FeatureCardWithPoints heading="Visualize your game">
          <FeatureCardWithPointsItem
            icon={<PullRequestIcon color="#435356" />}
            label="See your entire game system at a glance"
          />
          <FeatureCardWithPointsItem
            icon={<BookIcon color="#435356" />}
            label="Transform spreadsheets into clear information"
          />
        </FeatureCardWithPoints>
        <HeadingFeatureCard
          heading="Publish Power"
          description="From rules to content, manage your entire game library in one professional platform."
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
          description="Our visual tools make complex game design intuitive. Build, test, and iterate faster than ever."
          palette="tertiary"
        />
        <HeadingFeatureCard
          heading="Direct Insights"
          description="See how players interact with your games through Nurl Play integration."
          palette="accent"
        />
      </VStack>
    </HStack>
  );
}
