export interface SprinklesFnBase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...args: any): string;
  properties: Set<string>;
}
