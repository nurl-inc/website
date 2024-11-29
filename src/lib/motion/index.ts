import { animate, inView, scroll, stagger } from 'motion';
import type { Target } from 'motion/react';

const FADE_IN_OUT = {
  opacity: [0, 1, 1, 0],
};
const SLIDE_IN_FROM_BOTTOM = {
  y: [50, 0],
};

export function scrollFadeInOut(target: Target) {
  if (target) {
    scroll(animate(target, FADE_IN_OUT, { ease: 'linear' }), {
      target,
      offset: ['start end', 'end end', 'start start', 'end start'],
    });
  }
}

export function slideInFromBottom(target: Target) {
  if (target) {
    inView(target, () => {
      animate(target, SLIDE_IN_FROM_BOTTOM, {
        delay: stagger(0.1),
        duration: 0.5,
      });
    });
  }
}
