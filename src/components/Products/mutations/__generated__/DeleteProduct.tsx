import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type DeleteProductVariables = {
  id: Types.Scalars['ID'];
};


export type DeleteProduct = (
  { __typename: 'Mutation' }
  & { deleteProduct?: Types.Maybe<(
    { __typename: 'Product' }
    & Pick<Types.Product, 'id' | 'name' | 'price' | 'images' | 'icon' | 'categories'>
  )> }
);


export const DeleteProductDocument = gql`
    mutation DeleteProduct($id: ID!) {
  deleteProduct(id: $id) {
    id
    name
    price
    images
    icon
    categories
  }
}
    `;
export type DeleteProductMutationFn = ApolloReactCommon.MutationFunction<DeleteProduct, DeleteProductVariables>;

/**
 * __useDeleteProduct__
 *
 * To run a mutation, you first call `useDeleteProduct` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProduct` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProduct, { data, loading, error }] = useDeleteProduct({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProduct(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteProduct, DeleteProductVariables>) {
        return ApolloReactHooks.useMutation<DeleteProduct, DeleteProductVariables>(DeleteProductDocument, baseOptions);
      }
export type DeleteProductHookResult = ReturnType<typeof useDeleteProduct>;
export type DeleteProductMutationResult = ApolloReactCommon.MutationResult<DeleteProduct>;
export type DeleteProductMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteProduct, DeleteProductVariables>;