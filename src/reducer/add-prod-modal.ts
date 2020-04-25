import { ActionsTypes } from "../store"

export type initialState = typeof initialState
const initialState = {
  isOpen: false
}

export default (state = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case "IS_OPEN_ADD_PRODUCT_MODAL":
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}