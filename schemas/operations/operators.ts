import axios from 'axios'

const parentURL = "https://mtgjson.com/api/"
const version = "v5/"
const apiURL = parentURL + version

import {storeJSON} from './cache/loadFiles'

// axios MTGJSON_API operations

export const getCardSet = (set) => {
    return axios
    .get(apiURL + set +'.json')
    .then(res => res.data)
}

export const getSetList = () => {
    return axios
    .get(apiURL + "SetList.json")
    .then(res => res.data)
}

export const getDeck = (deck) => {
    return axios
    .get(apiURL+ "decks/" + deck + '.json')
    .then(res => res.data)
}

export const getDeckList = () => {
    return axios
    .get(apiURL + "DeckList.json")
    .then(res => res.data)
}

// Need to set up a local database to access such a large file
// Talk to Mark about the SQLite and SQL
export const getAtomicCards = () => {
    return axios
    .get(apiURL + "AtomicCards.json",
    {
        params: {
            _limit: 100
        }
    })
    .then(res => {
        return res.data
    })
}

export const getCompiledList = () => {
    return axios
    .get(apiURL + "CompiledList.json")
    .then(res => res.data)
}

export const getKeywords = () => {
    return axios
    .get(apiURL + "Keywords.json")
    .then(res => res.data)
}

export const getAllPrintings = () => {
    return axios
    .get(apiURL + "AllPrintings.json",
    {
        params: {
            _limit: 100
        }
    }).then(res => res.data)
}

// Caching operations

export async function cacheDecks(){
    const deckList = await getDeckList()

    // console.log(deckList.data)

    const filePath = "../data/decks/DeckList.json"
    storeJSON(deckList.data, filePath)

    for(let x = 0; x<deckList.data.length; x++){
        const url = apiURL + "decks/" + deckList.data[x].fileName + ".json"
        try{
            let deck = await axios.get(apiURL + "decks/" + deckList.data[x].fileName + ".json")
            const deckPath = "../data/decks/" + deckList.data[x].fileName + ".json"
            storeJSON(deck.data, deckPath)
        }catch{
            console.error("Error occured for given url: " + url)
        }
        
    }
}

export async function cacheSets(){

}

