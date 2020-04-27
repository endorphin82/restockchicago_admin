import React, { useState } from "react"
import { Modal } from "antd"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"

import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"

import ProductsTableAntd from "./ProductsTableAntd"
import { useProductsAll } from "../Products/queries/__generated__/ProductsAll"
import { useUpdateProduct } from "../Products/mutations/__generated__/UpdateProduct"
import {
  ProductsByCategoryIdDocument,
  useProductsByCategoryId
} from "../Products/queries/__generated__/ProductsByCategoryId"
import { Product } from "../../__generated__/types"
import ProductsSearch from "../ProductsSearch"
import { ProductsByNameDocument, useProductsByName } from "../Products/queries/__generated__/ProductsByName"

interface PropsProductsTable {
  editProduct: (product: Product | undefined) => void
  setIsOpenEditProductModal: (isOpen: Boolean | undefined) => void
}

const ProductsTable: React.FC<PropsProductsTable> = ({ editProduct, setIsOpenEditProductModal }) => {
  const { loading, error, data: product_all_data } = useProductsAll()
  const [updateProduct] = useUpdateProduct(
    {
      refetchQueries: [{
        query: ProductsByCategoryIdDocument,
        variables: {
          id: REACT_APP_RECYCLE_BIN_ID
        }
      }]
    }
  )
  const [searchname, setSearchname] = useState("")
  const {loading: prod_loading, error: prod_error, data: prod_data } = useProductsByName(
    {
    variables: {
    name: searchname
  }
}
     // ({ name = "" }) => ({    variables: { name },  })
)
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState<Boolean>(false)
  const [productDeleted, setProductDeleted] = useState<Product | any>({})
  console.log("productDeleted", productDeleted)

  // if (loading) {
  //   return (<div>Loading...</div>)
  // }
  // if (error || !product_all_data) {
  //   return (<div>Error...</div>)
  // }
  // const { productsAll } = product_all_data
  //
  // // TODO:
  // // @ts-ignore
  // const productsAllWithoutRecycleBin = productsAll?.filter((prod: Product) => {
  //   return !prod?.categories?.includes(REACT_APP_RECYCLE_BIN_ID)
  // })

  if (loading) {
    return (<div>Loading...</div>)
  }
  if (prod_error || !prod_data) {
    return (<div>Error...</div>)
  }
  const { productsByName } = prod_data

  // TODO:
  // @ts-ignore
  const productsAllWithoutRecycleBin = productsByName?.filter((prod: Product) => {
    return !prod?.categories?.includes(REACT_APP_RECYCLE_BIN_ID)
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

  const handleOk = (productDeleted: Product | any): void => {
    const { id, name, price, categories, images, icon } = productDeleted

    categories.push(REACT_APP_RECYCLE_BIN_ID)

    updateProduct({
      variables: {
        id, name, price, categories, images, icon
      }
    }).then(m => console.log("updateProductMESSAGE:", m))
      .catch((e: Error) => console.log("updateProductERROR:", e))

    setIsVisualDeleteModal(false)
  }

  const handleCancel = () => {
    setIsVisualDeleteModal(false)
  }

  const handleChange = (e: any) => {
    //   setSearchname(e.target.value)
  }

  const handleSearch = (e: any) => {
    if (e.charCode === 13) {
      setSearchname(e.target.value)
    }
  }

  return (
    <>
      <ProductsSearch searchname={searchname} handleChange={handleChange} handleSearch={handleSearch}/>
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