import * as Types from "../../../../__generated__/types"

import gql from "graphql-tag"
import * as ApolloReactCommon from "@apollo/client"
import * as ApolloReactHooks from "@apollo/react-hooks"

export type ProductsAllVariables = {};


export type ProductsAll = (
  { __typename: "Query" }
  & {
  productsAll?: Types.Maybe<Array<Types.Maybe<(
    { __typename: "Product" }
    & Pick<Types.Product, "id" | "name" | "price" | "images" | "icon" | "categories">
    )>>>
}
  );


export const ProductsAllDocument = gql`
    query ProductsAll {
        productsAll {
            id
            name
            price
            images
            icon
            categories
        }
    }
`

/**
 * __useProductsAll__
 *
 * To run a query within a React component, call `useProductsAll` and pass it any options that fit your needs.
 * When your component renders, `useProductsAll` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsAll({
 *   variables: {
 *   },
 * });
 */
export function useProductsAll(baseOptions?: ApolloReactHooks.QueryHookOptions<ProductsAll, ProductsAllVariables>) {
  return ApolloReactHooks.useQuery<ProductsAll, ProductsAllVariables>(ProductsAllDocument, baseOptions)
}

export function useProductsAllLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProductsAll, ProductsAllVariables>) {
  return ApolloReactHooks.useLazyQuery<ProductsAll, ProductsAllVariables>(ProductsAllDocument, baseOptions)
}

export type ProductsAllHookResult = ReturnType<typeof useProductsAll>;
export type ProductsAllLazyQueryHookResult = ReturnType<typeof useProductsAllLazyQuery>;
export type ProductsAllQueryResult = ApolloReactCommon.QueryResult<ProductsAll, ProductsAllVariables>;