import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import Content from './Content'
import { Stack } from '@mui/material'
import '../../../App.css'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        
             <Stack direction="row" spacing={3} justifyContent="space-between" >
            <Menu/>
            <Content/>
            </Stack>
       
    </div>
  )
}

export default Layout