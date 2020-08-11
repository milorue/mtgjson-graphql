"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const gql_schema_init_1 = __importDefault(require("./schemas/gql_schema_init"));
const app = express_1.default();
app.enable('trust proxy');
// redirects should be ideally setup in reverse proxy like nignx
app.use(express_rate_limit_1.default({
    windowMs: 15 * 60 * 1000,
    max: 100,
}));
// GraphQL server setup
gql_schema_init_1.default.applyMiddleware({ app, path: '/graphql' });
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.info("MTGJSON Server Started on port: " + port);
});
//# sourceMappingURL=index.js.map