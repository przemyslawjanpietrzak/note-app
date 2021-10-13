const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const { resolvers } = require('./resolvers');
const { typeDefs } = require('./typeDefs');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(express.static('./build'));

server.start().then(() => {

  server.applyMiddleware({ app,  path: "/graphql"  });

  app.listen(4000, () => console.info(`Server started`));
});

