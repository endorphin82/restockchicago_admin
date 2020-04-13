import React, { useState } from "react"
import { Form, Modal } from "antd"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"
import { Product, ProductCatId } from "../../__generated__apollo__/types-query"
import { PropsProductsTable } from "../Products/types"

import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"

import ProductsTableAntd from "./ProductsTableAntd"
import { useProductsAll } from "../Products/queries/__generated__/ProductsAll"
import { useUpdateProduct } from "../Products/mutations/__generated__/UpdateProduct"
import { ProductsByCategoryIdDocument } from "../Products/queries/__generated__/ProductsByCategoryId"

const ProductsTable: React.FC<PropsProductsTable> = ({ editProduct, setIsOpenEditProductModal }) => {
  const { loading, error, data } = useProductsAll()
  const [updateProduct, {}] = useUpdateProduct(
    {
      refetchQueries: [{
        query: ProductsByCategoryIdDocument,
        variables: {
          categoryId: REACT_APP_RECYCLE_BIN_ID
        }
      }]
    }
  )
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState<Boolean>(false)
  const [productDeleted, setProductDeleted] = useState<Product | any>({})
  console.log("productDeleted", productDeleted)
  if (loading) {
    return (<div>Loading...</div>)
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }
  const { productsAll } = data
  // TODO:
  // @ts-ignore
  const productsAllWithoutRecycleBin = productsAll?.filter((prod: Product) => {
    return prod?.category?.id !== REACT_APP_RECYCLE_BIN_ID
  })

  const handleEdit = (id: String): void => {
    const prod = productsAllWithoutRecycleBin?.find((prod: Product) => prod.id === id)
    editProduct(prod)
    setIsOpenEditProductModal(true)
  }

  const handleDelete = (id: String): void => {
    setIsVisualDeleteModal(true)
    setProductDeleted(productsAllWithoutRecycleBin.find((prod: Product) => prod.id === id))
  }

  const handleOk = (productDeleted: ProductCatId | any): void => {
    const { id, name, price, images, icon } = productDeleted
    const categoryId = REACT_APP_RECYCLE_BIN_ID

    updateProduct({
      variables: {
        id, name, price, categoryId, images, icon
      }
    }).then(m => console.log("updateProductMESSAGE:", m))
      .catch((e: Error) => console.log("updateProductERROR:", e))

    setIsVisualDeleteModal(false)
  }

  const handleCancel = () => {
    setIsVisualDeleteModal(false)
  }

  return (
    <>
      <ProductsTableAntd productsAllWithoutRecycleBinProp={productsAllWithoutRecycleBin}
                         handleEditProp={handleEdit}
                         handleDeleteProp={handleDelete}/>
      <Modal
        title="Delete product in recycle bin?"
        visible={Boolean(isVisualDeleteModal)}
        onOk={() => handleOk(productDeleted)}
        onCancel={handleCancel}
      >
        <p>{productDeleted.id}</p>
      </Modal>
    </>
  )
}

export default connect<typeof ProductsTable>(null, {
  setIsOpenEditProductModal,
  editProduct
})(ProductsTable)