import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type AddCategoryVariables = {
  name: Types.Scalars['String'];
  images?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
  icons?: Types.Maybe<Array<Types.Maybe<Types.Scalars['String']>>>;
};


export type AddCategory = (
  { __typename: 'Mutation' }
  & { addCategory?: Types.Maybe<(
    { __typename: 'Category' }
    & Pick<Types.Category, 'id' | 'name' | 'images' | 'icons'>
  )> }
);


export const AddCategoryDocument = gql`
    mutation AddCategory($name: String!, $images: [String], $icons: [String]) {
  addCategory(name: $name, images: $images, icons: $icons) {
    id
    name
    images
    icons
  }
}
    `;
export type AddCategoryMutationFn = ApolloReactCommon.MutationFunction<AddCategory, AddCategoryVariables>;

/**
 * __useAddCategory__
 *
 * To run a mutation, you first call `useAddCategory` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategory` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategory, { data, loading, error }] = useAddCategory({
 *   variables: {
 *      name: // value for 'name'
 *      images: // value for 'images'
 *      icons: // value for 'icons'
 *   },
 * });
 */
export function useAddCategory(baseOptions?: ApolloReactHooks.MutationHookOptions<AddCategory, AddCategoryVariables>) {
        return ApolloReactHooks.useMutation<AddCategory, AddCategoryVariables>(AddCategoryDocument, baseOptions);
      }
export type AddCategoryHookResult = ReturnType<typeof useAddCategory>;
export type AddCategoryMutationResult = ApolloReactCommon.MutationResult<AddCategory>;
export type AddCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<AddCategory, AddCategoryVariables>;