import type { LazyArg } from '@effect/data/Function';

import * as unit from '../lazy-arg';

type MutableState = unknown;
// eslint-disable-next-line
let mutableState: MutableState = false;

type Answer = 42;
const answer: Answer = 42;

const exampleLazyArg: LazyArg<Answer> = () => {
  // eslint-disable-next-line
  mutableState = true;
  return answer;
};

const switcharoo = (_a: Answer): MutableState => mutableState;

describe('ruinLazyArg', () => {
  it('should execute side effects', () => {
    expect(switcharoo(unit.fromLazyArg(exampleLazyArg))).toEqual(true);
  });
  it('should return answer', () => {
    expect(unit.fromLazyArg(exampleLazyArg)).toEqual(answer);
  });
});
