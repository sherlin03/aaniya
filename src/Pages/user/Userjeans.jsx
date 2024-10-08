import React, { useEffect, useState } from "react";
import "./user.css";

const Userjeans = () => {
  
  const [jeans, setJeans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/jeans");
        if (response.ok) {
          const data = await response.json();
          setJeans(data);
        } else {
          console.error("Failed to fetch jeans.");
        }
      } catch (error) {
        console.error("Error fetching jeans:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <p>test</p> */}

      
    <div className='text-center' style={{marginTop:"20px"}}>
      <h1 style={{textDecoration:"underline"}}>Jeans</h1>
    </div>

      <div style={{marginTop:"30px"}}>
      <div className="cards-containers">
        {Array.from({ length: Math.ceil(jeans.length / 4) }, (_, rowIndex) => (
          <div className="horizontal-cardss" key={rowIndex}>
            {jeans.slice(rowIndex * 4, rowIndex * 4 + 4).map((jean) => (
              <div key={jeans.id} className="cards" style={{width:"270px"}}>
                <img src={jean.image} style={{width:"250px",height:"200px"}} loading="lazy" />
                <div class="card-body ">
                <h5 className="card-title text-center ">{jean.productname}</h5>
                <h5 className="card-title text-center">₹ {jean.price}</h5>
                <h5 className="card-title text-center">Offer : {jean.offer} %</h5>
              </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>

     
    </>
  );
};

export default Userjeans;
