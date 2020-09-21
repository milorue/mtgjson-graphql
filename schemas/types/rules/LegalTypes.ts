import {
    GraphQLString, GraphQLObjectType, GraphQLInt
} from 'graphql'

const Legal = new GraphQLObjectType({
    name: "Legal",
    description: "Play formats that are legal for a specific card's UUID",
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        format: {
            type: GraphQLString
        },
        status: {
            type: GraphQLString
        },
        uuid: {
            type: GraphQLString
        }
    })
})

export default Legal