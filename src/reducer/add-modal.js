import { IS_OPEN_ADD_MODAL } from "../actions/types"

const initialState = {
  isOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_OPEN_ADD_MODAL:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}