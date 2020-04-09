import { EDIT_PRODUCT, editProductAction, EditProductStateOrEmpty } from "../actions/types"

const initialState: EditProductStateOrEmpty = {
  product: {}
}

export default (state = initialState, action: editProductAction): EditProductStateOrEmpty => {
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