import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://passenger.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 'KHuO6imCn2b1Lz9fbP9Iu2c6Tg1U55eWcp170OqWkiiXH05xoKMuhDmBtZEWF5cv'
    },
});

export default client;