import{
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLList,
    GraphQLFloat,
    GraphQLBoolean
} from 'graphql'

import ForeignData from './ForeignDataType'
import LeadershipSkills from '../rules/LeadershipSkillsType'
import Legalities from '../rules/LegalityTypes'
import PurchaseUrls from '../misc/PurchaseUrlType'
import Rulings from '../rules/RulingsType'

const AtomicCard = new GraphQLObjectType({
    name: "AtomicCard",
    description: "Describes a single atomic card, an oracle-like entity of a Magic the Gathering card that only stores evergreen data about a card that would never change from printing to printing",
    fields: () => ({
        asciiName: {
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
        edhrecRank: {
            type: GraphQLInt
        },
        faceConvertedManaCost: {
            type: GraphQLFloat
        },
        faceName: {
            type: GraphQLString
        },
        foreignData: {
            type: new GraphQLList(ForeignData)
        },
        hand: {
            type: GraphQLString
        },
        hasAlternativeDeckLimit: {
            type: GraphQLBoolean
        },
        isReserved: {
            type: GraphQLBoolean
        },
        layout: {
            type: GraphQLString
        },
        leadershipSkills: {
            type: LeadershipSkills
        },
        legalities: {
            type: Legalities
        },
        life: {
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
        power: {
            type: GraphQLString
        },
        printings: {
            type: new GraphQLList(GraphQLString)
        },
        purchaseUrls: {
            type: PurchaseUrls
        },
        rulings: {
            type: new GraphQLList(Rulings)
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
        }



    })
})

export default AtomicCard