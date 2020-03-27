import React from "react"
import TabsContainer from "./components/TabsContainer"
import "antd/dist/antd.css";
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code> APP</code>
        </p>
        <a
          className="App-link"
          href="http://localhost:3005/graphql"
          target="_blank"
          rel="noopener noreferrer"
        >
          REACT_APP_BASE_URL
        </a>
      </header>
      <TabsContainer/>
    </div>
  )
}

export default App
