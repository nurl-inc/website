const fonts = {
  montserrat: {
    value: 'var(--font-montserrat)',
    description: 'Montserrat Variable font used for headings and display text',
  },
  saira: {
    value: 'var(--font-saira)',
    description: 'Saira Variable font used for body text',
  },
};

const zIndex = {
  hide: {
    description: 'Used for when you need to hide elements in the layer stack',
    value: -1,
  },
  base: { description: 'Initial layer value', value: 0 },

  // pseudo-elements, borders, etc.
  decorator: {
    description:
      'Used for positioning pseudo-elements, borders, and other similar elements in the layer stack',
    value: 50,
  },

  // elements
  dropdown: {
    description:
      'Used for positioning any dropdown like elements in the layer stack',
    value: 1000,
  },
  sticky: {
    description:
      'Used for positioning elements that need to stick to their nearest scrolling ancestor in the layer stack',
    value: 1200,
  },
  banner: {
    description:
      'Used for positioning any elements that are used like a admonition in the layer stack',
    value: 1300,
  },
  overlay: {
    description: 'Used for positioning overlay elements in the layer stack',
    value: 1400,
  },
  modal: {
    description: 'Used for positioning modal elements in the layer stack',
    value: 1500,
  },
  popover: {
    description: 'Used for positioning popover elements in the layer stack',
    value: 1600,
  },
  toast: {
    description: 'Used for positioning toast elements in the layer stack',
    value: 1700,
  },
  tooltip: {
    description: 'Used for positioning tooltip elements in the layer stack',
    value: 1800,
  },
};

const gradients = {
  primary: {
    value:
      'linear-gradient(170deg, rgba(25,9,6,1) 0%, rgba(4,16,16,1) 50%, rgba(2,37,39,1) 100%)',
  },
  tertiary: {
    value: 'linear-gradient(to right, #0DE7F2, #0DF2B1)',
  },
};

export const tokens = {
  fonts,
  gradients,
  zIndex,
};
