import React, { forwardRef, ForwardRefExoticComponent } from 'react';

import { composeClassNames } from './composeClassNames';
import { BaseComponentProps } from './createBaseComponent';
import {
  extractAtomsFromProps,
  SprinklesFnBase,
} from './extractAtomsFromProps';

type ComponentProps<
  Sprinkles,
  HTMLAttributeExceptions extends string,
  BaseSprinkles,
> = BaseComponentProps<BaseSprinkles, HTMLAttributeExceptions> & Sprinkles;

export function createComponent<
  SprinklesFn extends SprinklesFnBase,
  Sprinkles,
  HTMLAttributeExceptions extends string,
  BaseSprinkles,
>({
  sprinklesFn,
  BaseComponent,
  defaultClassName,
}: {
  sprinklesFn: SprinklesFn;
  BaseComponent: ForwardRefExoticComponent<
    BaseComponentProps<BaseSprinkles, HTMLAttributeExceptions>
  >;
  defaultClassName?: string;
}) {
  const Box = forwardRef<
    HTMLElement,
    ComponentProps<Sprinkles, HTMLAttributeExceptions, BaseSprinkles>
  >(
    (
      {
        className,
        ...rest
      }: ComponentProps<Sprinkles, HTMLAttributeExceptions, BaseSprinkles>,
      ref,
    ) => {
      const { sprinkleProps, otherProps } = extractAtomsFromProps(rest, [
        sprinklesFn,
      ]);

      return (
        <BaseComponent
          ref={ref}
          className={composeClassNames(
            defaultClassName,
            sprinklesFn(sprinkleProps),
            className,
          )}
          {...(otherProps as BaseComponentProps<
            BaseSprinkles,
            HTMLAttributeExceptions
          >)}
        ></BaseComponent>
      );
    },
  );

  Box.displayName = 'DerivedComponent';

  return Box;
}
