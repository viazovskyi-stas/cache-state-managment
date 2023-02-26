import React, { memo, useState } from 'react'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import PendingIcon from '@mui/icons-material/Pending'
import {
  useDeleteTodoMutation,
  Todo,
  GetTodosDocument,
  useGetTodosQuery,
} from '../../gql/generated_react_query'
import { useMutation, useQueryClient } from '@tanstack/react-query'

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
  const classes = useStyles()
  const queryClient = useQueryClient()
  const deleteTodoMutation = useDeleteTodoMutation({
    onSuccess: () => queryClient.refetchQueries(['GetTodos']),
  })

  const handleDeleteTodo = () => {
    deleteTodoMutation.mutate({ id: todo.id })
  }

  return (
    <Box className={classes.container}>
      {todo.title}
      {deleteTodoMutation.isLoading ? (
        <PendingIcon color='disabled' />
      ) : (
        <DeleteIcon color={'error'} onClick={handleDeleteTodo} style={{ cursor: 'pointer' }} />
      )}
    </Box>
  )
}

export default memo(TodoItem)
