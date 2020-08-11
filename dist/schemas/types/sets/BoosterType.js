"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booster = exports.Boosters = exports.Sheets = exports.BoosterContent = exports.BoosterTypes = exports.SheetsTypes = exports.CardUUIDWeight = void 0;
const graphql_1 = require("graphql");
exports.CardUUIDWeight = new graphql_1.GraphQLObjectType({
    name: "CardUUIDWeight",
    fields: () => ({
        uuid: {
            type: graphql_1.GraphQLID
        },
        weight: {
            type: graphql_1.GraphQLInt
        }
    })
});
exports.SheetsTypes = new graphql_1.GraphQLObjectType({
    name: "SheetsTypes",
    fields: () => ({
        balanceColors: {
            type: graphql_1.GraphQLBoolean
        },
        cards: {
            type: exports.CardUUIDWeight
        },
        foil: {
            type: graphql_1.GraphQLBoolean
        },
        totalWeight: {
            type: graphql_1.GraphQLInt
        }
    })
});
exports.BoosterTypes = new graphql_1.GraphQLObjectType({
    name: "BoosterTypes",
    fields: () => ({
        basic: {
            type: graphql_1.GraphQLInt
        },
        common: {
            type: graphql_1.GraphQLInt
        },
        rare: {
            type: graphql_1.GraphQLInt
        },
        uncommon: {
            type: graphql_1.GraphQLInt
        }
    })
});
exports.BoosterContent = new graphql_1.GraphQLObjectType({
    name: "BoosterContent",
    fields: () => ({
        contents: {
            type: exports.BoosterTypes
        },
        weight: {
            type: graphql_1.GraphQLInt
        }
    })
});
exports.Sheets = new graphql_1.GraphQLObjectType({
    name: "Sheets",
    fields: () => ({
        basic: {
            type: exports.SheetsTypes
        },
        common: {
            type: exports.SheetsTypes
        },
        rare: {
            type: exports.SheetsTypes
        },
        uncommon: {
            type: exports.SheetsTypes
        }
    })
});
exports.Boosters = new graphql_1.GraphQLObjectType({
    name: "Boosters",
    fields: () => ({
        boosters: {
            type: new graphql_1.GraphQLList(exports.BoosterContent)
        },
        boostersTotalWeight: {
            type: graphql_1.GraphQLInt
        },
        sheets: {
            type: exports.Sheets
        }
    })
});
exports.Booster = new graphql_1.GraphQLObjectType({
    name: "Booster",
    description: "Describes a object-based breakdown of how a Set's booster pack may be constructed.",
    fields: () => ({
        default: {
            type: exports.Boosters
        }
    })
});
//# sourceMappingURL=BoosterType.js.map