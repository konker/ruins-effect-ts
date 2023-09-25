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
exports.fromEither = void 0;
const Either = __importStar(require("@effect/data/Either"));
const Function_1 = require("@effect/data/Function");
const crash_1 = require("../helpers/crash");
const lazy_arg_1 = require("./lazy-arg");
const fromEither = (anEither) => (0, Function_1.pipe)(anEither, Either.getOrElse((error) => {
    const crasher = (0, crash_1.crash)(error);
    return (0, lazy_arg_1.fromLazyArg)(crasher);
}));
exports.fromEither = fromEither;
//# sourceMappingURL=either.js.map