import React from 'react';
import { CardContent, Typography, Box } from '@mui/material';
import { CardContainer, DeleteButton } from './style';

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

const CardComponent: React.FC<CardProps> = ({ card, onDelete }) => {
  return (
    <CardContainer variant="outlined">
      <Box component="div" className="bg"></Box>
      <Box component="div" className="blob"></Box>
      <CardContent className="card-content">
        <Typography variant="body1">Name: {card.name}</Typography>
        <Typography variant="body1">Age: {card.age}</Typography>
        <Typography variant="body1">Mood: {card.mood}</Typography>
        <Typography variant="body1">Genres: {card.genres.join(', ')}</Typography>
        <DeleteButton className='delete' onClick={onDelete}><span>Delete</span></DeleteButton>
      </CardContent>
    </CardContainer>
  );
};

export default CardComponent;
