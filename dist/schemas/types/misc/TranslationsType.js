"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Translations = new graphql_1.GraphQLObjectType({
    name: "Translations",
    description: "Describes the translated data per language as a key",
    fields: () => ({
        AncientGreek: {
            type: graphql_1.GraphQLString
        },
        Arabic: {
            type: graphql_1.GraphQLString
        },
        ChineseSimplified: {
            type: graphql_1.GraphQLString
        },
        ChineseTraditional: {
            type: graphql_1.GraphQLString
        },
        French: {
            type: graphql_1.GraphQLString
        },
        German: {
            type: graphql_1.GraphQLString
        },
        Hebrew: {
            type: graphql_1.GraphQLString
        },
        Italian: {
            type: graphql_1.GraphQLString
        },
        Japanese: {
            type: graphql_1.GraphQLString
        },
        Korean: {
            type: graphql_1.GraphQLString
        },
        Latin: {
            type: graphql_1.GraphQLString
        },
        Phyrexian: {
            type: graphql_1.GraphQLString
        },
        PortugueseBrazil: {
            type: graphql_1.GraphQLString
        },
        Russian: {
            type: graphql_1.GraphQLString
        },
        Sanskrit: {
            type: graphql_1.GraphQLString
        },
        Spanish: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = Translations;
//# sourceMappingURL=TranslationsType.js.map