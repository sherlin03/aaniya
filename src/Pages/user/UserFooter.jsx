import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const UserFooter = () => {

  return (
    <div>
      <footer className="bg-danger-subtle " >
  <Container>

  
  <Row className='mt-sm-5'>
    <Col sm={3}>
      <h2 className='mt-sm-3 text-decoration-underline'>Quick Links</h2>
      <ul>
      <li><Link className='linktext' to='/userhome'>Home</Link></li>
        <li><Link className='linktext' to='/contact'>Contact</Link></li>
        <li><Link className='linktext' to='/about'>About </Link></li>
        <li><Link className='linktext' to='/userjean'>Jean </Link></li>
      </ul>
    </Col>
    <Col sm={3}>
      <h2 className='mt-sm-3 text-decoration-underline'>Follow Links</h2>
      <ul>
        <li><i class="fa fa-facebook-f" style={{color:'blue'}}></i><a href="https://m.facebook.com/profile.php/?id=100006108738837" target="_blank"> Facebook</a></li>
        <li><i class="fa fa-whatsapp" style={{color:'green'}}></i><a href="https://wa.me/9585471103" target="_blank"> Whatsapp</a></li>
        <li><i class="fa fa-instagram" style={{color:'red'}}></i><a href="https://www.instagram.com/michael_sherlin_s/" target="_blank"> Instagram</a></li>
        <li><i class="fa fa-envelope" style={{color:'red'}}></i><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcRDvstqpVbdnBfNRClJzFMwmQCdLPMRkHCCsfhNzGDkGgKKQJQdWBcJNWJHbFwWwKqrL" target="_blank"> Gmail</a></li>
      </ul>
    </Col>
    <Col sm={3}>
      <h2 className='mt-sm-3 text-decoration-underline'>About</h2>
      <p>At Aaniya Fashions , we're passionate about fashion and helping our customers find the perfect attire for any occasion. </p>
    </Col>
    <Col sm={3}>
      <h2 className='mt-sm-3 text-decoration-underline'>Contact Us</h2>
      <h5>Address :</h5>
      <address>
          Aaniya Fashions,<br />
          Rajavoor,<br />
          Kanniyakumari,<br />
          Mobile: +91 9585471103 .
          
      </address>
    </Col>

  </Row>
  </Container>
</footer>
{/* footer end */}
{/* footer social link */}
<footer className='bg-body text-center '>
<a href="https://m.facebook.com/profile.php/?id=100006108738837" target="_blank"><i class="fa fa-facebook-f m-3" style={{color:'blue',fontSize:20}}></i></a>
<a href="https://wa.me/9585471103"><i class="fa fa-whatsapp m-3" style={{color:'green',fontSize:20}}></i></a>
<a href="https://instagram.com/michael_sherlin_s?utm_source=qr&igshid=OGIxMTE0OTdkZA==" target="_blank"><i class="fa fa-instagram m-3" style={{color:'red',fontSize:20}}></i></a>
<a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcRDvstqpVbdnBfNRClJzFMwmQCdLPMRkHCCsfhNzGDkGgKKQJQdWBcJNWJHbFwWwKqrL" target="_blank"><i class="fa fa-envelope m-3" style={{color:'red',fontSize:20}}></i></a>
</footer>
    </div>
  )
}

export default UserFooter