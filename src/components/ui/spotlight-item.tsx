import type { ParentProps } from 'solid-js';
import { css } from 'styled-system/css';
import { Box } from 'styled-system/jsx';

interface SpotlightItemProps {}

export default function SpotlightItem(props: ParentProps<SpotlightItemProps>) {
  return (
    <Box
      id="spotlight-item"
      bgGradient={{
        _sanctumTheme: 'sanctum50',
        _playTheme: 'play50',
      }}
      opacity="0"
      paddingBlock="8"
      paddingInline="4"
      rounded="lg"
      w="full"
      md={{
        paddingBlock: '11',
        paddingInline: '7',
      }}
    >
      <p
        class={css({
          color: 'brand1.1000',
          fontWeight: 600,
          textStyle: 'body-lg',
          textWrap: 'pretty',
        })}
      >
        {props.children}
      </p>
    </Box>
  );
}
