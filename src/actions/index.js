import { EDIT_PRODUCT, IS_OPEN_MODAL } from "./types"

export const editProduct = product => ({
  type: EDIT_PRODUCT,
  payload: product
})

export const setIsOpenModal = isOpen => ({
  type: IS_OPEN_MODAL,
  payload: isOpen
})