import { IResolvers } from '@graphql-tools/utils'
import { ObjectId } from 'mongodb'

import { Database, Todo } from '../../../lib/types'

export const todosResolvers: IResolvers = {
  Query: {
    getTodos: async (_root: undefined, _args, { db }: { db: Database }): Promise<Todo[]> => {
      return await db.todos.find({}).toArray()
    },
  },
  Mutation: {
    deleteTodo: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database },
    ): Promise<boolean> => {
      const deleteRes = await db.todos.findOneAndDelete({
        _id: new ObjectId(id),
      })

      if (!deleteRes.ok) {
        throw new Error('Failed to delete todo!')
      }

      return true
    },
    addTodo: async (
      _root: undefined,
      { todo: { title, content } }: { todo: Omit<Todo, '_id'> },
      { db }: { db: Database },
    ): Promise<ObjectId> => {
      const addRes = await db.todos.insertOne({
        _id: new ObjectId(),
        title,
        content,
      })

      if (!addRes.insertedId) {
        throw new Error('Failed to add todo!')
      }

      return addRes.insertedId
    },
  },

  Todo: {
    id: (todo: Todo): string => todo._id.toString(),
  },
}
