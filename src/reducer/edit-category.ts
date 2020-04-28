import { ActionsTypes } from "../store"
import { CLEAR_EDIT_CATEGORY, EDIT_CATEGORY } from "../actions/types"

export type initialState = typeof initialState
const initialState = {
  category: {}
}

export default (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case EDIT_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
    case CLEAR_EDIT_CATEGORY:
      return {
        ...initialState
      }
    default:
      return state
  }
}