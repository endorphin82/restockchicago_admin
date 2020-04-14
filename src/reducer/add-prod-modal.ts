import { AddProductModalState, setIsOpenAddProductModalAction, IS_OPEN_ADD_PRODUCT_MODAL } from "../actions/types"

const initialState: AddProductModalState = {
  isOpen: false
}

export default (state = initialState, action: setIsOpenAddProductModalAction): AddProductModalState => {
  switch (action.type) {
    case IS_OPEN_ADD_PRODUCT_MODAL:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}