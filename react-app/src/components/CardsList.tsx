import React from 'react';
import Card from './Card';
import { CardsWrapper } from './style'; 

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
    <CardsWrapper>
      {cards.map((card, index) => (
        <Card key={index} card={card} onDelete={() => onDelete(index)} />
      ))}
    </CardsWrapper>
  );
};

export default CardsList;
