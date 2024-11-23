import type { ParentProps } from 'solid-js';
import { css } from 'styled-system/css';
import { Box } from 'styled-system/jsx';

export default function SpotlightItem(props: ParentProps) {
  return (
    <Box
      bgGradient="to-r"
      gradientFrom="#0DE7F2/60"
      gradientTo="#0DF2B1/60"
      p="6"
      rounded="lg"
      w="full"
    >
      <p
        class={css({
          color: 'page.text.initial',
          fontSize: '1.125rem',
          fontStyle: 'normal',
          textStyle: 'heading-xs',
          textWrap: 'pretty',
        })}
      >
        {props.children}
      </p>
    </Box>
  );
}
