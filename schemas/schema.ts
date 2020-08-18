import {
    GraphQLSchema,
    GraphQLObjectType,
} from "graphql"

import SetQueries from './queries/SetsQuery'
import DeckQueries from "./queries/DecksQuery"
import CompiledListQueries from "./queries/CompiledListQuery"
import KeywordsQueries from "./queries/KeywordsQuery"
import AtomicCardQueries from "./queries/AtomicCardQuery"

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        description: "Queries pull from MTGJSON and its resources directly",
        fields: () => ({
            ...SetQueries,
            ...DeckQueries,
            ...CompiledListQueries,
            ...KeywordsQueries,
            ...AtomicCardQueries,
        }),
    }),
})

export default schema