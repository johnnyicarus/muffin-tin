import type { SprinklesFnBase } from "./SprinklesFnBase";

export function extractAtomsFromProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TOtherProps extends Record<string, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TSprinklesProps extends Record<string, any>,
>(props: TOtherProps & TSprinklesProps, sprinklesFns: SprinklesFnBase[]) {
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

  return { otherProps, sprinkleProps };
}
