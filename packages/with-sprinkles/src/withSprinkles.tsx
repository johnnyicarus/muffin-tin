import type { ReactNode } from "react";

import {
  composeClassNames,
  extractAtomsFromProps,
  type SprinklesFnBase,
  type WithHocOptions,
} from "@muffin-tin/core";

export interface WithSprinklesParams<
  TProps,
  TSprinklesFn extends SprinklesFnBase,
> extends WithHocOptions {
  Component: (props: TProps) => ReactNode;
  sprinklesFn: TSprinklesFn;
}

export type WithSprinklesProps<
  TProps,
  TSprinklesFn extends SprinklesFnBase,
> = Omit<TProps, Parameters<TSprinklesFn>[0]> & Parameters<TSprinklesFn>[0];

export const withSprinkles = <TProps, TSprinklesFn extends SprinklesFnBase>({
  Component,
  defaultClassName,
  displayName,
  hasClassNameProp,
  sprinklesFn,
}: WithSprinklesParams<TProps, TSprinklesFn>): ((
  props: WithSprinklesProps<TProps, TSprinklesFn>,
) => ReactNode) => {
  function WithSprinklesComponent(
    props: WithSprinklesProps<TProps, TSprinklesFn>,
  ) {
    const { otherProps, sprinkleProps } = extractAtomsFromProps<
      Omit<TProps, Parameters<TSprinklesFn>[0]>,
      Parameters<TSprinklesFn>[0]
    >(props, [sprinklesFn]);

    return (
      <Component
        {...(otherProps as TProps)}
        className={composeClassNames(
          defaultClassName,
          sprinklesFn(sprinkleProps),
          hasClassNameProp
            ? (otherProps as { className?: string }).className
            : undefined,
        )}
      />
    );
  }

  WithSprinklesComponent.displayName = `withSprinkles(${
    displayName ||
    (
      Component as {
        displayName?: string;
      }
    ).displayName
  })`;

  return WithSprinklesComponent;
};
