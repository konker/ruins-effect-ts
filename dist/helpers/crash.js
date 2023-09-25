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
exports.crash = exports.crashObject = exports.crashMessage = exports.JsonEither = void 0;
const Either = __importStar(require("@effect/data/Either"));
const Function_1 = require("@effect/data/Function");
const JsonEither = (x) => Either.try({ try: () => JSON.stringify(x), catch: (e) => Either.left(e) });
exports.JsonEither = JsonEither;
const crashMessage = (originalError) => (0, Function_1.pipe)((0, exports.JsonEither)(originalError), Either.getOrElse(() => String(originalError)));
exports.crashMessage = crashMessage;
const crashObject = (error) => {
    const errorMessage = (0, exports.crashMessage)(error);
    return new Error(errorMessage);
};
exports.crashObject = crashObject;
const crash = (error) => 
// eslint-disable-next-line fp/no-nil
() => {
    // eslint-disable-next-line fp/no-throw
    throw (0, exports.crashObject)(error);
};
exports.crash = crash;
//# sourceMappingURL=crash.js.map