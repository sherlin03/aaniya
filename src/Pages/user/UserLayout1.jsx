import React from 'react'
import UserNav from './UserNav'
import UserContent1 from './UserContent1'
import UserFooter from './UserFooter'
import { Stack } from '@mui/material'

const UserLayout1 = () => {
  return (
    <div>
    <UserNav/>
        <Stack direction="column" spacing={3}  >
        <UserContent1/>
        <UserFooter/>
        </Stack>
</div>
  )
}

export default UserLayout1