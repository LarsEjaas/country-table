import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
} from "@apollo/client";

const ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT;

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const cache = new InMemoryCache({
  resultCaching: false,
});

const link = createHttpLink({
  uri: ENDPOINT,
});

export const apolloClient = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
  defaultOptions,
});
