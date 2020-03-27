import ApolloClient from "apollo-boost"

export const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql'
  // uri: 'https://restockchicago-server.herokuapp.com/graphql'
})