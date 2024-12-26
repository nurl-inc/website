import { Box } from 'styled-system/jsx';

export default function AnimatingPath() {
  return (
    <Box
      display={{
        base: 'none',
        xl: 'initial',
      }}
      position="absolute"
      right="25rem"
      top="8rem"
      zIndex="decorator"
      w="2/3"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 849 375">
        <path
          id="animating-path"
          stroke="#989899"
          d="M0 1h727c66.826 0 121 54.174 121 121v253"
        />
      </svg>
    </Box>
  );
}
