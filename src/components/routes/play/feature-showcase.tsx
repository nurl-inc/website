import { onCleanup, onMount, type ParentProps } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, Container, HStack, VStack } from 'styled-system/jsx';
import D20Icon from '~/components/icons/d20';
import { Text } from '~/components/ui';
import { scrollScaleIn } from '~/lib/motion';
import { createDotsEffect } from '~/lib/vanta';

export default function FeatureShowcase() {
  let vantaEffect: unknown;
  onMount(() => {
    const features = document.querySelectorAll('.play-feature');
    const vantaBox = document.getElementById('vanta-box');

    if (vantaBox) vantaEffect = createDotsEffect(vantaBox);

    features.forEach((feature) => {
      scrollScaleIn(feature);
    });
  });

  onCleanup(() => {
    if (vantaEffect) (vantaEffect as { destroy: () => void }).destroy();
  });

  return (
    <Box
      id="learn-more"
      paddingBlock={{
        base: 20,
        md: 80,
      }}
      position="relative"
      w="full"
      _before={{
        bgGradient: 'to-b',
        gradientFrom: 'page.surface.initial',
        gradientTo: 'transparent',
        content: '""',
        h: {
          base: '7rem',
          md: '15rem',
        },
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 'decorator',
      }}
    >
      <Box
        bgGradient="playGlow"
        h="100dvh"
        left={0}
        position="fixed"
        right={0}
        top={0}
        zIndex="hide"
      />

      <Container>
        <HStack
          alignItems="flex-start"
          flexWrap="wrap"
          gap="5"
          justify="center"
          w="full"
          zIndex="decorator"
        >
          <Box
            class="play-feature"
            bgColor="neutral.1000"
            overflowX="hidden"
            paddingBlock="8"
            paddingInline="6"
            position="relative"
            rounded="md"
            w="full"
            md={{
              paddingBlock: 14,
              paddingInline: 7,
              rounded: 'lg',
              w: 'calc(50% - 3rem)',
            }}
          >
            <FeatureCardHeading>Automate the complex</FeatureCardHeading>

            {/* <Box position="absolute" top="0" left="0" w="full" h="full">
              <img
                alt="Dungeons & Dragons logo"
                decoding="async"
                loading="lazy"
                src="/images/dnd-logo.webp"
              />
            </Box> */}

            <Box
              paddingBlockStart={{
                base: '11rem',
                md: '26.1rem',
              }}
              w="full"
            >
              <FeatureCardText>
                Focus on the story while{' '}
                <FeatureAccentText>
                  Nurl handles the math, tracking, and rule-checking.
                </FeatureAccentText>
              </FeatureCardText>
            </Box>
          </Box>

          <VStack gap="7" h="full" w={{ base: 'full', md: 'calc(50% - 3rem)' }}>
            <Box
              id="vanta-box"
              class="play-feature"
              bgColor="brand1.1000"
              overflow="hidden"
              paddingBlock="8"
              paddingInline="6"
              position="relative"
              minH="20.3rem"
              rounded="md"
              w="full"
              md={{
                paddingBlockStart: 16,
                paddingBlockEnd: 14,
                paddingInline: 8,
              }}
            >
              <Box paddingBlockEnd="5" w="2/3" zIndex="dropdown">
                <FeatureCardHeading>Keep the Social Magic</FeatureCardHeading>
              </Box>
              <Box w={{ base: 'full', md: '75%' }} zIndex="dropdown">
                <FeatureCardText>
                  Roll real dice, move real miniatures, and share real moments.{' '}
                  <FeatureAccentText>
                    We enhance the experience, not replace it.
                  </FeatureAccentText>
                </FeatureCardText>
              </Box>
              <Box
                color="brand1.700"
                display={{
                  base: 'none',
                  md: 'block',
                }}
                position="absolute"
                right="-32"
                top="-10"
                transform="rotate(10deg)"
                w="2/3"
                zIndex="decorator"
              >
                <D20Icon stroke-width="0.1" />
              </Box>
            </Box>

            <Box
              class="play-feature"
              bgColor="neutral.1000"
              minH="20.3rem"
              p="8"
              rounded="md"
              w="full"
            >
              <Box paddingBlockEnd="8" maxW="20rem" w="full">
                <img
                  class={css({
                    objectFit: 'cover',
                    objectPosition: 'center',
                    width: '100%',
                    height: '100%',
                  })}
                  alt="Dungeons & Dragons logo"
                  decoding="async"
                  loading="lazy"
                  src="/images/dnd-logo.webp"
                />
              </Box>
              <FeatureCardHeading>Play Any System</FeatureCardHeading>
              <FeatureCardText>
                From D&D to indie games, Nurl Play works with every system in
                our growing library.
              </FeatureCardText>
            </Box>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
}

function FeatureCardHeading(props: ParentProps) {
  return <Text textGradient="play50" textStyle="heading-md" {...props} />;
}

function FeatureCardText(props: ParentProps) {
  return <Text fontSize="2xl" {...props} />;
}

function FeatureAccentText(props: ParentProps) {
  return (
    <Text
      as="span"
      color="brand1.500"
      fontVariationSettings="'wght' 600"
      {...props}
    />
  );
}
