import {
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
} from 'graphql'

import {getAtomicCards} from '../operations/operators'

import AtomicCard from '../types/cards/AtomicCardType'


// this entire query needs to be retooled to access a database, 
// the core tech for it is valid but needs an effecient way to grab the data
const AtomicCardQueries = {
    AtomicCard: {
        type: new GraphQLNonNull(AtomicCard),
        args: {
            cardName: {
                type: GraphQLString
            },
        },
        async resolve(_source, {cardName}){
            const result = await getAtomicCards()
            const data = result.data
            console.log(data[cardName])
            if(data[cardName] != null){
                return data[cardName][0]
            }            

            throw new Error("Invalid card name")
        }
    },
    AtomicCards: {
        type: new GraphQLNonNull(new GraphQLList(AtomicCard)),
        async resolve(_source){
            const result = await getAtomicCards()
            const data = result.data
            // console.log(data)
            if(data !== undefined){
                return data
            }

            throw new Error("Internal server error")
            
        }
    }
}

export default AtomicCardQueries