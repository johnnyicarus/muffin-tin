import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ElementType,
  type ForwardedRef,
  type ReactElement,
  createElement,
  type ForwardRefExoticComponent,
} from 'react';

import { composeClassNames } from './composeClassNames';
import { extractAtomsFromProps } from './extractAtomsFromProps';
import { type SprinklesFnBase } from './types';

interface CreateDerivedComponentParams<
  TSprinklesFn extends SprinklesFnBase,
  TElement extends ElementType,
> {
  sprinklesFn: TSprinklesFn;
  BaseComponent: TElement;
  defaultClassName?: string;
  displayName?: string;
  hasClassNameProp?: boolean;
}

type DerivedComponentPropsWithoutSprinkles<
  TElement extends
    | ElementType<{
        className?: string;
      }>
    | ForwardRefExoticComponent<{ className?: string }>,
  TAttributeOverrides extends string,
> = Omit<ComponentPropsWithoutRef<TElement>, TAttributeOverrides>;

export type DerivedComponentProps<
  TElement extends
    | ElementType<{
        className?: string;
      }>
    | ForwardRefExoticComponent<{ className?: string }>,
  TSprinklesFn extends SprinklesFnBase,
  TAttributeOverrides extends string,
> = Parameters<TSprinklesFn>[0] &
  DerivedComponentPropsWithoutSprinkles<TElement, TAttributeOverrides>;

export function createDerivedComponent<
  TElement extends
    | ElementType<{
        className?: string;
      }>
    | ForwardRefExoticComponent<{ className?: string }>,
  TSprinklesFn extends SprinklesFnBase,
  TAttributeOverrides extends string,
>({
  sprinklesFn,
  BaseComponent,
  defaultClassName,
  displayName,
  hasClassNameProp,
}: CreateDerivedComponentParams<TSprinklesFn, TElement>) {
  const Component = (
    props: DerivedComponentProps<TElement, TSprinklesFn, TAttributeOverrides>,
    ref: ForwardedRef<ElementRef<TElement>>,
  ): ReactElement => {
    const { sprinkleProps, otherProps } = extractAtomsFromProps<
      // Here we manually add className so that the destructuring
      // on L79 does not complain
      DerivedComponentPropsWithoutSprinkles<TElement, TAttributeOverrides> & {
        className?: string;
      },
      Parameters<TSprinklesFn>[0]
    >(props, [sprinklesFn]);
    const { className, ...rest } = otherProps;

    return createElement(BaseComponent, {
      ...rest,
      ref,
      className: composeClassNames(
        defaultClassName,
        sprinklesFn(sprinkleProps),
        hasClassNameProp ? className : undefined,
      ),
    });
  };

  Component.displayName = displayName || 'MuffinTopComponent';

  return forwardRef(Component);
}
