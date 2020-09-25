import {
    GraphQLString, GraphQLNonNull, GraphQLList
} from 'graphql'

import {getCompiledList} from '../operations/operators'
import { validateAPIKey, validateHeader } from '../../services/tokenService'

const CompiledListQueries = {
    CompiledList: {
        type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
        async resolve(_source, _args, context){
            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)
            
            const result = await getCompiledList()
            return result.data
        },
    },
}

export default CompiledListQueries