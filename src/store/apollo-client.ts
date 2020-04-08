import ApolloClient from "apollo-boost"
import { InMemoryCache } from "apollo-cache-inmemory"

const cache = new InMemoryCache();

export const client = new ApolloClient({
  cache,
  uri: process.env.REACT_APP_BASE_URL,
})
