import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CategoryByIdVariables = {
  _id?: Types.Maybe<Types.Scalars['String']>;
};


export type CategoryById = (
  { __typename: 'Query' }
  & { categoryById?: Types.Maybe<(
    { __typename: 'Category' }
    & Pick<Types.Category, '_id' | 'name' | 'icons' | 'images' | 'parent'>
  )> }
);


export const CategoryByIdDocument = gql`
    query CategoryById($_id: String) {
  categoryById(_id: $_id) {
    _id
    name
    icons
    images
    parent
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
 *      _id: // value for '_id'
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