import { InMemoryCache, useApolloClient } from "@apollo/client";

const client = new useApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default client;
