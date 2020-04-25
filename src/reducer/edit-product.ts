import { ActionsTypes } from "../store"

export type initialState = typeof initialState
const initialState = {
  product: {}
}

export default (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case "EDIT_PRODUCT":
      return {
        ...state,
        product: action.payload
      }
    case "CLEAR_EDIT_PRODUCT":
      return {
        ...initialState
      }
    default:
      return state
  }
}