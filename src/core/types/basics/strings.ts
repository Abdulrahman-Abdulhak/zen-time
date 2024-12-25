export type FirstChar<T extends string> = T extends `${infer Head}${string}`
  ? Head
  : T;
