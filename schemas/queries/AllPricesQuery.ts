import {
    GraphQLString, GraphQLFloat
} from 'graphql'
import { getAllPrices } from '../operations/operators'

const AllPricesQueries = {
    AllPrices: {
        type: GraphQLFloat,
        description: "Query all prices to a specific card UUID, card format, price provider id, list, type, and date",
        args: {
            uuid: {
                type: GraphQLString
            },
            format: {
                type: GraphQLString
            },
            provider: {
                type: GraphQLString
            },
            list: {
                type: GraphQLString
            },
            type: {
                type: GraphQLString
            },
            date: {
                type: GraphQLString
            }
        },
        async resolve(_source, {uuid, format, provider, list, type, date}){
            const result = await getAllPrices()

            if(result !== undefined || result !== null){
                // do filtering
                const cardUUID = result[uuid]
                console.log(cardUUID)
                const cardFormat = cardUUID[format]
                const priceProvider = cardFormat[provider]
                const priceList = priceProvider[list]
                const cardType = priceList[type]
                const out = cardType[date]
                if(out !== undefined || out !== null){
                    return out
                }
                else{
                    throw new Error("Card pricing data doesn't exist or the card doesn't exist")
                }
            }
            else{
                throw new Error("Internal server error")
            }
        }
    }
}

export default AllPricesQueries