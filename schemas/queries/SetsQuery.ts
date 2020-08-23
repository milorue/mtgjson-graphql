import {
    GraphQLString, GraphQLNonNull, GraphQLList
} from 'graphql'

import {getCardSet, getSetList} from '../operations/operators'

import Set from "../types/sets/SetType"
import SetList from '../types/sets/SetListType'

const SetQueries = {
    getSet: {
        type: new GraphQLNonNull(Set),
        args: {
            set: {
                type: GraphQLString
            },
        },
        async resolve(_source, {set}){
            try{
                const result = await getCardSet(set)
                return result.data
            } catch(err){
                if(err.response.status === 404){
                    throw new Error("Invalid set code")
                }
                else{
                    throw new Error("API fetch failed with " + err)
                }
            }
            
            
        },
    },
    getSets: {
        type: new GraphQLNonNull(GraphQLList(SetList)),
        async resolve(_source){
            try{
                const result = await getSetList()
                return result.data
            } catch(err){
                throw new Error("API fetch failed with " + err)
            }
        }
    }
}

export default SetQueries