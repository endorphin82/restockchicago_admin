import React from "react"
import { Tabs } from "antd"
import Categories from "../Categories"
import Products from "../Products"

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const TabsContainer = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane tab="Categories" key="1">
        <Categories/>
      </TabPane>
      <Tabs.TabPane tab="Products" key="2">
        <Products/>
      </Tabs.TabPane>
    </Tabs>
  )
}

export default TabsContainer