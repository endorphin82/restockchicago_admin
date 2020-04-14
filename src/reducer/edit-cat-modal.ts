import { EditCategoryModalState, IS_OPEN_EDIT_CATEGORY_MODAL, setIsOpenEditCategoryModalAction } from "../actions/types"

const initialState: EditCategoryModalState = {
  isOpen: false
}

export default (state = initialState, action: setIsOpenEditCategoryModalAction): EditCategoryModalState => {
  switch (action.type) {
    case IS_OPEN_EDIT_CATEGORY_MODAL:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}