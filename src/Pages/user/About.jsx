import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <div>
              <div className='text-center' style={{marginTop:"20px"}}>
      <h1 style={{textDecoration:"underline"}}>About Us</h1>
    </div>

      <Container>
        <Row style={{marginTop:"20px"}}>
          <Col sm={6}>
              <h3>Welcome to Aaniya Fashions!</h3>
              <p style={{textAlign:"justify"}}>At Aaniya Fashions , we're passionate about fashion and helping our customers find the perfect attire for any occasion. Whether you're searching for the latest trends in dresses, the most comfortable pair of shoes, the perfect-fitting jeans, or the most elegant suits, we've got you covered.</p>
          <h4>Our Mission</h4>
          <p style={{textAlign:"justify"}}>Our mission is simple: to provide our customers with high-quality clothing that combines style, comfort, and affordability. We believe that everyone deserves to feel confident and stylish in what they wear, and we strive to offer a diverse range of products to suit every taste and preference.</p>
          <h4>Quality and Selection</h4>
          <p style={{textAlign:"justify"}}>
          We understand that our customers have unique preferences and style sensibilities. That's why we carefully curate our collection to offer a wide variety of styles, sizes, and designs. Whether you're looking for casual everyday wear, formal attire for special occasions, or something in between, you'll find it in our store.
          </p>
          <h4>Customer Satisfaction</h4>
          <p style={{textAlign:"justify"}}>
          At Aaniya Fashions, customer satisfaction is our top priority. We're committed to providing an exceptional shopping experience from start to finish. Our knowledgeable and friendly staff are here to assist you every step of the way, whether you need help finding the perfect outfit or have questions about sizing or styling.
          </p>
          <h4>Connect With Us</h4>
          <p style={{textAlign:"justify"}}>We love connecting with our customers and hearing your feedback. Follow us on social media to stay updated on the latest arrivals, promotions, and events. And don't forget to tag us in your photos – we love seeing how you style your favorite pieces from our store!
          <br/><br/>
          Thank you for choosing Aaniya Fashions. We look forward to helping you look and feel your best!
          </p>
          </Col>

          <Col sm={6}>
            
            <img src={require('../../Img/fashion-store-female-shop-outlet-sale-boutique-women-shopping-person-buy-dress-tshirt-shoes-vector-illustration_53562-15507.jpg')} alt="" style={{borderRadius:"10px"}}/>
            <img src={require('../../Img/client-suit-boutique-with-shopping-bags_7502-4397.jpg')} alt="" style={{borderRadius:"10px",marginTop:"20px"}} loading="lazy" />
          </Col>
        </Row>
        </Container>
    </div>
  )
}

export default About