import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate= useNavigate()
  return (
    <div>
        <div className="text-center justify-content-center" style={{marginTop:"200px"}}>
        <h2>404 Page Not Found </h2>
        </div>

        <div className="text-center justify-content-center" style={{marginTop:"30px"}}>
            <h4>Visit Our Home Page</h4>
        </div>
        <div className="text-center justify-content-center" style={{marginTop:"30px"}}>
        <Button variant="outline-info" onClick={()=>navigate('/userhome')}>Read More ..</Button>
        </div>
        
        
    </div>
  )
}

export default Notfound