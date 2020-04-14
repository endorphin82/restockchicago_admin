import { combineReducers } from "redux"
import edit_product_modal from "./edit-prod-modal"
import add_product_modal from "./add-prod-modal"
import edit_cat_modal from "./edit-cat-modal"
import add_cat_modal from "./add-cat-modal"
import edit_product from "./edit-product"

export const rootReducer = combineReducers({
  add_cat_modal,
  edit_cat_modal,
  edit_product_modal,
  add_product_modal,
  edit_product
})

export type RootState = ReturnType<typeof rootReducer>