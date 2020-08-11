"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const DeckList = new graphql_1.GraphQLObjectType({
    name: "DeckList",
    description: "metadata-like structure that holds top level information about a Deck object",
    fields: () => ({
        code: {
            type: graphql_1.GraphQLString
        },
        fileName: {
            type: graphql_1.GraphQLString
        },
        name: {
            type: graphql_1.GraphQLString
        },
        releaseDate: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = DeckList;
//# sourceMappingURL=DeckListType.js.map