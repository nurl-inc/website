import { lazy, Match, onMount, Suspense, Switch } from 'solid-js';
import { css } from 'styled-system/css';
import { Box, VStack } from 'styled-system/jsx';
import { useLeadChoice } from '~/context/lead-choice';
import { scrollFadeInOut } from '~/lib/motion';

/**
 * This module provides the key features section which is determined by the
 * lead choice context.
 * @module routes/components/key-features
 */

const KeyPlayFeatures = lazy(() => import('./key-play-features'));
const KeySanctumFeatures = lazy(() => import('./key-sanctum-features'));

export default function KeyFeatures() {
  const [leadChoice] = useLeadChoice();

  onMount(() => {
    const target = document.getElementById('key-features-heading');
    if (target) scrollFadeInOut(target);
  });

  return (
    <Box
      paddingBlockStart="20"
      paddingBlockEnd="32"
      paddingInline="8"
      md={{
        paddingBlockStart: 28,
        paddingBlockEnd: 60,
        paddingInline: '9',
      }}
    >
      <VStack
        id="key-features-heading"
        justify="center"
        pb="24"
        textAlign="center"
        w="full"
        md={{
          pb: 44,
        }}
      >
        <KeyFeaturesHeading main="Gain advantage" sub="with Nurl" />
        <p
          class={css({
            color: 'page.text.initial',
            textStyle: 'body-sm',
            md: {
              textStyle: 'body-lg',
            },
          })}
        >
          <Switch>
            <Match when={leadChoice.choice === 'play'}>
              Enhance, don&apos;t replace with our unique features.
            </Match>
            <Match when={leadChoice.choice === 'sanctum'}>
              Build better games together with our unique features.
            </Match>
          </Switch>
        </p>
      </VStack>

      <Suspense>
        <Switch>
          <Match when={leadChoice.choice === 'play'}>
            <KeyPlayFeatures />
          </Match>
          <Match when={leadChoice.choice === 'sanctum'}>
            <KeySanctumFeatures />
          </Match>
        </Switch>
      </Suspense>
    </Box>
  );
}

function KeyFeaturesHeading(props: { main: string; sub: string }) {
  return (
    <h2
      class={css({
        color: '#10EAAC',
        lineHeight: 1,
        maxW: '46rem',
        mx: 'auto',
        textStyle: 'heading-sm',
        textGradient: 'tertiary',
        textWrap: 'balance',
        md: {
          textStyle: 'heading-lg',
        },
      })}
    >
      {props.main}{' '}
      <span class={css({ color: 'page.text.initial' })}>{props.sub}</span>
    </h2>
  );
}
