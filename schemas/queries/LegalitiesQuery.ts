import {
    GraphQLList, GraphQLNonNull, GraphQLString
} from 'graphql'
import { getLegalities, getLegalitiesByUUID } from '../operations/operators'
import Legal from '../types/rules/LegalTypes'
import { validateAPIKey, validateHeader } from '../../services/tokenService'

const LegalitiesQueries = {
    Legalities: {
        type: new GraphQLNonNull(new GraphQLList(Legal)),
        async resolve(_source, _args, context){

            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)

            const result = await getLegalities()

            if(result !== undefined || result !== null){
                return result
            }
            else{
                throw new Error("Internal server error")
            }
        }
    },
    LegalitiesByUUID: {
        type: new GraphQLNonNull(new GraphQLList(Legal)),
        args: {
            uuid: {
                type: GraphQLString
            },
        },
        async resolve(_source, {uuid}, context){

            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)

            const result = await getLegalitiesByUUID(uuid)

            if(result !== undefined || result !== null){
                return result
            }
            else{
                throw new Error("UUID given wasn't a valid card or data on it doesn't exist")
            }
        }
    }
}

export default LegalitiesQueries