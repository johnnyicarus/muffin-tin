import { createDerivedComponent } from '@muffin-tin/components';

import { Box, type BoxProps } from '../Box';
import {
  flexBaseStyles,
  flexSprinkles,
  flexSprinkles2,
  type FlexSprinkles,
} from './Flex.css';

import {
  forwardRef,
  type ElementRef,
  type ForwardedRef,
  type ReactNode,
  ComponentType,
  ElementType,
} from 'react';
import { AttributeExceptions } from '../../AttributeExceptions';
import {
  BaseComponentProps,
  createBaseComponent,
} from '@muffin-tin/components';
import { boxProperties, boxSprinkles } from '../Box/Box.css';

export type FlexProps<TElement extends keyof JSX.IntrinsicElements> =
  BoxProps<TElement> & FlexSprinkles;

// "typeof Box" here throws an extremely weird error,
// seems incompatible types of ReactNode just in Next.js
export const Flex = createDerivedComponent<
  any,
  typeof flexSprinkles,
  AttributeExceptions
>({
  BaseComponent: Box,
  sprinklesFn: flexSprinkles,
  defaultClassName: flexBaseStyles,
  hasClassNameProp: true,
}) as <TElement extends keyof JSX.IntrinsicElements>(
  props: FlexProps<TElement>,
  ref: ElementRef<TElement>,
) => ReactNode;

export type Flex2Props<TElement extends keyof JSX.IntrinsicElements> =
  BaseComponentProps<TElement, typeof flexSprinkles2, AttributeExceptions>;

export const Flex2 = createBaseComponent<
  keyof JSX.IntrinsicElements,
  typeof flexSprinkles2,
  AttributeExceptions
>({ sprinklesFn: flexSprinkles2, displayName: 'ExampleBox' }) as <
  TElement extends keyof JSX.IntrinsicElements,
>(
  props: Flex2Props<TElement>,
  ref: ElementRef<TElement>,
) => ReactNode;
