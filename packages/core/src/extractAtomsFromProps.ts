import type { SprinklesFnBase } from './SprinklesFnBase';

export function extractAtomsFromProps<
  TOtherProps extends Record<string, any>,
  TSprinklesProps extends Record<string, any>,
>(props: TSprinklesProps & TOtherProps, sprinklesFns: SprinklesFnBase[]) {
  const sprinkleProps = {} as TSprinklesProps;
  const otherProps = {} as TOtherProps;

  for (const key in props) {
    if (sprinklesFns.some((sprinkleFn) => sprinkleFn.properties.has(key))) {
      sprinkleProps[key as keyof TSprinklesProps] =
        props[key as keyof TSprinklesProps];
    } else {
      otherProps[key as keyof TOtherProps] = props[key as keyof TOtherProps];
    }
  }

  return { sprinkleProps, otherProps };
}
