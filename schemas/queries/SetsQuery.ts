import {
    GraphQLString, GraphQLNonNull
} from 'graphql'

import {getCardSet} from '../operations/operators'

import Set from "../types/sets/SetType"

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
        }
    }
}

export default SetQueries