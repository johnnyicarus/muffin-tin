import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

export const boxProperties = defineProperties({
  properties: {
    color: ['white', 'black', 'tomato', 'hotpink'],
  },
});

export const boxSprinkles = createSprinkles(boxProperties);

export type BoxSprinkles = Parameters<typeof boxSprinkles>[0];
