import { useMutation, useQuery, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch('http://localhost:5001/api', {
      method: 'POST',
      ...{ headers: { 'My-Header': 'SomeValue', 'Content-type': 'application/json' } },
      body: JSON.stringify({ query, variables }),
    })

    const json = await res.json()

    if (json.errors) {
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}
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

export const TodoFragmentFragmentDoc = `
    fragment TodoFragment on Todo {
  id
  title
  content
}
    `
export const AddTodoDocument = `
    mutation AddTodo($todo: TodoInput!) {
  addTodo(todo: $todo)
}
    `
export const useAddTodoMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<AddTodoMutation, TError, AddTodoMutationVariables, TContext>,
) =>
  useMutation<AddTodoMutation, TError, AddTodoMutationVariables, TContext>(
    ['AddTodo'],
    (variables?: AddTodoMutationVariables) =>
      fetcher<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, variables)(),
    options,
  )
export const DeleteTodoDocument = `
    mutation DeleteTodo($id: ID!) {
  deleteTodo(id: $id)
}
    `
export const useDeleteTodoMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>,
) =>
  useMutation<DeleteTodoMutation, TError, DeleteTodoMutationVariables, TContext>(
    ['DeleteTodo'],
    (variables?: DeleteTodoMutationVariables) =>
      fetcher<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, variables)(),
    options,
  )
export const GetTodosDocument = `
    query GetTodos {
  getTodos {
    id
    title
  }
}
    `
export const useGetTodosQuery = <TData = GetTodosQuery, TError = unknown>(
  variables?: GetTodosQueryVariables,
  options?: UseQueryOptions<GetTodosQuery, TError, TData>,
) =>
  useQuery<GetTodosQuery, TError, TData>(
    variables === undefined ? ['GetTodos'] : ['GetTodos', variables],
    fetcher<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, variables),
    options,
  )
