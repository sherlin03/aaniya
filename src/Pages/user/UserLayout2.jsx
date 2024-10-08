import React from 'react'
import UserContent2 from './UserContent2'
import UserNav from './UserNav'
import UserFooter from './UserFooter'
import { Stack } from '@mui/material'

const UserLayout2 = () => {
  return (
    <div>
        
    <UserNav/>
    
         <Stack direction="column" spacing={3}  >
        <UserContent2/>
        <UserFooter/>
        </Stack>
   


    </div>
  )
}

export default UserLayout2