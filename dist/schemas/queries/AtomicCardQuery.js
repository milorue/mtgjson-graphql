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
            const data = result.data;
            console.log(data[cardName]);
            if (data[cardName] != null) {
                return data[cardName][0];
            }
            throw new Error("Invalid Card Name");
        }
    },
};
exports.default = AtomicCardQueries;
//# sourceMappingURL=AtomicCardQuery.js.map