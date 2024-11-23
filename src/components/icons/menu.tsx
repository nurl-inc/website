import { Box, VStack } from 'styled-system/jsx';

export function MenuIcon() {
  return (
    <VStack aria-label="View navigation menu" gap="1.5">
      <Box w="2/3" h="2px" bgColor="action.text.initial" />
      <Box w="2/3" h="2px" bgColor="action.text.initial" />
      <Box w="2/3" h="2px" bgColor="action.text.initial" />
    </VStack>
  );
}
