import { action, json, redirect, useSubmission } from '@solidjs/router';
import { Show } from 'solid-js';
import { Box, Divider } from 'styled-system/jsx';
import { vstack } from 'styled-system/patterns';
import { Button, ErrorMessage, Input, Select, Text } from '~/components/ui';

const playSignupAction = action(async (formData: FormData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const primaryRole = formData.get('primary-role');
  const primaryGameSystem = formData.get('game-system');
  const otherGameSystems = formData.get('other-game-systems');
  const groupSize = formData.get('group-size');
  const howDidYouHear = formData.get('how-did-you-hear');
  const honeypot = formData.get('website');

  if (honeypot) {
    throw redirect('/thanks');
  }

  try {
    const response = await fetch('/api/play/signup', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        primaryRole,
        primaryGameSystem,
        otherGameSystems,
        groupSize,
        howDidYouHear,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to sign up');
    }

    return redirect('/thanks');
  } catch (error) {
    console.error(error);
    throw error;
  }
}, 'play-signup');

export default function PlaySignupForm() {
  const submission = useSubmission(playSignupAction);

  return (
    <>
      <Show when={submission.error}>
        <ErrorMessage>{submission.error.message}</ErrorMessage>
      </Show>

      <Box
        bgColor="page.surface.100"
        marginBlockStart="4"
        maxW="prose"
        paddingBlock="8"
        paddingInline="8"
        rounded="lg"
        w="full"
      >
        <Text
          as="h2"
          fontSize={{
            base: 'lg',
            md: 'xl',
          }}
          marginBlockEnd="4"
          textStyle="heading-xs"
        >
          Sign up for the waitlist
        </Text>

        <form
          action={playSignupAction}
          method="post"
          class={vstack({ alignItems: 'flex-start', gap: 4 })}
        >
          <Box display="none">
            <Input
              ids={{
                control: 'website',
              }}
              label="Website"
              name="website"
              type="text"
              autocomplete="off"
              tabindex="-1"
            />
          </Box>

          <Input
            label="Name"
            name="name"
            type="text"
            required
            autocomplete="name"
            helperText="So we know who to contact."
          />

          <Input
            label="Email"
            name="email"
            type="email"
            required
            autocomplete="email"
            helperText="This is where we'll send you updates."
          />

          <Select
            label="Primary Role"
            name="primary-role"
            helperText="This will help us customize the experience for you."
            required
          >
            <option value="">--Select a role--</option>
            <option value="player">Player</option>
            <option value="game-master">Game Master</option>
            <option value="both">Both</option>
          </Select>

          <Select
            label="Primary Game System"
            name="game-system"
            helperText="So we know what to focus on."
            required
          >
            <option value="">--Select a system--</option>
            <option value="dnd5e">D&D 5e</option>
            <option value="dnd24">D&D 2024</option>
            <option value="pf2e">Pathfinder 2e</option>
            <option value="shiver">Shiver</option>
            <option value="starfinder">Starfinder</option>
            <option value="star_wars">Star Wars</option>
            <option value="other">Other</option>
          </Select>

          <Divider
            color="#032E30"
            direction="horizontal"
            marginBlock="6"
            thickness="1px"
            w="full"
          />

          <Text
            as="h3"
            fontSize={{
              base: 'lg',
              md: 'xl',
            }}
            marginBlockEnd="2"
            textStyle="heading-xs"
          >
            Optional fields
          </Text>

          <Input
            label="Other Game System"
            name="other-game-systems"
            helperText="What other systems do you play?"
          />

          <Select
            label="Group Size"
            name="group-size"
            helperText="How many people are in your group?"
          >
            <option value="">--Select a size--</option>
            <option value="solo">solo</option>
            <option value="average">2-4</option>
            <option value="large">5+</option>
          </Select>

          <Select label="How did you hear about us?" name="how-did-you-hear">
            <option value="">--Select a source--</option>
            <option value="social-media">Social Media</option>
            <option value="search-engine">Search Engine</option>
            <option value="friend">Friend</option>
            <option value="convention">Convention</option>
            <option value="other">Other</option>
          </Select>

          <Box marginBlockStart="4" w="full">
            <Button type="submit">Join Waitlist</Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
