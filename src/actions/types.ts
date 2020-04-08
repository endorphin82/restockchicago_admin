export const IS_OPEN_ADD_MODAL = "IS_OPEN_ADD_MODAL"
export const IS_OPEN_EDIT_MODAL = "IS_OPEN_EDIT_MODAL"
export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const REACT_APP_RECYCLE_BIN_ID = process.env.REACT_APP_RECYCLE_BIN_ID

export interface interfaceREACT_APP_RECYCLE_BIN_ID {
  REACT_APP_RECYCLE_BIN_ID?: typeof REACT_APP_RECYCLE_BIN_ID | String | any
}

export interface AddProductModalState {
  isOpen: Boolean
}

export interface Product {
  id?: String
  name?: String
  categoryId?: String
  price?: Number
  images?: String[]
  icon?: String
}

export interface ProductCat {
  id?: String
  name?: String
  category?: {
    id?: String
    name?: String
    icons?: String[]
  }
  price?: Number
  images?: String[]
  icon?: String
}

export interface Category {
  id?: String
  name?: String
  icons?: String[]
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
  product: ProductCat
}

export interface editProductAction {
  type: typeof EDIT_PRODUCT
  payload: ProductCat
}
