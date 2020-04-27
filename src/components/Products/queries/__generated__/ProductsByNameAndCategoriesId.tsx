import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type ProductsByNameAndCategoriesIdVariables = {
  name: Types.Scalars['String'];
  categories?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
};


export type ProductsByNameAndCategoriesId = (
  { __typename: 'Query' }
  & { productsByNameAndCategoriesId?: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Product' }
    & Pick<Types.Product, 'id' | 'name' | 'price' | 'images' | 'icon' | 'categories'>
  )>>> }
);


export const ProductsByNameAndCategoriesIdDocument = gql`
    query ProductsByNameAndCategoriesId($name: String!, $categories: [String]) {
  productsByNameAndCategoriesId(name: $name, categories: $categories) {
    id
    name
    price
    images
    icon
    categories
  }
}
    `;

/**
 * __useProductsByNameAndCategoriesId__
 *
 * To run a query within a React component, call `useProductsByNameAndCategoriesId` and pass it any options that fit your needs.
 * When your component renders, `useProductsByNameAndCategoriesId` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByNameAndCategoriesId({
 *   variables: {
 *      name: // value for 'name'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useProductsByNameAndCategoriesId(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsByNameAndCategoriesId, ProductsByNameAndCategoriesIdVariables>) {
        return ApolloReactHooks.useQuery<ProductsByNameAndCategoriesId, ProductsByNameAndCategoriesIdVariables>(ProductsByNameAndCategoriesIdDocument, baseOptions);
      }
export function useProductsByNameAndCategoriesIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsByNameAndCategoriesId, ProductsByNameAndCategoriesIdVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductsByNameAndCategoriesId, ProductsByNameAndCategoriesIdVariables>(ProductsByNameAndCategoriesIdDocument, baseOptions);
        }
export type ProductsByNameAndCategoriesIdHookResult = ReturnType<typeof useProductsByNameAndCategoriesId>;
export type ProductsByNameAndCategoriesIdLazyQueryHookResult = ReturnType<typeof useProductsByNameAndCategoriesIdLazyQuery>;
export type ProductsByNameAndCategoriesIdQueryResult = ApolloReactCommon.QueryResult<ProductsByNameAndCategoriesId, ProductsByNameAndCategoriesIdVariables>;