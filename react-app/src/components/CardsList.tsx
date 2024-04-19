// CardsList.tsx
import React from 'react';
import './CardsList.css';

interface CardData {
  name: string;
  age: string;
  mood: string;
  genres: string[];
}

interface CardsListProps {
  cards: CardData[];
  onDelete: (index: number) => void;
}

const CardsList: React.FC<CardsListProps> = ({ cards, onDelete }) => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <p>Name: {card.name}</p>
            <p>Age: {card.age}</p>
            <p>Mood: {card.mood}</p>
            <p>Genres: {card.genres.join(', ')}</p>
          </div>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
