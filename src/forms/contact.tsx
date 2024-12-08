import { A } from '@solidjs/router';
import { Box, Divider, VStack } from 'styled-system/jsx';
import { vstack } from 'styled-system/patterns';
import { Button, Input, Text, TextLink } from '~/components/ui';

export default function ContactForm() {
  return (
    <>
      <Box
        bgColor="page.surface.100"
        marginBlockStart="4"
        maxW="prose"
        paddingBlockStart="8"
        paddingBlockEnd={{
          base: '8',
          md: 'initial',
        }}
        paddingInline="8"
        rounded="lg"
      >
        <form
          class={vstack({ alignItems: 'flex-start', gap: 4 })}
          method="post"
        >
          <Input
            helperText="We'll use this to contact you about your request."
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

          <label for="subject">Subject</label>
          <select name="subject" required>
            <option value="general">General Support</option>
            <option value="technical">Technical Issue</option>
            <option value="sales">Sales Inquiry</option>
            <option value="partnership">Partnership Opportunity</option>
            <option value="media">Media Inquiry</option>
            <option value="other">Other</option>
          </select>

          <label for="product">Product</label>
          <select name="product" required>
            <option value="play">Nurl Play</option>
            <option value="sanctum">Nurl Sanctum</option>
          </select>

          <label for="message">Message</label>
          <textarea name="message" required />

          <VStack alignItems="flex-start" gap="2" w="full">
            <Button type="submit">Submit Request</Button>
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
