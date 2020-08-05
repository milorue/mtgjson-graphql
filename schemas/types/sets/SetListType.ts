import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean
} from 'graphql'
import e from 'express'

const SetList = new GraphQLObjectType({
    name: "Set List",
    description: "Describes a metadata-like structure that holds top-level information about a Set",
    fields: () => ({
        baseSetSize: {
            type: GraphQLInt
        },
        code: {
            type: GraphQLString
        },
        isFoilOnly: {
            type: GraphQLBoolean
        },
        isOnlineOnly: {
            type: GraphQLBoolean
        },
        isPaperOnly: {
            type: GraphQLBoolean
        },
        name: {
            type: GraphQLString
        },
        releaseDate: {
            type: GraphQLString
        },
        totalSetSize: {
            type: GraphQLInt
        },
        type: {
            type: GraphQLString
        }
    })
})

export default SetList