export const REACT_APP_RECYCLE_BIN_ID = String(process.env.REACT_APP_RECYCLE_BIN_ID)
// export const REACT_APP_WITHOUT_CATEGORY_ID= String(process.env.REACT_APP_WITHOUT_CATEGORY_ID)
export const REACT_APP_NO_IMAGE_AVAILABLE = String(process.env.REACT_APP_NO_IMAGE_AVAILABLE)
export const REACT_APP_BASE_URL = String(process.env.REACT_APP_BASE_URL)

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
