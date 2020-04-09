/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IproductsAll
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

export interface IproductsAll {
  IproductsAll: (productsAll_productsAll | null)[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productsByCategoryId
// ====================================================

// my type
export interface Product {
  __typename: "Product";
  id: string | null;
  name: string;
  price: number;
  images: (string | null)[] | null;
  icon: string | null;
  category: productsByCategoryId_productsByCategoryId_category | null;
}

// my type
export interface ProductCatId {
  __typename: "ProductCatId";
  id: string | null;
  name: string;
  price: number;
  images: (string | null)[] | null;
  icon: string | null;
  categoryId: string | null;
}

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

export interface IproductsByCategoryId {
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
/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoriesAll
// ====================================================

export interface categoriesAll_categoriesAll {
  __typename: "Category";
  id: string | null;
  name: string;
  icons: (string | null)[] | null;
}

export interface IcategoriesAll {
  // categoriesAll: (categoriesAll_categoriesAll | null)[] | null;
  categoriesAll: (categoriesAll_categoriesAll)[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryById
// ====================================================

export interface categoryById_categoryById {
  __typename: "Category";
  id: string | null;
  name: string;
  icons: (string | null)[] | null;
}

export interface categoryById {
  categoryById: categoryById_categoryById | null;
}

export interface categoryByIdVariables {
  id?: string | null;
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
