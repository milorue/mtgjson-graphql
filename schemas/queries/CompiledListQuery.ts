import {
    GraphQLString, GraphQLNonNull, GraphQLList
} from 'graphql'

import {getCompiledList} from '../operations/operators'

const CompiledListQueries = {
    getCompiledList: {
        type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
        async resolve(_source){
            const result = await getCompiledList()
            return result.data
        },
    },
}

export default CompiledListQueries