// CardsList.tsx
import React from 'react';
import Card from './Card';
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
    <div className="cards-wrapper">
      {cards.map((card, index) => (
        <Card key={index} card={card} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default CardsList;

