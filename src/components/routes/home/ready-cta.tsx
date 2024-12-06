import { Match, Switch } from 'solid-js';
import { VStack } from 'styled-system/jsx';
import { Button, Text } from '~/components/ui';
import { useLeadChoice } from '~/context/lead-choice';

// TODO: Add link to forms

/**
 * This module is used to display a call to action for users to request beta
 * access. The content is based on the lead choice.
 * @module ReadyCTA
 */

/**
 * A CTA for users to request beta access based on the lead choice.
 */
export default function ReadyCTA() {
  const [leadChoice] = useLeadChoice();
  return (
    <VStack
      gap="8"
      paddingBlockStart="40"
      paddingInline="8"
      paddingBlockEnd="60"
      w="full"
      md={{
        paddingBlockEnd: 96,
      }}
    >
      <Text as="h3" lineHeight="1" textStyle="heading-sm">
        Ready to get started?
      </Text>

      <Switch>
        <Match when={leadChoice.choice === 'play'}>
          <Button>Join the waitlist</Button>
        </Match>
        <Match when={leadChoice.choice === 'sanctum'}>
          <Button palette="secondary">Request beta access</Button>
        </Match>
      </Switch>
    </VStack>
  );
}
