import {
  createBaseComponent,
  type BaseComponentProps,
} from './createBaseComponent';
import {
  createDerivedComponent,
  type DerivedComponentProps,
} from './createDerivedComponent';
import { extractAtomsFromProps } from './extractAtomsFromProps';

export { createBaseComponent, createDerivedComponent, extractAtomsFromProps };
export type { BaseComponentProps, DerivedComponentProps };
