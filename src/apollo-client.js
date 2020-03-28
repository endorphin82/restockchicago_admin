import ApolloClient from "apollo-boost"

const BASE_URL = require('../keys.js').BASE_URL

export const client = new ApolloClient({
  uri: BASE_URL
})