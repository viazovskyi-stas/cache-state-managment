import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import * as ApolloReactHoc from '@apollo/client/react/hoc'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  addTodo?: Maybe<Scalars['ID']>
  deleteTodo?: Maybe<Scalars['Boolean']>
}

export type MutationAddTodoArgs = {
  todo: TodoInput
}

export type MutationDeleteTodoArgs = {
  id: Scalars['ID']
}

export type Query = {
  __typename?: 'Query'
  getTodos: Array<Todo>
}

export type Todo = {
  __typename?: 'Todo'
  content?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title: Scalars['String']
}

export type TodoInput = {
  title: Scalars['String']
}

export type TodoFragmentFragment = {
  __typename?: 'Todo'
  id: string
  title: string
  content?: string | null
}

export type AddTodoMutationVariables = Exact<{
  todo: TodoInput
}>

export type AddTodoMutation = { __typename?: 'Mutation'; addTodo?: string | null }

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type DeleteTodoMutation = { __typename?: 'Mutation'; deleteTodo?: boolean | null }

export type GetTodosQueryVariables = Exact<{ [key: string]: never }>

export type GetTodosQuery = {
  __typename?: 'Query'
  getTodos: Array<{ __typename?: 'Todo'; id: string; title: string }>
}

export const TodoFragmentFragmentDoc = gql`
  fragment TodoFragment on Todo {
    id
    title
    content
  }
`
export const AddTodoDocument = gql`
  mutation AddTodo($todo: TodoInput!) {
    addTodo(todo: $todo)
  }
`
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>
export type AddTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>
} & TChildProps
export function withAddTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AddTodoMutation,
    AddTodoMutationVariables,
    AddTodoProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    AddTodoMutation,
    AddTodoMutationVariables,
    AddTodoProps<TChildProps, TDataName>
  >(AddTodoDocument, {
    alias: 'addTodo',
    ...operationOptions,
  })
}

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useAddTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options)
}
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<
  AddTodoMutation,
  AddTodoMutationVariables
>
export const DeleteTodoDocument = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`
export type DeleteTodoMutationFn = Apollo.MutationFunction<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>
export type DeleteTodoProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>
} & TChildProps
export function withDeleteTodo<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DeleteTodoMutation,
    DeleteTodoMutationVariables,
    DeleteTodoProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withMutation<
    TProps,
    DeleteTodoMutation,
    DeleteTodoMutationVariables,
    DeleteTodoProps<TChildProps, TDataName>
  >(DeleteTodoDocument, {
    alias: 'deleteTodo',
    ...operationOptions,
  })
}

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(
    DeleteTodoDocument,
    options,
  )
}
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<
  DeleteTodoMutation,
  DeleteTodoMutationVariables
>
export const GetTodosDocument = gql`
  query GetTodos {
    getTodos {
      id
      title
    }
  }
`
export type GetTodosProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GetTodosQuery, GetTodosQueryVariables>
} & TChildProps
export function withGetTodos<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GetTodosQuery,
    GetTodosQueryVariables,
    GetTodosProps<TChildProps, TDataName>
  >,
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GetTodosQuery,
    GetTodosQueryVariables,
    GetTodosProps<TChildProps, TDataName>
  >(GetTodosDocument, {
    alias: 'getTodos',
    ...operationOptions,
  })
}

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodosQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options)
}
export function useGetTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options)
}
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>
