import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString
} from 'graphql'

const Keywords = new GraphQLObjectType({
    name: "Keywords",
    description: "Describes a list of all keywords used on Magic the Gathering cards",
    fields: () => ({
        abilityWords: {
            type: new GraphQLList(GraphQLString),
        },
        keywordAbilities: {
            type: new GraphQLList(GraphQLString)
        },
        keywordActions: {
            type: new GraphQLList(GraphQLString)
        }
    })
})

export default Keywords