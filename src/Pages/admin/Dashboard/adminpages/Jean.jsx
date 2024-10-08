// import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const Jean = () => {

  
  const [jeans, setJeans] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/jeans');
        if (response.ok) {
          const data = await response.json();
          setJeans(data);
        } else {
          console.error('Failed to fetch Jeans.');
        }
      } catch (error) {
        console.error('Error fetching Jeans:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/jeans/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setJeans(jeans.filter((user) => user.id !== userId));
        console.log('User deleted successfully!');
      } else {
        console.error('Failed to delete Jeans.');
      }
    } catch (error) {
      console.error('Error deleting Jeans:', error);
    }
  };


  return (
    <>
    <div className="justify-content-between " style={{display:"flex"}}>
      <h2 >Jean List</h2>
      <Link to='/addjean' className='btn btn-success text-center float-lg-end'  style={{textDecoration:"none",paddingTop:"10px"}}> Add [+] </Link>
    </div>

    {(jeans.length)?(


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
      {jeans.map((user) => (
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

export default Jean