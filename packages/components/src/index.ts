import {
  createBaseComponent,
  type BaseComponentProps,
} from './createBaseComponent';
import { createComponent } from './createComponent';
import { extractAtomsFromProps } from './extractAtomsFromProps';
import type { BaseComponentSignature } from './types';

export { createBaseComponent, createComponent, extractAtomsFromProps };
export type { BaseComponentProps, BaseComponentSignature };
