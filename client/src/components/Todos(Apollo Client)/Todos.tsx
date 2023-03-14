import React, { memo, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import TodoItem from './TodoItem'
import { useGetTodosLazyQuery } from '../../gql/generated_apollo_client'

const useStyles = makeStyles({
  container: {
    padding: 10,
    flex: '1 1 auto',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: 10,
  },
})

const Todos = () => {
  const classes = useStyles()
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
