import React, {
  forwardRef,
  type ComponentProps,
  type JSXElementConstructor,
} from 'react';

import { composeClassNames } from './composeClassNames';
import { extractAtomsFromProps } from './extractAtomsFromProps';
import { type SprinklesFnBase } from './types';

interface ComponentParams<
  SprinklesFn extends SprinklesFnBase,
  BaseComponentType extends
    | keyof JSX.IntrinsicElements
    | JSXElementConstructor<any>,
> {
  sprinklesFn: SprinklesFn;
  BaseComponent: ComponentProps<BaseComponentType>;
  defaultClassName?: string;
  displayName?: string;
}

export function createComponent<
  SprinklesFn extends SprinklesFnBase,
  BaseComponentType extends
    | keyof JSX.IntrinsicElements
    | JSXElementConstructor<any>,
>({
  sprinklesFn,
  BaseComponent,
  defaultClassName,
  displayName,
}: ComponentParams<SprinklesFn, BaseComponentType>) {
  type Sprinkles = Parameters<typeof sprinklesFn>[0];

  const Box = forwardRef<HTMLElement, Sprinkles & BaseComponentType>(
    ({ className, ...rest }: Sprinkles & BaseComponentType, ref) => {
      type Rest = Omit<BaseComponentType, 'className'>;
      const { sprinkleProps, otherProps } = extractAtomsFromProps<
        Rest,
        Sprinkles
      >(rest, [sprinklesFn]);

      return (
        <BaseComponent
          ref={ref}
          className={composeClassNames(
            defaultClassName,
            sprinklesFn(sprinkleProps),
            className,
          )}
          {...otherProps}
        ></BaseComponent>
      );
    },
  );

  Box.displayName = displayName || 'MuffinTopComponent';

  return Box;
}
