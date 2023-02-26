import React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import TodosContainer from './components/Todos(React Query)/TodosContainer'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
})

function App() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <TodosContainer />
    </Box>
  )
}

export default App
