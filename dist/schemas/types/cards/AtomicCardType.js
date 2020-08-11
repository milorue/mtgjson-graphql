"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ForeignDataType_1 = __importDefault(require("./ForeignDataType"));
const LeadershipSkillsType_1 = __importDefault(require("../rules/LeadershipSkillsType"));
const LegalityTypes_1 = __importDefault(require("../rules/LegalityTypes"));
const PurchaseUrlType_1 = __importDefault(require("../misc/PurchaseUrlType"));
const RulingsType_1 = __importDefault(require("../rules/RulingsType"));
const AtomicCard = new graphql_1.GraphQLObjectType({
    name: "AtomicCard",
    description: "Describes a single atomic card, an oracle-like entity of a Magic the Gathering card that only stores evergreen data about a card that would never change from printing to printing",
    fields: () => ({
        asciiName: {
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
        edhrecRank: {
            type: graphql_1.GraphQLInt
        },
        faceConvertedManaCost: {
            type: graphql_1.GraphQLFloat
        },
        faceName: {
            type: graphql_1.GraphQLString
        },
        foreignData: {
            type: new graphql_1.GraphQLList(ForeignDataType_1.default)
        },
        hand: {
            type: graphql_1.GraphQLString
        },
        hasAlternativeDeckLimit: {
            type: graphql_1.GraphQLBoolean
        },
        isReserved: {
            type: graphql_1.GraphQLBoolean
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
        power: {
            type: graphql_1.GraphQLString
        },
        printings: {
            type: new graphql_1.GraphQLList(graphql_1.GraphQLString)
        },
        purchaseUrls: {
            type: PurchaseUrlType_1.default
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
        }
    })
});
exports.default = AtomicCard;
//# sourceMappingURL=AtomicCardType.js.map