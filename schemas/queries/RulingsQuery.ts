import {
    GraphQLList, GraphQLNonNull, GraphQLString
} from 'graphql'
import Rulings from '../types/rules/RulingsType'
import { getAllRulings, getRulingsByUUID } from '../operations/operators'
import { validateAPIKey, validateHeader } from '../../services/tokenService'

const RulingsQueries = {
    Rulings: {
        type: new GraphQLNonNull(new GraphQLList(Rulings)),
        async resolve(_source, _args, context){
            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)

            const result = await getAllRulings()

            if(result !== undefined || result !== null){
                return result
            }
            else{
                throw new Error("Internal server error")
            }
        }
    },

    RulingsByUUID: {
        type: new GraphQLNonNull(new GraphQLList(Rulings)),
        args: {
            uuid: {
                type: GraphQLString
            }
        },
        async resolve(_source, {uuid}, context){

            await validateHeader(context.req.headers.authorization)

            const apiKey = context.req.headers.authorization.split(" ")[1]

            await validateAPIKey(apiKey)

            const result = await getRulingsByUUID(uuid)

            if(result !== undefined || result !== null){
                return result
            }
            else{
                throw new Error("UUID given wasn't a valid card or ruling data on it doesn't yet exist")
            }
        }
    }
}

export default RulingsQueries