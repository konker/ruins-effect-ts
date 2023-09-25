import { pipe } from '@effect/data/Function';
import * as Option from '@effect/data/Option';

export const fromOption = <R>(anOption: Option.Option<R>): R | null =>
  pipe(
    anOption,
    // eslint-disable-next-line fp/no-nil
    Option.getOrElse((): R | null => null)
  );
