import { createElement, forwardRef } from 'react';

import { composeClassNames } from './composeClassNames';
import { extractAtomsFromProps } from './extractAtomsFromProps';
import {
  BaseComponentSignature,
  HTMLProperties,
  SprinklesFnBase,
} from './types';

export type BaseComponentProps<
  Sprinkles,
  HTMLAttributeExceptions extends string,
> = BaseComponentSignature &
  Sprinkles &
  HTMLProperties<HTMLAttributeExceptions>;

interface CreateBaseComponentParams<SprinklesFn extends SprinklesFnBase> {
  sprinklesFn: SprinklesFn;
  defaultClassName?: string;
  displayName?: string;
}

export function createBaseComponent<
  SprinklesFn extends SprinklesFnBase, // We can derive this from sprinklesFn?
  HTMLAttributeExceptions extends string,
>({
  sprinklesFn,
  defaultClassName,
  displayName,
}: CreateBaseComponentParams<SprinklesFn>) {
  type Sprinkles = Parameters<typeof sprinklesFn>[0];

  const Box = forwardRef<
    HTMLElement,
    BaseComponentProps<Sprinkles, HTMLAttributeExceptions>
  >(
    (
      {
        as = 'div',
        children,
        className,
        ...rest
      }: BaseComponentProps<Sprinkles, HTMLAttributeExceptions>,
      ref,
    ) => {
      const { sprinkleProps, otherProps } = extractAtomsFromProps<
        Omit<
          BaseComponentSignature & HTMLProperties<HTMLAttributeExceptions>,
          'as' | 'children' | 'className'
        >,
        Sprinkles
      >(rest, [sprinklesFn]);

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

  Box.displayName = displayName || 'MuffinTinBaseComponent';

  return Box;
}
