import { AddCategoryModalState, IS_OPEN_ADD_CATEGORY_MODAL, setIsOpenAddCategoryModalAction } from "../actions/types"

const initialState: AddCategoryModalState = {
  isOpen: false
}

export default (state = initialState, action: setIsOpenAddCategoryModalAction): AddCategoryModalState => {
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