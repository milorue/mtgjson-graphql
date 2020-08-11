"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ForeignDataType_1 = __importDefault(require("./ForeignDataType"));
const IdentifiersType_1 = __importDefault(require("./IdentifiersType"));
const LeadershipSkillsType_1 = __importDefault(require("../rules/LeadershipSkillsType"));
const LegalityTypes_1 = __importDefault(require("../rules/LegalityTypes"));
const PurchaseUrlType_1 = __importDefault(require("../misc/PurchaseUrlType"));
const RulingsType_1 = __importDefault(require("../rules/RulingsType"));
const Card = new graphql_1.GraphQLObjectType({
    name: "Card",
    description: "An instance of a single card in Magic the Gathering",
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
        faceConvertedManaCost: {
            type: graphql_1.GraphQLFloat
        },
        faceName: {
            type: graphql_1.GraphQLString
        },
        flavorName: {
            type: graphql_1.GraphQLString
        },
        flavorText: {
            type: graphql_1.GraphQLString
        },
        foreignData: {
            type: new graphql_1.GraphQLList(ForeignDataType_1.default)
        },
        frameEffects: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        frameVersion: {
            type: graphql_1.GraphQLString
        },
        hand: {
            type: graphql_1.GraphQLString
        },
        hasContentWarning: {
            type: graphql_1.GraphQLBoolean
        },
        hasFoil: {
            type: graphql_1.GraphQLBoolean,
        },
        hasAlternativeDeckLimit: {
            type: graphql_1.GraphQLBoolean
        },
        hasNonFoil: {
            type: graphql_1.GraphQLBoolean
        },
        identifiers: {
            type: IdentifiersType_1.default
        },
        isAlternative: {
            type: graphql_1.GraphQLBoolean
        },
        isFoil: {
            type: graphql_1.GraphQLBoolean
        },
        isFullArt: {
            type: graphql_1.GraphQLBoolean
        },
        isOnlineOnly: {
            type: graphql_1.GraphQLBoolean
        },
        isOversize: {
            type: graphql_1.GraphQLBoolean
        },
        isPromo: {
            type: graphql_1.GraphQLBoolean
        },
        isReprint: {
            type: graphql_1.GraphQLBoolean
        },
        isReserved: {
            type: graphql_1.GraphQLBoolean
        },
        isStarter: {
            type: graphql_1.GraphQLBoolean
        },
        isStorySpotlight: {
            type: graphql_1.GraphQLBoolean
        },
        isTextless: {
            type: graphql_1.GraphQLBoolean
        },
        isTimeshifted: {
            type: graphql_1.GraphQLBoolean
        },
        keywords: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        layout: {
            type: graphql_1.GraphQLString
        },
        leadershipSkills: {
            type: LeadershipSkillsType_1.default
        },
        legalities: {
            type: LegalityTypes_1.default
        },
        life: {
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
        originalText: {
            type: graphql_1.GraphQLString
        },
        originalType: {
            type: graphql_1.GraphQLString
        },
        otherFaceIds: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        power: {
            type: graphql_1.GraphQLString
        },
        printings: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        promoTypes: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        purchaseUrls: {
            type: PurchaseUrlType_1.default
        },
        rarity: {
            type: graphql_1.GraphQLString
        },
        rulings: {
            type: new graphql_1.GraphQLList(RulingsType_1.default)
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
        variations: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        watermark: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = Card;
//# sourceMappingURL=CardType.js.map