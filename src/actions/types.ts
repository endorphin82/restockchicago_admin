export const IS_OPEN_ADD_MODAL = "IS_OPEN_ADD_MODAL"
export const IS_OPEN_EDIT_MODAL = "IS_OPEN_EDIT_MODAL"
export const EDIT_PRODUCT = "EDIT_PRODUCT"

export interface AddProductModalState {
  isOpen: Boolean
}

export interface Product {
  name?: String
  categoryId?: String
  price?: Number
  images?: [String]
  icon?: String
}

export interface setIsOpenAddProductModalAction {
  type: typeof IS_OPEN_ADD_MODAL
  payload: Boolean
}

export interface EditProductModalState {
  isOpen: Boolean
}

export interface setIsOpenEditProductModalAction {
  type: typeof IS_OPEN_EDIT_MODAL
  payload: Boolean
}

export interface EditProductState {
  product: Product
}

export interface editProductAction {
  type: typeof EDIT_PRODUCT
  payload: Product
}
