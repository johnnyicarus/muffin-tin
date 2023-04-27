import { forwardRef, ForwardRefExoticComponent } from 'react';

import { composeClassNames } from './composeClassNames';
import { BaseComponentProps } from './createBaseComponent';
import { extractAtomsFromProps } from './extractAtomsFromProps';
import { SprinklesFnBase } from './types';

export type ComponentProps<Sprinkles, BaseComponentProps> = BaseComponentProps &
  Sprinkles;

interface ComponentParams<
  SprinklesFn extends SprinklesFnBase,
  BaseComponentProps,
> {
  sprinklesFn: SprinklesFn;
  BaseComponent: ForwardRefExoticComponent<BaseComponentProps>;
  defaultClassName?: string;
  displayName?: string;
}

export function createComponent<
  SprinklesFn extends SprinklesFnBase,
  BaseComponentProps,
>({
  sprinklesFn,
  BaseComponent,
  defaultClassName,
  displayName,
}: ComponentParams<SprinklesFn, BaseComponentProps>) {
  type Sprinkles = Parameters<typeof sprinklesFn>[0];

  const Box = forwardRef<
    HTMLElement,
    ComponentProps<Sprinkles, BaseComponentProps>
  >(
    (
      { className, ...rest }: ComponentProps<Sprinkles, BaseComponentProps>,
      ref,
    ) => {
      type Rest = Omit<BaseComponentProps, 'className'>;
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
          {...(otherProps as BaseComponentProps)}
        ></BaseComponent>
      );
    },
  );

  Box.displayName = displayName || 'MuffinTopComponent';

  return Box;
}
