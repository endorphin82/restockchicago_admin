import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type AddProductVariables = {
  name: Types.Scalars['String'];
  price: Types.Scalars['Float'];
  categories?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
  images?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
  icon?: Types.Maybe<Types.Scalars['String']>;
};


export type AddProduct = (
  { __typename: 'Mutation' }
  & { addProduct?: Types.Maybe<(
    { __typename: 'Product' }
    & Pick<Types.Product, 'id' | 'name' | 'price' | 'images' | 'icon' | 'categories'>
  )> }
);


export const AddProductDocument = gql`
    mutation AddProduct($name: String!, $price: Float!, $categories: [String], $images: [String], $icon: String) {
  addProduct(name: $name, price: $price, categories: $categories, images: $images, icon: $icon) {
    id
    name
    price
    images
    icon
    categories
  }
}
    `;
export type AddProductMutationFn = ApolloReactCommon.MutationFunction<AddProduct, AddProductVariables>;

/**
 * __useAddProduct__
 *
 * To run a mutation, you first call `useAddProduct` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProduct` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProduct, { data, loading, error }] = useAddProduct({
 *   variables: {
 *      name: // value for 'name'
 *      price: // value for 'price'
 *      categories: // value for 'categories'
 *      images: // value for 'images'
 *      icon: // value for 'icon'
 *   },
 * });
 */
export function useAddProduct(baseOptions?: ApolloReactHooks.MutationHookOptions<AddProduct, AddProductVariables>) {
        return ApolloReactHooks.useMutation<AddProduct, AddProductVariables>(AddProductDocument, baseOptions);
      }
export type AddProductHookResult = ReturnType<typeof useAddProduct>;
export type AddProductMutationResult = ApolloReactCommon.MutationResult<AddProduct>;
export type AddProductMutationOptions = ApolloReactCommon.BaseMutationOptions<AddProduct, AddProductVariables>;