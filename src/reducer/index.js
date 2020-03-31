import { combineReducers } from "redux"
import edit_product_modal from "./edit-modal"
import add_product_modal from "./add-modal"
import edit_product from "./edit-product"

export default combineReducers({ edit_product_modal, add_product_modal, edit_product })