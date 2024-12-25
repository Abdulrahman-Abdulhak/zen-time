type Repeatable<Params extends [] = never, Return = never> =
  | ((...args: Params) => Return)
  | string;

// TODO: Fix the type so the error below disappears.
type Args<T extends Repeatable> = T extends (...args: infer Params) => any
  ? Params
  : never;

export const repeat = (
  repeatable: Repeatable,
  times: number,
  ...args: Args<typeof repeatable>
): string | void => {
  const timesArr = new Array(times);

  if (typeof repeatable === "string") {
    return timesArr.fill(repeatable).join("");
  }

  for (const t of timesArr) {
    repeatable(...args);
  }
};

//! try to see if this results in an error.
// repeat(add, 2, 1, 2);

function add(a: number, b: number) {
  return a + b;
}
