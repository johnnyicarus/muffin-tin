import { type DistributiveOmit, fixedForwardRef } from '@muffin-tin/core';
import {
  type ComponentPropsWithRef,
  type ElementType,
  type ForwardedRef,
} from 'react';

const Tag = <TAs extends ElementType>(
  props: {
    as?: TAs;
  } & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? 'div' : TAs>,
    'as'
  >,
  ref: ForwardedRef<any>,
) => {
  const { as: Comp = 'div', ...rest } = props;
  
  return <Comp {...rest} ref={ref}></Comp>;
};

export const _Tag = fixedForwardRef(Tag);
export { _Tag as Tag };
