import {
    GraphQLString, GraphQLNonNull, GraphQLList
} from 'graphql'

import {getDeck, getDeckList} from '../operations/operators'

import Deck from "../types/decks/DeckType"
import DeckList from '../types/decks/DeckListType'

const DeckQueries = {
    getDeck: {
        type: new GraphQLNonNull(Deck),
        args: {
            deck: {
                type: GraphQLString
            },
        },
        async resolve(_source, {deck}){
            try{
                const result = await getDeck(deck)
                return result.data
            } catch(err){
                throw new Error("Invalid deck name please check the getDeckMeta or getDeckList queries for file names.")
            }
        },
    },
    getDeckMeta: {
        type: new GraphQLNonNull(DeckList),
        description: "Describes the meta data of a single deck if given the deck code",
        args: {
            deckCode: {
                type: GraphQLString
            }
        },
        async resolve(_source, {deckCode}){
            const result = await getDeckList()
            for(let x = 0; x<result.data.length; x++){
                if(result.data[x].code === deckCode){
                    return result.data[x]
                }
            }
            throw new Error("Invalid Deck Code")
        }
    },
    getDeckList: {
        type: new GraphQLNonNull(new GraphQLList(DeckList)),
        description: "Describes the list of decks and their corresponding meta data",
        async resolve(_source){
            const result = await getDeckList()
            return result.data
        }
    }
}

export default DeckQueries