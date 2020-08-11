"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const operators_1 = require("../operations/operators");
const AtomicCardType_1 = __importDefault(require("../types/cards/AtomicCardType"));
// this entire query needs to be retooled to access a database, 
// the core tech for it is valid but needs an effecient way to grab the data
const AtomicCardQueries = {
    getAtomicCard: {
        type: new graphql_1.GraphQLNonNull(AtomicCardType_1.default),
        args: {
            cardName: {
                type: graphql_1.GraphQLString
            },
        },
        async resolve(_source, { cardName }) {
            const result = await operators_1.getAtomicCards();
            console.log(result.data[2]);
            for (let x = 0; x < result.data.length; x++) {
                if (result.data[x].asciiName === cardName) {
                    return result.data[x];
                }
            }
            throw new Error("Invalid Card Name");
        }
    },
    getAtomicCards: {
        type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(AtomicCardType_1.default)),
        async resolve(_source) {
            const result = await operators_1.getAtomicCards();
            console.log(result.data[1]);
            return result.data;
        }
    }
};
exports.default = AtomicCardQueries;
//# sourceMappingURL=AtomicCardQuery.js.map