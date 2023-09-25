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
const Either = __importStar(require("@effect/data/Either"));
const crash_1 = require("../../helpers/crash");
const unit = __importStar(require("../either"));
const exampleLeft = { error: 404 };
const exampleRight = { result: 42 };
const exampleEitherL = Either.left(exampleLeft);
const exampleEitherR = Either.right(exampleRight);
describe('ruinEither', () => {
    it('should return right', () => {
        const result = unit.fromEither(exampleEitherR);
        expect(result).toStrictEqual(exampleRight);
    });
    it('should throw left', () => {
        expect(() => unit.fromEither(exampleEitherL)).toThrowError((0, crash_1.crashObject)(exampleLeft));
    });
});
//# sourceMappingURL=either.js.map