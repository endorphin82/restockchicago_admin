import {
  EDIT_PRODUCT,
  IS_OPEN_EDIT_MODAL,
  IS_OPEN_ADD_MODAL,
  editProductAction, setIsOpenEditProductModalAction, setIsOpenAddProductModalAction
} from "./types"
import { Product } from "../__generated__apollo__/types-query"

export const editProduct = (product: Product): editProductAction => ({
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
