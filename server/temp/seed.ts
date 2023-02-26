import 'dotenv/config'
import { ObjectId } from 'mongodb'
import { connectDatabase } from '../src/database'
import { Todo } from '../src/lib/types'

const seed = async () => {
  try {
    console.log('[seed]: running...')

    const db = await connectDatabase()

    const todos: Todo[] = [
      {
        _id: new ObjectId(),
        title: 'Eat healthy food',
        content: 'More vegetables man',
      },
      {
        _id: new ObjectId(),
        title: 'Do more exercises',
        content: '',
      },
      {
        _id: new ObjectId(),
        title: 'More travel',
        content: 'Like anywhere, man',
      },
    ]

    for (const todo of todos) {
      await db.todos.insertOne(todo)
    }

    console.log('[seed]: successful to seed database...')
  } catch (error) {
    throw new Error('failed to seed database !!!')
  }
}

seed()
