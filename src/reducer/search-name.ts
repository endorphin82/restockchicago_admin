import { ActionsTypes } from "../store"
import { SEARCH_NAME } from "../actions/types"

export type initialState = typeof initialState
const initialState = {
  searchName: ""
}

export default (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case SEARCH_NAME:
      return {
        ...state,
      // @ts-ignore
        searchName: action.payload
      }
    default:
      return state
  }
}