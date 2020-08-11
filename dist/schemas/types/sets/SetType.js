"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const CardType_1 = __importDefault(require("../cards/CardType"));
const CardTokenType_1 = __importDefault(require("../cards/CardTokenType"));
const TranslationsType_1 = __importDefault(require("../misc/TranslationsType"));
const BoosterType_1 = require("./BoosterType");
const Set = new graphql_1.GraphQLObjectType({
    name: "Set",
    description: "Describes the properties and values of an individual set",
    fields: () => ({
        baseSetSize: {
            type: graphql_1.GraphQLInt
        },
        block: {
            type: graphql_1.GraphQLString
        },
        booster: {
            type: BoosterType_1.Booster
        },
        cards: {
            type: new graphql_1.GraphQLList(CardType_1.default)
        },
        code: {
            type: graphql_1.GraphQLString
        },
        codeV3: {
            type: graphql_1.GraphQLString
        },
        isForeignOnly: {
            type: graphql_1.GraphQLBoolean
        },
        isFoilOnly: {
            type: graphql_1.GraphQLBoolean
        },
        isNonFoilOnly: {
            type: graphql_1.GraphQLBoolean
        },
        isOnlineOnly: {
            type: graphql_1.GraphQLBoolean
        },
        isPaperOnly: {
            type: graphql_1.GraphQLBoolean
        },
        isPartialPreview: {
            type: graphql_1.GraphQLBoolean
        },
        keyruneCode: {
            type: graphql_1.GraphQLString
        },
        mcmName: {
            type: graphql_1.GraphQLString
        },
        mcmId: {
            type: graphql_1.GraphQLInt
        },
        mtgoCode: {
            type: graphql_1.GraphQLString
        },
        name: {
            type: graphql_1.GraphQLString
        },
        parentCode: {
            type: graphql_1.GraphQLString
        },
        releaseDate: {
            type: graphql_1.GraphQLString
        },
        tcgplayerGroupId: {
            type: graphql_1.GraphQLInt
        },
        tokens: {
            type: new graphql_1.GraphQLList(CardTokenType_1.default)
        },
        totalSetSize: {
            type: graphql_1.GraphQLInt
        },
        translations: {
            type: TranslationsType_1.default
        },
        type: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = Set;
//# sourceMappingURL=SetType.js.map