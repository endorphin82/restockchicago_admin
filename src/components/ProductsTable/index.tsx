import React, { useEffect, useState } from "react"
import { Modal } from "antd"
import { connect } from "react-redux"
import { editProduct, setIsOpenEditProductModal } from "../../actions"
import { REACT_APP_RECYCLE_BIN_ID } from "../../actions/types"
import ProductsTableAntd from "./ProductsTableAntd"
import { useUpdateProduct } from "../Products/mutations/__generated__/UpdateProduct"
import { ProductsByCategoryIdDocument } from "../Products/queries/__generated__/ProductsByCategoryId"
import { Product, Category } from "../../__generated__/types"
import ProductsSearch from "../ProductsSearch"
import { useProductsByName } from "../Products/queries/__generated__/ProductsByName"
import ProductsSelectByCategories from "../ProductsSelectByCategories"
import { useProductsByNameAndCategoriesId } from "../Products/queries/__generated__/ProductsByNameAndCategoriesId"
import { useCategoriesAll } from "../Categories/queries/__generated__/CategoriesAll"
import Categories from "../Categories"
import { RootState } from "../../reducer"

interface PropsProductsTable {
  editProduct: (product: Product | undefined) => void
  setIsOpenEditProductModal: (isOpen: Boolean | undefined) => void
  categories: String[] | [] | any
}

const ProductsTable: React.FC<PropsProductsTable> = ({categories, editProduct, setIsOpenEditProductModal }) => {
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
  const [searchName, setSearchName] = useState("")
  const [searchCategories, setSearchCategories] = useState([])
  const { loading: prod_loading, error: prod_error, data: prod_data } = useProductsByNameAndCategoriesId(
    {
      variables: {
        name: searchName,
        categories: searchCategories
      }
    }
  )
  const { loading: cat_loading, error: cat_error, data: cat_data } = useCategoriesAll()
  const [isVisualDeleteModal, setIsVisualDeleteModal] = useState<Boolean>(false)
  const [productDeleted, setProductDeleted] = useState<Product | any>({})

  useEffect(() => {
    setSearchCategories(categories)
  }, [categories])

  console.log("productDeleted", productDeleted)

  if (prod_loading || cat_loading) {
    return (<div>Loading...</div>)
  }
  if (prod_error || !prod_data || cat_error || !cat_data) {
    return (<div>Error...</div>)
  }
  const { productsByNameAndCategoriesId } = prod_data

  // TODO:
  // @ts-ignore
  const productsAllWithoutRecycleBin = productsByNameAndCategoriesId?.filter((prod: Product) => {
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

  const handleSearch = (value: string) => {
    setSearchName(value)
  }

  const handleEnterSearch = (e: any) => {
    if (e.charCode === 13) {
      setSearchName(e.target.value)
    }
  }

  const handleChange = (values: string) => {
    if (values.length < 1) {
      // values = categories
      // console.log(`selected ${values}`)
      setSearchCategories(categories)
    }
    // setSearchCategories(values)
  }

  return (
    <>
      <ProductsSearch handleEnterSearch={handleEnterSearch}
                      handleSearch={handleSearch}/>
      <ProductsSelectByCategories handleChange={handleChange}/>
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

interface StateProps {
  categories: String[]
}

const mapStateToProps = (state: RootState): StateProps => ({
  categories: state.categories_list.categories
})
export default connect<typeof ProductsTable>(
// @ts-ignore
  mapStateToProps
  , {
  setIsOpenEditProductModal,
  editProduct
})(ProductsTable)