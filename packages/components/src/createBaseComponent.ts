import { createElement, forwardRef } from 'react';

import { composeClassNames } from './composeClassNames';
import { extractAtomsFromProps } from './extractAtomsFromProps';
import {
  type BaseComponentSignature,
  type HTMLProperties,
  type SprinklesFnBase,
} from './types';

export type BaseComponentProps<
  Sprinkles,
  HTMLAttributeExceptions extends string,
  HTMLElement extends Element,
> = BaseComponentSignature &
  Sprinkles &
  HTMLProperties<HTMLAttributeExceptions, HTMLElement>;

interface CreateBaseComponentParams<SprinklesFn extends SprinklesFnBase> {
  sprinklesFn: SprinklesFn;
  defaultClassName?: string;
  displayName?: string;
}

export function createBaseComponent<
  SprinklesFn extends SprinklesFnBase,
  HTMLAttributeExceptions extends string,
  HTMLElement extends Element,
>({
  sprinklesFn,
  defaultClassName,
  displayName,
}: CreateBaseComponentParams<SprinklesFn>) {
  type Sprinkles = Parameters<typeof sprinklesFn>[0];

  const Box = forwardRef<
    HTMLElement,
    BaseComponentProps<Sprinkles, HTMLAttributeExceptions, HTMLElement>
  >(
    (
      {
        as = 'div',
        children,
        className,
        ...rest
      }: BaseComponentProps<Sprinkles, HTMLAttributeExceptions, HTMLElement>,
      ref,
    ) => {
      const { sprinkleProps, otherProps } = extractAtomsFromProps<
        Omit<
          BaseComponentSignature &
            HTMLProperties<HTMLAttributeExceptions, HTMLElement>,
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
