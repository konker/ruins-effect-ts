import * as Either from '@effect/data/Either';
import type { LazyArg } from '@effect/data/Function';
import { pipe } from '@effect/data/Function';

import { crash } from '../helpers/crash';
import { fromLazyArg } from './lazy-arg';

export const fromEither = <R>(anEither: Either.Either<unknown, R>): R =>
  pipe(
    anEither,
    Either.getOrElse((error: unknown): R => {
      const crasher: LazyArg<never> = crash(error);
      return fromLazyArg(crasher);
    })
  );
