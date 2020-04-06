import {
  EDIT_PRODUCT,
  IS_OPEN_EDIT_MODAL,
  IS_OPEN_ADD_MODAL,
} from "./types"

export const editProduct = product => ({
  type: EDIT_PRODUCT,
  payload: product
})

export const setIsOpenEditProductModal = isOpen => ({
  type: IS_OPEN_EDIT_MODAL,
  payload: isOpen
})

export const setIsOpenAddProductModal = isOpen => ({
  type: IS_OPEN_ADD_MODAL,
  payload: isOpen
})
