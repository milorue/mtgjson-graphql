import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList
} from "graphql"

import Card from '../cards/CardType'
import CardToken from '../cards/CardTokenType'
import Translations from '../misc/TranslationsType'
import { Booster } from "./BoosterType"

const Set = new GraphQLObjectType({
    name: "Set",
    description: "Describes the properties and values of an individual set",
    fields: () => ({
        baseSetSize: {
            type: GraphQLInt
        },
        block: {
            type: GraphQLString
        },
        booster: {
            type: Booster
        },
        cards: {
            type: new GraphQLList(Card)
        },
        code: {
            type: GraphQLString
        },
        codeV3: {
            type: GraphQLString
        },
        isForeignOnly:{
            type: GraphQLBoolean
        },
        isFoilOnly: {
            type: GraphQLBoolean
        },
        isNonFoilOnly: {
            type: GraphQLBoolean
        },
        isOnlineOnly: {
            type: GraphQLBoolean
        },
        isPaperOnly: {
            type: GraphQLBoolean
        },
        isPartialPreview: {
            type: GraphQLBoolean
        },
        keyruneCode: {
            type: GraphQLString
        },
        mcmName: {
            type: GraphQLString
        },
        mcmId: {
            type: GraphQLInt
        },
        mtgoCode: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        parentCode: {
            type: GraphQLString
        },
        releaseDate: {
            type: GraphQLString
        },
        tcgplayerGroupId: {
            type: GraphQLInt
        },
        tokens: {
            type: new GraphQLList(CardToken)
        },
        totalSetSize: {
            type: GraphQLInt
        },
        translations: {
            type: Translations
        },
        type: {
            type: GraphQLString
        }
    })
})

export default Set