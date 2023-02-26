import { Collection, ObjectId } from 'mongodb'

export interface Todo {
  _id: ObjectId
  title: string
  content: string | null
}

export interface Database {
  todos: Collection<Todo>
}
