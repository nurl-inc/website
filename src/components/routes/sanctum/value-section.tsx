import { Show } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, VStack } from 'styled-system/jsx';
import { Text } from '~/components/ui';
import AnimatingPath from './animating-path';

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
        bgColor="page.surface.100"
        overflow="hidden"
        marginBlock="10"
        minH="13rem"
        rounded="2xl"
        w="full"
        zIndex="decorator"
        md={{
          alignSelf: 'flex-end',
          minH: '29rem',
          marginBlock: 16,
          w: 'calc(50% - 3rem)',
        }}
      >
        <Show when={props.image}>
          <img
            class={css({
              h: 'full',
              objectFit: 'cover',
              objectPosition: 'center',
              w: 'full',
            })}
            alt={props.heading}
            decoding="async"
            loading="lazy"
            sizes="(max-width: 300px) 1024px, 2048px"
            srcset={`/images/${props.image}-mobile.webp 616w, /images/${props.image}.webp 2048w`}
            src={`/images/${props.image}.webp`}
          />
        </Show>
      </Box>
    </VStack>
  );
}
