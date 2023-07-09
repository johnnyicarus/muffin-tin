import React, {
  forwardRef,
  type JSXElementConstructor,
  type ComponentPropsWithoutRef,
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
  BaseComponent: BaseComponentType;
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
  type BaseComponentProps = ComponentPropsWithoutRef<BaseComponentType>;
  type Props = Sprinkles & BaseComponentProps;

  const Box = forwardRef<HTMLElement, Props>(
    ({ className, ...rest }: Props, ref) => {
      type Rest = Omit<BaseComponentProps, 'className'>;
      const { sprinkleProps, otherProps } = extractAtomsFromProps<
        Rest,
        Sprinkles
      >(rest, [sprinklesFn]);

      return (
        <BaseComponent
          {...(otherProps as Sprinkles & Rest)}
          ref={ref}
          className={composeClassNames(
            defaultClassName,
            sprinklesFn(sprinkleProps),
            className,
          )}
        ></BaseComponent>
      );
    },
  );

  Box.displayName = displayName || 'MuffinTopComponent';

  return Box;
}
