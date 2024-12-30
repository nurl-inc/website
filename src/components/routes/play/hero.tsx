import { VStack, Box } from 'styled-system/jsx';
import { Image, Link, Text } from '~/components/ui';

export default function PlayHero() {
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
          right: 0,
          top: '15%',
          w: '1/2',
          zIndex: 'base',
        }}
      >
        <Image
          alt="Sanctum screenshot preview"
          src="/images/play.webp"
          srcset="/images/play-mobile.webp 664w, /images/play.webp 1846w"
          sizes="(max-width: 300px) 1024px, 2048px"
        />
      </Box>

      <Box
        pb="12.5rem"
        px="8"
        zIndex="dropdown"
        md={{
          position: 'absolute',
          left: 16,
          top: '23%',
        }}
      >
        <Text
          as="h1"
          color="brand1.600"
          mb="4"
          maxW="48rem"
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
          Play Like a Video Game,{' '}
          <Text as="span" color="brand1.200">
            Feel Like Tabletop.
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
          Experience tabletop gaming with video game-like automation while
          preserving the physical experience you love.
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
