import {
    GraphQLObjectType, GraphQLID
} from "graphql"

const Identifiers= new GraphQLObjectType({
    name: "Identifiers",
    description: "Identifiers describes the ID's associated with a given card",
    fields: () => ({
        cardKingdomFoilId: {
            type: GraphQLID
        },
        cardKingdomId: {
            type: GraphQLID
        },
        mcmId: {
            type: GraphQLID
        },
        mcmMetaId: {
            type: GraphQLID
        },
        mtgArenaId: {
            type: GraphQLID
        },
        mtgoFoilId: {
            type: GraphQLID
        },
        mtgoId: {
            type: GraphQLID
        },
        mtgjsonV4Id: {
            type: GraphQLID
        },
        multiverseId: {
            type: GraphQLID
        },
        scryfallId: {
            type: GraphQLID
        },
        scryfallOracleId: {
            type: GraphQLID
        },
        scryfallIllustrationId: {
            type: GraphQLID
        },
        tcgplayerProductId: {
            type: GraphQLID
        }
    })
})

export default Identifiers