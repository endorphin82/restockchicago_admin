import React, { useState } from "react"
import { useMutation, useQuery } from "@apollo/react-hooks"
import { Modal } from "antd"
import { productsAllQuery } from "../Products/query"
import { updateProductMutation } from "../Products/mutations"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"
import {
  IproductsAll, IproductsByCategoryId,
  Product,
  productsByCategoryId_productsByCategoryId_category, productsByCategoryIdVariables
} from "../../__generated__/types-query"

import { updateProduct_updateProduct, updateProductVariables } from "../../__generated__/types-mutation"
import {
  PropsProductsTable, PropsUpdateProduct
} from "../Products/types"

import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"

import ProductsTableAntd from "./ProductsTableAntd"

const ProductsTable: React.FC<PropsProductsTable> = ({ editProduct, setIsOpenEditProductModal }): any => {
  const { loading, error, data } = useQuery<IproductsAll>(productsAllQuery)
  const [updateProduct, {}] = useMutation<{ updateProduct: updateProduct_updateProduct }, { variables: updateProductVariables }>(updateProductMutation
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
    //     const { productsByCategoryId } = cache.readQuery<{ query: IproductsByCategoryId }, { variables: typeof REACT_APP_RECYCLE_BIN_ID}>({
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
  const [productDeleted, setProductDeleted] = useState<Product | any>({})
  console.log("productDeleted", productDeleted)
  /* tslint:disable */
  if (loading) {
// tslint:disable-next-line
    return (<div>Loading...</div>) // tslint:disable
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }
  // @ts-ignore
  const { productsAll } = data
  const productsAllWithoutRecycleBin = productsAll.filter((prod: Product) => {
    // const { category } = prod
    return prod.category?.id !== REACT_APP_RECYCLE_BIN_ID
  })

  console.log("productsAllWithoutRecycleBin", productsAllWithoutRecycleBin)
  const handleEdit = (id: String): void => {
    const prod = productsAllWithoutRecycleBin.find((prod: Product) => prod.id === id)
    editProduct(prod)
    setIsOpenEditProductModal(true)
  }

  const handleDelete = (id: String): void => {
    setIsVisualDeleteModal(true)
    setProductDeleted(productsAllWithoutRecycleBin.find((prod: Product) => prod.id === id))
  }

  const handleOk = (productDeleted: Product): void => {
    // console.log("productDeleted.id", productDeleted.id)
    const { id, name, price, images, icon } = productDeleted

    // @ts-ignore
    updateProduct<PropsUpdateProduct>({
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
      <ProductsTableAntd productsAllWithoutRecycleBinProp={productsAllWithoutRecycleBin} handleEditProp={handleEdit}
                         handleDeleteProp={handleDelete}/>
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

// @ts-ignore
export default connect(null, { setIsOpenEditProductModal, editProduct }, null, { pure: false })(ProductsTable)