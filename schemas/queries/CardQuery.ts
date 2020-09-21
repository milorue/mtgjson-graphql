import {
    GraphQLList, GraphQLNonNull, GraphQLString,
} from 'graphql'

import {getAllCards, getCard} from '../operations/operators'

import Card from '../types/cards/CardType'

const CardQueries = {
    Cards: {
        type: new GraphQLNonNull(new GraphQLList(Card)),
        async resolve(_source){
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
        async resolve(_source, {name}){
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