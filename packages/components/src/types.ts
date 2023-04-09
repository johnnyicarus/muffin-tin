import { AllHTMLAttributes, ReactNode } from 'react';

export type BaseComponentSignature = {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
};

export type HTMLProperties<HTMLAttributeExceptions extends string> = Omit<
  AllHTMLAttributes<HTMLElement>,
  HTMLAttributeExceptions
>;

export interface SprinklesFnBase {
  (...args: any): string;
  properties: Set<string>;
}
