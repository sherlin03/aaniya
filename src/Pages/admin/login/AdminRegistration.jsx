import React, { useState } from 'react'
import '../../../App.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AdminRegistration = () => {

    const [id,setId]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [address,setAddress]=useState("")
    const [country,setCountry]=useState("India")
    const [gender,setGender]=useState("")
    const [password,setPassword]=useState("")

    const navigate =useNavigate()

    let errormessage='Enter the Valid';


    const IsValidate =()=>{
        let isproceed=true;
        if(id===null || id===''){
            isproceed=false;
            errormessage += ' User Name';
        }
        if(email===null || email===''){
            isproceed=false;
            errormessage += ' Email'
        }
        if(mobile===null || mobile===''){
            isproceed=false;
            errormessage += ' Mobile'
        }
        if(address===null || address===''){
            isproceed=false;
            errormessage += ' Address'
        }
        if(gender===null || gender===''){
            isproceed=false;
            errormessage += ' Gender'
        }
        if (password===null || password===''){
            isproceed=false;
            errormessage += ' Password'
        }

        if(!isproceed){
            toast.warning(errormessage) ;
         }
        return isproceed;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let regobj={id,email,mobile,address,country,gender,password};
         console.log(regobj)

         if (IsValidate()){

      fetch("http://localhost:4000/adminuser",{
         method:"POST",
         headers:{'content-type':'application/json'},
         body:JSON.stringify(regobj)
      }).then((res)=>{
        console.log(res);
        
        toast.success("Register Sucessful")
        navigate('/')
      }).catch((err)=>{
        toast.error("Field:"+err.message)
      })
    }

    }

  return (
    <>
    <body style={{backgroundColor:"pink",height:"800px"}}>
    <div  >
       <div className='offset-lg-3 col-lg-6' style={{paddingTop:"100px" }}>
        <form className='container' onSubmit={handleSubmit}>
            <div className='card' >
                <div className='card-header'>
                    <h1>Admin Registration</h1>
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <label >User Name <span className='errmsg'>*</span></label>
                        <input type="text" className='form-control' value={id} onChange={e=>setId(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label >Email <span className='errmsg'>*</span></label>
                        <input type="email" className='form-control' value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className='form-group'>
                        <label >Mobile <span className='errmsg'>*</span></label>
                        <input type="text" className='form-control' value={mobile} onChange={e=>setMobile(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label>Address</label>
                        <textarea name="" value={address} onChange={e=>setAddress(e.target.value)} className='form-control'></textarea>
                    </div>
                    <div className='form-group'>
                        <label>Country <span className='errmsg'>*</span></label>
                        <select name="" className='form-control' value={country} onChange={e=>setCountry(e.target.value)} >
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </div>
                    <div className='from-group'>
                        <label >Gender</label>
                        <br />
                        <input type="radio" name='gender' value="Male" className='app-check' checked={gender==="Male"} onChange={e=>setGender(e.target.value)} />
                        <label >Male</label>
                        <input type="radio" name='gender' value="Female" className='app-check' checked={gender==="Female"} onChange={e=>setGender(e.target.value)} />
                        <label>Female</label>
                    </div>


                    <div className='form-group'>
                        <label >Password <span className='errmsg'>*</span></label>
                        <input type="password" className='form-control' value={password} onChange={e=>setPassword(e.target.value)} />
                    </div>
                </div>
                <div className='card-footer'>
                <button type="submit" className="btn btn-success"> Register</button>
                <button type="submit" className="btn btn-primary"> <Link to='/'>Close</Link></button>

                </div>
               
            </div>
        </form>
        
        </div> 
    </div>
    </body>
    </>
  )
}

export default AdminRegistration