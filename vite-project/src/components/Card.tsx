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
      <div className="bg"></div>
      <div className="blob"></div>
      <div className="card-content">
        <p>Name: {card.name}</p>
        <p>Age: {card.age}</p>
        <p>Mood: {card.mood}</p>
        <p>Genres: {card.genres.join(', ')}</p>
      <button className='delete' onClick={onDelete}><span>Delete</span></button>
      </div>
    </div>
  );
};

export default Card;
