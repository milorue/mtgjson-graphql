require('dotenv').config()
import express from 'express';
import rateLimit from 'express-rate-limit';
import apolloServer from './schemas/gql_schema_init';
import cors from 'cors'

const app = express();

app.enable('trust proxy');

// redirects should be ideally setup in reverse proxy like nignx
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10000, // limit each IP to 10000 requests
}));

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}))

// GraphQL server setup
apolloServer.applyMiddleware({ app, cors: false });

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.info("MTGJSON Server Started on port: " + port);
  
});
