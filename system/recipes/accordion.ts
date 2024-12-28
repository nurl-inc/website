import { defineSlotRecipe } from '@pandacss/dev';
import { accordionAnatomy } from '@ark-ui/anatomy';

export const accordion = defineSlotRecipe({
  className: 'accordion',
  slots: accordionAnatomy.keys(),
  jsx: ['Accordion', 'AccordionItem'],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: {
        base: 4,
        md: 8,
      },
      w: 'full',
    },
    item: {
      bgColor: '#1C1F23',
      border: '1px solid',
      borderColor: 'transparent',
      rounded: 'xl',
      transitionProperty: 'border-color, padding',
      transitionDuration: 'slow',
      transitionTimingFunction: 'ease-in-out',
      _hover: {
        borderColor: 'page.text.initial/50',
      },
      _open: {
        paddingBlockEnd: 5,
      },
    },
    itemTrigger: {
      alignItems: 'center',
      display: 'flex',
      color: 'white',
      cursor: 'pointer',
      fontStyle: 'normal',
      fontSize: '1.25rem',
      fontVariationSettings: "'wght' 600",
      justifyContent: 'space-between',
      paddingBlock: 5,
      paddingInline: 4,
      textAlign: 'left',
      textTransform: 'initial',
      w: 'full',
    },
    itemIndicator: {
      display: 'inline-block',
      _motionSafe: {
        transitionProperty: 'transform',
        transitionDuration: 'fast',
      },
      _open: {
        transform: 'rotate(180deg)',
      },
      _closed: {
        transform: 'rotate(0deg)',
      },
    },
    itemContent: {
      color: 'white/80',
      overflow: 'hidden',
      paddingInline: 4,
      textStyle: 'body-xl',
      willChange: 'height, padding',
      _motionSafe: {
        animationDuration: 'fast',
        animationFillMode: 'forwards',
        transitionProperty: 'padding',
        transitionDuration: 'fast',
        _open: {
          animationName: 'expandHeight, fadeIn',
        },
        _closed: {
          animationName: 'collapseHeight, fadeOut',
        },
      },
    },
  },
});
