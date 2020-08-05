import{
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType,
    GraphQLFloat,
    GraphQLList,
    GraphQLBoolean,
} from 'graphql'
import ForeignData from "./ForeignDataType"
import Identifiers from "./IdentifiersType"
import LeadershipSkills from "../rules/LeadershipSkillsType"
import Legalities from "../rules/LegalityTypes"
import PurchaseUrls from '../misc/PurchaseUrlType'
import Rulings from '../rules/RulingsType'

const Card = new GraphQLObjectType({
    name: "Card",
    description: "An instance of a single card in Magic the Gathering",
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
        faceConvertedManaCost: {
            type: GraphQLFloat
        },
        faceName: {
            type: GraphQLString
        },
        flavorName: {
            type: GraphQLString
        },
        flavorText: {
            type: GraphQLString
        },
        foreignData: {
            type: new GraphQLList(ForeignData)
        },
        frameEffects: {
            type: new GraphQLList(GraphQLString)
        },
        frameVersion: {
            type: GraphQLString
        },
        hand: {
            type: GraphQLString
        },
        hasContentWarning: {
            type: GraphQLBoolean
        },
        hasFoil: {
            type: GraphQLBoolean,
        },
        hasAlternativeDeckLimit: {
            type: GraphQLBoolean
        },
        hasNonFoil: {
            type: GraphQLBoolean
        },
        identifiers: {
            type: Identifiers
        },
        isAlternative: {
            type: GraphQLBoolean
        },
        isFoil: {
            type: GraphQLBoolean
        },
        isFullArt: {
            type: GraphQLBoolean
        },
        isOnlineOnly: {
            type: GraphQLBoolean
        },
        isOversize: {
            type: GraphQLBoolean
        },
        isPromo: {
            type: GraphQLBoolean
        },
        isReprint: {
            type: GraphQLBoolean
        },
        isReserved: {
            type: GraphQLBoolean
        },
        isStarter: {
            type: GraphQLBoolean
        },
        isStorySpotlight: {
            type: GraphQLBoolean
        },
        isTextless: {
            type: GraphQLBoolean
        },
        isTimeshifted: {
            type: GraphQLBoolean
        },
        keywords: {
            type: new GraphQLList(GraphQLString)
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
        number: {
            type: GraphQLString
        },
        originalText: {
            type: GraphQLString
        },
        originalType: {
            type: GraphQLString
        },
        otherFaceIds: {
            type: new GraphQLList(GraphQLString)
        }, 
        power: {
            type: GraphQLString
        },
        printings: {
            type: new GraphQLList(GraphQLString)
        },
        promoTypes: {
            type: new GraphQLList(GraphQLString)
        },
        purchaseUrls: {
            type: PurchaseUrls
        },
        rarity: {
            type: GraphQLString
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
        },
        variations: {
            type: new GraphQLList(GraphQLString)
        },
        watermark: {
            type: GraphQLString
        }
    })
})

export default Card