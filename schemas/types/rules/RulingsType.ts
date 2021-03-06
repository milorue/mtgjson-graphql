import {
    GraphQLString, GraphQLObjectType, GraphQLInt
} from 'graphql'

const Rulings = new GraphQLObjectType({
    name: "Rulings",
    description: "Describes a list of rulings that are for a specific card's uuid",
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        date: {
            type: GraphQLString
        },
        text: {
            type: GraphQLString
        },
        uuid: {
            type: GraphQLString
        },
    })
})

export default Rulings