import ApolloClient from "apollo-boost"
import { BASE_URL } from "../actions/types"

export const client = new ApolloClient({
  uri: BASE_URL
})
