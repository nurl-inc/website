import { defineSlotRecipe } from '@pandacss/dev';

export const accordion = defineSlotRecipe({
  className: 'accordion',
  slots: ['root', 'item', 'header', 'trigger', 'indicator', 'content'],
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
    trigger: {
      alignItems: 'center',
      display: 'flex',
      color: 'white',
      cursor: 'pointer',
      fontStyle: 'normal',
      fontSize: '1.25rem',
      fontWeight: '600',
      justifyContent: 'space-between',
      paddingBlock: 5,
      paddingInline: 4,
      textAlign: 'left',
      textStyle: 'heading-xs',
      textTransform: 'initial',
      w: 'full',
      _open: {
        '& > :is([data-part=indicator])': {
          color: 'page.text.alt',
          transform: 'rotate(180deg)',
        },
      },
      _closed: {
        '& > :is([data-part=indicator])': {
          color: 'page.text.alt/20',
          transform: 'rotate(0deg)',
        },
      },
    },
    indicator: {
      display: 'inline-block',
      _motionSafe: {
        transitionProperty: 'color, transform',
        transitionDuration: 'slow',
        transitionTimingFunction: 'ease-in-out',
      },
    },
    content: {
      overflow: 'hidden',
      paddingInline: 4,
      textStyle: 'body-lg',
      willChange: 'height, padding',
      _open: {
        animationName: 'expandHeight, fadeIn',
      },
      _closed: {
        animationName: 'collapseHeight, fadeOut',
      },
      _motionSafe: {
        animationDuration: 'fast',
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'forwards',
        transitionProperty: 'padding',
        transitionDuration: 'fast',
      },
    },
  },
});
