import React, { useState } from "react"
import { Button, Tooltip } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import ProductsTable from "../ProductsTable"
import ProductsForm from "../ProductsForm"
import { connect } from "react-redux"
import { editProduct, setIsOpenModal } from "../../actions"

const Products = ({ setIsOpenModal }) => {

  const onClickHandler = () => {
    editProduct({})
    setIsOpenModal(true)
  }
  return (
    <>
      <h1>Products</h1>
      <ProductsTable/>
      <ProductsForm/>
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

export default connect(null, { setIsOpenModal, editProduct }, null, { pure: false }
)(Products)