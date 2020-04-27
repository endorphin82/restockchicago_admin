import { ActionsTypes } from "../store"

export type initialState = typeof initialState
const initialState = {
  categories: []
}

export default (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case "CATEGORIES_LIST":
      // @ts-ignore
      return { categories: [...action.payload] }
    default:
      return state
  }
}