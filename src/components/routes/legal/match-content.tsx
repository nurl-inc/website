import { Match, Switch } from 'solid-js';

import terms from '~/content/legal/generated/terms.md.json';

interface MatchLegalContentProps {
  slug: string;
}

export default function MatchLegalContent(props: MatchLegalContentProps) {
  return (
    <Switch>
      <Match when={props.slug === 'terms'}>
        <div innerHTML={terms.html as string} />
      </Match>
      {/* <Match when={props.slug === 'privacy'}>
        <div innerHTML={privacy.html as string} />
      </Match> */}
    </Switch>
  );
}
