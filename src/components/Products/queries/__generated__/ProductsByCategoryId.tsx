import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type ProductsByCategoryIdVariables = {
  id: Types.Scalars['String'];
};


export type ProductsByCategoryId = (
  { __typename: 'Query' }
  & { productsByCategoryId?: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Product' }
    & Pick<Types.Product, 'id' | 'name' | 'price' | 'images' | 'icon' | 'categories'>
  )>>> }
);


export const ProductsByCategoryIdDocument = gql`
    query ProductsByCategoryId($id: String!) {
  productsByCategoryId(id: $id) {
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
 * __useProductsByCategoryId__
 *
 * To run a query within a React component, call `useProductsByCategoryId` and pass it any options that fit your needs.
 * When your component renders, `useProductsByCategoryId` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByCategoryId({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductsByCategoryId(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsByCategoryId, ProductsByCategoryIdVariables>) {
        return ApolloReactHooks.useQuery<ProductsByCategoryId, ProductsByCategoryIdVariables>(ProductsByCategoryIdDocument, baseOptions);
      }
export function useProductsByCategoryIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsByCategoryId, ProductsByCategoryIdVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductsByCategoryId, ProductsByCategoryIdVariables>(ProductsByCategoryIdDocument, baseOptions);
        }
export type ProductsByCategoryIdHookResult = ReturnType<typeof useProductsByCategoryId>;
export type ProductsByCategoryIdLazyQueryHookResult = ReturnType<typeof useProductsByCategoryIdLazyQuery>;
export type ProductsByCategoryIdQueryResult = ApolloReactCommon.QueryResult<ProductsByCategoryId, ProductsByCategoryIdVariables>;