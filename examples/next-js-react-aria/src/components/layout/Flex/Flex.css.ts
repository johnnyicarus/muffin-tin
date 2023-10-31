import { createFlexStyles } from '@butter-cream/flex';
import { createSprinkles } from '@vanilla-extract/sprinkles';
import { mediaQueries, vars } from '../../../tokens/theme.css';
import { boxProperties } from '../Box/Box.css';

export const { flexBaseStyles, flexProperties } = createFlexStyles({
  spacingScale: {
    zeroValue: vars.spacing.zeroValue,
    default: vars.spacing.default,
  },
  mediaQueries,
  defaultMediaQueryKey: 'default',
});

export const flexSprinkles = createSprinkles(flexProperties);

export type FlexSprinkles = Parameters<typeof flexSprinkles>[0];

export const flexSprinkles2 = createSprinkles(flexProperties, boxProperties);
