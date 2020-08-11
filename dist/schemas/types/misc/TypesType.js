"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Types = new graphql_1.GraphQLObjectType({
    name: "Types",
    description: "Describes card types available to MTGJSON",
    fields: () => ({
        subTypes: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        superTypes: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        }
    })
});
exports.default = Types;
//# sourceMappingURL=TypesType.js.map