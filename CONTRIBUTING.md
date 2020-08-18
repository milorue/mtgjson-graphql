# Contributing
Thanks for checking out the contributing document, hopefully this means you're interested in improving this project and can help us push this API further.

The goal with this API is to provide a streamlined backend service for MTGJSON and leverage the advantages of GraphQL to limit the load on MTGJSON's servers for lesser used endpoints and ultimately lower the load for the end user through minified query costs.

If you're not a developer or simply not familiar with TypeScript and GraphQL no worries you can still help through opening issues, auditing our data, testing out endpoints, and more.

## Environment
I personally use VSCode with TSLint, GraphQL, ES7Lint, ESLint, npm Intellisense, and markdownlint extensions but pretty much any IDE or text editor will work for this project.

You will need to have an up to date version of NodeJS and Typescript installed globally on your machine
You can find installs for all OS's [here](https://nodejs.org/en/download/)
For all other packages you will use `npm` which comes with NodeJS, TypeScript can be installed globally with ```npm install -g typescript```

Although this project uses TypeScript the current implementation doesn't quite take advantage of all the type-safe features so any pull requests to that effect are welcome.

## File Structure
The file structure for this project is fairly simple

`schemas/` contains the GraphQL schema and internal logic that has been split up with `graphql-js` for readability

`dist/` contains the build folder for deploying and running `npm start` for whatever deployment solution one could be using

`assets/` contains images and other assets

`tsconfig.json` contains TypeScript compiler options

`package.json` contains npm dependencies type `npm install` to install them if you don't have a `node_modules/` directory

`tests/` COMING SOON

`docs/` COMING SOON though GraphQL is self-documenting so there is robust documentation built in. 

## Communication
Please use the [Discord](https://discord.com/invite/74GUQDE) server for communication.
