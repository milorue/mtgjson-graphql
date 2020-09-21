import axios from 'axios'
import sqlite3 from 'sqlite3'

const parentURL = "https://mtgjson.com/api/"
const version = "v5/"
const apiURL = parentURL + version

import {storeJSON} from './cache/loadFiles'

let allPrintingsDB = new sqlite3.Database('/home/mrue/open-source/mtgjson-graphql/schemas/operations/database/AllPrintings.db', sqlite3.OPEN_READONLY, (err) => {
    if(err){
        console.error(err.message)
    }
    else{
        // Database connected
        console.log("Database connected")
    }

    
})

// database MTGJSON operations

// CARD OPERATIONS
export const getAllCards = async () => {
    return new Promise((resolve, reject) => {
        allPrintingsDB.all("SELECT * FROM cards",function(err, rows){
            if(err){
                reject(null);
            }
            resolve(rows)
        })
    })
}

export const getCard = async (cardName) => {
    return new Promise((resolve, reject) => {
        allPrintingsDB.get("SELECT * FROM cards where name='" + cardName + "'",function(err, rows){
            if(err){
                reject(null)
            }
            resolve(rows)
        })
    })
}

// SET OPERATIONS
export const getAllSets = async () => {
    return new Promise((resolve, reject) => {
        allPrintingsDB.all("SELECT * FROM sets", function(err, rows){
            if(err){
                reject(null);
            }
            resolve(rows)
        })
    })
}

// FOREIGN DATA OPERATIONS
export const getAllForeignData = async () => {
    return new Promise((resolve, reject) => {
        allPrintingsDB.all("SELECT * FROM foreign_data", function(err, rows){
            if(err){
                reject(null)
            }
            resolve(rows)
        })
    })
}

// LEGALITIES DATA OPERATIONS
export const getLegalities = async () => {
    return new Promise((resolve, reject) => {
        allPrintingsDB.all("SELECT * FROM legalities", function(err, rows){
            if(err){
                reject(null)
            }
            resolve(rows)
        })
    })
}

export const getLegalitiesByUUID = async (uuid) => {
    return new Promise((resolve, reject) => {
        allPrintingsDB.all("SELECT * FROM legalities where uuid='" + uuid + "'", function(err, rows){
            if(err){
                reject(null)
            }
            resolve(rows)
        })
    })
}

// RULINGS DATA OPERATIONS
export const getAllRulings = async () => {
    return new Promise((resolve, reject) => {
        allPrintingsDB.all("SELECT * FROM rulings", function(err, rows){
            if(err){
                reject(null)
            }
            resolve(rows)
        })
    })
}

export const getRulingsByUUID = async(uuid) => {
    return new Promise((resolve, reject) => {
        allPrintingsDB.all("SELECT * FROM rulings where uuid='" + uuid + "'", function(err, rows) {
            if(err){
                reject(null)
            }
            resolve(rows)
        })
    })
}

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

export const getMeta = () => {
    return axios
    .get(apiURL + "Meta.json",
    {
        params: {
            _limit: 100
        }
    }).then(res => res.data)
}

export const getAllPrices = () => {
    return axios
    .get(apiURL + "AllPrices.json")
    .then(res => res.data)
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

