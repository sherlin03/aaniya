import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Addshoe = () => {
       

        const navigate=useNavigate()
        const [formData,setFormData]=useState({
          productname:'',
          price :'',
          offer:'',
          discription:'',
          image:null
        })
      const handleInputChange=(e)=>{
        setFormData({
          ...formData ,
          [e.target.name] : e.target.value,
        })
      }
      const handleImageChange=(e)=>{
        setFormData({
          ...formData,
          image: e.target.files[0]
        })
      }

      const convertImageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      };

      const handleSubmit=async(e)=>{
        e.preventDefault()

        const base64Image= await convertImageToBase64(formData.image)

        const userData = {
          productname: formData.productname,
          price: formData.price,
          offer: formData.offer,
          discription: formData.discription,
          image: base64Image,
        };
    
        try {
          const response = await fetch('http://localhost:4000/shoes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });
    
          if (response.ok) {
            console.log('Shoes Added successfully!');
            toast.success("Shoes Added successfully!");
            navigate('/shoes')
            // Reset form fields
            setFormData({
              productname: '',
              price: '',
              offer: '',
              discription: '',
              image: null,
            });
          } else {
            toast.danger("Plese Enter Valid Details");
            console.error('Failed to Shoes.');
          }
        } catch (error) {
          console.error('Error registering Shoes:', error);
        }
      };

  return (
    
      <div >
        <Container >
          <div style={{ paddingTop: "50px"}}>

            <Card style={{ width: '40rem', margin: '0 auto' }}>
              <Card.Body>
                <Card.Title className="text-center"><h2>Add Shoe</h2></Card.Title>
                <Form>
                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Product Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Name"
                      name="productname"
                      id="productname"
                      value={formData.productname} 
                      onChange={handleInputChange} 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Price</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Price" 
                      name="price"
                      id="price"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Offer</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Enter Offer"
                      name="offer"
                      id="offer"
                      value={formData.offer}
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left" >
                    <Form.Label style={{fontWeight:"bold"}}>Discription</Form.Label>
                    <Form.Control 
                      type="tel" 
                      placeholder="Enter Discription"
                      name="discription" 
                      id="discription" 
                      value={formData.discription} 
                      onChange={handleInputChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 text-left">
                    <Form.Label style={{fontWeight:"bold"}}>Upload Image</Form.Label>
                    <Form.Control 
                      type="file" 
                      accept="image/*" 
                      name='image'
                      id='image'
                      onChange={handleImageChange} 
                    />
                  </Form.Group>

                  <Button style={{marginLeft:"210px"}} variant="primary" onClick={handleSubmit}>
                    Submit
                  </Button>

                </Form>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>  
        
 
  );
  }

export default Addshoe