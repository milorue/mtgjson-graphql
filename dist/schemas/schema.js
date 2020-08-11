"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const SetsQuery_1 = __importDefault(require("./queries/SetsQuery"));
const DecksQuery_1 = __importDefault(require("./queries/DecksQuery"));
const CompiledListQuery_1 = __importDefault(require("./queries/CompiledListQuery"));
const KeywordsQuery_1 = __importDefault(require("./queries/KeywordsQuery"));
// import AtomicCardQueries from "./queries/AtomicCardQuery"
const schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: "Query",
        description: "Queries pull from MTGJSON and its resources directly",
        fields: () => ({
            ...SetsQuery_1.default,
            ...DecksQuery_1.default,
            ...CompiledListQuery_1.default,
            ...KeywordsQuery_1.default
        }),
    }),
});
exports.default = schema;
//# sourceMappingURL=schema.js.map