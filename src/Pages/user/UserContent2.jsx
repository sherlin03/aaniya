import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserContent2 = () => {
  return (
    <div>
        <Box>
            <Outlet/> 
        </Box>
    </div>
  )
}

export default UserContent2