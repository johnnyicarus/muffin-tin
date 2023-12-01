import type { ReactNode } from 'react';
import { extractAtomsFromProps } from './extractAtomsFromProps';

import type { SprinklesFnBase, WithHocOptions } from '@muffin-tin/core';

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
  sprinklesFn,
  displayName,
  defaultClassName,
  hasClassNameProp,
}: WithSprinklesParams<TProps, TSprinklesFn>): ((
  props: WithSprinklesProps<TProps, TSprinklesFn>,
) => ReactNode) => {
  const WithSprinklesComponent = (
    props: WithSprinklesProps<TProps, TSprinklesFn>,
  ) => {
    const { sprinkleProps, otherProps } = extractAtomsFromProps<
      Omit<TProps, Parameters<TSprinklesFn>[0]>,
      Parameters<TSprinklesFn>[0]
    >(props, [sprinklesFn]);

    return (
      <Component
        {...(otherProps as TProps)}
        className={[
          defaultClassName,
          sprinklesFn(sprinkleProps),
          hasClassNameProp ? (otherProps as any).className : undefined,
        ]
          .filter((className) => className)
          .join(' ')}
      />
    );
  };

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
