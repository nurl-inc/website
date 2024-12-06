import { Box } from 'styled-system/jsx';

export default function HeroFeatureItem() {
  return (
    <Box
      h="12rem"
      overflow="hidden"
      rounded="lg"
      shadow="lg"
      w="full"
      _motionSafe={{
        animationName: 'fadeIn',
        animationDuration: 'slow',
        animationFillMode: 'forwards',
        animationDelay: '1.3s',
        opacity: 0,
      }}
      md={{
        h: '28rem',
        rounded: 'xl',
      }}
    >
      <Box bgColor="#1d1d1d" h="full" w="full" />
    </Box>
  );
}
