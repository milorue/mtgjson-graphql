"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const operators_1 = require("../operations/operators");
const CompiledListQueries = {
    getCompiledList: {
        type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(graphql_1.GraphQLString)),
        async resolve(_source) {
            const result = await operators_1.getCompiledList();
            return result.data;
        },
    },
};
exports.default = CompiledListQueries;
//# sourceMappingURL=CompiledListQuery.js.map