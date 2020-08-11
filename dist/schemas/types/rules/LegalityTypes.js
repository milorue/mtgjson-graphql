"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Legalities = new graphql_1.GraphQLObjectType({
    name: "Legalities",
    description: "Describes a list of play formats that are legal for a specific card",
    fields: () => ({
        brawl: {
            type: graphql_1.GraphQLString
        },
        commander: {
            type: graphql_1.GraphQLString
        },
        duel: {
            type: graphql_1.GraphQLString
        },
        future: {
            type: graphql_1.GraphQLString
        },
        frontier: {
            type: graphql_1.GraphQLString
        },
        legacy: {
            type: graphql_1.GraphQLString
        },
        modern: {
            type: graphql_1.GraphQLString
        },
        pauper: {
            type: graphql_1.GraphQLString
        },
        penny: {
            type: graphql_1.GraphQLString
        },
        pioneer: {
            type: graphql_1.GraphQLString
        },
        standard: {
            type: graphql_1.GraphQLString
        },
        vintage: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = Legalities;
//# sourceMappingURL=LegalityTypes.js.map