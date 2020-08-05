import {
    GraphQLObjectType
} from 'graphql'

import Types from '../misc/TypesType'

const CardTypes = new GraphQLObjectType({
    name: "Card Types",
    description: "Describes top-level card types and the associated card types they may have",
    fields: () => ({
        artifact: {
            type: Types
        },
        conspiracy: {
            type: Types
        },
        creature: {
            type: Types
        },
        enchantment: {
            type: Types
        },
        instant: {
            type: Types
        },
        land: {
            type: Types
        },
        phenomenon: {
            type: Types
        },
        plane: {
            type: Types
        },
        planeswalker: {
            type: Types
        },
        scheme: {
            type: Types
        },
        sorcery: {
            type: Types
        },
        tribal: {
            type: Types
        },
        vanguard: {
            type: Types
        }
    })
})

export default CardTypes