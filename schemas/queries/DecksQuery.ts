import {
    GraphQLString, GraphQLNonNull, GraphQLList
} from 'graphql'

import {getDeck, getDeckList} from '../operations/operators'

import Deck from "../types/decks/DeckType"
import DeckList from '../types/decks/DeckListType'
import { validateAPIKey, validateHeader } from '../../services/tokenService'

const DeckQueries = {
    Deck: {
        type: new GraphQLNonNull(Deck),
        description: "Search for deck's by their file name as described in the DeckMeta type",
        args: {
            deck: {
                type: GraphQLString
            },
        },
        async resolve(_source, {deck}, context){

            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)

            try{
                const result = await getDeck(deck)
                return result.data
            } catch(err){
                throw new Error("Invalid deck name please check the DeckMeta or DeckList queries for file names.")
            }
        },
    },
    DeckMeta: {
        type: new GraphQLNonNull(DeckList),
        description: "Describes the meta data of a single deck if given the deck code",
        args: {
            deckCode: {
                type: GraphQLString
            }
        },
        async resolve(_source, {deckCode}, context){

            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)

            const result = await getDeckList()
            for(let x = 0; x<result.data.length; x++){
                if(result.data[x].code === deckCode){
                    return result.data[x]
                }
            }
            throw new Error("Invalid Deck Code")
        }
    },
    DeckList: {
        type: new GraphQLNonNull(new GraphQLList(DeckList)),
        description: "Describes a list of all decks available to MTGJSON with the corresponding data about a given deck",
        async resolve(_source, _args, context){

            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)
            
            const result = await getDeckList()
            return result.data
        }
    }
}

export default DeckQueries