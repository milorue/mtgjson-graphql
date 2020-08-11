"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadJSON = exports.storeJSON = void 0;
const fs_1 = __importDefault(require("fs"));
exports.storeJSON = (data, path) => {
    try {
        fs_1.default.writeFileSync(path, JSON.stringify(data));
    }
    catch (err) {
        console.error(err);
    }
};
exports.loadJSON = (path) => {
    try {
        return fs_1.default.readFileSync(path, 'utf8');
    }
    catch (err) {
        console.error(err);
        return false;
    }
};
//# sourceMappingURL=loadFiles.js.map