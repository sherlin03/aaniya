import React, { useState, useEffect } from 'react';

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/cards');
        if (response.ok) {
          const data = await response.json();
          setCards(data);
        } else {
          console.error('Failed to fetch cards.');
        }
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="cards-container">
      <div className="horizontal-cards">
        {cards.slice(0, 5).map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <div className="vertical-cards">
        {cards.slice(5, 11).map((card) => (
          <div key={card.id} className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
