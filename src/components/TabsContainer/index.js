import React from "react"
import { Tabs } from "antd"
import Categories from "../Categories"
import Products from "../Products"
import { Query } from "react-apollo"
import { useQuery } from "@apollo/react-hooks"
import { categoriesAllQuery } from "../Categories/query"
import { productsAllQuery } from "../Products/query"

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const TabsContainer = () => {
  const { loading: cat_loading, cat_error, data: cat_data } = useQuery(categoriesAllQuery)
  const { loading: prod_loading, prod_error, data: prod_data } = useQuery(productsAllQuery)

  if (cat_loading || prod_loading) return <p>Loading ... </p>
  const { categoriesAll } = cat_data
  const { productsAll } = prod_data
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <Tabs.TabPane tab="Products" key="1">
        <Products/>
      </Tabs.TabPane>
      <TabPane tab="Categories" key="2">
        <Categories/>
      </TabPane>
    </Tabs>
  )
}

export default TabsContainer