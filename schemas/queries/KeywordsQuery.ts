import {
    GraphQLNonNull,
} from 'graphql'

import {getKeywords} from '../operations/operators'

import Keywords from '../types/misc/KeywordsType'
import { validateAPIKey, validateHeader } from '../../services/tokenService'

const KeywordsQueries = {
    Keywords: {
        type: new GraphQLNonNull(Keywords),
        async resolve(_source, _args, context){
            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)

            const result = await getKeywords()
            return result.data
        }
    }
}

export default KeywordsQueries