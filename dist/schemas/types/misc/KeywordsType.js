"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Keywords = new graphql_1.GraphQLObjectType({
    name: "Keywords",
    description: "Describes a list of all keywords used on Magic the Gathering cards",
    fields: () => ({
        abilityWords: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString),
        },
        keywordAbilities: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        keywordActions: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        }
    })
});
exports.default = Keywords;
//# sourceMappingURL=KeywordsType.js.map