"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheDecks = exports.getKeywords = exports.getCompiledList = exports.getAtomicCards = exports.getDeckList = exports.getDeck = exports.getSetList = exports.getCardSet = void 0;
const axios_1 = __importDefault(require("axios"));
const parentURL = "https://mtgjson.com/api/";
const version = "v5/";
const apiURL = parentURL + version;
const loadFiles_1 = require("./cache/loadFiles");
// axios MTGJSON_API operations
exports.getCardSet = (set) => {
    return axios_1.default
        .get(apiURL + set + '.json')
        .then(res => res.data);
};
exports.getSetList = () => {
    return axios_1.default
        .get(apiURL + "SetList.json")
        .then(res => res.data);
};
exports.getDeck = (deck) => {
    return axios_1.default
        .get(apiURL + "decks/" + deck + '.json')
        .then(res => res.data);
};
exports.getDeckList = () => {
    return axios_1.default
        .get(apiURL + "DeckList.json")
        .then(res => res.data);
};
// Need to set up a local database to access such a large file
// Talk to Mark about the SQLite and SQL
exports.getAtomicCards = () => {
    return axios_1.default
        .get(apiURL + "AtomicCards.json")
        .then(res => res.data);
};
exports.getCompiledList = () => {
    return axios_1.default
        .get(apiURL + "CompiledList.json")
        .then(res => res.data);
};
exports.getKeywords = () => {
    return axios_1.default
        .get(apiURL + "Keywords.json")
        .then(res => res.data);
};
// Caching operations
async function cacheDecks() {
    const deckList = await exports.getDeckList();
    // console.log(deckList.data)
    const filePath = "../data/decks/DeckList.json";
    loadFiles_1.storeJSON(deckList.data, filePath);
    for (let x = 0; x < deckList.data.length; x++) {
        const url = apiURL + "decks/" + deckList.data[x].fileName + ".json";
        try {
            let deck = await axios_1.default.get(apiURL + "decks/" + deckList.data[x].fileName + ".json");
            const deckPath = "../data/decks/" + deckList.data[x].fileName + ".json";
            loadFiles_1.storeJSON(deck.data, deckPath);
        }
        catch {
            console.error("Error occured for given url: " + url);
        }
    }
}
exports.cacheDecks = cacheDecks;
//# sourceMappingURL=operators.js.map