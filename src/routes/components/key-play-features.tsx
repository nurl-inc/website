import { HStack, VStack } from 'styled-system/jsx';
import { featureCard } from 'styled-system/recipes';
import { BookIcon } from '~/components/icons';
import {
  FeatureCardWithPoints,
  FeatureCardWithPointsItem,
  HeadingFeatureCard,
} from '~/components/ui';

export default function KeyPlayFeatures() {
  return (
    <HStack flexWrap="wrap" gap="4" w="full">
      <VStack gap="4" w="full" md={{ w: 'calc(50% - 1rem)' }}>
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
        gap="4"
        w="full"
        md={{
          pt: 28,
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
