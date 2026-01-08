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
          heading="Collaborate seamlessly"
          description="Create your organization and invite everyone working alongside you."
        />
        <SanctumValueSection
          idx={2}
          heading="repositories that scale"
          description="Create workspaces for each unqiue project that people can follow or contribute to."
          image="sanctum"
        />
        <SanctumValueSection
          idx={3}
          heading="Create with Confidence"
          description="Files for everything. From brainstorming down to low-level game system development. We have you covered."
        />
        <SanctumValueSection
          idx={4}
          heading="Advanced Version Control"
          description="From branching to automated snapshots of every file change. Work without worry."
          image="battle"
        />
      </Suspense>
    </Box>
  );
}
