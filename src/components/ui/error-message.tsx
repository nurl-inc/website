import type { ParentProps } from 'solid-js';
import { VStack } from 'styled-system/jsx';
import { Text } from './text';

export function ErrorMessage(props: ParentProps) {
  return (
    <VStack
      alignItems="flex-start"
      bgColor="red.500"
      gap="1"
      marginBlock="10"
      maxW="prose"
      paddingBlock="2"
      paddingInline="4"
      rounded="lg"
      w="full"
    >
      <Text fontSize="md" textStyle="heading-xs">
        Crit Fail!
      </Text>
      <Text>{props.children}</Text>
    </VStack>
  );
}
