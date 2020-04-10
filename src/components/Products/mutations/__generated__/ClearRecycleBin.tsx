import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type clearRecycleBinVariables = {};


export type clearRecycleBin = (
  { __typename: 'Mutation' }
  & { clearRecycleBin?: Types.Maybe<{ __typename: 'Product' }> }
);


export const clearRecycleBinDocument = gql`
    mutation clearRecycleBin {
  clearRecycleBin {
    __typename
  }
}
    `;
export type clearRecycleBinMutationFn = ApolloReactCommon.MutationFunction<clearRecycleBin, clearRecycleBinVariables>;

/**
 * __useclearRecycleBin__
 *
 * To run a mutation, you first call `useclearRecycleBin` within a React component and pass it any options that fit your needs.
 * When your component renders, `useclearRecycleBin` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearRecycleBin, { data, loading, error }] = useclearRecycleBin({
 *   variables: {
 *   },
 * });
 */
export function useclearRecycleBin(baseOptions?: ApolloReactHooks.MutationHookOptions<clearRecycleBin, clearRecycleBinVariables>) {
        return ApolloReactHooks.useMutation<clearRecycleBin, clearRecycleBinVariables>(clearRecycleBinDocument, baseOptions);
      }
export type clearRecycleBinHookResult = ReturnType<typeof useclearRecycleBin>;
export type clearRecycleBinMutationResult = ApolloReactCommon.MutationResult<clearRecycleBin>;
export type clearRecycleBinMutationOptions = ApolloReactCommon.BaseMutationOptions<clearRecycleBin, clearRecycleBinVariables>;