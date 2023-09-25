# ruins-effect-ts

Ruins-effect-ts is a library that converts TypeScript [Effect-ts](https://github.com/Effect-ts/effect) types into primitive types familiar to most JavaScript programmers. Using ruins-ts is generally speaking a _bad idea_ since the corresponding Effect-ts types give much stronger guarantees about the values than their primitive JavaScript counterparts. However, if you wish you had a sledgehammer for breaking your application into smithereens, ruins-effect-ts may be what you are looking for.

This is a port of [ruins-ts](https://github.com/maasglobal/ruins-ts) to adapt it for Effect-ts.

If you have managed to read this far you may start using ruins-effect-ts by importing it as follows.

```typescript
import * as ruins from './ruins-effect';

ruins.fromOption; // terminates Option, returns nullable
ruins.fromEither; // terminates Either, throws on error
ruins.fromLazyArg; // terminates LazyArg, returns the result
```

## fromLazyArg (function)

Executes synchronous side effects of an [LazyArg](https://effect-ts.github.io/data/modules/Function.ts.html#lazyarg-interface) and returns the result.

**Breaks referential transparency.**

#### Signature

```ts
export function fromLazyArg<R>(aLazyArg: LazyArg<R>): R {}
```

#### Example

```typescript
import type { LazyArg } from '@effect/data/Function';

const syncComputation: LazyArg<number> = () => {
  console.log('effect');
  return 123;
};

ruins.fromLazyArg(syncComputation); // => 123 (prints "effect")
```

## fromOption (function)

Returns the raw value in case of [Some](https://effect-ts.github.io/data/modules/Option.ts.html#some-interface) and `null` in case of [None](https://effect-ts.github.io/data/modules/Option.ts.html#none-interface).

**Makes it impossible to distinguish between a null value and no value.**

#### Signature

```ts
export function fromOption<R>(anOption: Option.Option<R>): R | null {}
```

#### Example

```typescript
import * as Option from '@effect/data/Option';

const someNumber: Option.Option<number> = Option.some(123);
const noNumber: Option.Option<number> = Option.none();

ruins.fromOption(someNumber); // => 123
ruins.fromOption(noNumber); // => null

type Foo = string | null;

const stringValue: Option.Option<Foo> = Option.some('foo');
const nullValue: Option.Option<Foo> = Option.some(null);
const noValue: Option.Option<Foo> = Option.none();

ruins.fromOption(stringValue); // => 'foo'
ruins.fromOption(nullValue); // => null
ruins.fromOption(noValue); // => null

nullValue === noValue; // => false
ruins.fromOption(nullValue) === ruins.fromOption(noValue); // => true
```

## fromEither (function)

Asserts [Right](https://effect-ts.github.io/data/modules/Either.ts.html#right-interface) and returns the result.

**Throws a runtime Error on [Left](https://effect-ts.github.io/data/modules/Either.ts.html#left-interface).**

#### Signature

```ts
export function fromEither<R>(anEither: Either.Either<unknown, R>): R {}
```

#### Example

```typescript
import * as Either from '@effect/data/Either';

const failureE: Either.Either<string, number> = Either.left('error');
const successE: Either.Either<string, number> = Either.right(123);

ruins.fromEither(failureE); // => never (throws an exception)
ruins.fromEither(successE); // => 123
```
