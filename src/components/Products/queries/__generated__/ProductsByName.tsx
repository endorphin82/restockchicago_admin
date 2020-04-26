import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type ProductsByNameVariables = {
  name: Types.Scalars['String'];
};


export type ProductsByName = (
  { __typename: 'Query' }
  & { productsByName?: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Product' }
    & Pick<Types.Product, 'id' | 'name' | 'price' | 'images' | 'icon' | 'categories'>
  )>>> }
);


export const ProductsByNameDocument = gql`
    query ProductsByName($name: String!) {
  productsByName(name: $name) {
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
 * __useProductsByName__
 *
 * To run a query within a React component, call `useProductsByName` and pass it any options that fit your needs.
 * When your component renders, `useProductsByName` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsByName({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useProductsByName(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsByName, ProductsByNameVariables>) {
        return ApolloReactHooks.useQuery<ProductsByName, ProductsByNameVariables>(ProductsByNameDocument, baseOptions);
      }
export function useProductsByNameLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsByName, ProductsByNameVariables>) {
          return ApolloReactHooks.useLazyQuery<ProductsByName, ProductsByNameVariables>(ProductsByNameDocument, baseOptions);
        }
export type ProductsByNameHookResult = ReturnType<typeof useProductsByName>;
export type ProductsByNameLazyQueryHookResult = ReturnType<typeof useProductsByNameLazyQuery>;
export type ProductsByNameQueryResult = ApolloReactCommon.QueryResult<ProductsByName, ProductsByNameVariables>;