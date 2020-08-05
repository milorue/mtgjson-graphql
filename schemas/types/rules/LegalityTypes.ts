import {
    GraphQLString, GraphQLObjectType
} from "graphql"

const Legalities = new GraphQLObjectType({
    name: "Legalities",
    description: "Describes a list of play formats that are legal for a specific card",
    fields: () => ({
        brawl: {
            type: GraphQLString
        },
        commander: {
            type: GraphQLString
        },
        duel: {
            type: GraphQLString
        },
        future: {
            type: GraphQLString
        },
        frontier: {
            type: GraphQLString
        },
        legacy: {
            type: GraphQLString
        },
        modern: {
            type: GraphQLString
        },
        pauper: {
            type: GraphQLString
        },
        penny: {
            type: GraphQLString
        },
        pioneer: {
            type: GraphQLString
        },
        standard: {
            type: GraphQLString
        },
        vintage: {
            type: GraphQLString
        }
    })
})

export default Legalities