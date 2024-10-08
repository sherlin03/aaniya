import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../../../App.css';

const Login = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState([])
  const [password, setPassword] = useState([])

  useEffect(()=>{
    sessionStorage.clear()
    },[]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // console.log('proceed')
      fetch("http://localhost:4000/adminuser/"+username,).then((res)=>{
        return res.json();
      }).then((response)=>{
        console.log(response)
          if(Object.keys(response).length ===0){
            toast.error("Please Enter Valid User Name")
          } else{
            if(response.password === password){
              toast.success("Login Successfull ..")
              sessionStorage.setItem('username',username)
              navigate('/userhome')
            }else{
            toast.error ("Please Enter Valid Password")
          }
}

      }).catch((error)=>{
          toast.error("Incorrect User Name OR Password " +error.message)
      });
    }

  }

  const validate = () => {
    let result = true;
    if (username ===null || username === '') {
      result = false;
      toast.warning("Enter Valid User Name");
    }
    if (password ===null || password === '') {
      result = false;
      toast.warning("Enter Correct Password")
    }
    return result;
  }



  return (

    <div className='row'>
      <div className='offset-lg-3 col-lg-6' style={{paddingTop:"100px"}}>
        <form className='container' onSubmit={handleSubmit} >
                <h1 className='text-center'>Aaniya Fashions</h1>
          <div className='card' >
            <div className='card-header text-center '>
              <h1>- Login -</h1>
            </div>
            <div className='card-body'>
              <div className='form-group'>
                <label>User Name <span className='errmsg'>*</span></label>
                <input type="text" className='form-control' value={username} onChange={e => setUsername(e.target.value)} />
              </div>
              <div className='form-group'>
                <label>Password <span className='errmsg'>*</span></label>
                <input type="password" className='form-control' value={password} onChange={e => setPassword(e.target.value)} />
              </div>
            </div>
            <div className='card-footer text-center '>
              <button type='submit' className='btn btn-primary ' >Login</button>
             
            </div>

          </div>
          <div className='text-center'>
          
              <br />
              <p style={{ paddingTop: "10px" }}>-OR-</p>
              <p className="mb-1" style={{ color: "blue" }}>
                Forgot Password
              </p>
              <p className="mb-1" style={{ color: "blue" }}>
                <Link to="/register" style={{ textDecoration: "none" }}> Register </Link>
              </p>
              </div>
        </form>
      </div>

    </div>
  )
}

export default Login