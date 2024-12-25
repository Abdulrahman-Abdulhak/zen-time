import { MergedType } from "./MergedType.js";

type OnlyFirst<T, S> = T & { [Key in keyof Omit<S, keyof S>]: never };

export type EitherOf<T, S> = OnlyFirst<T, S> | OnlyFirst<S, T>;

export type OneOf<
  TypesArray extends any[],
  Res = never,
  AllProperties = MergedType<TypesArray>
> = TypesArray extends [infer Head, ...infer Tail]
  ? OneOf<Tail, Res | OnlyFirst<Head, AllProperties>, AllProperties>
  : Res;
