import {
  createBaseComponent,
  type BaseComponentProps,
} from './createBaseComponent';
import {
  createDerivedComponent,
  type NewComponentProps,
} from './createDerivedComponent';
import { extractAtomsFromProps } from './extractAtomsFromProps';

export { createBaseComponent, createDerivedComponent, extractAtomsFromProps };
export type { BaseComponentProps, NewComponentProps as DerivedComponentProps };
