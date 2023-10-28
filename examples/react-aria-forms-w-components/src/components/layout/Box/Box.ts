import {
  BaseComponentProps,
  createBaseComponent,
} from '@muffin-tin/components';
import { ElementRef, ReactNode } from 'react';

import { boxSprinkles } from './Box.css';

export type AttributeExceptions = 'color' | 'size' | 'width' | 'height';

export type BoxProps<TElement extends keyof JSX.IntrinsicElements> =
  BaseComponentProps<TElement, typeof boxSprinkles, AttributeExceptions>;

export const Box = createBaseComponent<
  keyof JSX.IntrinsicElements,
  typeof boxSprinkles,
  AttributeExceptions
>({ sprinklesFn: boxSprinkles, displayName: 'CCBox' }) as <
  TElement extends keyof JSX.IntrinsicElements,
>(
  props: BoxProps<TElement>,
  ref: ElementRef<TElement>,
) => ReactNode;
