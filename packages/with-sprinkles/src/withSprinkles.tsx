import { type ReactNode } from 'react';
import { extractAtomsFromProps } from './extractAtomsFromProps';
import { type SprinklesFnBase } from './SprinklesFnBase';

export type WithSprinklesProps<
  TProps,
  TSprinklesFn extends SprinklesFnBase,
> = Omit<TProps, Parameters<TSprinklesFn>[0]> & Parameters<TSprinklesFn>[0];

export const withSprinkles = <
  // eslint-disable-next-line @typescript-eslint/ban-types
  TProps,
  TSprinklesFn extends SprinklesFnBase,
>(
  Component: (props: TProps) => ReactNode,
  sprinklesFn: TSprinklesFn,
  displayName: string,
  defaultClassName?: string,
  hasClassNameProp?: boolean,
): ((props: WithSprinklesProps<TProps, TSprinklesFn>) => ReactNode) => {
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
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    displayName ||
    (
      Component as {
        displayName?: string;
      }
    ).displayName
  })`;

  return WithSprinklesComponent;
};
