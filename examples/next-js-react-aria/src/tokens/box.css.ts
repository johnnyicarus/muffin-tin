import { createBox } from '@butter-cream/box';
import { createSprinkles } from '@vanilla-extract/sprinkles';

import { mediaQueries, vars } from './theme.css';

export const boxProperties = createBox<
  keyof typeof vars.spacing.default,
  keyof typeof vars.spacing.negative,
  keyof typeof vars.spacing.half,
  keyof typeof vars.spacing.halfNegative,
  keyof typeof vars.zIndices,
  keyof typeof mediaQueries,
  keyof typeof vars.spacing.zeroValue,
  keyof typeof vars.maxWidth
>({
  spacingScale: vars.spacing,
  mediaQueries,
  defaultMediaQueryKey: 'default',
  zIndexScale: vars.zIndices,
  containerSizeScale: vars.maxWidth,
});

export const boxSprinkles = createSprinkles(boxProperties);

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
