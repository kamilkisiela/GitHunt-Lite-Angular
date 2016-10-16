import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client';

const networkInterface = createBatchingNetworkInterface({
  uri: '/graphql',
  opts: {
    credentials: 'same-origin',
  },
  batchInterval: 10,
});

export const client = new ApolloClient({
  networkInterface,
});
