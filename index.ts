import express from 'express';
import rateLimit from 'express-rate-limit';
import apolloServer from './schemas/gql_schema_init';

const app = express();

app.enable('trust proxy');

// redirects should be ideally setup in reverse proxy like nignx
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests
}));

// GraphQL server setup
apolloServer.applyMiddleware({ app, path: '/graphql' });

app.listen(8000, () => {
  console.info("MTGJSON Server Started");
  
});
