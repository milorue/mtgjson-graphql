import {randomBytes} from 'crypto'
import { addKey, getKey} from '../schemas/operations/operators'

export const createAPIKey = async (username: String) => {
    
    const key = randomBytes(20).toString('hex')
    const date = new Date()
    await addKey(username, date, key)
    return key
}

export const validateAPIKey = async (key: String) => {
    try{
        const retrieved = await getKey(key)
        if(retrieved !== undefined && retrieved !== null){
            return true
        }
        else{
            throw new Error("Invalid API Key")
        }
    }
    catch{
        throw new Error("Invalid API Key")
    }
}

export const validateHeader = async (header) => {
    if(header !== undefined && header !== null){
        console.log('valid')
        return true
    }
    else{
        throw new Error("Missing Authorization Header")
    }
}

export const validateHeaderSplit = async (split) => {
    if(split !== undefined && split !== null){
        return true
    }
    else{
        throw new Error("Invalid Header Formatting")
    }
}