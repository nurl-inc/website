import { createMediaQuery } from '@solid-primitives/media';
import { lazy, onMount, Suspense } from 'solid-js';
import { Box } from 'styled-system/jsx';
import { animatePath } from '~/lib/motion';

const SanctumValueSection = lazy(() => import('./value-section'));

export default function PublisherValues() {
  const isSmall = createMediaQuery('(max-width: 767px)');

  onMount(() => {
    if (!isSmall()) {
      // Wait for the elements to be loaded into the DOM
      setTimeout(() => {
        const paths = document.querySelectorAll('#animating-path');
        paths.forEach((path) => animatePath(path));
      }, 200);
    }
  });

  return (
    <Box
      id="learn-more"
      paddingBlock={{
        base: 10,
        md: 80,
      }}
      position="relative"
      w="full"
      _before={{
        bgGradient: 'to-b',
        gradientFrom: 'page.surface.initial',
        gradientTo: 'transparent',
        content: '""',
        h: '15rem',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 'decorator',
      }}
    >
      <Box
        bgGradient="bigGlow"
        h="100dvh"
        left={0}
        position="fixed"
        right={0}
        top={0}
        zIndex="hide"
      />

      <Suspense>
        <SanctumValueSection
          idx={1}
          heading="Visualize your game"
          description="See your entire game system at a glance. Spot connections, balance issues, and opportunities instantly."
          image="sanctum"
        />
        <SanctumValueSection
          idx={2}
          heading="Create with Confidence"
          description="Our visual tools make complex game design intuitive. Build, test, and iterate faster than ever."
        />
        <SanctumValueSection
          idx={3}
          heading="Publish with Power"
          description="From rules to content, manage your entire game library in one professional platform."
        />
      </Suspense>
    </Box>
  );
}
