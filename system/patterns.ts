type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type TextElements = 'p' | 'strong' | 'em' | 'span' | 'small';

const textTags: (Headings | TextElements)[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'strong',
  'em',
  'small',
  'span',
];

const [h1, h2, h3, h4, h5, h6, p, strong, em, small, span] = textTags.map(
  (tag) => {
    return {
      description: `A ${tag} element`,
      jsxElement: tag,
      transform(props) {
        return props;
      },
    };
  },
);

export const patterns = {
  extend: {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    strong,
    em,
    small,
    span,
  },
};
