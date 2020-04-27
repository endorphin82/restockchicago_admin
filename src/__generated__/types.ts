export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
   __typename?: 'Category';
  _id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
  /** Description deleteProduct */
  deleteProduct?: Maybe<Product>;
  addProductsWithoutCategoryInWithoutCategory?: Maybe<Product>;
  clearRecycleBin?: Maybe<Product>;
  /** Delete Category with products */
  deleteCascadeCategoryWithProductsById?: Maybe<Category>;
  addCategory?: Maybe<Category>;
  updateCategory?: Maybe<Category>;
};


export type MutationAddProductArgs = {
  name: Scalars['String'];
  price: Scalars['Float'];
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCascadeCategoryWithProductsByIdArgs = {
  _id: Scalars['String'];
};


export type MutationAddCategoryArgs = {
  _id: Scalars['String'];
  name: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationUpdateCategoryArgs = {
  _id: Scalars['String'];
  name: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  icons?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Product = {
   __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  productById?: Maybe<Product>;
  productsByName?: Maybe<Array<Maybe<Product>>>;
  productsByNameAndCategoriesId?: Maybe<Array<Maybe<Product>>>;
  categoryById?: Maybe<Category>;
  categoriesByParentId?: Maybe<Array<Maybe<Category>>>;
  productsAll?: Maybe<Array<Maybe<Product>>>;
  productsByCategoryId?: Maybe<Array<Maybe<Product>>>;
  categoryByName?: Maybe<Array<Maybe<Category>>>;
  categoriesAll?: Maybe<Array<Maybe<Category>>>;
  categoriesByListNames?: Maybe<Array<Maybe<Category>>>;
};


export type QueryProductByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryProductsByNameArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryProductsByNameAndCategoriesIdArgs = {
  name?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryCategoryByIdArgs = {
  _id?: Maybe<Scalars['String']>;
};


export type QueryCategoriesByParentIdArgs = {
  parent?: Maybe<Scalars['String']>;
};


export type QueryProductsByCategoryIdArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryCategoryByNameArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryCategoriesByListNamesArgs = {
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
};
