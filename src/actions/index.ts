import {
  CLEAR_EDIT_PRODUCT,
  EDIT_PRODUCT,
  editProductAction, IS_OPEN_ADD_CATEGORY_MODAL,
  IS_OPEN_ADD_PRODUCT_MODAL,
  IS_OPEN_EDIT_CATEGORY_MODAL,
  IS_OPEN_EDIT_PRODUCT_MODAL,
  setIsOpenAddCategoryModalAction,
  setIsOpenAddProductModalAction,
  setIsOpenEditCategoryModalAction,
  setIsOpenEditProductModalAction
} from "./types"
import { Product } from "../__generated__apollo__/types-query"

export const editProduct = (product: Product): editProductAction => ({
  type: EDIT_PRODUCT,
  payload: product
})

export const clearEditProduct = () => ({
  type: CLEAR_EDIT_PRODUCT
})

export const setIsOpenEditProductModal = (isOpen: Boolean): setIsOpenEditProductModalAction => ({
  type: IS_OPEN_EDIT_PRODUCT_MODAL,
  payload: isOpen
})

export const setIsOpenAddProductModal = (isOpen: Boolean): setIsOpenAddProductModalAction => ({
  type: IS_OPEN_ADD_PRODUCT_MODAL,
  payload: isOpen
})

export const setIsOpenEditCategoryModal = (isOpen: Boolean): setIsOpenEditCategoryModalAction => ({
  type: IS_OPEN_EDIT_CATEGORY_MODAL,
  payload: isOpen
})

export const setIsOpenAddCategoryModal = (isOpen: Boolean): setIsOpenAddCategoryModalAction => ({
  type: IS_OPEN_ADD_CATEGORY_MODAL,
  payload: isOpen
})
