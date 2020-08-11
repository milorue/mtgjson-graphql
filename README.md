# MTGJSON GraphQL API
<img align="center" src="./assets/graphql.svg" height="100px"/>
<img align="center" src="./assets/apollo-graphql-compact.svg" height="100px"/>
<hr/>


### An Apollo GraphQL Server for mtgjson.com

This repository contains the code to run the GraphQL server via Apollo Server

[![Discord](https://img.shields.io/discord/224178957103136779.svg)](https://discord.gg/74GUQDE)

## About
---
MTGJSON GraphQL is exactly what you would expect from the name, an open-source GraphQL API built on top of the MTGJSON data sets. This API focuses on the JSON payloads for MTGJSON.

### Maintained
This codebase is maintained by Milo Rue as a part of the greater MTGJSON team which can be found on the MTGJSON [website](mtgjson.com).

### Contributing
If you would like to contribute to the development of this project please reach out on [Discord](https://mtgjson.com/discord) or open a [Pull request](https://github.com/milorue/mtgjson-graphql/pulls).

### Issues
Report any bugs to issues to [here](https://github.com/milorue/mtgjson-graphql/issues)

## How to Use
### Basic Usage
To get started from scratch quickly simply clone this repository and run the following:

```
npm install
npm run dev
```

Navigate to localhost:8000/graphql and you're set, documentation for Apollo, GraphQL, and NodeJS can be found here:
* [NodeJS](https://nodejs.org/en/docs/es6/)
* [GraphQL](https://graphql.org/learn/)
* [Apollo](https://www.apollographql.com/docs/apollo-server/)

### Advanced Usage
If you are looking to deploy this server anywhere you will need to run
```
npm run transpile:server
```

this will allow you to utilize `npm start` for whatever deployment solution you choose. The build should come with an updated `/dist` already setup

### General Usage
For most people there will be no need to download the codebase and run and host your own GraphQL server, the plans are to host this codebase at mtgjson.com/graphql or something similar.

## Documentation
The benefit of using GraphQL is that the vast majority of the user-facing product is self-documenting so within GraphiQL or whatever client you are utilizing you can view the documentation and schema for the end point.