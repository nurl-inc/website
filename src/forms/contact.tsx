import { action, useSubmission } from '@solidjs/router';
import { Show } from 'solid-js';
import { Box, Divider, VStack } from 'styled-system/jsx';
import { vstack } from 'styled-system/patterns';
import { Spinner } from '~/components/icons';
import {
  Button,
  Input,
  Select,
  Text,
  Textarea,
  TextLink,
} from '~/components/ui';

const contactAction = action(async (formData: FormData) => {
  console.log(formData);
}, 'contact');

export default function ContactForm() {
  const submission = useSubmission(contactAction);

  return (
    <>
      <Box
        bgColor="page.surface.100"
        marginBlockStart="4"
        maxW="prose"
        paddingBlock="8"
        paddingInline="8"
        rounded="lg"
      >
        <form
          class={vstack({ alignItems: 'flex-start', gap: 4 })}
          action={contactAction}
          method="post"
        >
          <Input
            helperText="We'll use this to contact you about your request."
            ids={{
              control: 'name',
            }}
            label="Name"
            name="name"
            type="text"
            required
            autocomplete="name"
          />
          <Input
            helperText="This is where we'll send you a reply."
            ids={{
              control: 'email',
            }}
            label="Email"
            name="email"
            type="email"
            required
            autocomplete="email"
          />
          <Input
            helperText="This is optional, but it helps us understand your needs better."
            ids={{
              control: 'company',
            }}
            label="Company (optional)"
            name="company"
            autocomplete="organization"
          />

          <Select
            ids={{
              control: 'subject',
            }}
            label="Type of Inquiry"
            required
          >
            <option value="">-- Select an option --</option>
            <option value="general">General Support</option>
            <option value="technical">Technical Issue</option>
            <option value="sales">Sales Inquiry</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="media">Media Inquiry</option>
            <option value="other">Other</option>
          </Select>

          <Select
            ids={{
              control: 'product',
            }}
            label="Product"
            required
          >
            <option value="">-- Select an option --</option>
            <option value="play">Nurl Play</option>
            <option value="sanctum">Nurl Sanctum</option>
          </Select>

          <Textarea
            helperText="Please describe your request in as much detail as possible."
            ids={{
              control: 'message',
            }}
            label="Message"
            required
          />

          <VStack alignItems="flex-start" gap="2" marginBlockStart="4" w="full">
            <Button disabled={submission.pending} type="submit">
              <Show when={submission.pending} fallback={<>Submit Request</>}>
                <Spinner />
                Submitting
              </Show>
            </Button>
          </VStack>
        </form>
      </Box>

      <Text
        as="small"
        display="block"
        paddingBlock="4"
        fontFamily="montserrat"
        fontStyle="italic"
        textStyle="body-sm"
      >
        We typically respond within 24 hours.
      </Text>

      <Divider
        color="#032E30"
        direction="horizontal"
        marginBlock="6"
        thickness="1px"
        w="prose"
      />

      <Text as="h4" paddingBlockEnd="2" textStyle="heading-xs">
        Privacy Note
      </Text>
      <Text maxW="prose">
        Your information will be handled according to our{' '}
        <TextLink href="/legal/privacy">Privacy Policy</TextLink>. For
        GDPR-related inquiries, please contact admin@nurl.com.
      </Text>
    </>
  );
}
