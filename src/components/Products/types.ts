import {
  Category,
  EditProductState,
  REACT_APP_RECYCLE_BIN_ID
} from "../../actions/types"
import {
  IproductsByCategoryId,
  Product,
  ProductCatId
} from "../../__generated__apollo__/types-query"
import { MutationAddProductArgs } from "../../__generated__/types"
import { ProductsAllDocument, ProductsAll } from "./queries/__generated__/ProductsAll"

// export interface AllTasksResult {
//   allTasks: any;  // TODO: Put correct type here
// }

export interface IProductsAll {
  productsAll: ProductsAll  // TODO: Put correct type here
}

export interface PropsProductsTable {
  editProduct: (product: Product | undefined) => void
  setIsOpenEditProductModal: (isOpen: Boolean | undefined) => void
}





export interface PropsProducts {
  editProduct: (product: EditProductState) => void
  setIsOpenAddProductModal: (isOpen: Boolean) => void
}

export interface PropsProductsTableAntd {
  handleEditProp: (id: String) => void
  handleDeleteProp: (id: String) => void
  productsAllWithoutRecycleBinProp: IproductsByCategoryId
}

export interface PropsUpdateProduct {
  variables: Product | ProductCatId
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
  categoryId: String | typeof REACT_APP_RECYCLE_BIN_ID
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