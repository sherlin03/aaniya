import React, { useEffect, useState } from "react";
import "./user.css";


const Usershoes = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:4000/shoes");
            if (response.ok) {
              const data = await response.json();
              setShoes(data);
            } else {
              console.error("Failed to fetch Shoes.");
            }
          } catch (error) {
            console.error("Error fetching Shoes:", error);
          }
        };
        fetchData();
      }, []);




  return (
    <>

<div className='text-center' style={{marginTop:"20px"}}>
      <h1 style={{textDecoration:"underline"}}>Shoes</h1>
    </div>

      <div style={{marginTop:"30px"}}>

         <div className="cards-containers">
        {Array.from({ length: Math.ceil(shoes.length / 4) }, (_, rowIndex) => (
          <div className="horizontal-cardss" key={rowIndex}>
            {shoes.slice(rowIndex * 4, rowIndex * 4 + 4).map((shoe) => (
              <div key={shoes.id} className="cards" style={{width:"270px"}}>
                <img src={shoe.image} style={{width:"250px",height:"200px"}} />
                <div class="card-body ">
                <h5 className="card-title text-center ">{shoe.productname}</h5>
                <h5 className="card-title text-center">₹ {shoe.price}</h5>
                <h5 className="card-title text-center">Offer : {shoe.offer} %</h5>
              </div>
              </div>
            ))}
          </div>
        ))}
      </div> 
      </div>
    </>
  )
}

export default Usershoes