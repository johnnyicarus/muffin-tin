import { type AllHTMLAttributes, type ReactNode } from 'react';

export interface BaseComponentSignature {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
}

export type HTMLProperties<
  HTMLAttributeExceptions extends string,
  HTMLElement extends Element,
> = Omit<AllHTMLAttributes<HTMLElement>, HTMLAttributeExceptions>;

export interface SprinklesFnBase {
  (...args: any): string;
  properties: Set<string>;
}
