import ApolloClient from "apollo-boost"
import { InMemoryCache } from "apollo-cache-inmemory"
import { HttpLink } from "apollo-link-http"
import { ApolloLink } from 'apollo-link';

// const httpLink = new HttpLink({
//   uri: process.env.REACT_APP_BASE_URL,
//   fetch,
//   credentials: 'same-origin',
//   headers: {},
// });
const cache = new InMemoryCache();
// const link = ApolloLink.from([httpLink]);
  // const link = new HttpLink({ uri: process.env.REACT_APP_BASE_URL }),
export const client = new ApolloClient({
  cache,
  uri: process.env.REACT_APP_BASE_URL,
})
