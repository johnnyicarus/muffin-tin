import {
  type SprinklesFnBase,
  type WithHocOptions,
  composeClassNames,
  extractAtomsFromProps,
} from '@muffin-tin/core';
import type { ReactNode, Ref } from 'react';

export interface WithSprinklesParams<
  TProps,
  TSprinklesFn extends SprinklesFnBase,
> extends WithHocOptions {
  Component: (props: TProps) => ReactNode;
  sprinklesFn: TSprinklesFn;
}

// prettier-ignore
export type WithSprinklesProps<
  TProps,
  TSprinklesFn extends SprinklesFnBase,
> = Omit<TProps, Parameters<TSprinklesFn>[0]> & Parameters<TSprinklesFn>[0];

export const withSprinkles = <
  TProps,
  TSprinklesFn extends SprinklesFnBase,
  TRef,
>({
  Component,
  sprinklesFn,
  displayName,
  defaultClassName,
  hasClassNameProp,
}: WithSprinklesParams<TProps, TSprinklesFn>): ((
  props: WithSprinklesProps<TProps, TSprinklesFn>,
  ref: Ref<TRef>,
) => ReactNode) => {
  function WithSprinklesComponent(
    props: WithSprinklesProps<TProps, TSprinklesFn>,
    ref: Ref<TRef>,
  ) {
    const { sprinkleProps, otherProps } = extractAtomsFromProps<
      Omit<TProps, Parameters<TSprinklesFn>[0]>,
      Parameters<TSprinklesFn>[0]
    >(props, [sprinklesFn]);

    return (
      <Component
        {...(otherProps as TProps)}
        ref={ref}
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
