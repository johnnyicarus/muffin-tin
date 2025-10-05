import { type DistributiveOmit } from "@muffin-tin/core";
import { type ComponentProps, type ElementType } from "react";

export const Tag = <TAs extends ElementType>(
  props: {
    as?: TAs;
  } & DistributiveOmit<
    ComponentProps<ElementType extends TAs ? "div" : TAs>,
    "as"
  >,
) => {
  const { as: Component = "div", ...rest } = props;

  return <Component {...rest} />;
};
