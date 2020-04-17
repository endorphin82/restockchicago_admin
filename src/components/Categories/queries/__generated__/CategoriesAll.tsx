import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CategoriesAllVariables = {};


export type CategoriesAll = (
  { __typename: 'Query' }
  & { categoriesAll?: Types.Maybe<Array<Types.Maybe<(
    { __typename: 'Category' }
    & Pick<Types.Category, '_id' | 'name' | 'icons' | 'images' | 'parent'>
  )>>> }
);


export const CategoriesAllDocument = gql`
    query CategoriesAll {
  categoriesAll {
    _id
    name
    icons
    images
    parent
  }
}
    `;

/**
 * __useCategoriesAll__
 *
 * To run a query within a React component, call `useCategoriesAll` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesAll` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesAll({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesAll(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoriesAll, CategoriesAllVariables>) {
        return ApolloReactHooks.useQuery<CategoriesAll, CategoriesAllVariables>(CategoriesAllDocument, baseOptions);
      }
export function useCategoriesAllLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoriesAll, CategoriesAllVariables>) {
          return ApolloReactHooks.useLazyQuery<CategoriesAll, CategoriesAllVariables>(CategoriesAllDocument, baseOptions);
        }
export type CategoriesAllHookResult = ReturnType<typeof useCategoriesAll>;
export type CategoriesAllLazyQueryHookResult = ReturnType<typeof useCategoriesAllLazyQuery>;
export type CategoriesAllQueryResult = ApolloReactCommon.QueryResult<CategoriesAll, CategoriesAllVariables>;