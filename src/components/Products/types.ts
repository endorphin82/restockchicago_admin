import {
  Category,
  editProductAction,
  interfaceREACT_APP_RECYCLE_BIN_ID,
  setIsOpenEditProductModalAction
} from "../../actions/types"
import { Product, ProductCatId } from "../../__generated__/types-query"

export interface PropsProductsTable {
  editProduct: (product: Product | ProductCatId | undefined) => void
  setIsOpenEditProductModal: (isOpen: Boolean | undefined) => void
}

export interface PropsUpdateProduct {
  variables: (product: Product | ProductCatId) => void
}

export interface ResponseProductsAllQueryData {
  productsAll: Product[] | any
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