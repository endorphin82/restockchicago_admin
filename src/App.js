import React from "react"
import TabsContainer from "./components/TabsContainer"
import "antd/dist/antd.css";
import "./App.css"

function App() {
  console.log("after .env")
  console.log("process.env.NODE_ENV ",process.env.NODE_ENV)
  console.log("process.env.REACT_APP_BASE_URL ",process.env.REACT_APP_BASE_URL)
  console.log("process.env.REACT_APP_RECYCLE_BIN_ID ",process.env.REACT_APP_RECYCLE_BIN_ID)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code> APP</code>
        </p>
        <a
          className="App-link"
          href={process.env.REACT_APP_BASE_URL}
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
