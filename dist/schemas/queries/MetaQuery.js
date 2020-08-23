"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const MetaType_1 = __importDefault(require("../types/misc/MetaType"));
const operators_1 = require("../operations/operators");
const MetaQueries = {
    getMeta: {
        type: new graphql_1.GraphQLNonNull(MetaType_1.default),
        async resolve(_source) {
            try {
                const result = await operators_1.getMeta();
                return result.data;
            }
            catch (err) {
                throw new Error("API fetch failed with");
            }
        }
    }
};
exports.default = MetaQueries;
//# sourceMappingURL=MetaQuery.js.map