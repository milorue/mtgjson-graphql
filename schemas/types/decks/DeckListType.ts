import {
    GraphQLObjectType, GraphQLString,
} from "graphql"

const DeckList = new GraphQLObjectType({
    name: "DeckList",
    description: "metadata-like structure that holds top level information about a Deck object",
    fields: () => ({
        code: {
            type: GraphQLString
        },
        fileName: {
            type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        releaseDate: {
            type: GraphQLString
        }
    })
})

export default DeckList