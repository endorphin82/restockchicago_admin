import {
  EDIT_PRODUCT,
  IS_OPEN_EDIT_MODAL,
  IS_OPEN_ADD_MODAL,
  Product, editProductAction, setIsOpenEditProductModalAction, setIsOpenAddProductModalAction, ProductCat
} from "./types"

export const editProduct = (product: ProductCat): editProductAction => ({
  type: EDIT_PRODUCT,
  payload: product
})

export const setIsOpenEditProductModal = (isOpen: Boolean): setIsOpenEditProductModalAction => ({
  type: IS_OPEN_EDIT_MODAL,
  payload: isOpen
})

export const setIsOpenAddProductModal = (isOpen: Boolean): setIsOpenAddProductModalAction => ({
  type: IS_OPEN_ADD_MODAL,
  payload: isOpen
})
