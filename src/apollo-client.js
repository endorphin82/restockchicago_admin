import ApolloClient from "apollo-boost"

const BASE_URL = 'http://localhost:3005/graphql'
// const BASE_URL = 'https://glacial-mesa-30936.herokuapp.com/graphql'

export const client = new ApolloClient({
  uri: BASE_URL
})
