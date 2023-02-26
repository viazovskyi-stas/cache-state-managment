import React, { memo, useEffect } from 'react'
import TodoItem from './TodoItem'
import { Todo, useGetTodosQuery } from '../../gql/generated_react_query'

const Todos = () => {
  const { data, error, isLoading } = useGetTodosQuery()
  if (isLoading || !data) return <div>Loading...</div>

  return (
    <>
      {data && (
        <div>
          {data.getTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </>
  )
}

export default memo(Todos)
