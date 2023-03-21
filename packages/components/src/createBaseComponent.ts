import { createElement, forwardRef } from 'react';

import { composeClassNames } from './composeClassNames';
import {
  extractAtomsFromProps,
  SprinklesFnBase,
} from './extractAtomsFromProps';
import { BaseComponentSignature, HTMLProperties } from './types';

export type BaseComponentProps<
  BaseSprinkles,
  HTMLAttributeExceptions extends string,
> = BaseComponentSignature &
  BaseSprinkles &
  HTMLProperties<HTMLAttributeExceptions>;

export function createBaseComponent<
  SprinklesFn extends SprinklesFnBase,
  BaseSprinkles,
  HTMLAttributeExceptions extends string,
>({
  sprinklesFn,
  defaultClassName,
}: {
  sprinklesFn: SprinklesFn;
  defaultClassName?: string;
}) {
  const Box = forwardRef<
    HTMLElement,
    BaseComponentProps<BaseSprinkles, HTMLAttributeExceptions>
  >(
    (
      {
        as = 'div',
        children,
        className,
        ...rest
      }: BaseComponentProps<BaseSprinkles, HTMLAttributeExceptions>,
      ref,
    ) => {
      const { sprinkleProps, otherProps } = extractAtomsFromProps(rest, [
        sprinklesFn,
      ]);

      return createElement(
        as,
        {
          ref,
          ...otherProps,
          className: composeClassNames(
            defaultClassName,
            sprinklesFn(sprinkleProps),
            className,
          ),
        },
        children,
      );
    },
  );

  Box.displayName = 'BaseComponent';

  return Box;
}
