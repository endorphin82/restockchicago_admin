/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productsAll
// ====================================================

export interface productsAll_productsAll_category {
  __typename: "Category";
  id: string | null;
  name: string;
  icons: (string | null)[] | null;
}

export interface productsAll_productsAll {
  __typename: "Product";
  id: string | null;
  name: string;
  price: number;
  images: (string | null)[] | null;
  icon: string | null;
  category: productsAll_productsAll_category | null;
}

export interface productsAll {
  productsAll: (productsAll_productsAll | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productsByCategoryId
// ====================================================

export interface productsByCategoryId_productsByCategoryId_category {
  __typename: "Category";
  id: string | null;
  name: string;
  icons: (string | null)[] | null;
}

export interface productsByCategoryId_productsByCategoryId {
  __typename: "Product";
  id: string | null;
  name: string;
  price: number;
  images: (string | null)[] | null;
  icon: string | null;
  category: productsByCategoryId_productsByCategoryId_category | null;
}

export interface productsByCategoryId {
  productsByCategoryId: (productsByCategoryId_productsByCategoryId | null)[] | null;
}

export interface productsByCategoryIdVariables {
  categoryId: string;
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
