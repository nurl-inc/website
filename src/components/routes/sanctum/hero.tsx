import { css } from 'styled-system/css';
import { Box, VStack } from 'styled-system/jsx';
import { Link, Text } from '~/components/ui';

/**
 * This is the main hero component for the sanctum page.
 */
export default function SanctumHero() {
  return (
    <VStack
      bgColor="page.surface.initial"
      gap="4"
      minH="96dvh"
      overflowX="hidden"
      pb={{
        base: '10',
        md: '23rem',
      }}
      position="relative"
    >
      <Box
        animationName="fadeIn"
        animationDelay="200ms"
        animationDuration="600ms"
        animationTimingFunction="ease-in-out"
        animationFillMode="forwards"
        opacity={0}
        mx="auto"
        w="90%"
        md={{
          animationDelay: '600ms',
          position: 'absolute',
          right: '-10rem',
          top: '15%',
          w: '1/2',
          zIndex: 'base',
        }}
      >
        <img
          class={css({
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
          })}
          alt="Sanctum screenshot preview"
          decoding="async"
          loading="lazy"
          src="/images/sanctum.webp"
          srcSet="/images/sanctum-mobile.webp 616w, /images/sanctum.webp 2048w"
          sizes="(max-width: 300px) 1024px, 2048px"
        />
      </Box>

      <Box
        pb="12.5rem"
        px="8"
        zIndex="dropdown"
        md={{
          position: 'absolute',
          left: 0,
          top: '23%',
        }}
      >
        <Text
          as="h1"
          color="brand2.600"
          mb="4"
          maxW="42.5rem"
          textStyle={{
            base: 'heading-md',
            md: 'heading-lg',
          }}
          _motionSafe={{
            animationName: 'slideFromBottom, fadeIn',
            animationDuration: '600ms',
            animationTimingFunction: 'ease-in-out',
            animationFillMode: 'forwards',
            animationDelay: '300ms',
            opacity: 0,
          }}
        >
          Enter the Sanctum.{' '}
          <Text as="span" color="brand2.300">
            Create Worlds.
          </Text>
        </Text>
        <Text
          color="#d0d0d0"
          maxW="36rem"
          paddingBlockStart={{
            md: 2,
          }}
          textStyle="body-xl"
          _motionSafe={{
            animationName: 'fadeIn',
            animationDuration: '600ms',
            animationTimingFunction: 'ease-in-out',
            animationFillMode: 'forwards',
            animationDelay: '700ms',
            opacity: 0,
          }}
        >
          The sacred space where your game systems come to life through visual
          tools and powerful automation.
        </Text>

        <Box
          mt="14"
          w="full"
          _motionSafe={{
            animationName: 'fadeIn',
            animationDuration: '600ms',
            animationTimingFunction: 'ease-in-out',
            animationFillMode: 'forwards',
            animationDelay: '800ms',
            opacity: 0,
          }}
        >
          <Link href="#learn-more">Learn More</Link>
        </Box>
      </Box>
    </VStack>
  );
}