import {
    GraphQLSchema,
    GraphQLObjectType,
} from "graphql"

import SetQueries from './queries/SetsQuery'
import DeckQueries from "./queries/DecksQuery"
import CompiledListQueries from "./queries/CompiledListQuery"
import KeywordsQueries from "./queries/KeywordsQuery"
import MetaQueries from "./queries/MetaQuery"
import CardQueries from "./queries/CardQuery"
import LegalitiesQueries from "./queries/LegalitiesQuery"
import RulingsQueries from "./queries/RulingsQuery"

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        description: "Queries pull from MTGJSON and its resources directly",
        fields: () => ({
            ...SetQueries,
            ...DeckQueries,
            ...CompiledListQueries,
            ...KeywordsQueries,
            ...MetaQueries,
            ...CardQueries,
            ...LegalitiesQueries,
            ...RulingsQueries,
            
        }),
    }),
})

export default schema