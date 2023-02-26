import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import Todos from './Todos'
import BtnGroup from './BtnGroup'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const useStyles = makeStyles({
  container: {
    padding: 10,
    width: 600,
    height: 700,
    border: '1px solid black',
    borderRadius: 10,
    backgroundColor: '#efefef85',
    boxShadow: '2px 5px 5px grey',
    display: 'flex',
    flexFlow: 'column',
  },
  todosContainer: {
    padding: 10,
    flex: '1 1 auto',
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: 10,
  },
})

const queryClient = new QueryClient()

const TodosContainer: React.FC = () => {
  const classes = useStyles()

  return (
    <QueryClientProvider client={queryClient}>
      <Box className={classes.container}>
        <Box mb={2}>
          <Typography variant='h4'>Todo List</Typography>
        </Box>
        <BtnGroup />
        <Box className={classes.todosContainer}>
          <Todos />
        </Box>
      </Box>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default TodosContainer
