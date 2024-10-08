import { Box } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Content = () => {
  // let username = sessionStorage.getItem('username')
  return (
   
      <Box flex={3} mt={2} padding={3} >
          <div>
            <h2>Dashboard</h2>
          </div>

        <div style={{marginTop:"25px"}}>
        <Row >
          <Col sm={3}>
            <div className='card bg-warning'>
              <div className='card-body'>
              <div class="inner">
                <h3>44</h3>
                <h5>T-Shirts</h5>
              </div>
              </div>
              <div className='card-footer text-center '>
              {/* <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a> */}
              <Link to="/tshirts" style={{textDecoration:"none",color:"black"}}>More info  <i class="fa fa-arrow-circle-right"></i></Link> 
              </div>
            </div>
          </Col>
          <Col sm={3}>
          <div className='card bg-danger'>
              <div className='card-body'>
              <div class="inner text-light ">
                <h3>44</h3>
                <h5>Jean</h5>
              </div>
              </div>
              <div className='card-footer text-center '>
              {/* <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a> */}
              <Link to="/jean" style={{textDecoration:"none",color:"white"}}>More info  <i class="fa fa-arrow-circle-right"></i></Link> 
              </div>
            </div>
            </Col>
          <Col sm={3}>
          <div className='card bg-primary'>
              <div className='card-body'>
              <div class="inner text-light ">
                <h3>44</h3>
                <h5>Men's Suits</h5>
              </div>
              </div>
              <div className='card-footer text-center '>
              {/* <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a> */}
              <Link to="/suits" style={{textDecoration:"none",color:"white"}}>More info  <i class="fa fa-arrow-circle-right"></i></Link> 
              </div>
            </div>
          </Col>
          <Col sm={3}>
          <div className='card bg-success'>
              <div className='card-body'>
              <div class="inner text-light ">
                <h3>44</h3>
                <h5>Men's Shoes</h5>
              </div>
              </div>
              <div className='card-footer text-center '>
              {/* <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a> */}
              <Link to="/shoes" style={{textDecoration:"none",color:"white"}}>More info  <i class="fa fa-arrow-circle-right"></i></Link> 
              </div>
            </div>
          </Col>
        </Row>
        </div>
      </Box>
   
  )
}

export default Content