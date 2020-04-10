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
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  icons?: Maybe<Array<Maybe<Scalars['String']>>>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  category?: Maybe<Array<Maybe<Product>>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addProduct?: Maybe<Product>;
  updateProduct?: Maybe<Product>;
  /** Description deleteProduct */
  deleteProduct?: Maybe<Product>;
  addProductsWithoutCategoryInRecycleBin?: Maybe<Product>;
  clearRecycleBin?: Maybe<Product>;
};


export type MutationAddProductArgs = {
  name: Scalars['String'];
  price: Scalars['Float'];
  categoryId: Scalars['ID'];
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Float'];
  categoryId: Scalars['ID'];
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};

export type Product = {
   __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
};

export type Query = {
   __typename?: 'Query';
  productById?: Maybe<Product>;
  productByName?: Maybe<Array<Maybe<Product>>>;
  categoryById?: Maybe<Category>;
  productsAll?: Maybe<Array<Maybe<Product>>>;
  productsByCategoryId?: Maybe<Array<Maybe<Product>>>;
  categoryByName?: Maybe<Array<Maybe<Category>>>;
  categoriesAll?: Maybe<Array<Maybe<Category>>>;
  categoriesByListNames?: Maybe<Array<Maybe<Category>>>;
};


export type QueryProductByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryProductByNameArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryCategoryByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryProductsByCategoryIdArgs = {
  categoryId?: Maybe<Scalars['ID']>;
};


export type QueryCategoryByNameArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryCategoriesByListNamesArgs = {
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
};
