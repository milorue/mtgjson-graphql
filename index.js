const {ApolloServer, gql} = require('apollo-server')

const fs = require('fs')
const typeDefs = fs.readFileSync("./schemas/allprintings.graphql", {encoding: 'utf-8'})
const resolvers = require('./resolvers/resolver')

const server = new ApolloServer({typeDefs, resolvers})

server.listen({port: process.env.PORT || 4000}).then(() => {
    console.log("Server opened")
})