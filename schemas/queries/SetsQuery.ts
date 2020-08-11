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
            const result = await getCardSet(set)
            return result.data
        },
    },
    getSets: {
        type: new GraphQLNonNull(GraphQLList(SetList)),
        async resolve(_source){
            const result = await getSetList()
            return result.data
        }
    }
}

export default SetQueries