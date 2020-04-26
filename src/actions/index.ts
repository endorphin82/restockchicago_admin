import { Category, Product } from "../__generated__/types"

export const editProduct = (product: Product) => ({
  type: "EDIT_PRODUCT",
  payload: product
}as const)

export const clearEditProduct = () => ({
  type: "CLEAR_EDIT_PRODUCT"
}as const)

export const editCategory = (category: Category) => ({
  type: "EDIT_CATEGORY",
  payload: category
}as const)

export const setIsOpenEditProductModal = (isOpen: boolean) => ({
  type: 'IS_OPEN_EDIT_PRODUCT_MODAL',
  payload: isOpen
}as const)

export const setIsOpenAddProductModal = (isOpen: boolean) => ({
  type: "IS_OPEN_ADD_PRODUCT_MODAL",
  payload: isOpen
}as const)

export const setIsOpenEditCategoryModal = (isOpen: boolean) => ({
  type: "IS_OPEN_EDIT_CATEGORY_MODAL",
  payload: isOpen
}as const)

export const setIsOpenAddCategoryModal = (isOpen: boolean) => ({
  type: "IS_OPEN_ADD_CATEGORY_MODAL",
  payload: isOpen
})

export const clearEditCategory = () => ({
  type: "CLEAR_EDIT_CATEGORY"
}as const)