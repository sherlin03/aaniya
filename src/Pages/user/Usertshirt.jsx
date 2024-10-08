import React, { useEffect, useState } from "react";
import "./user.css";

const Usertshirt = () => {
    const [tshirts, setTshirts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:4000/tshirts");
            if (response.ok) {
              const data = await response.json();
              setTshirts(data);
            } else {
              console.error("Failed to fetch tshirts.");
            }
          } catch (error) {
            console.error("Error fetching tshirts:", error);
          }
        };
        fetchData();
      }, []);


  return (
    <>
             <div className='text-center' style={{marginTop:"20px"}}>
      <h1 style={{textDecoration:"underline"}}>T-Shirts</h1>
    </div>

      <div style={{marginTop:"30px"}}>


        <div className="cards-containers">
        {Array.from({ length: Math.ceil(tshirts.length / 4) }, (_, rowIndex) => (
          <div className="horizontal-cardss" key={rowIndex}>
            {tshirts.slice(rowIndex * 4, rowIndex * 4 + 4).map((tshirt) => (
              <div key={tshirts.id} className="cards" style={{width:"270px"}}>
                <img src={tshirt.image} style={{width:"250px",height:"200px"}} />
                <div class="card-body ">
                <h5 className="card-title text-center ">{tshirt.productname}</h5>
                <h5 className="card-title text-center">₹ {tshirt.price}</h5>
                <h5 className="card-title text-center">Offer : {tshirt.offer} %</h5>
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

export default Usertshirt