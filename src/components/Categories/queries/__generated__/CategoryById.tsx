import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CategoryByIdVariables = {
  id?: Types.Maybe<Types.Scalars['ID']>;
};


export type CategoryById = (
  { __typename: 'Query' }
  & { categoryById?: Types.Maybe<(
    { __typename: 'Category' }
    & Pick<Types.Category, 'id' | 'name' | 'icons'>
  )> }
);


export const CategoryByIdDocument = gql`
    query CategoryById($id: ID) {
  categoryById(id: $id) {
    id
    name
    icons
  }
}
    `;

/**
 * __useCategoryById__
 *
 * To run a query within a React component, call `useCategoryById` and pass it any options that fit your needs.
 * When your component renders, `useCategoryById` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryById({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryById(baseOptions?: ApolloReactHooks.QueryHookOptions<CategoryById, CategoryByIdVariables>) {
        return ApolloReactHooks.useQuery<CategoryById, CategoryByIdVariables>(CategoryByIdDocument, baseOptions);
      }
export function useCategoryByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CategoryById, CategoryByIdVariables>) {
          return ApolloReactHooks.useLazyQuery<CategoryById, CategoryByIdVariables>(CategoryByIdDocument, baseOptions);
        }
export type CategoryByIdHookResult = ReturnType<typeof useCategoryById>;
export type CategoryByIdLazyQueryHookResult = ReturnType<typeof useCategoryByIdLazyQuery>;
export type CategoryByIdQueryResult = ApolloReactCommon.QueryResult<CategoryById, CategoryByIdVariables>;