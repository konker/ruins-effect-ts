import * as Either from '@effect/data/Either';

import { crashObject } from '../../helpers/crash';
import * as unit from '../either';

type ExampleLeft = { error: number };
const exampleLeft: ExampleLeft = { error: 404 };

type ExampleRight = { result: number };
const exampleRight: ExampleRight = { result: 42 };

type ExampleEither = Either.Either<ExampleLeft, ExampleRight>;
const exampleEitherL: ExampleEither = Either.left(exampleLeft);
const exampleEitherR: ExampleEither = Either.right(exampleRight);

describe('ruinEither', () => {
  it('should return right', () => {
    const result: ExampleRight = unit.fromEither(exampleEitherR);
    expect(result).toStrictEqual(exampleRight);
  });
  it('should throw left', () => {
    expect(() => unit.fromEither(exampleEitherL)).toThrowError(crashObject(exampleLeft));
  });
});
