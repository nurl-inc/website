import { Box } from 'styled-system/jsx';
import { Text } from './text';

interface HeroQuoteProps {
  quote: string;
  author: string;
}

/**
 * A gigantic quote that takes up the entire width of the screen.
 * Used on the home page.
 */
export default function HeroQuote(props: HeroQuoteProps) {
  return (
    <Box
      class="hero-quote"
      paddingBlockStart="6rem"
      paddingBlockEnd={{
        base: 20,
        md: 72,
      }}
      position="relative"
      textAlign="center"
      w="full"
      _after={{
        color: 'page.surface.initial/70',
        content: '"\\201D"',
        position: 'absolute',
        inset: 0,
        WebkitTextStrokeColor: 'var(--colors-brand1-500)',
        WebkitTextStrokeWidth: '1px',
        textShadow: '0 0 12px #0DE7F260',
        textStyle: 'heading-2xl',
        top: 0,
        zIndex: 'base',
      }}
    >
      <blockquote>
        <Text
          lineHeight="1.1"
          textStyle={{
            base: 'heading-sm',
            md: 'heading-lg',
          }}
          textWrap="pretty"
        >
          {props.quote}
        </Text>
      </blockquote>

      <Text
        paddingBlockStart="4"
        textStyle={{
          base: 'body-md',
          md: 'body-lg',
        }}
      >
        {props.author}
      </Text>
    </Box>
  );
}
