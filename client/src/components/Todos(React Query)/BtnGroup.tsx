import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useAddTodoMutation, TodoInput } from '../../gql/generated_react_query'
import { useQueryClient } from '@tanstack/react-query'

const BtnGroup = () => {
  const queryClient = useQueryClient()
  const [form, setForm] = useState<TodoInput>({
    title: '',
  })

  const addTodoMutation = useAddTodoMutation({
    onSuccess: () => {
      setForm({ ...form, title: '' })
      queryClient.refetchQueries(['GetTodos'])
    },
  })
  const handleAddTodo = () => addTodoMutation.mutate({ todo: form })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <Box mb={2}>
      <Button variant='contained' onClick={handleAddTodo} disabled={addTodoMutation.isLoading}>
        {'Add Todo'}
      </Button>
      <Box mt={2}>
        <TextField
          name='title'
          value={form.title}
          onChange={onChange}
          fullWidth
          disabled={addTodoMutation.isLoading}
        />
      </Box>
    </Box>
  )
}

export default BtnGroup
