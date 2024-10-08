import React, { useEffect, useState } from "react";
import "./user.css";

const Adultsuits = () => {
    const [suits, setSuits] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:4000/suits");
            if (response.ok) {
              const data = await response.json();
              setSuits(data);
            } else {
              console.error("Failed to fetch Suits.");
            }
          } catch (error) {
            console.error("Error fetching Suits:", error);
          }
        };
        fetchData();
      }, []);


  return (
    <>
         <div className='text-center' style={{marginTop:"20px"}}>
      <h1 style={{textDecoration:"underline"}}>Suits</h1>
    </div>

      <div style={{marginTop:"30px"}}>

        <div className="cards-containers">
        {Array.from({ length: Math.ceil(suits.length / 4) }, (_, rowIndex) => (
          <div className="horizontal-cardss" key={rowIndex}>
            {suits.slice(rowIndex * 4, rowIndex * 4 + 4).map((suit) => (
              <div key={suits.id} className="cards" style={{width:"270px"}}>
                <img src={suit.image} style={{width:"250px",height:"200px"}}  />
                <div class="card-body ">
                <h5 className="card-title text-center ">{suit.productname}</h5>
                <h5 className="card-title text-center">₹ {suit.price}</h5>
                <h5 className="card-title text-center">Offer : {suit.offer} %</h5>
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

export default Adultsuits