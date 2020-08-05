const axios = require('axios')

class DataLoader{
    constructor(){
        this.parentUrl = "https://mtgjson.com/api/"
        this.version = "v5/"

        this.apiUrl = this.parentUrl + this.version
    }

    async getCardSet(set){
        let res = axios.get(this.apiUrl + set +'.json').then((res) => {
            // if response is not null
            if(res.data){
                
                return new Promise(resolve => {
                    resolve(res.data)
                })
            }
            else{
                return new Promise(resolve => {
                    resolve(null)
                })
            }
        })

        return new Promise(resolve => {
            resolve(res)
        })
    }
}

export const

module.exports = DataLoader