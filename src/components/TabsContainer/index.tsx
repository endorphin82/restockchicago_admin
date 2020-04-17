import React from "react"
import { Empty, Tabs } from "antd"
import Products from "../Products"
import { useProductsAll } from "../Products/queries/__generated__/ProductsAll"
import { useCategoriesAll } from "../Categories/queries/__generated__/CategoriesAll"
import { useProductsByCategoryId } from "../Products/queries/__generated__/ProductsByCategoryId"
import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"
import { useCategoryById } from "../Categories/queries/__generated__/CategoryById"
import Categories from "../Categories"

const { TabPane } = Tabs

function callback(key: any) {
  console.log(key)
}

const TabsContainer: React.FC = () => {
  const { loading: cat_loading, error: cat_error, data: cat_data } = useCategoriesAll()
  const { loading: prod_loading, error: prod_error, data: prod_data } = useProductsAll()
  const { loading: recycle_bin_prod_loading, error: recycle_bin_prod_error, data: recycle_bin_prod_data } = useProductsByCategoryId({
    variables: {
      id: REACT_APP_RECYCLE_BIN_ID
    }
  })
  const { loading: recycle_bin_cat_loading, error: recycle_bin_cat_error, data: recycle_bin_cat_data } = useCategoryById({
    variables: {
      _id: REACT_APP_RECYCLE_BIN_ID
    }
  })
  if (cat_loading || prod_loading || recycle_bin_prod_loading  || recycle_bin_cat_loading) {
    return (<div>Loading...</div>)
  }
  if (cat_error || prod_error  || recycle_bin_prod_error || recycle_bin_cat_error || !cat_data || !prod_data || !recycle_bin_prod_data || !recycle_bin_cat_data ) {
    return (<div>Error.</div>)
  }

  const { productsByCategoryId } = recycle_bin_prod_data
  const { categoryById } = recycle_bin_cat_data

  return (
    <Tabs defaultActiveKey="1" onChange={callback}>
      <Tabs.TabPane tab="Products" key="1">
        <Products/>
      </Tabs.TabPane>
      <TabPane tab="Categories" key="2">
        <Categories/>
      </TabPane>
      {/*<TabPane tab={*/}
      {/*  <span>*/}
      {/*    <RecycleBinIcon*/}
      {/*      // TODO:*/}
      {/*      // @ts-ignore*/}
      {/*      categoryById={categoryById} productsByCategoryId={productsByCategoryId}/>*/}
      {/*    Recycle bin*/}
      {/*  </span>*/}
      {/*} key="3">*/}
      {/*  {(productsByCategoryId?.length === 0) ? <Empty/> : <RecycleBin/>}*/}
      {/*</TabPane>*/}

    </Tabs>
  )
}

export default TabsContainer