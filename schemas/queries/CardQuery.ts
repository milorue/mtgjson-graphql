import {
    GraphQLList, GraphQLNonNull, GraphQLString,
} from 'graphql'

import {getAllCards, getCard} from '../operations/operators'

import Card from '../types/cards/CardType'
import { validateAPIKey, validateHeader } from '../../services/tokenService'

const CardQueries = {
    Cards: {
        type: new GraphQLNonNull(new GraphQLList(Card)),
        async resolve(_source, _args, context){
            
            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)
            

                const result = await getAllCards()
                if(result !== undefined || result !== null){
                    return result
                }
                else{
                    throw new Error("Internal server error")
                }

            
        }
    },
    Card: {
        type: new GraphQLNonNull(Card),
        args: {
            name: {
                type: GraphQLString
            },
        },
        async resolve(_source, {name}, context){

            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)

            const result = await getCard(name)
            
            if(result !== undefined || result !== null){
                return result
            }
            else{
                throw new Error("Card is invalid or doesn't exist")
            }
        }
    }
}

export default CardQueries