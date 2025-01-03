import type {
  CompositionStyleObject,
  LayerStyles,
  Recursive,
  TextStyles,
  Token,
} from '@pandacss/types';

export interface CompositionStyles {
  textStyles: TextStyles;
  layerStyles: LayerStyles;
  animationStyles: AnimationStyles;
}

type AnimationStyleProperty =
  | 'animation'
  | 'animationComposition'
  | 'animationDelay'
  | 'animationDirection'
  | 'animationDuration'
  | 'animationFillMode'
  | 'animationIterationCount'
  | 'animationName'
  | 'animationPlayState'
  | 'animationTimingFunction'
  | 'animationRange'
  | 'animationRangeStart'
  | 'animationRangeEnd'
  | 'animationTimeline'
  | 'transformOrigin';

export type AnimationStyle = CompositionStyleObject<AnimationStyleProperty>;

export type AnimationStyles = Recursive<Token<AnimationStyle>>;
