import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

export const backgroundProperties = defineProperties({
  properties: {
    backgroundColor: ['white', 'black', 'tomato', 'hotpink'],
  },
});

export const backgroundSprinkles = createSprinkles(backgroundProperties);

export type BackgroundSprinkles = Parameters<typeof backgroundSprinkles>[0];
