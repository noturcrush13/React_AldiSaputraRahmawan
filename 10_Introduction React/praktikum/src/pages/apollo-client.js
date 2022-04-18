import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://first-database.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 'w154ewTWc1EoOrrk42JOdQfHJmyfyOh1hMQfEeSKoETJLUomJLM1BVzJW5JCoo0R'
    },
});

export default client;