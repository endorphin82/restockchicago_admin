import {
  Category,
  editProductAction,
  interfaceREACT_APP_RECYCLE_BIN_ID,
  Product, ProductCat,
  setIsOpenEditProductModalAction
} from "../../actions/types"

export interface PropsProductsTable {
  editProduct: (product: ProductCat) => void
  setIsOpenEditProductModal: (isOpen: Boolean) => void
}

export interface ResponseProductsAllQueryData {
  productsAll: ProductCat[] | any
}

export interface ResponseProductsByCategoryIdQueryData {
  productsByCategoryId: ProductsByCategoryIdQuery[]
}

export interface ProductsByCategoryIdQuery {
  id: String
  name: String
  price: Number
  category?: Category
  images?: String[]
  icon?: String
}

export interface InputProductsByCategoryIdQueryVars {
  categoryId: String | interfaceREACT_APP_RECYCLE_BIN_ID
}

export interface ResponseUpdateProductMutationData {
  updateProduct: InputUpdateProductMutationVars
}

export interface InputUpdateProductMutationVars {
  id?: String
  name?: String
  price?: Number
  categoryId?: String
  images?: String[]
  icon?: String
}