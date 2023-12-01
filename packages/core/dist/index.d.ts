import { Ref, ReactNode, RefAttributes } from 'react';

type FixedForwardRef = <T, P = {}>(render: (props: P, ref: Ref<T>) => ReactNode) => (props: P & RefAttributes<T>) => ReactNode;
declare const fixedForwardRef: FixedForwardRef;

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any ? Omit<T, TOmitted> : never;

interface SprinklesFnBase {
    (...args: any): string;
    properties: Set<string>;
}

interface WithHocOptions {
    displayName?: string;
    defaultClassName?: string;
    hasClassNameProp?: boolean;
}

export { DistributiveOmit, SprinklesFnBase, WithHocOptions, fixedForwardRef };
