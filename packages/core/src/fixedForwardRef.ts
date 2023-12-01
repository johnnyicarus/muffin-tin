import {
  type ReactNode,
  type Ref,
  type RefAttributes,
  forwardRef,
} from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: Ref<T>) => ReactNode,
) => (props: P & RefAttributes<T>) => ReactNode;

export const fixedForwardRef = forwardRef as FixedForwardRef;
