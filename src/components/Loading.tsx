import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const Loading: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <CircularProgress />
    </Box>
  )
}

export default Loading
