import { Match, Switch } from 'solid-js';
import { Box, VStack } from 'styled-system/jsx';
import { Text } from './text';
import {
  CellarIcon,
  HomeIcon,
  StatsIcon,
  NetworkIcon,
  TestTubeIcon,
} from '../icons';
import DownloadIcon from '../icons/download';
import StarIcon from '../icons/star';
import D20Icon from '../icons/d20';

interface PointCardProps {
  number?: number;
  heading: string;
  description: string;
  icon?: string;
}

export default function PointCard(props: PointCardProps) {
  return (
    <Box
      class="point-card"
      bgColor="neutral.1000"
      h="32rem"
      maxW="17rem"
      mx="auto"
      p="4"
      rounded="full"
    >
      <VStack gap="7" h="full" textAlign="center">
        <VStack
          bgGradient="to-br"
          gradientFrom="brand1.700"
          gradientTo="brand2.700"
          color="white"
          h="66%"
          justify="center"
          rounded="full"
          w="full"
        >
          <Box w="24">
            <Switch>
              <Match when={props.icon === 'home'}>
                <HomeIcon />
              </Match>
              <Match when={props.icon === 'transfer'}>
                <NetworkIcon />
              </Match>
              <Match when={props.icon === 'stats'}>
                <StatsIcon />
              </Match>
              <Match when={props.icon === 'cellar'}>
                <CellarIcon />
              </Match>
              <Match when={props.icon === 'download'}>
                <DownloadIcon />
              </Match>
              <Match when={props.icon === 'star'}>
                <StarIcon />
              </Match>
              <Match when={props.icon === 'd20'}>
                <D20Icon />
              </Match>
              <Match when={props.icon === 'test-tube'}>
                <TestTubeIcon />
              </Match>
            </Switch>
          </Box>
        </VStack>

        <Box w="full">
          <Text
            lineHeight={1}
            fontSize="xl"
            paddingBlockEnd="2"
            textStyle="heading-xs"
            textAlign="center"
          >
            {props.heading}
          </Text>
          <Text
            color="white"
            lineHeight={1.2}
            maxW="90%"
            mx="auto"
            textStyle="body-md"
            textWrap="pretty"
          >
            {props.description}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
