import {
    GraphQLSchema,
    GraphQLObjectType,
} from "graphql"

import SetQueries from './queries/SetsQuery'

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: () => ({
            ...SetQueries,
        }),
    }),
})

export default schema