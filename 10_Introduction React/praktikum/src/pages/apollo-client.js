import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from 'graphql-ws';

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://first-database.hasura.app/v1/graphql',
    connectionParams: {
      headers: {
        "x-hasura-admin-secret" : "w154ewTWc1EoOrrk42JOdQfHJmyfyOh1hMQfEeSKoETJLUomJLM1BVzJW5JCoo0R"
      }
    }
  }));

const httpLink = new HttpLink({
  uri: "https://first-database.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "w154ewTWc1EoOrrk42JOdQfHJmyfyOh1hMQfEeSKoETJLUomJLM1BVzJW5JCoo0R",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
    link : splitLink,
    cache: new InMemoryCache(),
});

export default client;