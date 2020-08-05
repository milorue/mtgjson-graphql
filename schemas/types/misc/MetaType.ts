import {
    GraphQLObjectType,
    GraphQLString
} from "graphql"

const Meta = new GraphQLObjectType({
    name: "Meta",
    description: "Describes application build and prices build date in ISO 8601 format also includes versioning data of the current MTGJSON release",
    fields: () => ({
        date: {
            type: GraphQLString
        },
        version: {
            type: GraphQLString
        }
    })
})

export default Meta