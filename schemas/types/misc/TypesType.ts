import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
} from 'graphql'

const Types = new GraphQLObjectType({
    name: "Types",
    description: "Describes card types available to MTGJSON",
    fields: () => ({
        subTypes: {
            type: new GraphQLList(GraphQLString)
        },
        superTypes: {
            type: new GraphQLList(GraphQLString)
        }
    })
})

export default Types