import { onMount } from 'solid-js';
import { track } from '@vercel/analytics';
import { Box, Container, VStack } from 'styled-system/jsx';
import { Button, Text } from '~/components/ui';
import { Footer, Head, Nav, Main } from '.';

interface PageErrorProps {
  error: {
    message?: string;
  };
  reset: () => void;
}

export default function PageError(props: PageErrorProps) {
  onMount(() => {
    track('page_error', {
      message: props.error.message || 'An unknown error occurred.',
      url: window.location.href,
    });
  });

  return (
    <>
      <Head
        title="Nurl | Server Error"
        description="The server is experiencing issues."
      />
      <Nav />

      <Main>
        <Container>
          <VStack h="calc(100dvh - 100px)" justify="center">
            <Text as="h1" textStyle="heading-xl">
              Crit Fail
            </Text>
            <Text textStyle="2xl">
              The server is experiencing issues. Please try again later.
            </Text>
            <Text textStyle="body-lg">
              {props.error.message || 'An unknown error occurred.'}
            </Text>

            <Box marginBlockStart="6" w="full">
              <Button onClick={() => props.reset()}>Try Again</Button>
            </Box>
          </VStack>
        </Container>
      </Main>

      <Footer />
    </>
  );
}
