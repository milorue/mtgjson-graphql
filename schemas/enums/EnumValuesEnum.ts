import{
    GraphQLEnumType,
} from "graphql"


// Needs to be extended from https://mtgjson.com/api/v5/EnumValues.json

export const Availability = new GraphQLEnumType({
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
})

export const BorderColor = new GraphQLEnumType({
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
})

export const CardEnums = new GraphQLEnumType({
    name: "Card",
    values: {
        AVAILABILITY: {
            value: Availability
        },
        BORDERCOLOR: {
            value: BorderColor
        },

    }
})