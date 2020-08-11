"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardEnums = exports.BorderColor = exports.Availability = void 0;
const graphql_1 = require("graphql");
// Needs to be extended from https://mtgjson.com/api/v5/EnumValues.json
exports.Availability = new graphql_1.GraphQLEnumType({
    name: "Availability",
    values: {
        ARENA: {
            value: "arena"
        },
        DREAMCAST: {
            value: "dreamcast"
        },
        MTGO: {
            value: "mtgo"
        },
        PAPER: {
            value: "paper"
        },
        SHANDALAR: {
            value: 'shandalar'
        }
    }
});
exports.BorderColor = new graphql_1.GraphQLEnumType({
    name: "BorderColor",
    values: {
        BLACK: {
            value: "black"
        },
        BORDERLESS: {
            value: "borderless"
        },
        GOLD: {
            value: "gold"
        },
        SILVER: {
            value: "silver"
        },
        WHITE: {
            value: "white"
        }
    }
});
exports.CardEnums = new graphql_1.GraphQLEnumType({
    name: "Card",
    values: {
        AVAILABILITY: {
            value: exports.Availability
        },
        BORDERCOLOR: {
            value: exports.BorderColor
        },
    }
});
//# sourceMappingURL=EnumValuesEnum.js.map