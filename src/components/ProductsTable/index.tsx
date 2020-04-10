import React, { useState } from "react"
import { Modal } from "antd"
import { productsByCategoryIdQuery } from "../Products/query"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"
import { Product, ProductCatId } from "../../__generated__apollo__/types-query"
import { AllTasksResult, PropsProductsTable, PropsUpdateProduct } from "../Products/types"

import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"

import ProductsTableAntd from "./ProductsTableAntd"
import { useProductsAll } from "../Products/queries/__generated__/ProductsAll"
import { useUpdateProduct } from "../Products/mutations/__generated__/UpdateProduct"

const ProductsTable: React.FC<PropsProductsTable> = ({ editProduct, setIsOpenEditProductModal }) => {
  const { loading, error, data } = useProductsAll()
  const [updateProduct, {}] = useUpdateProduct(
    // {
    //   refetchQueries: [{
    //     query: productsByCategoryIdQuery,
    //     variables: {
    //       categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
    //     }
    //   }]
    // }
    {
  // @ts-ignore
      update(cache, { data: { updateProduct } }) {
        const { productsByCategoryId } = cache.readQuery<AllTasksResult>({
          query: productsByCategoryIdQuery, variables: {
            categoryId: REACT_APP_RECYCLE_BIN_ID
          }
        })!.allTasks
        cache.writeQuery({
          query: productsByCategoryIdQuery,
          variables: {
            categoryId: REACT_APP_RECYCLE_BIN_ID
          },
          data: { productsByCategoryId: productsByCategoryId.concat([updateProduct]) }
        })
      }
    }
  )
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState<Boolean>(false)
  // @ts-ignore
  const [productDeleted, setProductDeleted] = useState<Product>({})
  console.log("productDeleted", productDeleted)
  if (loading) {
    return (<div>Loading...</div>) // tslint:disable
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }
  const { productsAll } = data
  // @ts-ignore
  const productsAllWithoutRecycleBin = productsAll?.filter((prod: Product) => {
    return prod?.category?.id !== REACT_APP_RECYCLE_BIN_ID
  })

  console.log("productsAllWithoutRecycleBin", productsAllWithoutRecycleBin)
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
    const categoryId = String(REACT_APP_RECYCLE_BIN_ID)

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
        // @ts-ignore
        visible={isVisualDeleteModal}
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
}, null, { pure: false })(ProductsTable)