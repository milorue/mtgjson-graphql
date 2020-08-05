import { ApolloServer } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import depthLimit from 'graphql-depth-limit';
import queryComplexity, {
  simpleEstimator,
} from 'graphql-query-complexity';
import schema from './schema';

const queryComplexityRule = queryComplexity({
  maximumComplexity: 1000,
  variables: {},
  // eslint-disable-next-line no-console
  createError: (max: number, actual: number) => new GraphQLError(`Query is too complex: ${actual}. Maximum allowed complexity: ${max}`),
  estimators: [
    simpleEstimator({
      defaultComplexity: 1,
    }),
  ],
});

const apolloServer = new ApolloServer({
  schema,
  introspection: true,
  validationRules: [depthLimit(7), queryComplexityRule],
  formatError: (err): Error => {
    if (err.message.startsWith('Database Error: ')) {
      return new Error('Internal server error');
    }

    return err;
  },
});

export default apolloServer;