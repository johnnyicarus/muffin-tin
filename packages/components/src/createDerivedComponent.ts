import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ElementType,
  type ForwardedRef,
  type ReactElement,
  createElement,
} from 'react';

import { composeClassNames } from './composeClassNames';
import { extractAtomsFromProps } from './extractAtomsFromProps';
import { type SprinklesFnBase } from './types';

interface CreateComponentParams<
  TSprinklesFn extends SprinklesFnBase,
  TElement extends ElementType<{
    className?: string;
  }>,
> {
  sprinklesFn: TSprinklesFn;
  BaseComponent: TElement;
  defaultClassName?: string;
  displayName?: string;
  hasClassNameProp?: boolean;
}

export type OldComponentProps<
  TElement extends ElementType<{
    className?: string;
  }>,
  // TSprinklesFn extends SprinklesFnBase,
  TAttributeOverrides extends string,
> = Omit<ComponentPropsWithoutRef<TElement>, TAttributeOverrides> & {
  className?: string;
};

type NewComponentPropsWithoutSprinkles<
  TElement extends ElementType<{
    className?: string;
  }>,
  TAttributeOverrides extends string,
> = Omit<ComponentPropsWithoutRef<TElement>, TAttributeOverrides>;

export type NewComponentProps<
  TElement extends ElementType<{
    className?: string;
  }>,
  TSprinklesFn extends SprinklesFnBase,
  TAttributeOverrides extends string,
> = Parameters<TSprinklesFn>[0] &
  NewComponentPropsWithoutSprinkles<TElement, TAttributeOverrides>;

export function createDerivedComponent<
  TElement extends ElementType<{
    className?: string;
  }>,
  TSprinklesFn extends SprinklesFnBase,
  TAttributeOverrides extends string,
>({
  sprinklesFn,
  BaseComponent,
  defaultClassName,
  displayName,
  hasClassNameProp,
}: CreateComponentParams<TSprinklesFn, TElement>) {
  const Component = (
    props: NewComponentProps<TElement, TSprinklesFn, TAttributeOverrides>,
    ref: ForwardedRef<ElementRef<TElement>>,
  ): ReactElement => {
    const { sprinkleProps, otherProps } = extractAtomsFromProps<
      // Here we manually add className so that the destructuring
      // on L79 does not complain
      NewComponentPropsWithoutSprinkles<TElement, TAttributeOverrides> & {
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