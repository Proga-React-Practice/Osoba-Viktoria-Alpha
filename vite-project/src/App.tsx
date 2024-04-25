import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import CardsList from './components/CardsList';
import Typography from '@mui/material/Typography';
import MaterialUISwitch from './components/materialUISwitch'; 
import { createTheme, ThemeProvider } from '@mui/material';
import './index.css'


interface CardData {
  name: string;
  age: string;
  mood: string | null;
  genres: string[];
}

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleFormSubmit = (formData: CardData) => {
    setCards([...cards, formData]);
  };

  const handleDeleteCard = (index: number) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#646bf3',
      },
      secondary: {
        main: '#fff',
      },
      background: {
        default: darkMode ? '#101113' : '#fff',
      },
      text: {
        primary: darkMode ? '#fefefe' : '#101113',
      },
    },
  });

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    document.body.style.color = theme.palette.text.primary;
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <Form onSubmit={handleFormSubmit} />
        <div className="theme-toggle" style={{ position: 'fixed', top: '20px', right: '20px' }}>
          <MaterialUISwitch
            checked={darkMode}
            onChange={toggleDarkMode}
            inputProps={{ 'aria-label': 'toggle dark mode' }}
            color="secondary"
            style={{ marginRight: '10px' }} 
          />
          <Typography variant="body1" color="textPrimary">
          </Typography>
        </div>
        <div className="cards-wrapper">
          <CardsList cards={cards} onDelete={handleDeleteCard} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
