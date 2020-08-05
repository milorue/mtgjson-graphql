import{
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType,
} from 'graphql'

const ForeignData = new GraphQLObjectType({
    name: "ForeignData",
    description: "Flavor text in foreign language",
    fields: () => ({
        flavorText: {
            type: GraphQLString
        },
        language: {
            type: GraphQLString
        },
        multiverseId: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        text: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        }
    })
})

export default ForeignData