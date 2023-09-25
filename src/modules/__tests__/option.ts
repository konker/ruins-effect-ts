import * as Option from '@effect/data/Option';

import * as unit from '../option';

type Ruin = ExampleSome | null;

type ExampleSome = { result: number };
const exampleSome: ExampleSome = { result: 42 };

type ExampleOption = Option.Option<ExampleSome>;
const exampleOption: ExampleOption = Option.some(exampleSome);

describe('ruinOption', () => {
  it('should return value on some', () => {
    const result: Ruin = unit.fromOption(exampleOption);
    expect(result).toStrictEqual(exampleSome);
  });
  it('should return null on none', () => {
    const result: Ruin = unit.fromOption(Option.none());
    expect(result).toStrictEqual(null);
  });
});
