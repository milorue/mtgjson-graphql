"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const graphql_1 = require("graphql");
const graphql_depth_limit_1 = __importDefault(require("graphql-depth-limit"));
const graphql_query_complexity_1 = __importStar(require("graphql-query-complexity"));
const schema_1 = __importDefault(require("./schema"));
const queryComplexityRule = graphql_query_complexity_1.default({
    maximumComplexity: 1000,
    variables: {},
    createError: (max, actual) => new graphql_1.GraphQLError(`Query is too complex: ${actual}. Maximum allowed complexity: ${max}`),
    estimators: [
        graphql_query_complexity_1.simpleEstimator({
            defaultComplexity: 1,
        }),
    ],
});
// initializes the Apollo server, needs to modified to fit a production environment, introspection off or some more rate limiting/API key usage
const apolloServer = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
    introspection: true,
    validationRules: [graphql_depth_limit_1.default(7), queryComplexityRule],
    formatError: (err) => {
        if (err.message.startsWith('Database Error: ')) {
            return new Error('Internal server error');
        }
        return err;
    },
});
exports.default = apolloServer;
//# sourceMappingURL=gql_schema_init.js.map