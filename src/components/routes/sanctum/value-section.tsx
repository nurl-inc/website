import { lazy, Show, Suspense } from 'solid-js';
import { Box, VStack } from 'styled-system/jsx';
import { Image, Text } from '~/components/ui';
import AnimatingPath from './animating-path';

const ValueFallback = lazy(() => import('./value-fallback'));

interface SanctumValueSectionProps {
  /**
   * The number that shows the order of the value section.
   */
  idx: number;
  heading: string;
  description: string;
  /**
   * The name of the image file to use for the srcSet.
   * @example
   * "sanctum-[name].webp, sanctum-[name]-mobile.webp"
   */
  image?: string;
}

export default function SanctumValueSection(props: SanctumValueSectionProps) {
  return (
    <VStack
      id="sanctum-value-section"
      alignItems="flex-start"
      minH={{
        base: 'initial',
        md: '96dvh',
      }}
      paddingBlock={{ base: 10, md: 20 }}
      paddingInline={{ base: 8, md: 20 }}
      position="relative"
      w="full"
    >
      <AnimatingPath />

      <VStack
        alignItems="flex-start"
        w={{
          base: 'full',
          md: '37.5rem',
        }}
        zIndex="decorator"
      >
        <Text color="brand2.600" textStyle="heading-xl">
          {props.idx}
        </Text>
        <Text color="white" lineHeight={1} textStyle="heading-md">
          {props.heading}
        </Text>
        <Text
          color="white"
          textStyle={{
            base: 'body-lg',
            md: 'body-2xl',
          }}
        >
          {props.description}
        </Text>
      </VStack>

      <Box
        id={`sanctum-value-section-img-${props.idx}`}
        bgColor="black"
        overflow="hidden"
        marginBlock="10"
        rounded="2xl"
        w="full"
        zIndex="decorator"
        md={{
          alignSelf: 'flex-end',
          marginBlock: 16,
          w: 'calc(50% - 3rem)',
        }}
      >
        <Suspense>
          <Show when={props.image} fallback={<ValueFallback />}>
            <Image
              alt={props.heading}
              src={`/images/${props.image}.webp`}
              srcset={`/images/${props.image}-mobile.webp 616w, /images/${props.image}.webp 2048w`}
              sizes="(max-width: 300px) 1024px, 2048px"
            />
          </Show>
        </Suspense>
      </Box>
    </VStack>
  );
}
