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
      0.25: '0.25rem',
      0.5: '0.5rem',
      0.75: '0.75rem',
      1: '1rem',
      1.25: '1.25rem',
      1.5: '1.5rem',
      2: '2rem',
      2.5: '2.5rem',
      3: '3rem',
      4: '4rem',
      6: '6rem',
    },
    half: {
      0.125: '0.125rem',
    },
    negative: {
      [-0.25]: '-0.25rem',
      [-0.5]: '-0.5rem',
      [-1]: '-1rem',
      [-2]: '-2rem',
      [-2.5]: '-2.5rem',
      [-3]: '-3rem',
      [-4]: '-4rem',
      [-6]: '-6rem',
    },
    halfNegative: {
      '-0.125': '-0.125rem',
    },
  },
  maxWidth: {
    container: '107rem',
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
