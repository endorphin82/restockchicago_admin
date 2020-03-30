import { IS_OPEN_MODAL } from "../actions/types"

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_OPEN_MODAL:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state
  }
}