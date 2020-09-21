import {
    GraphQLEnumType,
} from 'graphql'

const LegalitiesEnum = new GraphQLEnumType({
    name: "LegalitiesEnum",
    values: {
        BRAWL: {
            value: "Sol Ring is not legal in the Brawl play format. This property is omitted."
        },
        COMMANDER: {
            value: "Sol Ring is legal in the Commander play format."
        },
        DUEL: {
            value: "Sol Ring is banned in the Duel Commander play format."
        },
        FUTURE: {
            value: "Sol Ring is not legal in the Future play format. This property is omitted."
        },
        FRONTIER: {
            value: "Sol Ring is not legal in the Frontier play format. This property is omitted."
        },
        LEGACY: {
            value: "Sol Ring is banned in the Legacy play format."
        },
        MODERN: {
            value: "Sol Ring is not legal in the Modern play format. This property is omitted."
        },
        PAUPER: {
            value: "Sol Ring is not legal in the Pauper play format. This property is omitted."
        },
        PENNY: {
            value: "Sol Ring is not legal in the Penny play format. This property is omitted."
        },
        PIONEER: {
            value: "Sol Ring is not legal in the Pioneer play format. This property is omitted."
        },
        STANDARD: {
            value: "Sol Ring is not legal in the Standard play format. This property is omitted."
        },
        VINTAGE: {
            value: "Sol Ring is restricted in the Vintage play format."
        }

    }
})

export default LegalitiesEnum