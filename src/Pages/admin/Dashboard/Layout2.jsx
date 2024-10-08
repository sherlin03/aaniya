import { Stack } from '@mui/material'
import React from 'react'
import '../../../App.css'
import Content2 from './Content2'
import Menu from './Menu'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        
             <Stack direction="row" spacing={3} justifyContent="space-between" >
            <Menu/>
            <Content2/>
            </Stack>
    </div>
  )
}

export default Layout