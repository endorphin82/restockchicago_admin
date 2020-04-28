import { ActionsTypes } from "../store"
import { CATEGORIES_LIST } from "../actions/types"

export type initialState = typeof initialState
const initialState = {
  categories: []
}

export default (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case CATEGORIES_LIST:
      // @ts-ignore
      return { categories: [...action.payload] }
    default:
      return state
  }
}