import {
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardedRef,
  forwardRef,
  type ElementRef,
} from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode,
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

export const UnwrappedBox = <TAs extends ElementType>(
  props: {
    as?: TAs;
  } & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? 'div' : TAs>,
    'as'
  >,
  ref: ForwardedRef<ElementRef<ElementType extends TAs ? 'div' : TAs>>,
) => {
  const { as: Comp = 'div', ...rest } = props;
  return <Comp {...rest} ref={ref}></Comp>;
};

export const Box = fixedForwardRef(UnwrappedBox);
