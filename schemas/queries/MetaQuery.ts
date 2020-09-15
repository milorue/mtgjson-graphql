import {
    GraphQLNonNull
} from 'graphql'
import Meta from '../types/misc/MetaType'
import { getMeta } from '../operations/operators'

const MetaQueries = {
    Meta: {
        type: new GraphQLNonNull(Meta),
        async resolve(_source){
            try{
                const result = await getMeta()
                return result.data

            }catch(err){
                throw new Error("API fetch failed with")
            }
        }
    }
}

export default MetaQueries