import { onCleanup, onMount, type ParentProps } from 'solid-js';
import { Box, Container, HStack, VStack } from 'styled-system/jsx';
import D20Icon from '~/components/icons/d20';
import { Image, Text } from '~/components/ui';
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
            overflow="hidden"
            paddingBlockStart="8"
            paddingInline="6"
            position="relative"
            rounded="md"
            w="full"
            md={{
              paddingBlockStart: 14,
              paddingInline: 7,
              rounded: 'lg',
              w: 'calc(50% - 3rem)',
            }}
          >
            <FeatureCardHeading>
              Simplified Player Experience
            </FeatureCardHeading>

            <Box
              bgColor="inherit"
              border="1px solid"
              borderColor="black"
              bottom={{
                base: '-6',
                md: '0',
              }}
              left="0"
              overflow="hidden"
              position="absolute"
              w="98%"
              zIndex="hide"
              _before={{
                bgColor: 'brand1.700',
                mixBlendMode: 'hue',
                bottom: 0,
                content: '""',
                display: 'block',
                left: 0,
                position: 'absolute',
                right: 0,
                top: 0,
                zIndex: 'base',
              }}
            >
              <Image
                alt="Character moves preview"
                src="/images/play-feat.webp"
                srcset="/images/play-feat-mobile.webp 684w, /images/play-feat.webp 1210w"
                sizes="(min-width: 768px) 45vw, 98vw"
              />
            </Box>

            <Box
              paddingBlockStart="14rem"
              paddingBlockEnd="6"
              w="full"
              zIndex="decorator"
              md={{
                paddingBlockStart: '28rem',
                paddingInlineStart: 1,
              }}
            >
              <FeatureCardText>
                Play ensures the players benefit as much as the{' '}
                <FeatureAccentText>designers do.</FeatureAccentText>
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
                <FeatureCardHeading>Faster test cycles</FeatureCardHeading>
              </Box>
              <Box w={{ base: 'full', md: '75%' }} zIndex="dropdown">
                <FeatureCardText>
                  Learn, analyze, and pivot faster than ever before. Then,{' '}
                  <FeatureAccentText>
                    Rinse and repeat until launch.
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
                right="-10rem"
                top="-10"
                transform="rotate(8deg)"
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
              <FeatureCardHeading>Test anything</FeatureCardHeading>
              <FeatureCardText>
                From supplemental content up to the crunchiest system. Play will
                handle it all.
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
