import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type DeleteCascadeCategoryWithProductsByIdVariables = {
  _id: Types.Scalars['String'];
};


export type DeleteCascadeCategoryWithProductsById = (
  { __typename: 'Mutation' }
  & { deleteCascadeCategoryWithProductsById?: Types.Maybe<{ __typename: 'Category' }> }
);


export const DeleteCascadeCategoryWithProductsByIdDocument = gql`
    mutation DeleteCascadeCategoryWithProductsById($_id: String!) {
  deleteCascadeCategoryWithProductsById(_id: $_id) {
    __typename
  }
}
    `;
export type DeleteCascadeCategoryWithProductsByIdMutationFn = ApolloReactCommon.MutationFunction<DeleteCascadeCategoryWithProductsById, DeleteCascadeCategoryWithProductsByIdVariables>;

/**
 * __useDeleteCascadeCategoryWithProductsById__
 *
 * To run a mutation, you first call `useDeleteCascadeCategoryWithProductsById` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCascadeCategoryWithProductsById` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCascadeCategoryWithProductsById, { data, loading, error }] = useDeleteCascadeCategoryWithProductsById({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useDeleteCascadeCategoryWithProductsById(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteCascadeCategoryWithProductsById, DeleteCascadeCategoryWithProductsByIdVariables>) {
        return ApolloReactHooks.useMutation<DeleteCascadeCategoryWithProductsById, DeleteCascadeCategoryWithProductsByIdVariables>(DeleteCascadeCategoryWithProductsByIdDocument, baseOptions);
      }
export type DeleteCascadeCategoryWithProductsByIdHookResult = ReturnType<typeof useDeleteCascadeCategoryWithProductsById>;
export type DeleteCascadeCategoryWithProductsByIdMutationResult = ApolloReactCommon.MutationResult<DeleteCascadeCategoryWithProductsById>;
export type DeleteCascadeCategoryWithProductsByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteCascadeCategoryWithProductsById, DeleteCascadeCategoryWithProductsByIdVariables>;