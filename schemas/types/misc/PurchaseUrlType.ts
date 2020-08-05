import {
    GraphQLString, GraphQLObjectType
} from "graphql"

const PurchaseUrls = new GraphQLObjectType({
    name: "PurchaseUrls",
    description: "Descibes raw url paths to purchase a product from a marketplace",
    fields: () => ({
        cardKingdom: {
            type: GraphQLString
        },
        cardKingdomFoil: {
            type: GraphQLString
        },
        cardmarket: {
            type: GraphQLString
        },
        tcgplayer: {
            type: GraphQLString
        }
    })
})

export default PurchaseUrls