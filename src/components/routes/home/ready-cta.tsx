import { Match, Switch } from 'solid-js';
import { VStack } from 'styled-system/jsx';
import { Link, Text } from '~/components/ui';
import { useLeadChoice } from '~/context/lead-choice';

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
      paddingBlock="60"
      paddingInline="8"
      w="full"
      md={{
        paddingBlock: 96,
      }}
    >
      <Text
        as="h3"
        lineHeight="1"
        textShadow="0 0 24px rgba(255, 255, 255, 0.56)"
        textStyle="heading-sm"
      >
        Ready to get started?
      </Text>

      <Switch>
        <Match when={leadChoice.choice === 'play'}>
          <Link href="/play/signup">Join the waitlist</Link>
        </Match>
        <Match when={leadChoice.choice === 'sanctum'}>
          <Link href="/sanctum/register">Request beta access</Link>
        </Match>
      </Switch>
    </VStack>
  );
}
