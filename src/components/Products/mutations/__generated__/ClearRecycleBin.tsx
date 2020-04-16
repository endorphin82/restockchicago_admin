import * as Types from '../../../../__generated__/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type ClearRecycleBinVariables = {};


export type ClearRecycleBin = (
  { __typename: 'Mutation' }
  & { clearRecycleBin?: Types.Maybe<{ __typename: 'Product' }> }
);


export const ClearRecycleBinDocument = gql`
    mutation ClearRecycleBin {
  clearRecycleBin {
    __typename
  }
}
    `;
export type ClearRecycleBinMutationFn = ApolloReactCommon.MutationFunction<ClearRecycleBin, ClearRecycleBinVariables>;

/**
 * __useClearRecycleBin__
 *
 * To run a mutation, you first call `useClearRecycleBin` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearRecycleBin` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearRecycleBin, { data, loading, error }] = useClearRecycleBin({
 *   variables: {
 *   },
 * });
 */
export function useClearRecycleBin(baseOptions?: ApolloReactHooks.MutationHookOptions<ClearRecycleBin, ClearRecycleBinVariables>) {
        return ApolloReactHooks.useMutation<ClearRecycleBin, ClearRecycleBinVariables>(ClearRecycleBinDocument, baseOptions);
      }
export type ClearRecycleBinHookResult = ReturnType<typeof useClearRecycleBin>;
export type ClearRecycleBinMutationResult = ApolloReactCommon.MutationResult<ClearRecycleBin>;
export type ClearRecycleBinMutationOptions = ApolloReactCommon.BaseMutationOptions<ClearRecycleBin, ClearRecycleBinVariables>;