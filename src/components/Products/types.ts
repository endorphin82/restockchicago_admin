import {
  Category,
  editProductAction, EditProductState,
  interfaceREACT_APP_RECYCLE_BIN_ID,
  setIsOpenEditProductModalAction
} from "../../actions/types"
import {
  IproductsByCategoryId,
  Product,
  ProductCatId,
  productsByCategoryId_productsByCategoryId
} from "../../__generated__apollo__/types-query"
import { MutationAddProductArgs } from "../../__generated__/types"

export interface AllTasksResult {
  allTasks: any;  // TODO: Put correct type here
}

export interface PropsProductsTable {
  editProduct: (product: Product | ProductCatId | undefined) => void
  setIsOpenEditProductModal: (isOpen: Boolean | undefined) => void
}

export interface PropsRecycleBinIcon {
  categoryById: ProductCatId
  productsByCategoryId: IproductsByCategoryId
}

export interface PropsRecycleBinProductsTable {
  editProduct: (product: MutationAddProductArgs) => void
  edited_product: MutationAddProductArgs
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