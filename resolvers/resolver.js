const axios = require('axios')

// an async function to get all printing data on server start up
async function getAllPrintings(){
    let res = axios.get("https://mtgjson.com/api/v5/AllPrintings.json").then((response) => {
        return new Promise(resolve => {
            resolve(response)
        })
    })

    return new Promise(resolve => {
        resolve(res)
    })
}


async function run(){
    let allPrintings = await getAllPrintings();
}

run()




const resolver = {
    Query:{
        test(){
            return {
                test: "Test",
                test2: "Fuck"
            }
        }
    }
}

module.exports = resolver