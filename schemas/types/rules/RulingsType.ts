import {
    GraphQLString, GraphQLObjectType
} from 'graphql'

const Rulings = new GraphQLObjectType({
    name: "Rulings",
    description: "Describes a list of rulings that are for a specific card",
    fields: () => ({
        data: {
            type: GraphQLString
        },
        text: {
            type: GraphQLString
        }
    })
})

export default Rulings