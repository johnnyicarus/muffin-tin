import { forwardRef, ForwardRefExoticComponent } from 'react';

import { composeClassNames } from './composeClassNames';
import { BaseComponentProps } from './createBaseComponent';
import { extractAtomsFromProps } from './extractAtomsFromProps';
import { SprinklesFnBase } from './types';

export type ComponentProps<
  Sprinkles,
  HTMLAttributeExceptions extends string,
  BaseSprinkles,
> = BaseComponentProps<BaseSprinkles, HTMLAttributeExceptions> & Sprinkles;

type BaseComponentType<
  BaseSprinkles,
  HTMLAttributeExceptions extends string,
> = ForwardRefExoticComponent<
  BaseComponentProps<BaseSprinkles, HTMLAttributeExceptions>
>;

interface ComponentParams<
  SprinklesFn extends SprinklesFnBase,
  HTMLAttributeExceptions extends string,
  BaseSprinkles,
> {
  sprinklesFn: SprinklesFn;
  BaseComponent: BaseComponentType<BaseSprinkles, HTMLAttributeExceptions>;
  defaultClassName?: string;
  displayName?: string;
}

export function createComponent<
  SprinklesFn extends SprinklesFnBase,
  HTMLAttributeExceptions extends string,
  BaseSprinkles,
>({
  sprinklesFn,
  BaseComponent,
  defaultClassName,
  displayName,
}: ComponentParams<SprinklesFn, HTMLAttributeExceptions, BaseSprinkles>) {
  type Sprinkles = Parameters<typeof sprinklesFn>[0];

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
      type Rest = Omit<
        BaseComponentProps<BaseSprinkles, HTMLAttributeExceptions>,
        'className'
      >;
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
          {...(otherProps as BaseComponentProps<
            BaseSprinkles,
            HTMLAttributeExceptions
          >)}
        ></BaseComponent>
      );
    },
  );

  Box.displayName = displayName || 'MuffinTopComponent';

  return Box;
}
