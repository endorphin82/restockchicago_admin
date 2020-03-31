import React from "react"
import TabsContainer from "./components/TabsContainer"
import "antd/dist/antd.css";
import "./App.css"
import { BASE_URL } from "./actions/types"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code> APP</code>
        </p>
        <a
          className="App-link"
          href={BASE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          BASE_URL
        </a>
      </header>
      <TabsContainer/>
    </div>
  )
}

export default App
