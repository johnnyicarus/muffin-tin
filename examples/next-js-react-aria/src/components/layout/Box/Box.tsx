'use client';

import {
  BaseComponentProps,
  DerivedComponentProps,
  createBaseComponent,
  createDerivedComponent,
} from '@muffin-tin/components';

import { type ElementRef, type ReactNode } from 'react';
import type { AttributeExceptions } from '../../AttributeExceptions';
import ActiveLinkReactAria, {
  ActiveLinkReactAriaProps,
} from '../../active-links/ActiveLinkReactAria/ActiveLinkReactAria';
import { boxSprinkles } from './Box.css';

export type BoxProps<TElement extends keyof JSX.IntrinsicElements> =
  BaseComponentProps<TElement, typeof boxSprinkles, AttributeExceptions>;

export const Box = createBaseComponent<
  keyof JSX.IntrinsicElements,
  typeof boxSprinkles,
  AttributeExceptions
>({ sprinklesFn: boxSprinkles, displayName: 'ExampleBox' });

export type BoxLinkReactAriaProps = DerivedComponentProps<
  typeof ActiveLinkReactAria,
  typeof boxSprinkles,
  AttributeExceptions
> &
  ActiveLinkReactAriaProps;

export const BoxLinkReactAria = createDerivedComponent<
  typeof ActiveLinkReactAria,
  typeof boxSprinkles,
  AttributeExceptions
>({
  BaseComponent: ActiveLinkReactAria,
  sprinklesFn: boxSprinkles,
  displayName: 'ExampleBoxLink',
}) as (props: BoxLinkReactAriaProps, ref: ElementRef<'a'>) => ReactNode;
