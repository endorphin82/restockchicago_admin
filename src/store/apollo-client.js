import ApolloClient from "apollo-boost"
// import { InMemoryCache } from 'apollo-cache-inmemory';
import { BASE_URL } from "../actions/types"

export const client = new ApolloClient({
  uri: BASE_URL,
  // cache: new InMemoryCache()
})
