import React, { useState } from "react"
import { Button, Tooltip } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import ProductsTable from "../ProductsTable"
import ProductsForm from "../ProductsForm"

const Products = () => {
  const [visible, visibleSet] = useState(false)
  const [prod, prodSet] = useState(false)

  const onClickHandler = () => {
    visibleSet(true)
  }
  return (
    <>
      <h1>Products</h1>
      <ProductsTable visibleSet={visibleSet} prodSet={prodSet}/>
      <ProductsForm  prod={prod} visible={visible} visibleSet={visibleSet}/>
      <Tooltip title="Add Product">
        <Button onClick={onClickHandler} type="dashed" shape="circle"
                style={{ position: "fixed", bottom: "50px", right: "50px", color: "#08c" }}
        ><PlusOutlined
          style={{ fontSize: "22px", color: "#08c" }}
        /></Button>
      </Tooltip>
    </>
  )
}

export default Products