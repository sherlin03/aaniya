import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';



const Adminlogin = () => {

    const navigate = useNavigate() 
    const [email,setEmail] =useState([])
    const [password,setPassword] =useState([])
    const [loggedin,setloggedin] = useState(false)

    const handleSubmit =()=> {

        if(email==='admin' && password==='123456'){

          toast.success("Login Successfull ..")
          sessionStorage.setItem('email',email)
          setloggedin(true)
        }
        else{
            alert("invalid Username or Password");
        }
    };
    useEffect(()=>{
      sessionStorage.clear()
      },[]);

    if (loggedin) {
        return(
        navigate('/layout')  
             
        )
    };
  
   

    return (
        <div className='body'>
            <h1 style={{ textAlign: "center", paddingTop: "20px", opacity: 0.8 }}>Aaniya Fashions </h1>
            <Container >
                <div style={{ width: "550px", marginLeft: "250px", marginTop: "50px" }}>

                    <Card className='sm'> 
                        <Card.Body>

                            <Card.Title className="text-center">Admin Login</Card.Title>

                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                    type="text"
                                    placeholder="Username" 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <div style={{marginLeft:"230px"}}>
                                <Button variant="primary" onClick={handleSubmit}>Login</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>

                </div>
            </Container>
        </div>
    )
}

export default Adminlogin