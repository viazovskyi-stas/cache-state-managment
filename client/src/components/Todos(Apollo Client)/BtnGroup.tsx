import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { GetTodosDocument, TodoInput, useAddTodoMutation } from '../../gql/generated_apollo_client'

const BtnGroup = () => {
  const [addTodo, addTodoMutation] = useAddTodoMutation({
    refetchQueries: [GetTodosDocument],
  })
  const [form, setForm] = useState<TodoInput>({
    title: '',
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }
  const handleAddTodo = () => {
    addTodo({ variables: { todo: form } })
    setForm({ ...form, title: '' })
  }

  return (
    <Box mb={2}>
      <Button variant='contained' onClick={handleAddTodo} disabled={addTodoMutation.loading}>
        {'Add Todo'}
      </Button>
      <Box mt={2}>
        <TextField
          name='title'
          value={form.title}
          onChange={onChange}
          fullWidth
          disabled={addTodoMutation.loading}
        />
      </Box>
    </Box>
  )
}

export default BtnGroup
