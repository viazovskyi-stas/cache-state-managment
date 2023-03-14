import React, { memo } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import PendingIcon from '@mui/icons-material/Pending'
import { useDeleteTodoMutation, Todo, GetTodosDocument } from '../../gql/generated_apollo_client'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    padding: 10,
    flex: '1 1 auto',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: 10,
    marginBottom: 5,
    justifyContent: 'space-between',
  },
})

const TodoItem = ({ todo }: { todo: Omit<Todo, 'content'> }) => {
  const [deleteTodo, deleteTodoMutation] = useDeleteTodoMutation({
    refetchQueries: [GetTodosDocument],
  })
  const handleDeleteTodo = () => {
    deleteTodo({ variables: { id: todo.id } })
  }

  const classes = useStyles()
  return (
    <Box className={classes.container}>
      {todo.title}
      {deleteTodoMutation.loading ? (
        <PendingIcon color='disabled' />
      ) : (
        <DeleteIcon color={'error'} onClick={handleDeleteTodo} style={{ cursor: 'pointer' }} />
      )}
    </Box>
  )
}

export default memo(TodoItem)
