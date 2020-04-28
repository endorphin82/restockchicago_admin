import { ActionsTypes } from "../store"
import { IS_OPEN_ADD_CATEGORY_MODAL } from "../actions/types"

export type initialState = typeof initialState
const initialState = {
  isOpen: false
}

export default (state: initialState  = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case IS_OPEN_ADD_CATEGORY_MODAL:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}