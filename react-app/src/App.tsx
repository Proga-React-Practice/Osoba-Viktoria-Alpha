// App.tsx

import React, { useState } from 'react';
import Form from './components/Form';
import CardsList from './components/CardsList';
import './App.css';

interface CardData {
  name: string;
  age: string;
  mood: string;
  genres: string[];
}

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  const handleFormSubmit = (formData: CardData) => {
    setCards([...cards, formData]);
  };

  const handleDeleteCard = (index: number) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <div className="app-container">
      <Form onSubmit={handleFormSubmit} />
      <div className="cards-wrapper">
        <CardsList cards={cards} onDelete={handleDeleteCard} />
      </div>
    </div>
  );
};

export default App;
