"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crash_1 = require("../crash");
describe('crash library', () => {
    const exampleJSON = { foo: 123 };
    const exampleCyclic = {};
    // eslint-disable-next-line
    exampleCyclic.foo = exampleCyclic;
    const exampleCrashMessage = (0, crash_1.crashMessage)(exampleJSON);
    const exampleCrashObject = (0, crash_1.crashObject)(exampleJSON);
    const exampleCrash = (0, crash_1.crash)(exampleJSON);
    describe('crashMessage', () => {
        it('should return input as JSON if possible', () => {
            expect(exampleCrashMessage).toEqual(JSON.stringify(exampleJSON));
        });
        it('should fallback to String() when JSON is not an option', () => {
            expect((0, crash_1.crashMessage)(exampleCyclic)).toEqual(String(exampleCyclic));
        });
    });
    describe('crashObject', () => {
        it('should return an error object', () => {
            expect(exampleCrashObject).toStrictEqual(new Error((0, crash_1.crashMessage)(exampleJSON)));
        });
    });
    describe('crash', () => {
        it('should crash', () => {
            expect(exampleCrash).toThrowError(exampleCrashObject);
        });
    });
});
//# sourceMappingURL=crash.js.map