import { extractAtomsFromProps } from './extractAtomsFromProps';
import { composeClassNames } from './composeClassNames';
import {
  type ElementRef,
  createElement,
  type ForwardedRef,
  type ReactElement,
  forwardRef,
} from 'react';
import { type SprinklesFnBase } from './types';

interface CreateBaseComponentParams<TSprinklesFn extends SprinklesFnBase> {
  sprinklesFn: TSprinklesFn;
  defaultClassName?: string;
  displayName?: string;
}

export interface AsProp<TElement extends keyof JSX.IntrinsicElements> {
  as?: TElement;
}

export type BaseComponentProps<
  TElement extends keyof JSX.IntrinsicElements,
  TSprinklesFn extends SprinklesFnBase,
  TAttributeOverrides extends string,
> = AsProp<TElement> &
  Omit<
    JSX.IntrinsicElements[TElement],
    keyof AsProp<TElement> | TAttributeOverrides
  > &
  Parameters<TSprinklesFn>[0];

export function createBaseComponent<
  TElement extends keyof JSX.IntrinsicElements,
  TSprinklesFn extends SprinklesFnBase,
  TAttributeOverrides extends string,
>({
  sprinklesFn,
  defaultClassName,
  displayName,
}: CreateBaseComponentParams<TSprinklesFn>) {
  const Component = (
    props: BaseComponentProps<TElement, TSprinklesFn, TAttributeOverrides>,
    ref: ForwardedRef<ElementRef<TElement>>,
  ): ReactElement => {
    const { sprinkleProps, otherProps } = extractAtomsFromProps<
      BaseComponentProps<TElement, TSprinklesFn, TAttributeOverrides>,
      Parameters<TSprinklesFn>[0]
    >(props, [sprinklesFn]);
    const { as = 'div', className, ...rest } = otherProps;

    return createElement(as, {
      ...rest,
      ref,
      className: composeClassNames(
        defaultClassName,
        sprinklesFn(sprinkleProps),
        className,
      ),
    });
  };

  Component.displayName = displayName || 'MuffinTinBaseComponent';

  return forwardRef(Component);
}
