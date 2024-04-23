import React from 'react';

interface CardData {
  name: string;
  age: string;
  mood: string;
  genres: string[];
}

interface CardProps {
  card: CardData;
  onDelete: () => void;
}

const Card: React.FC<CardProps> = ({ card, onDelete }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p>Name: {card.name}</p>
        <p>Age: {card.age}</p>
        <p>Mood: {card.mood}</p>
        <p>Genres: {card.genres.join(', ')}</p>
      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Card;
