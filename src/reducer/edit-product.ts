import { EDIT_PRODUCT, editProductAction, EditProductState } from "../actions/types"

const initialState:EditProductState = {
  product: {}
}

export default (state = initialState, action:editProductAction):EditProductState => {
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