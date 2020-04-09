import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Button, Modal, Skeleton, Table, Tooltip } from "antd"
import { productsAllQuery, productsByCategoryIdQuery } from "../Products/query"
import { deleteProductMutation, updateProductMutation } from "../Products/mutations"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"
import { DeleteOutlined } from "@ant-design/icons"
import { priceToDollars } from "../../utils"
import {
  InputProductsByCategoryIdQueryVars, InputUpdateProductMutationVars,
  PropsProductsTable,
  ResponseProductsAllQueryData, ResponseProductsByCategoryIdQueryData

} from "../Products/types"
import { Category, editProductAction, Product, ProductCat, REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"
import { ColumnProps } from "antd/es/table"
import ProductsTableAntd from "./ProductsTableAntd"

const ProductsTable: React.FC<PropsProductsTable> = ({ editProduct, setIsOpenEditProductModal }): any => {
  const { loading, error, data } = useQuery<ResponseProductsAllQueryData>(productsAllQuery)
  const [updateProduct, {}] = useMutation<InputUpdateProductMutationVars | any, InputUpdateProductMutationVars>(updateProductMutation
    // {
    //   refetchQueries: [{
    //     query: productsByCategoryIdQuery,
    //     variables: {
    //       categoryId: process.env.REACT_APP_RECYCLE_BIN_ID
    //     }
    //   }]
    // }
    // {
    //   update(cache, { data: { updateProduct } }) {
    //     const { productsByCategoryId } = cache.readQuery<ResponseProductsByCategoryIdQueryData, InputProductsByCategoryIdQueryVars>({
    //       query: productsByCategoryIdQuery, variables: {
    //         categoryId: REACT_APP_RECYCLE_BIN_ID
    //       }
    //     })
    //     cache.writeQuery({
    //       query: productsByCategoryIdQuery,
    //       variables: {
    //         categoryId: REACT_APP_RECYCLE_BIN_ID
    //       },
    //       data: { productsByCategoryId: productsByCategoryId.concat([updateProduct]) }
    //     })
    //   }
    // }
  )
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState(false)
  const [productDeleted, setProductDeleted] = useState<ProductCat | Product>({})
  console.log("productDeleted", productDeleted)
  /* tslint:disable */
  if (loading) {
// tslint:disable-next-line
    return (<div>Loading...</div>) // tslint:disable
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }
  /* tslint:enable */
  const { productsAll } = data
  const productsAllWithoutRecycleBin = productsAll.filter((prod: ProductCat) => {
    // const { category } = prod
    return prod.category?.id !== REACT_APP_RECYCLE_BIN_ID
  })

  console.log("productsAllWithoutRecycleBin", productsAllWithoutRecycleBin)
  const handleEdit = (id: String): void => {
    const prod = productsAllWithoutRecycleBin.find((prod: ProductCat) => prod.id === id)
    editProduct(prod)
    setIsOpenEditProductModal(true)
  }

  const handleDelete = (id: String): void => {
    setIsVisualDeleteModal(true)
    setProductDeleted(productsAllWithoutRecycleBin.find((prod: ProductCat) => prod.id === id))
  }

  const handleOk = (productDeleted: ProductCat): void => {
    console.log("productDeleted.id", productDeleted.id)
    const { id, name, price, images, icon } = productDeleted
    updateProduct({
      variables: {
        id, name, price, categoryId: process.env.REACT_APP_RECYCLE_BIN_ID, images, icon
      }

    }).then((m: any) => console.log("updateProductMESSAGE:", m))
      .catch((e: any) => console.log("updateProductERROR:", e))

    setIsVisualDeleteModal(false)
  }

  const handleCancel = () => {
    setIsVisualDeleteModal(false)
  }

  return (
    <>
      <ProductsTableAntd productsAllWithoutRecycleBinProp={productsAllWithoutRecycleBin} handleEditProp={handleEdit} handleDeleteProp={handleDelete}/>
      <Modal
        title="Delete product in recycle bin?"
        visible={isVisualDeleteModal}
        onOk={() => handleOk(productDeleted)}
        onCancel={handleCancel}
      >
        <p>{productDeleted.name}</p>
      </Modal>
    </>
  )
}

export default connect(null, { setIsOpenEditProductModal, editProduct }, null, { pure: false }
)(ProductsTable)