import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
} from "graphql"

export const CardUUIDWeight = new GraphQLObjectType({
    name: "CardUUIDWeight",
    fields: () => ({
        uuid: {
            type: GraphQLID
        },
        weight: {
            type: GraphQLInt
        }
    })
})

export const SheetsTypes = new GraphQLObjectType({
    name: "SheetsTypes",
    fields: () => ({
        balanceColors: {
            type: GraphQLBoolean
        },
        cards: {
            type: CardUUIDWeight
        },
        foil: {
            type: GraphQLBoolean
        },
        totalWeight: {
            type: GraphQLInt
        }

    })
})

export const BoosterTypes = new GraphQLObjectType({
    name: "BoosterTypes",
    fields: () => ({
        basic: {
            type: GraphQLInt
        },
        common: {
            type: GraphQLInt
        },
        rare: {
            type: GraphQLInt
        },
        uncommon: {
            type: GraphQLInt
        }
    })
})

export const BoosterContent = new GraphQLObjectType({
    name: "BoosterContent",
    fields: () => ({
        contents: {
            type: BoosterTypes
        },
        weight: {
            type: GraphQLInt
        }
    })
})

export const Sheets = new GraphQLObjectType({
    name: "Sheets",
    fields: () => ({
        basic: {
            type: SheetsTypes
        },
        common: {
            type: SheetsTypes
        },
        rare: {
            type: SheetsTypes
        },
        uncommon: {
            type: SheetsTypes
        }
    })
})

export const Boosters = new GraphQLObjectType({
    name: "Boosters",
    fields: () => ({
        boosters: {
            type: new GraphQLList(BoosterContent)
        },
        boostersTotalWeight: {
            type: GraphQLInt
        },
        sheets: {
            type: Sheets
        }
    })
})

export const Booster = new GraphQLObjectType({
    name: "Booster",
    description: "Describes a object-based breakdown of how a Set's booster pack may be constructed.",
    fields: () => ({
        default: {
            type: Boosters
        }
    })
})

