import * as ruins from '../ruins-effect';

describe('Ruins-Effect-Ts', () => {
  it('should provide functions', () => {
    expect(typeof ruins.fromEither).toEqual('function');
    expect(typeof ruins.fromOption).toEqual('function');
    expect(typeof ruins.fromLazyArg).toEqual('function');
  });
});
