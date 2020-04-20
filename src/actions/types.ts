import { Product, Category } from "../__generated__/types"

export const IS_OPEN_ADD_PRODUCT_MODAL = "IS_OPEN_ADD_PRODUCT_MODAL"
export const IS_OPEN_EDIT_PRODUCT_MODAL = "IS_OPEN_EDIT_PRODUCT_MODAL"
export const IS_OPEN_EDIT_CATEGORY_MODAL = "IS_OPEN_EDIT_CATEGORY_MODAL"
export const IS_OPEN_ADD_CATEGORY_MODAL = "IS_OPEN_ADD_CATEGORY_MODAL"
export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const EDIT_CATEGORY = "EDIT_CATEGORY"
export const CLEAR_EDIT_PRODUCT = "CLEAR_EDIT_PRODUCT"
export const CLEAR_EDIT_CATEGORY = "CLEAR_EDIT_CATEGORY"
export const REACT_APP_RECYCLE_BIN_ID = String(process.env.REACT_APP_RECYCLE_BIN_ID)
// export const REACT_APP_WITHOUT_CATEGORY_ID= String(process.env.REACT_APP_WITHOUT_CATEGORY_ID)
export const REACT_APP_NO_IMAGE_AVAILABLE = String(process.env.REACT_APP_NO_IMAGE_AVAILABLE)
export const REACT_APP_BASE_URL = String(process.env.REACT_APP_BASE_URL)

// export interface FieldData {
//   name: number;
//   key: number;
//   fieldKey: number;
// }
// export interface FormListProps {
//   name: string | number | (string | number)[];
//   children: (fields: FieldData[], operation: Operation) => React.ReactNode;
// }
// export interface Operation {
//   add: (defaultValue?: StoreValue) => void;
//   remove: (index: number) => void;
//   move: (from: number, to: number) => void;
// }

export interface AddProductModalState {
  isOpen: Boolean
}

export interface mstpAddProductModalState {
  isOpenAddProductModal: Boolean
}

export interface CategoryRequireIcons {
  id?: String
  name?: String
  icons: String[]
}

export interface setIsOpenAddProductModalAction {
  type: typeof IS_OPEN_ADD_PRODUCT_MODAL
  payload: Boolean
}

export interface EditProductModalState {
  isOpen: Boolean
}

export interface setIsOpenAddCategoryModalAction {
  type: typeof IS_OPEN_ADD_CATEGORY_MODAL
  payload: Boolean
}
export interface setIsOpenEditCategoryModalAction {
  type: typeof IS_OPEN_EDIT_CATEGORY_MODAL
  payload: Boolean
}

export interface AddCategoryModalState {
  isOpen: Boolean
}

export interface EditCategoryModalState {
  isOpen: Boolean
}

export interface setIsOpenEditProductModalAction {
  type: typeof IS_OPEN_EDIT_PRODUCT_MODAL
  payload: Boolean
}

export interface EditProductState {
  product?: Product | {}
}

export interface EditCategoryState {
  category?: Category | {}
}

export interface editProductAction {
  type: typeof EDIT_PRODUCT | typeof CLEAR_EDIT_PRODUCT
  payload?: Product | {}
}

export interface editCategoryAction {
  type: typeof EDIT_CATEGORY | typeof CLEAR_EDIT_CATEGORY
  payload?: Product | {}
}
