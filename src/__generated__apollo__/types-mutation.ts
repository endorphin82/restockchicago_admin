/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addProduct
// ====================================================

export interface addProduct_addProduct_category {
  __typename: "Category";
  id: string | null;
  name: string;
}

export interface addProduct_addProduct {
  __typename: "Product";
  id: string | null;
  name: string;
  price: number;
  images: (string | null)[] | null;
  icon: string | null;
  category: addProduct_addProduct_category | null;
}

export interface addProduct {
  addProduct: addProduct_addProduct | null;
}

export interface addProductVariables {
  name: string;
  price: number;
  categoryId: string;
  images?: (string | null)[] | null;
  icon?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateProduct
// ====================================================

export interface updateProduct_updateProduct_category {
  __typename: "Category";
  id: string | null;
  name: string;
  icons: (string | null)[] | null;
}

export interface updateProduct_updateProduct {
  __typename: "Product";
  id: string | null;
  name: string;
  price: number;
  images: (string | null)[] | null;
  icon: string | null;
  category: updateProduct_updateProduct_category | null;
}

export interface IupdateProduct {
  updateProduct: updateProduct_updateProduct | null;
}

export interface updateProductVariables {
  id: string;
  name: string;
  price: number;
  categoryId: string;
  images?: (string | null)[] | null;
  icon?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: deleteProduct
// ====================================================

export interface deleteProduct_deleteProduct_category {
  __typename: "Category";
  id: string | null;
  name: string;
}

export interface deleteProduct_deleteProduct {
  __typename: "Product";
  id: string | null;
  name: string;
  price: number;
  images: (string | null)[] | null;
  icon: string | null;
  category: deleteProduct_deleteProduct_category | null;
}

export interface IdeleteProduct {
  /**
   * Description deleteProduct
   */
  deleteProduct: deleteProduct_deleteProduct | null;
}

export interface deleteProductVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: clearRecycleBin
// ====================================================

export interface clearRecycleBin_clearRecycleBin {
  __typename: "Product";
}

export interface IclearRecycleBin {
  clearRecycleBin: clearRecycleBin_clearRecycleBin | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
