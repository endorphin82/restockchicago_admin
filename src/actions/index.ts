import {
  CLEAR_EDIT_CATEGORY,
  CLEAR_EDIT_PRODUCT,
  EDIT_CATEGORY,
  EDIT_PRODUCT,
  editCategoryAction,
  editProductAction,
  IS_OPEN_ADD_CATEGORY_MODAL,
  IS_OPEN_ADD_PRODUCT_MODAL,
  IS_OPEN_EDIT_CATEGORY_MODAL,
  IS_OPEN_EDIT_PRODUCT_MODAL,
  setIsOpenAddCategoryModalAction,
  setIsOpenAddProductModalAction,
  setIsOpenEditCategoryModalAction,
  setIsOpenEditProductModalAction
} from "./types"
import { Category, Product } from "../__generated__/types"

export const editProduct = (product: Product): editProductAction => ({
  type: EDIT_PRODUCT,
  payload: product
})

export const clearEditProduct = () => ({
  type: CLEAR_EDIT_PRODUCT
})

export const editCategory = (category: Category): editCategoryAction => ({
  type: EDIT_CATEGORY,
  payload: category
})

export const clearEditCategory = () => ({
  type: CLEAR_EDIT_CATEGORY
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
