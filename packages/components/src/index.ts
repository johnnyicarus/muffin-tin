import {
  createBaseComponent,
  type BaseComponentProps,
} from './createBaseComponent';
import { createComponent, type ComponentProps } from './createComponent';
import { extractAtomsFromProps } from './extractAtomsFromProps';
import type { BaseComponentSignature } from './types';

export { createBaseComponent, createComponent, extractAtomsFromProps };
export type { BaseComponentProps, BaseComponentSignature, ComponentProps };
