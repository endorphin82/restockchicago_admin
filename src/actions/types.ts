export const EDIT_PRODUCT = "EDIT_PRODUCT"
export const CLEAR_EDIT_PRODUCT = "CLEAR_EDIT_PRODUCT"
export const EDIT_CATEGORY = "EDIT_CATEGORY"
export const CATEGORIES_LIST = "CATEGORIES_LIST"
export const SEARCH_CATEGORIES_LIST = "SEARCH_CATEGORIES_LIST"
export const SEARCH_NAME = "SEARCH_NAME"
export const IS_OPEN_EDIT_PRODUCT_MODAL = "IS_OPEN_EDIT_PRODUCT_MODAL"
export const IS_OPEN_ADD_PRODUCT_MODAL = "IS_OPEN_ADD_PRODUCT_MODAL"
export const IS_OPEN_EDIT_CATEGORY_MODAL = "IS_OPEN_EDIT_CATEGORY_MODAL"
export const IS_OPEN_ADD_CATEGORY_MODAL = "IS_OPEN_ADD_CATEGORY_MODAL"
export const CLEAR_EDIT_CATEGORY = "CLEAR_EDIT_CATEGORY"

export const REACT_APP_BASE_URL = String(process.env.REACT_APP_BASE_URL)
export const REACT_APP_NO_IMAGE_AVAILABLE = String(process.env.REACT_APP_NO_IMAGE_AVAILABLE)
export const REACT_APP_RECYCLE_BIN_ID = String(process.env.REACT_APP_RECYCLE_BIN_ID)
// export const REACT_APP_WITHOUT_CATEGORY_ID= String(process.env.REACT_APP_WITHOUT_CATEGORY_ID)

// export interface FieldData {
//   name: number;
//   key: number;
//   fieldKey: number;
// }
// export interface FormListProps {
//   name: string | number | (string | number)[];
//   children: (fields: FieldData[], operation: Operation) => React.ReactNode;
// }
// export interface Operation {
//   add: (defaultValue?: StoreValue) => void;
//   remove: (index: number) => void;
//   move: (from: number, to: number) => void;
// }


export interface CategoryRequireIcons {
  id?: String
  name?: String
  icons: String[]
}
