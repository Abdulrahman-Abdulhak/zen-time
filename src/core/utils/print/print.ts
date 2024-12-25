import { FirstChar } from "../../types/index.js";

type Mapping = {
  [key in "d" | "i" | "f"]: number;
} & {
  s: string;
} & {
  [key in "o" | "O"]: object;
};

type ArrayMapping<
  Char,
  TypedArguments extends any[]
> = Char extends keyof Mapping
  ? [...TypedArguments, Mapping[Char]]
  : TypedArguments;

type ArgumentsForString<
  T extends string,
  TypedArguments extends any[] = []
> = T extends `${infer Head}${infer Tail}`
  ? Head extends "%"
    ? ArgumentsForString<Tail, ArrayMapping<FirstChar<Tail>, TypedArguments>>
    : ArgumentsForString<Tail, TypedArguments>
  : [...TypedArguments, ...any[]];

type OptionalParams<T> = T extends string ? ArgumentsForString<T> : any[];

type BaseTypes =
  | number
  | string
  | boolean
  | object
  | null
  | undefined
  | bigint
  | symbol;

/**
 * The better typed version of console.log() that handles typing for string arguments in the {message} parameter
 * @param message message to print on the console
 * @param optionalParams
 */
export const print = <T extends BaseTypes>(
  message?: T,
  ...optionalParams: OptionalParams<T>
): void => {
  console.log(message, ...optionalParams);
};
