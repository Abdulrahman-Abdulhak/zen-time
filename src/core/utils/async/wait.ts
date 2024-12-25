/**
 * An asynchronous function that ends whenever the duration assigned to ot ends.
 * @param seconds The amount to wait for in seconds.
 * @returns a promise that resolves when the duration assigned to it ends.
 */
export const wait = async (seconds: number): Promise<void> => {
  const promise = new Promise((resolver: (value: void) => void) => {
    setTimeout(resolver, seconds * 1000);
  });

  return promise;
};

/**
 * A synchronous version of the function {@linkcode wait}.
 * !WARNING: Calling this function will block the main execution thread until the timer ends.
 * @param seconds The amount to wait for in seconds.
 * @returns a promise that resolves when the duration assigned to it ends.
 */
export const waitSync = (seconds: number): void => {
  const startTime = Date.now();

  for (;;) {
    const currentTime = Date.now();
    const runDurationInSeconds = (currentTime - startTime) / 1000;

    if (runDurationInSeconds >= seconds) break;
  }
};
