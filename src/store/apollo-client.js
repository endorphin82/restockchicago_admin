import ApolloClient from "apollo-boost"
// import { InMemoryCache } from 'apollo-cache-inmemory';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_BASE_URL,
  // cache: new InMemoryCache()
})
