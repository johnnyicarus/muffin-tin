import {
  BaseComponentProps,
  createBaseComponent,
} from '@muffin-tin/components';
import { ElementRef, ReactNode } from 'react';
import { boxSprinkles } from './Box.css';

export type BoxProps<TElement extends keyof JSX.IntrinsicElements> =
  BaseComponentProps<TElement, typeof boxSprinkles, ''>;

// We can use a declaration to properly type the
// exotic forward ref component
export const Box = createBaseComponent<
  keyof JSX.IntrinsicElements,
  typeof boxSprinkles,
  ''
>({
  sprinklesFn: boxSprinkles,
  defaultClassName: 'button',
}) as <TElement extends keyof JSX.IntrinsicElements>(
  BaseComponentProps: BoxProps<TElement>,
  ref: ElementRef<TElement>,
) => ReactNode;
