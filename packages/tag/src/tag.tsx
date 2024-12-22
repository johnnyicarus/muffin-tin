import { type DistributiveOmit } from '@muffin-tin/core';
import { type ComponentPropsWithRef, type ElementType } from 'react';

export const Tag = <TAs extends ElementType>(
  props: {
    as?: TAs;
  } & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? 'div' : TAs>,
    'as'
  >,
) => {
  const { as: Comp = 'div', ref, ...rest } = props;

  return <Comp {...rest} ref={ref} />;
};
