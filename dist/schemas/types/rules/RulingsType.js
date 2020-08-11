"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Rulings = new graphql_1.GraphQLObjectType({
    name: "Rulings",
    description: "Describes a list of rulings that are for a specific card",
    fields: () => ({
        data: {
            type: graphql_1.GraphQLString
        },
        text: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = Rulings;
//# sourceMappingURL=RulingsType.js.map