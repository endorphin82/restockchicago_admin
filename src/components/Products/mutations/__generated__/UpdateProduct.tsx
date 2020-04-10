import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type UpdateProductVariables = {
  id: Types.Scalars['ID'];
  name: Types.Scalars['String'];
  price: Types.Scalars['Float'];
  categoryId: Types.Scalars['ID'];
  images?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
  icon?: Types.Maybe<Types.Scalars['String']>;
};


export type UpdateProduct = (
  { __typename: 'Mutation' }
  & { updateProduct?: Types.Maybe<(
    { __typename: 'Product' }
    & Pick<Types.Product, 'id' | 'name' | 'price' | 'images' | 'icon'>
    & { category?: Types.Maybe<(
      { __typename: 'Category' }
      & Pick<Types.Category, 'id' | 'name' | 'icons'>
    )> }
  )> }
);


export const UpdateProductDocument = gql`
    mutation UpdateProduct($id: ID!, $name: String!, $price: Float!, $categoryId: ID!, $images: [String], $icon: String) {
  updateProduct(id: $id, name: $name, price: $price, categoryId: $categoryId, images: $images, icon: $icon) {
    id
    name
    price
    images
    icon
    category {
      id
      name
      icons
    }
  }
}
    `;
export type UpdateProductMutationFn = ApolloReactCommon.MutationFunction<UpdateProduct, UpdateProductVariables>;

/**
 * __useUpdateProduct__
 *
 * To run a mutation, you first call `useUpdateProduct` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProduct` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProduct, { data, loading, error }] = useUpdateProduct({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      categoryId: // value for 'categoryId'
 *      images: // value for 'images'
 *      icon: // value for 'icon'
 *   },
 * });
 */
export function useUpdateProduct(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateProduct, UpdateProductVariables>) {
        return ApolloReactHooks.useMutation<UpdateProduct, UpdateProductVariables>(UpdateProductDocument, baseOptions);
      }
export type UpdateProductHookResult = ReturnType<typeof useUpdateProduct>;
export type UpdateProductMutationResult = ApolloReactCommon.MutationResult<UpdateProduct>;
export type UpdateProductMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateProduct, UpdateProductVariables>;