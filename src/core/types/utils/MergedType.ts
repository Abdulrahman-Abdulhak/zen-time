export type MergedType<
  TypesArray extends any[],
  Res = {}
> = TypesArray extends [infer Head, ...infer Tail]
  ? MergedType<Tail, Res & Head>
  : Res;
