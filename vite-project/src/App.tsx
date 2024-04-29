import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import CardsList from './components/CardsList';
import MaterialUISwitch from './components/StyledSwitch'; 
import { ThemeProvider } from '@mui/material';
import { createCustomTheme } from './components/theme';
import { AppContainer, CardsWrapper, ToggleContainer, GlobalStyle } from './components/style'; // Import your styled components file here

interface CardData {
  name: string;
  age: string;
  mood: string | null;
  genres: string[];
}

const App: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createCustomTheme(darkMode);

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    document.body.style.color = theme.palette.text.primary;
  }, [theme]);

  const handleFormSubmit = (formData: CardData) => {
    setCards([...cards, formData]);
  };

  const handleDeleteCard = (index: number) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
  
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Form onSubmit={handleFormSubmit} />
        <CardsWrapper>
          <ToggleContainer>
            <MaterialUISwitch
              checked={darkMode}
              onChange={handleToggleDarkMode}
              inputProps={{ 'aria-label': 'toggle dark mode' }}
              color="secondary"
              sx={{ mr: 1 }}
            />
          </ToggleContainer>
          <CardsList cards={cards} onDelete={handleDeleteCard} />
        </CardsWrapper>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
