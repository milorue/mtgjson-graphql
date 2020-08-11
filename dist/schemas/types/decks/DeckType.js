"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const CardType_1 = __importDefault(require("../cards/CardType"));
const Deck = new graphql_1.GraphQLObjectType({
    name: "Deck",
    description: "A deck of cards describing a complete deck reference",
    fields: () => ({
        code: {
            type: graphql_1.GraphQLString
        },
        mainBoard: {
            type: new graphql_1.GraphQLList(CardType_1.default)
        },
        name: {
            type: graphql_1.GraphQLString
        },
        sideBoard: {
            type: new graphql_1.GraphQLList(CardType_1.default)
        },
        releaseDate: {
            type: graphql_1.GraphQLString
        },
        type: {
            type: graphql_1.GraphQLString
        }
    })
});
exports.default = Deck;
//# sourceMappingURL=DeckType.js.map