export interface SprinklesFnBase {
  (...args: any): string;
  properties: Set<string>;
}

export function extractAtomsFromProps<SprinklesFn extends SprinklesFnBase>(
  props: any,
  sprinklesFns: SprinklesFn[],
) {
  let sprinkleProps: Record<string, unknown> = {};
  let otherProps: Record<string, unknown> = {};

  for (const key in props) {
    if (sprinklesFns.some((sprinkleFn) => sprinkleFn.properties.has(key))) {
      sprinkleProps[key] = props[key];
    } else {
      otherProps[key] = props[key];
    }
  }

  return { sprinkleProps, otherProps };
}
