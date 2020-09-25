import {
    GraphQLNonNull
} from 'graphql'
import Meta from '../types/misc/MetaType'
import { getMeta } from '../operations/operators'
import { validateAPIKey, validateHeader } from '../../services/tokenService'

const MetaQueries = {
    Meta: {
        type: new GraphQLNonNull(Meta),
        async resolve(_source, _args, context){
            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)
            
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