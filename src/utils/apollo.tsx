import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
} from "@apollo/client";

const ENDPOINT: string = process.env.REACT_APP_GRAPHQL_ENDPOINT || "";

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
