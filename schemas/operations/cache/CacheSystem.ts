import {cacheDecks} from "../operators"

export async function cacheAllData(){
    try{
        const result = await cacheDecks()
        console.log(result)
    }catch(err){
        console.log("ERROR!!!!")
    }
    
    
}

cacheAllData()