import { CLEAR_EDIT_CATEGORY, EDIT_CATEGORY, editCategoryAction, EditCategoryState } from "../actions/types"

const initialState: EditCategoryState = {
  category: {}
}

export default (state = initialState, action: editCategoryAction): EditCategoryState => {
  switch (action.type) {
    case EDIT_CATEGORY:
      return {
        ...state,
        category: action.payload
      }
      case CLEAR_EDIT_CATEGORY:
      return {
        ...initialState
      }
    default:
      return state
  }
}