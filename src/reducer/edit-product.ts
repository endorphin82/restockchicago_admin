import { CLEAR_EDIT_PRODUCT, EDIT_PRODUCT, editProductAction, EditProductState } from "../actions/types"

const initialState: EditProductState = {
  product: {}
}

export default (state = initialState, action: editProductAction): EditProductState => {
  switch (action.type) {
    case EDIT_PRODUCT:
      return {
        ...state,
        product: action.payload
      }
      case CLEAR_EDIT_PRODUCT:
      return {
        ...initialState
      }
    default:
      return state
  }
}