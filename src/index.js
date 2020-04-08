import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { ApolloProvider } from "react-apollo"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { client } from "./store/apollo-client"
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </Provider>, document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()