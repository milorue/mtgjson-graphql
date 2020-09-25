import { ApolloServer } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import queryComplexity, {
  simpleEstimator,
} from 'graphql-query-complexity';
import schema from './schema';

const queryComplexityRule = queryComplexity({
  maximumComplexity: 1000,
  variables: {},
  createError: (max: number, actual: number) => new GraphQLError(`Query is too complex: ${actual}. Maximum allowed complexity: ${max}`),
  estimators: [
    simpleEstimator({
      defaultComplexity: 1,
    }),
  ],
});

// initializes the Apollo server, needs to modified to fit a production environment, introspection off or some more rate limiting/API key usage

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res}) => ({req, res}),
  introspection: true,
  playground: true,
  validationRules: [queryComplexityRule],
  formatError: (err): Error => {
    if (err.message.startsWith('Database Error: ')) {
      return new Error('Internal server error');
    }

    return err;
  },
});

export default apolloServer;