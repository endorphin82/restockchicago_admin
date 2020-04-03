import React from "react"
import { Empty, Tabs } from "antd"
import Categories from "../Categories"
import Products from "../Products"
import { Query } from "react-apollo"
import { useQuery } from "@apollo/react-hooks"
import { categoriesAllQuery, categoryByIdQuery } from "../Categories/query"
import { productsAllQuery, productsByCategoryIdQuery } from "../Products/query"
import AndroidOutlined from "@ant-design/icons/lib/icons/AndroidOutlined"
import RecycleBinIcon from "../RecycleBinIcon"
import RecycleBin from "../RecycleBin"

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

const TabsContainer = () => {
  const { loading: cat_loading, cat_error, data: cat_data } = useQuery(categoriesAllQuery)
  const { loading: prod_loading, prod_error, data: prod_data } = useQuery(productsAllQuery)
  const { loading: recycle_bin_loading, recycle_bin_error, data: recycle_bin_data } = useQuery(productsByCategoryIdQuery, {
    variables: {
      categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
    }
  })
  const { loading: recycle_bin_prod_loading, recycle_bin_prod_error, data: recycle_bin_prod_data } = useQuery(productsByCategoryIdQuery, {
    variables: {
      categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
    }
  })

  const { loading: recycle_bin_cat_loading, recycle_bin_cat_error, data: recycle_bin_cat_data } = useQuery(categoryByIdQuery, {
    variables: {
      id: process.env.REACT_APP_RECYCLE_BIN_ID
    }
  })

  if (cat_loading || prod_loading || recycle_bin_prod_loading || recycle_bin_cat_loading) return <p>Loading ... </p>
  const { categoriesAll } = cat_data
  const { productsAll } = prod_data
  const { productsByCategoryId } = recycle_bin_prod_data
  const { categoryById } = recycle_bin_cat_data
  console.log("categoryById", categoryById)
  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <Tabs.TabPane tab="Products" key="1">
        <Products/>
      </Tabs.TabPane>
      <TabPane tab="Categories" key="2">
        <Categories/>
      </TabPane>
      <TabPane tab={
        <span>
          <RecycleBinIcon categoryById={categoryById} productsByCategoryId={productsByCategoryId}/>
          Recycle bin
        </span>
      }
               key="3">

        {(productsByCategoryId.length === 0) ?<Empty/>:<RecycleBin />}
      </TabPane>

    </Tabs>
  )
}

export default TabsContainer