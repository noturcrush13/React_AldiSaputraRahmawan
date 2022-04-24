import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from 'graphql-ws';

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://passenger.hasura.app/v1/graphql',
    connectionParams: {
      headers: {
        "x-hasura-admin-secret" : "KHuO6imCn2b1Lz9fbP9Iu2c6Tg1U55eWcp170OqWkiiXH05xoKMuhDmBtZEWF5cv"
      }
    }
  }));

const httpLink = new HttpLink({
  uri: "https://passenger.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "KHuO6imCn2b1Lz9fbP9Iu2c6Tg1U55eWcp170OqWkiiXH05xoKMuhDmBtZEWF5cv",
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