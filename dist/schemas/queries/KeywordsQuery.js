"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const operators_1 = require("../operations/operators");
const KeywordsType_1 = __importDefault(require("../types/misc/KeywordsType"));
const KeywordsQueries = {
    getKeywords: {
        type: new graphql_1.GraphQLNonNull(KeywordsType_1.default),
        async resolve(_source) {
            const result = await operators_1.getKeywords();
            return result.data;
        }
    }
};
exports.default = KeywordsQueries;
//# sourceMappingURL=KeywordsQuery.js.map