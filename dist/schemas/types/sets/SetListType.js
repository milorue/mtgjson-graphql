"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const SetList = new graphql_1.GraphQLObjectType({
    name: "SetList",
    description: "Describes a metadata-like structure that holds top-level information about a Set",
    fields: () => ({
        baseSetSize: {
            type: graphql_1.GraphQLInt
        },
        code: {
            type: graphql_1.GraphQLString
        },
        isFoilOnly: {
            type: graphql_1.GraphQLBoolean
        },
        isOnlineOnly: {
            type: graphql_1.GraphQLBoolean
        },
        isPaperOnly: {
            type: graphql_1.GraphQLBoolean
        },
        name: {
            type: graphql_1.GraphQLString
        },
        releaseDate: {
            type: graphql_1.GraphQLString
        },
        totalSetSize: {
            type: graphql_1.GraphQLInt
        },
        type: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = SetList;
//# sourceMappingURL=SetListType.js.map