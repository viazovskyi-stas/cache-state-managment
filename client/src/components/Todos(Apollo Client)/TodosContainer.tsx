import React from 'react'
import { Box, Typography } from '@mui/material'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { makeStyles } from '@mui/styles'
import Todos from './Todos'
import BtnGroup from './BtnGroup'

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

const client = new ApolloClient({
  uri: 'http://localhost:5001/api',
  cache: new InMemoryCache(),
})

const TodosContainer: React.FC = () => {
  const classes = useStyles()

  return (
    <ApolloProvider client={client}>
      <Box className={classes.container}>
        <Box mb={2}>
          <Typography variant='h4'>Todo List</Typography>
        </Box>
        <BtnGroup />
        <Box className={classes.todosContainer}>
          <Todos />
        </Box>
      </Box>
    </ApolloProvider>
  )
}

export default TodosContainer
