'use client';
import {
  DerivedComponentProps,
  createDerivedComponent,
} from '@muffin-tin/components';
import { type ElementRef, type ReactNode } from 'react';
import { Button, type ButtonProps } from 'react-aria-components';
import type { AttributeExceptions } from '../../../../AttributeExceptions';
import { boxSprinkles } from '../../Box.css';

export type BoxButtonReactAriaProps = DerivedComponentProps<
  'button',
  typeof boxSprinkles,
  AttributeExceptions
> &
  ButtonProps &
  React.RefAttributes<HTMLButtonElement>;

export const BoxButtonReactAria = createDerivedComponent<
  // @ts-expect-error weird incompatible ReactNode behaviour
  typeof Button,
  typeof boxSprinkles,
  AttributeExceptions
>({
  BaseComponent: Button,
  sprinklesFn: boxSprinkles,
  displayName: 'ExampleBoxButton',
}) as (props: BoxButtonReactAriaProps, ref: ElementRef<'button'>) => ReactNode;
