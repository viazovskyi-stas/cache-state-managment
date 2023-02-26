import React, { memo, useEffect } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import TodoItem from './TodoItem'
// import { useQuery, gql } from '@apollo/client'
import { useGetTodosQuery, useGetTodosLazyQuery } from '../../gql/generated_apollo_client'

const useStyles = makeStyles({
  container: {
    padding: 10,
    flex: '1 1 auto',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: 10,
  },
})

// interface Todo {
//   id: number
//   title: string
// }
//
// const GET_TODOS = gql`
//   query GetTodos {
//     getTodos {
//       id
//       title
//     }
//   }
// `

const Todos = () => {
  const classes = useStyles()

  // const getTodosQuery = useQuery<{ getTodos: Todo[] }>(GET_TODOS)
  // const getTodosQuery = useGetTodosQuery()
  const [getTodos, { data, loading }] = useGetTodosLazyQuery()

  useEffect(() => {
    getTodos()
  }, [getTodos])
  if (loading || !data) return <div>Loading...</div>

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
