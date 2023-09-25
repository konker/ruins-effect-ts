import * as Either from '@effect/data/Either';
import type { LazyArg } from '@effect/data/Function';
export declare const JsonEither: (x: unknown) => Either.Either<Either.Either<unknown, never>, string>;
export declare const crashMessage: (originalError: unknown) => string;
export declare const crashObject: (error: unknown) => Error;
export declare const crash: (error: unknown) => LazyArg<never>;
//# sourceMappingURL=crash.d.ts.map