import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    content: String
  }

  input TodoInput {
    title: String!
  }

  type Query {
    getTodos: [Todo!]!
  }

  type Mutation {
    addTodo(todo: TodoInput!): ID
    deleteTodo(id: ID!): Boolean
  }
`
