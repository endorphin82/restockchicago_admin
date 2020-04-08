import { EditProductModalState, IS_OPEN_EDIT_MODAL, setIsOpenEditProductModalAction } from "../actions/types"

const initialState: EditProductModalState = {
  isOpen: false
}

export default (state = initialState, action: setIsOpenEditProductModalAction): EditProductModalState => {
  switch (action.type) {
    case IS_OPEN_EDIT_MODAL:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}