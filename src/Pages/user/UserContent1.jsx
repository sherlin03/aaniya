import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import "./user.css";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const UserContent1 = () => {
  const navigate =useNavigate()



  return (
    <div>
       <Carousel>
        <Carousel.Item interval={1900}>
          <img src={require('../../Img/41.jpg')} height={500} alt="" className='slidepic' />
          <Carousel.Caption>
            <div className='slidetext'>
              <h3>Best Fashions Shop</h3>
              <p>One of Best Shop In Nagercoil .</p>
              <Button variant="outline-light" onClick={()=>navigate('/about')} >Read More ..</Button>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={require('../../Img/41.jpg')} className='slidepic' height={500} alt="" />
          <Carousel.Caption>
            <div className='slidetext'>
              <h3>Visit Our Shop</h3>
              <p> Near Nagercoil.</p>
              <Button variant="outline-light" onClick={()=>navigate('/contact')}>Read More ..</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item >
        <Carousel.Item interval={1900}>
          <img src={require('../../Img/41.jpg')} className='slidepic' height={500} alt="" />
          <Carousel.Caption>
            <div className='slidetext'>
              <h3>Best Suits</h3>
              <p>All type Suits Avilable.</p>
              <Button variant="outline-light" onClick={()=>navigate('/usersuit')}>Read More ..</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    <div className='text-center' style={{marginTop:"20px"}}>
      <h1 style={{textDecoration:"underline"}}>About</h1>
    </div>

    <div >
      <Container>
        <div>
      <Row style={{marginTop:"50px"}}>
        <Col sm={6}>
          <h4>Welcome to Our Store!</h4>
          <p style={{textAlign:"justify"}}>At Aaniya Fashions , we're passionate about fashion and helping our customers find the perfect attire for any occasion. Whether you're searching for the latest trends in dresses, the most comfortable pair of shoes, the perfect-fitting jeans, or the most elegant suits, we've got you covered.</p>
          <h4>Our Mission</h4>
          <p style={{textAlign:"justify"}}>Our mission is simple: to provide our customers with high-quality clothing that combines style, comfort, and affordability. We believe that everyone deserves to feel confident and stylish in what they wear, and we strive to offer a diverse range of products to suit every taste and preference.</p>
          <h4>Quality and Selection</h4>
          <p style={{textAlign:"justify"}}>
          We understand that our customers have unique preferences and style sensibilities. That's why we carefully curate our collection to offer a wide variety of styles, sizes, and designs. Whether you're looking for casual everyday wear, formal attire for special occasions, or something in between, you'll find it in our store.
          </p>
        </Col>


        <Col sm={6}>
          <img src={require('../../Img/istockphoto-473046068-612x612.jpg')} alt="test"  style={{width:"600px",borderRadius:"10px"}} loading="lazy" />
        </Col>
      </Row>
     
      </div>
      <Button variant="outline-dark text-center" onClick={()=>navigate('/about')} style={{marginLeft:"500px"}}>Read More ..</Button>
      <div className='text-center' style={{marginTop:"20px"}}>
      <h1 style={{textDecoration:"underline"}} id='product' >Product</h1>
    </div>

    <div style={{marginTop:"20px"}}>

    

      <Row >
        <Col sm={3}>
          <div className='card' style={{width:"270px"}}>
              <img src={require('../../Img/10-phantom-new-limits-blue-original-imagk9y5zwra4zjy.webp')} alt="test"  width={250} height={200} ></img>
            <div className='card-body text-center'>
            <hr/>
              <h5> Shoe </h5>
              <h5>Price : ₹ 1000</h5>
              <h5>Offer : 10 %</h5>
              <Button variant="outline-info" onClick={()=>navigate('/usershoe')}>Read More ..</Button>
            </div>
          </div>
        </Col>

        <Col sm={3}>
          <div className='card' style={{width:"270px"}}>
              <img src={require('../../Img/jean.jpg')} alt="test"  width={250} height={200} ></img>
            <div className='card-body text-center'>
            <hr/>
              <h5> Jeans </h5>
              <h5>Price : ₹ 1100</h5>
              <h5>Offer : 10 %</h5>
              <Button variant="outline-info" onClick={()=>navigate('/userjean')}>Read More ..</Button>
            </div>
          </div>
        </Col>

        <Col sm={3}>
          <div className='card' style={{width:"270px"}}>
              <img src={require('../../Img/suit.jpg')} alt="test" width={250} height={200}  ></img>
            <div className='card-body text-center'>
            <hr/>
              <h5> Suits </h5>
              <h5>Price : ₹ 2000</h5>
              <h5>Offer : 10 %</h5>
              <Button variant="outline-info" onClick={()=>navigate('/usersuit')}>Read More ..</Button>
            </div>
          </div>
        </Col>

        <Col sm={3}>
          <div className='card' style={{width:"270px"}}>
              <img src={require('../../Img/tshirts.webp')} alt="test"  width={250} height={200} ></img>
            <div className='card-body text-center'>
            <hr/>
              <h5> T-Shirts </h5>
              <h5>Price : ₹ 1500</h5>
              <h5>Offer : 10 %</h5>
              <Button variant="outline-info" onClick={()=>navigate('/usertshirt')}>Read More ..</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>


      </Container>
    </div>




    </div>
  )
}

export default UserContent1