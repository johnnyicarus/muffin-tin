import {
  DerivedComponentProps,
  createDerivedComponent,
} from '@muffin-tin/components';
import { ElementRef, ReactNode } from 'react';
import { backgroundSprinkles } from './Background.css';
import { Box, BoxProps } from '../Box/Box';

const SizeComponent = ({
  children,
  className,
  width = 300,
  height = 300,
}: {
  children?: ReactNode;
  className?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <div style={{ width, height }} className={className}>
      {children}
    </div>
  );
};

export type BackgroundProps = DerivedComponentProps<
  typeof SizeComponent,
  typeof backgroundSprinkles,
  ''
>;

export const Background = createDerivedComponent<
  typeof SizeComponent,
  typeof backgroundSprinkles,
  ''
>({
  sprinklesFn: backgroundSprinkles,
  BaseComponent: SizeComponent,
});

export const Background2 = createDerivedComponent<
  typeof SizeComponent,
  typeof backgroundSprinkles,
  ''
>({
  sprinklesFn: backgroundSprinkles,
  BaseComponent: SizeComponent,
  hasClassNameProp: true,
});

// Here we manually add any additional props we are not catching
// with ComponentPropsWithout<TElement>;
export type Background3Props<TElement extends keyof JSX.IntrinsicElements> =
  DerivedComponentProps<TElement, typeof backgroundSprinkles, ''> &
    BoxProps<TElement>;

export const Background3 = createDerivedComponent<
  typeof Box,
  typeof backgroundSprinkles,
  ''
>({
  sprinklesFn: backgroundSprinkles,
  BaseComponent: Box,
}) as <TElement extends keyof JSX.IntrinsicElements>(
  props: Background3Props<TElement>,
  ref: ElementRef<TElement>,
) => ReactNode;
