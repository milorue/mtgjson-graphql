import axios from 'axios'

const parentURL = "https://mtgjson.com/api/"
const version = "v5/"
const apiURL = parentURL + version

export const getCardSet =(set) => {
    return axios
    .get(apiURL + set +'.json')
    .then(res => res.data)
}