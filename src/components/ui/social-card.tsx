import { Box } from 'styled-system/jsx';
import { Text } from './text';

interface SocialCardProps {
  quote: string;
  author: string;
}

export function SocialCard(props: SocialCardProps) {
  return (
    <Box
      class="social-card"
      bgColor="page.text.alt"
      color="page.surface.initial"
      paddingBlock="12"
      paddingInline="10"
      rounded="lg"
      md={{
        paddingBlock: '4.5rem',
        paddingInline: '10',
      }}
    >
      <Text
        fontFamily="montserrat"
        textStyle={{ base: 'body-md', md: 'body-lg' }}
        textWrap="pretty"
      >
        {props.quote}
      </Text>
      <Text
        as="small"
        display="block"
        fontSize="1rem"
        paddingBlockStart="4"
        textStyle="heading-xs"
      >
        {props.author}
      </Text>
    </Box>
  );
}
