import {
    GraphQLObjectType,
    GraphQLString
} from "graphql"

const Translations = new GraphQLObjectType({
    name: "Translations",
    description: "Describes the translated data per language as a key",
    fields: () => ({
        AncientGreek: {
            type: GraphQLString
        },
        Arabic: {
            type: GraphQLString
        },
        ChineseSimplified: {
            type: GraphQLString
        },
        ChineseTraditional: {
            type: GraphQLString
        },
        French: {
            type: GraphQLString
        },
        German: {
            type: GraphQLString
        },
        Hebrew: {
            type: GraphQLString
        },
        Italian: {
            type: GraphQLString
        },
        Japanese: {
            type: GraphQLString
        },
        Korean: {
            type: GraphQLString
        },
        Latin: {
            type: GraphQLString
        },
        Phyrexian: {
            type: GraphQLString
        },
        PortugueseBrazil: {
            type: GraphQLString
        },
        Russian: {
            type: GraphQLString
        },
        Sanskrit: {
            type: GraphQLString
        },
        Spanish: {
            type: GraphQLString
        }
    })
})

export default Translations