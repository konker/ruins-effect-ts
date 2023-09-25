import type { LazyArg } from '@effect/data/Function';

export const fromLazyArg = <R>(aLazyArg: LazyArg<R>): R => aLazyArg();
