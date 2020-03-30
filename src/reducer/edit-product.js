import { EDIT_PRODUCT } from "../actions/types"

const initialState = {
  product: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state
  }
}