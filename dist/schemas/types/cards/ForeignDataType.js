"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ForeignData = new graphql_1.GraphQLObjectType({
    name: "ForeignData",
    description: "Flavor text in foreign language",
    fields: () => ({
        flavorText: {
            type: graphql_1.GraphQLString
        },
        language: {
            type: graphql_1.GraphQLString
        },
        multiverseId: {
            type: graphql_1.GraphQLInt
        },
        name: {
            type: graphql_1.GraphQLString
        },
        text: {
            type: graphql_1.GraphQLString
        },
        type: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = ForeignData;
//# sourceMappingURL=ForeignDataType.js.map