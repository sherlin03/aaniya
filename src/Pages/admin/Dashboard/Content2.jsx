import React from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
const Content2 = () => {
  return (
    <Box flex={3} mt={2} padding={3} >
     <Outlet/>
    </Box>
  )
}

export default Content2








