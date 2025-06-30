import { lazy, onMount, Suspense } from 'solid-js';
import { Box } from 'styled-system/jsx';
import { animatePath } from '~/lib/motion';
import { createBlackDotsEffect } from '~/lib/vanta';
import { createMediaQuery } from '~/primitives/media';

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

    const vantaBox = document.getElementById('value-fallback-bg');
    if (vantaBox) createBlackDotsEffect(vantaBox);
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
          heading="Ignite your imagination"
          description="Use our TTRPG Canvas&trade; to organize your ideas into a cohesive game system."
          image="sanctum"
        />
        <SanctumValueSection
          idx={2}
          heading="Create with Confidence"
          description="Create your system blocks without the hassle of worrying about balance or refinement."
        />
        <SanctumValueSection
          idx={3}
          heading="Test without Hassle"
          description="Get valuable feedback from players and test your game in a safe environment."
          image="battle"
        />
      </Suspense>
    </Box>
  );
}
