import {
    GraphQLString,
    GraphQLList,
    GraphQLNonNull
} from 'graphql'

import {getAtomicCards} from '../operations/operators'

import AtomicCard from '../types/cards/AtomicCardType'


// this entire query needs to be retooled to access a database, 
// the core tech for it is valid but needs an effecient way to grab the data
const AtomicCardQueries = {
    getAtomicCard: {
        type: new GraphQLNonNull(AtomicCard),
        args: {
            cardName: {
                type: GraphQLString
            },
        },
        async resolve(_source, {cardName}){
            const result = await getAtomicCards()
            console.log(result.data[2])
            for(let x = 0; x<result.data.length; x++){
                if(result.data[x].asciiName === cardName){
                    return result.data[x]
                }
            }

            throw new Error("Invalid Card Name")
        }
    },
    getAtomicCards: {
        type: new GraphQLNonNull(new GraphQLList(AtomicCard)),
        async resolve(_source){
            const result = await getAtomicCards()
            console.log(result.data[1])
            return result.data
        }
    }
}

export default AtomicCardQueries