import { createTheme } from '@vanilla-extract/css';

export const mediaQueries = {
  default: '',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
};

export const [themeClass, vars] = createTheme({
  spacing: {
    zeroValue: {
      0: '0',
    },
    default: {
      0.5: '0.5rem',
      1: '1rem',
      2: '2rem',
      4: '4rem',
    },
    half: {
      0.25: '0.25rem',
    },
    negative: {
      [-0.5]: '-0.5rem',
      [-1]: '-1rem',
      [-2]: '-2rem',
      [-4]: '-4rem',
    },
    halfNegative: {
      [-0.25]: '-0.25rem',
    },
  },
  maxWidth: {
    container: '100rem',
    content: '60ch',
  },
  zIndices: {
    '-1': '-1',
    '0': '0',
    '1': '1',
    '2': '2',
    'main-nav': '3',
    drawer: '4',
  },
});
