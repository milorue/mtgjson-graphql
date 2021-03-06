"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const operators_1 = require("../operations/operators");
const SetType_1 = __importDefault(require("../types/sets/SetType"));
const SetListType_1 = __importDefault(require("../types/sets/SetListType"));
const SetQueries = {
    getSet: {
        type: new graphql_1.GraphQLNonNull(SetType_1.default),
        args: {
            set: {
                type: graphql_1.GraphQLString
            },
        },
        async resolve(_source, { set }) {
            try {
                const result = await operators_1.getCardSet(set);
                return result.data;
            }
            catch (err) {
                if (err.response.status === 404) {
                    throw new Error("Invalid set code");
                }
                else {
                    throw new Error("API fetch failed with " + err);
                }
            }
        },
    },
    getSets: {
        type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLList(SetListType_1.default)),
        async resolve(_source) {
            try {
                const result = await operators_1.getSetList();
                return result.data;
            }
            catch (err) {
                throw new Error("API fetch failed with " + err);
            }
        }
    }
};
exports.default = SetQueries;
//# sourceMappingURL=SetsQuery.js.map