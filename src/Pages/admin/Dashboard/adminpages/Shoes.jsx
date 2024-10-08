// import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Shoes = () => {

  
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/shoes');
        if (response.ok) {
          const data = await response.json();
          setShoes(data);
        } else {
          console.error('Failed to fetch Shoes.');
        }
      } catch (error) {
        console.error('Error fetching Shoes:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/shoes/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setShoes(shoes.filter((user) => user.id !== userId));
        console.log('Shoes deleted successfully!');
      } else {
        console.error('Failed to delete Shoes.');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


  return (
    <>
    <div className="justify-content-between " style={{display:"flex"}}>
      <h2 >Shoe List</h2>
      <Link to='/addshoe' className='btn btn-success text-center float-lg-end'  style={{textDecoration:"none",paddingTop:"10px"}}> Add [+] </Link>
    </div>

    {(shoes.length)?(



    <Table striped bordered hover size="sm" style={{marginTop:"50px",fontSize:"18px"}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Offer</th>
          <th>Discription</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      
      </thead>
      <tbody>
      {shoes.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.productname}</td>
            <td>{user.price}</td>
            <td>{user.offer}</td>
            <td>{user.discription}</td>
            <td><img src={user.image} alt="Profile" style={{ width: '50px', height: '50px' }} /></td>
            <td>
              {/* <button className='btn btn-outline-warning ' >Edit</button>  */}
             
            <button className='btn btn-outline-danger ' style={{marginLeft:"5px"}} onClick={() => handleDelete(user.id)} >Delete</button> </td>
          </tr>
        ))}
      </tbody>
    </Table>
 ):(
  <h5 style={{marginLeft:"300px",marginTop:"150px"}}>No Items Available</h5>
)
  }


    </>
    
  )
}

export default Shoes