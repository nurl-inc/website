import { action, redirect, useSubmission } from '@solidjs/router';
import { track } from '@vercel/analytics';
import { Show } from 'solid-js';
import { Box, Divider } from 'styled-system/jsx';
import { vstack } from 'styled-system/patterns';
import { Spinner } from '~/components/icons';
import {
  Input,
  Select,
  Button,
  Text,
  ErrorMessage,
  Textarea,
} from '~/components/ui';

const sanctumRegisterAction = action(async (formData: FormData) => {
  const honeypot = formData.get('alt:website');
  const honeypot2 = formData.get('fullname');
  if (honeypot || honeypot2) {
    throw redirect('/thanks');
  }

  try {
    const companyName = formData.get('name');
    const name = formData.get('contact-name');
    const email = formData.get('email');
    const role = formData.get('role');
    const currentSystems = formData.get('game-systems');
    const teamSize = formData.get('team-size');
    const timeline = formData.get('timeline');
    const currentTools = formData.get('tools');
    const challenges = formData.get('challenges');
    const improvements = formData.get('improve');
    const playInterest = formData.get('nurl-play');
    const website = formData.get('website');
    const source = formData.get('how-did-you-hear');
    const additionalInfo = formData.get('anything-else');

    const response = await fetch('/api/sanctum/register', {
      method: 'POST',
      body: JSON.stringify({
        companyName,
        name,
        email,
        role,
        currentSystems,
        teamSize,
        timeline,
        currentTools,
        challenges,
        improvements,
        playInterest,
        website,
        source,
        additionalInfo,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to sign up');
    }

    track('Sanctum Beta Request', {
      companyName: companyName as string,
      currentSystems: currentSystems as string,
      teamSize: teamSize as string,
      timeline: timeline as string,
      currentTools: currentTools as string,
      challenges: challenges as string,
      improvements: improvements as string,
      playInterest: playInterest as string,
      website: website as string,
    });

    return redirect('/thanks');
  } catch (error) {
    console.error(error);
    throw error;
  }
}, 'sanctum-register');

export default function SanctumRegisterForm() {
  const submission = useSubmission(sanctumRegisterAction);

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
          Request Access
        </Text>

        <form
          action={sanctumRegisterAction}
          method="post"
          class={vstack({ alignItems: 'flex-start', gap: 4 })}
        >
          <Box display="none">
            <Input
              ids={{
                control: 'alt:website',
              }}
              label="Website"
              name="alt:website"
              type="text"
              autocomplete="off"
              tabindex="-1"
            />
          </Box>
          <Box display="none">
            <Input
              ids={{
                control: 'fullname',
              }}
              label="Full Name"
              name="fullname"
              type="text"
              autocomplete="off"
              tabindex="-1"
            />
          </Box>

          <Input
            label="Company/Studio Name"
            name="name"
            type="text"
            required
            autocomplete="company"
            helperText="So we know more about you."
          />

          <Input
            label="Primary Contact Name"
            name="contact-name"
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

          <Input
            label="Role"
            name="role"
            type="text"
            required
            autocomplete="role"
            helperText="So we know what you're looking for."
          />

          <Select
            label="Current Game Systems"
            name="game-systems"
            helperText="This will help us understand your needs."
            required
          >
            <option value="">--Select a phase--</option>
            <option value="development">In Development</option>
            <option value="published">Published</option>
            <option value="planned">Planned</option>
          </Select>

          <Select
            label="Team Size"
            name="team-size"
            helperText="So we can set expectations."
            required
          >
            <option value="">--Select a size--</option>
            <option value="solo">Solo</option>
            <option value="small">2-5</option>
            <option value="medium">6-20</option>
            <option value="enterprise">20+</option>
          </Select>

          <Select
            label="Development Timeline"
            name="timeline"
            helperText="So we know where you're at."
            required
          >
            <option value="">--Select a timeline--</option>
            <option value="current">Current project</option>
            <option value="quarterly">3-6 months</option>
            <option value="yearly">6-12 months</option>
            <option value="planning">Planning phase</option>
          </Select>

          <Textarea
            label="Tools currently using"
            name="tools"
            helperText="So we know more about your process."
            required
          />

          <Textarea
            label="Biggest Development Challenges"
            name="challenges"
            helperText="So we know more about your needs."
            required
          />

          <Textarea
            label="Areas Seeking to Improve"
            name="improve"
            helperText="So we know more about your needs."
            required
          />

          <Select
            label="Interest in Nurl Play Integration?"
            name="nurl-play"
            helperText="So we know more about your needs."
            required
          >
            <option value="">--Select an option--</option>
            <option value="immediate">Yes, immediately</option>
            <option value="future">Yes, in future</option>
            <option value="maybe">Need more information</option>
            <option value="no">No</option>
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
            label="Website"
            name="website"
            type="url"
            helperText="So we know where to find you."
          />

          <Select label="How did you hear about us?" name="how-did-you-hear">
            <option value="">--Select a source--</option>
            <option value="social-media">Social Media</option>
            <option value="search-engine">Search Engine</option>
            <option value="friend">Friend</option>
            <option value="convention">Convention</option>
            <option value="other">Other</option>
          </Select>

          <Textarea
            label="Anything else we should know?"
            name="anything-else"
            helperText="So we know more about your needs."
          />

          <Box marginBlockStart="4" w="full">
            <Button disabled={submission.pending} type="submit">
              <Show
                when={submission.pending}
                fallback={<>Request Beta Access</>}
              >
                <Spinner />
                Submitting
              </Show>
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
