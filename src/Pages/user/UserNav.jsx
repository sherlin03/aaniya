
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./user.css";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const UserNav = () => {

    const navigate =useNavigate()

    useEffect(()=>{
        let username = sessionStorage.getItem('username')
        // console.log(username)
        if(username==='' || username===null){
            navigate('/')
        }
    },[])


    const handleLogout=()=>{
        toast.success("Logout Sucessfully..")
        navigate('/')
    }

  return (
    <>
    <Navbar expand="lg" className="bg-info" position='sticky'>
      <Container fluid>
        <Navbar.Brand onClick={()=>navigate('/userhome')}>Aaniya Fashions</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="d-flex">
          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to='/userhome' style={{textDecoration:"none",color:"black"}} >Home</Link></Nav.Link>
            <Nav.Link ><Link to='/about' style={{textDecoration:"none",color:"black"}} >About</Link></Nav.Link>
            <Nav.Link ><Link to='/userjean' style={{textDecoration:"none",color:"black"}} >Jean</Link></Nav.Link>
            <Nav.Link ><Link to='/usertshirt' style={{textDecoration:"none",color:"black"}} >T-Shirt</Link></Nav.Link>
            <Nav.Link ><Link to='/usersuit' style={{textDecoration:"none",color:"black"}} >Suits</Link></Nav.Link>
            <Nav.Link ><Link to='/usershoe' style={{textDecoration:"none",color:"black"}} >Shoe</Link></Nav.Link>
            <Nav.Link ><Link to='/contact' style={{textDecoration:"none",color:"black"}} >Contact</Link></Nav.Link>
           
            <NavDropdown title="Account" id="navbarScrollingDropdown" sx={{paddingRight:"20px"}}>
              <NavDropdown.Item  onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default UserNav