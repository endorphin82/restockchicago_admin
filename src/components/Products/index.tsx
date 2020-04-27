import React from "react"
import { Button, Tooltip } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import ProductAddForm from "../ProductAddForm"
import { connect } from "react-redux"
import { clearEditProduct, setIsOpenAddProductModal } from "../../actions"
import ProductsTable from "../ProductsTable"
import ProductEditForm from "../ProductEditForm"

interface PropsProducts {
  clearEditProduct: () => void
  setIsOpenAddProductModal: (isOpen: Boolean) => void
}

const Products: React.FC<PropsProducts> = ({ setIsOpenAddProductModal, clearEditProduct }) => {

  const onClickHandler = () => {
    clearEditProduct()
    setIsOpenAddProductModal(true)
  }

  return (
    <>
      <h1>Products</h1>
      <ProductsTable/>
      <ProductEditForm/>
      <ProductAddForm/>
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

export default connect<typeof Products>(null, { setIsOpenAddProductModal, clearEditProduct })(Products)