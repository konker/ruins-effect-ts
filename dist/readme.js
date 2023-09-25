"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
# ruins-effect-ts

Ruins-effect-ts is a library that converts TypeScript [Effect-ts](https://github.com/Effect-ts/effect) types into primitive types familiar to most JavaScript programmers. Using ruins-ts is generally speaking a _bad idea_ since the corresponding Effect-ts types give much stronger guarantees about the values than their primitive JavaScript counterparts. However, if you wish you had a sledgehammer for breaking your application into smithereens, ruins-effect-ts may be what you are looking for.

This is a port of [ruins-ts](https://github.com/maasglobal/ruins-ts) to adapt it for Effect-ts.

If you have managed to read this far you may start using ruins-effect-ts by importing it as follows.

*/
const ruins = __importStar(require("./ruins-effect"));
ruins.fromOption; // terminates Option, returns nullable
ruins.fromEither; // terminates Either, throws on error
ruins.fromLazyArg; // terminates LazyArg, returns the result
const syncComputation = () => {
    console.log('effect');
    return 123;
};
ruins.fromLazyArg(syncComputation); // => 123 (prints "effect")
/*

## fromOption (function)

Returns the raw value in case of [Some](https://effect-ts.github.io/data/modules/Option.ts.html#some-interface) and `null` in case of [None](https://effect-ts.github.io/data/modules/Option.ts.html#none-interface).

**Makes it impossible to distinguish between a null value and no value.**

#### Signature

/*ts
export function fromOption<R>(anOption: Option.Option<R>): R | null {}
/*

#### Example

*/
const Option = __importStar(require("@effect/data/Option"));
const someNumber = Option.some(123);
const noNumber = Option.none();
ruins.fromOption(someNumber); // => 123
ruins.fromOption(noNumber); // => null
const stringValue = Option.some('foo');
const nullValue = Option.some(null);
const noValue = Option.none();
ruins.fromOption(stringValue); // => 'foo'
ruins.fromOption(nullValue); // => null
ruins.fromOption(noValue); // => null
nullValue === noValue; // => false
ruins.fromOption(nullValue) === ruins.fromOption(noValue); // => true
/*

## fromEither (function)

Asserts [Right](https://effect-ts.github.io/data/modules/Either.ts.html#right-interface) and returns the result.

**Throws a runtime Error on [Left](https://effect-ts.github.io/data/modules/Either.ts.html#left-interface).**

#### Signature

/*ts
export function fromEither<R>(anEither: Either.Either<unknown, R>): R {}
/*

#### Example

*/
const Either = __importStar(require("@effect/data/Either"));
const failureE = Either.left('error');
const successE = Either.right(123);
ruins.fromEither(failureE); // => never (throws an exception)
ruins.fromEither(successE); // => 123
/*
*/ 
//# sourceMappingURL=readme.js.map