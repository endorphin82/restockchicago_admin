import { ActionsTypes } from "../store"
import { SEARCH_CATEGORIES_LIST } from "../actions/types"

export type initialState = typeof initialState
const initialState = {
  searchCategories: []
}

export default (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case SEARCH_CATEGORIES_LIST:
      // @ts-ignore
      return { searchCategories: [...action.payload] }
    default:
      return state
  }
}