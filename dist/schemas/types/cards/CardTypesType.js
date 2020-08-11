"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const TypesType_1 = __importDefault(require("../misc/TypesType"));
const CardTypes = new graphql_1.GraphQLObjectType({
    name: "Card Types",
    description: "Describes top-level card types and the associated card types they may have",
    fields: () => ({
        artifact: {
            type: TypesType_1.default
        },
        conspiracy: {
            type: TypesType_1.default
        },
        creature: {
            type: TypesType_1.default
        },
        enchantment: {
            type: TypesType_1.default
        },
        instant: {
            type: TypesType_1.default
        },
        land: {
            type: TypesType_1.default
        },
        phenomenon: {
            type: TypesType_1.default
        },
        plane: {
            type: TypesType_1.default
        },
        planeswalker: {
            type: TypesType_1.default
        },
        scheme: {
            type: TypesType_1.default
        },
        sorcery: {
            type: TypesType_1.default
        },
        tribal: {
            type: TypesType_1.default
        },
        vanguard: {
            type: TypesType_1.default
        }
    })
});
exports.default = CardTypes;
//# sourceMappingURL=CardTypesType.js.map