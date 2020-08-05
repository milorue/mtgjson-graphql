import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLBoolean,
} from "graphql"

import Identifiers from './IdentifiersType'

const CardToken = new GraphQLObjectType({
    name: "CardToken",
    description: "Describes the properties and values of a single card token",
    fields: () => ({
        artist: {
            type: GraphQLString
        },
        asciiName: {
            type: GraphQLString
        },
        availability: {
            type: new GraphQLList(GraphQLString)
        },
        borderColor: {
            type: GraphQLString
        },
        colorIdentity: {
            type: new GraphQLList(GraphQLString)
        },
        colorIndicator: {
            type: new GraphQLList(GraphQLString)
        },
        colors: {
            type: new GraphQLList(GraphQLString)
        },
        convertedManaCost: {
            type: GraphQLFloat
        },
        count: {
            type: GraphQLInt
        },
        duelDeck: {
            type: GraphQLString
        },
        edhrecRank: {
            type: GraphQLInt
        },
        faceName: {
            type: GraphQLString
        },
        flavorText: {
            type: GraphQLString
        },
        frameEffects: {
            type: new GraphQLList(GraphQLString)
        },
        frameVersion: {
            type: GraphQLString
        },
        hasFoil: {
            type: GraphQLBoolean
        },
        hasNonFoil: {
            type: GraphQLBoolean
        },
        identifiers: {
            type: Identifiers
        },
        isFullArt: {
            type: GraphQLBoolean
        },
        isOnlineOnly: {
            type: GraphQLBoolean
        },
        isPromo: {
            type: GraphQLBoolean
        },
        isReprint: {
            type: GraphQLBoolean
        },
        keywords: {
            type: new GraphQLList(GraphQLString)
        },
        layout: {
            type: GraphQLString
        },
        loyalty: {
            type: GraphQLString
        },
        manaCost: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        number: {
            type: GraphQLString
        },
        power: {
            type: GraphQLString
        },
        promoTypes: {
            type: new GraphQLList(GraphQLString)
        },
        reverseRelated: {
            type: new GraphQLList(GraphQLString)
        },
        side: {
            type: GraphQLString
        },
        subtypes: {
            type: new GraphQLList(GraphQLString)
        },
        supertypes: {
            type: new GraphQLList(GraphQLString)
        },
        text: {
            type: GraphQLString
        },
        toughness: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
        types: {
            type: new GraphQLList(GraphQLString)
        },
        uuid: {
            type: GraphQLString
        },
        watermark: {
            type: GraphQLString
        }
    })
})

export default CardToken