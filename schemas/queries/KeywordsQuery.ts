import {
    GraphQLNonNull,
} from 'graphql'

import {getKeywords} from '../operations/operators'

import Keywords from '../types/misc/KeywordsType'

const KeywordsQueries = {
    getKeywords: {
        type: new GraphQLNonNull(Keywords),
        async resolve(_source){
            const result = await getKeywords()
            return result.data
        }
    }
}

export default KeywordsQueries