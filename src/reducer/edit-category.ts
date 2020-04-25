import { ActionsTypes } from "../store"

export type initialState = typeof initialState
const initialState = {
  category: {}
}

export default (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case "EDIT_CATEGORY":
      return {
        ...state,
        category: action.payload
      }
    case "CLEAR_EDIT_CATEGORY":
      return {
        ...initialState
      }
    default:
      return state
  }
}