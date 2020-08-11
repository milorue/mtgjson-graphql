"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const PurchaseUrls = new graphql_1.GraphQLObjectType({
    name: "PurchaseUrls",
    description: "Descibes raw url paths to purchase a product from a marketplace",
    fields: () => ({
        cardKingdom: {
            type: graphql_1.GraphQLString
        },
        cardKingdomFoil: {
            type: graphql_1.GraphQLString
        },
        cardmarket: {
            type: graphql_1.GraphQLString
        },
        tcgplayer: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = PurchaseUrls;
//# sourceMappingURL=PurchaseUrlType.js.map