import { SprinklesFnBase } from './types';

export function extractAtomsFromProps<
  NSV extends Record<string, unknown>,
  SV extends Record<string, unknown>,
>(props: SV & NSV, sprinklesFns: SprinklesFnBase[]) {
  let sprinkleProps = {} as SV;
  let otherProps = {} as NSV;

  for (const key in props) {
    if (sprinklesFns.some((sprinkleFn) => sprinkleFn.properties.has(key))) {
      sprinkleProps[key as keyof SV] = props[key as keyof SV];
    } else {
      otherProps[key as keyof NSV] = props[key as keyof NSV];
    }
  }

  return { sprinkleProps, otherProps };
}
