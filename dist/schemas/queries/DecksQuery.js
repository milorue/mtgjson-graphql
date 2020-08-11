"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const operators_1 = require("../operations/operators");
const DeckType_1 = __importDefault(require("../types/decks/DeckType"));
const DeckListType_1 = __importDefault(require("../types/decks/DeckListType"));
const DeckQueries = {
    getDeck: {
        type: new graphql_1.GraphQLNonNull(DeckType_1.default),
        args: {
            deck: {
                type: graphql_1.GraphQLString
            },
        },
        async resolve(_source, { deck }) {
            try {
                const result = await operators_1.getDeck(deck);
                return result.data;
            }
            catch (err) {
                throw new Error("Invalid deck name please check the getDeckMeta or getDeckList queries for file names.");
            }
        },
    },
    getDeckMeta: {
        type: new graphql_1.GraphQLNonNull(DeckListType_1.default),
        description: "Describes the meta data of a single deck if given the deck code",
        args: {
            deckCode: {
                type: graphql_1.GraphQLString
            }
        },
        async resolve(_source, { deckCode }) {
            const result = await operators_1.getDeckList();
            for (let x = 0; x < result.data.length; x++) {
                if (result.data[x].code === deckCode) {
                    return result.data[x];
                }
            }
            throw new Error("Invalid Deck Code");
        }
    },
    getDeckList: {
        type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(DeckListType_1.default)),
        description: "Describes the list of decks and their corresponding meta data",
        async resolve(_source) {
            const result = await operators_1.getDeckList();
            return result.data;
        }
    }
};
exports.default = DeckQueries;
//# sourceMappingURL=DecksQuery.js.map