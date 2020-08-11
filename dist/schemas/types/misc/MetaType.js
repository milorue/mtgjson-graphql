"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Meta = new graphql_1.GraphQLObjectType({
    name: "Meta",
    description: "Describes application build and prices build date in ISO 8601 format also includes versioning data of the current MTGJSON release",
    fields: () => ({
        date: {
            type: graphql_1.GraphQLString
        },
        version: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = Meta;
//# sourceMappingURL=MetaType.js.map