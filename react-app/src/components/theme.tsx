import { createTheme } from '@mui/material';

export const createCustomTheme = (darkMode: boolean) => {
  return createTheme({
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
};
