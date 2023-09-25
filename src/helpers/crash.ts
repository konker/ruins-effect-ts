import * as Either from '@effect/data/Either';
import type { LazyArg } from '@effect/data/Function';
import { pipe } from '@effect/data/Function';

export const JsonEither = (x: unknown) => Either.try({ try: () => JSON.stringify(x), catch: (e) => Either.left(e) });

export const crashMessage = (originalError: unknown): string =>
  pipe(
    JsonEither(originalError),
    Either.getOrElse(() => String(originalError))
  );
export const crashObject = (error: unknown): Error => {
  const errorMessage = crashMessage(error);
  return new Error(errorMessage);
};

export const crash =
  (error: unknown): LazyArg<never> =>
  // eslint-disable-next-line fp/no-nil
  () => {
    // eslint-disable-next-line fp/no-throw
    throw crashObject(error);
  };
