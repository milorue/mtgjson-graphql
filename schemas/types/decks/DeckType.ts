import {
    GraphQLObjectType, GraphQLString, GraphQLList
} from "graphql"

import Card from '../cards/CardType'

const Deck = new GraphQLObjectType({
    name: "Deck",
    description: "A deck of cards describing a complete deck reference",
    fields: () => ({
        code: {
            type: GraphQLString
        },
        mainBoard: {
            type: new GraphQLList(Card)
        },
        name: {
            type: GraphQLString
        },
        sideBoard: {
            type: new GraphQLList(Card)
        },
        releaseDate: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        }
    })
})

export default Deck