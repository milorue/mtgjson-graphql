"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Identifiers = new graphql_1.GraphQLObjectType({
    name: "Identifiers",
    description: "Identifiers describes the ID's associated with a given card",
    fields: () => ({
        cardKingdomFoilId: {
            type: graphql_1.GraphQLID
        },
        cardKingdomId: {
            type: graphql_1.GraphQLID
        },
        mcmId: {
            type: graphql_1.GraphQLID
        },
        mcmMetaId: {
            type: graphql_1.GraphQLID
        },
        mtgArenaId: {
            type: graphql_1.GraphQLID
        },
        mtgoFoilId: {
            type: graphql_1.GraphQLID
        },
        mtgoId: {
            type: graphql_1.GraphQLID
        },
        mtgjsonV4Id: {
            type: graphql_1.GraphQLID
        },
        multiverseId: {
            type: graphql_1.GraphQLID
        },
        scryfallId: {
            type: graphql_1.GraphQLID
        },
        scryfallOracleId: {
            type: graphql_1.GraphQLID
        },
        scryfallIllustrationId: {
            type: graphql_1.GraphQLID
        },
        tcgplayerProductId: {
            type: graphql_1.GraphQLID
        }
    })
});
exports.default = Identifiers;
//# sourceMappingURL=IdentifiersType.js.map