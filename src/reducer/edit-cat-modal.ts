import { ActionsTypes } from "../store"

export type initialState = typeof initialState
const initialState = {
  isOpen: false
}

export default (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case "IS_OPEN_EDIT_CATEGORY_MODAL":
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}