"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const IdentifiersType_1 = __importDefault(require("./IdentifiersType"));
const CardToken = new graphql_1.GraphQLObjectType({
    name: "CardToken",
    description: "Describes the properties and values of a single card token",
    fields: () => ({
        artist: {
            type: graphql_1.GraphQLString
        },
        asciiName: {
            type: graphql_1.GraphQLString
        },
        availability: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        borderColor: {
            type: graphql_1.GraphQLString
        },
        colorIdentity: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        colorIndicator: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        colors: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        convertedManaCost: {
            type: graphql_1.GraphQLFloat
        },
        count: {
            type: graphql_1.GraphQLInt
        },
        duelDeck: {
            type: graphql_1.GraphQLString
        },
        edhrecRank: {
            type: graphql_1.GraphQLInt
        },
        faceName: {
            type: graphql_1.GraphQLString
        },
        flavorText: {
            type: graphql_1.GraphQLString
        },
        frameEffects: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        frameVersion: {
            type: graphql_1.GraphQLString
        },
        hasFoil: {
            type: graphql_1.GraphQLBoolean
        },
        hasNonFoil: {
            type: graphql_1.GraphQLBoolean
        },
        identifiers: {
            type: IdentifiersType_1.default
        },
        isFullArt: {
            type: graphql_1.GraphQLBoolean
        },
        isOnlineOnly: {
            type: graphql_1.GraphQLBoolean
        },
        isPromo: {
            type: graphql_1.GraphQLBoolean
        },
        isReprint: {
            type: graphql_1.GraphQLBoolean
        },
        keywords: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        layout: {
            type: graphql_1.GraphQLString
        },
        loyalty: {
            type: graphql_1.GraphQLString
        },
        manaCost: {
            type: graphql_1.GraphQLString
        },
        name: {
            type: graphql_1.GraphQLString
        },
        number: {
            type: graphql_1.GraphQLString
        },
        power: {
            type: graphql_1.GraphQLString
        },
        promoTypes: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        reverseRelated: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        side: {
            type: graphql_1.GraphQLString
        },
        subtypes: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        supertypes: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        text: {
            type: graphql_1.GraphQLString
        },
        toughness: {
            type: graphql_1.GraphQLString
        },
        type: {
            type: graphql_1.GraphQLString
        },
        types: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        uuid: {
            type: graphql_1.GraphQLString
        },
        watermark: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = CardToken;
//# sourceMappingURL=CardTokenType.js.map