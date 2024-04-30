import { styled, Box, Button } from '@mui/material';
import { Card as MuiCard} from '@mui/material';

export const GlobalStyle = styled('div')({
  '@global': {
    '@import': "url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap')",
    body: {
      fontFamily: '"Montserrat", sans-serif',
      margin: '40px',
    },
  },
});



export const FormContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  maxWidth: 400,
  padding: 40,
  border: 'none', 
  overflow: 'hidden', 
  opacity: 0,
  transform: 'perspective(1000px) rotateY(-90deg)',
  animation: 'form-flip-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',

  '@keyframes form-flip-in': {
    '0%': {
      opacity: 0,
      transform: 'perspective(1000px) rotateY(-90deg)',
    },
    '80%': {
      opacity: 1,
      transform: 'perspective(1000px) rotateY(10deg)',
    },
    '100%': {
      opacity: 1,
      transform: 'perspective(1000px) rotateY(0deg)',
    },
  },

  '@media screen and (max-width: 600px)': {
    maxWidth: '90vw',
    padding: 20,
  },

  '& h2': {
    marginBottom: 20,
    fontSize: 24,
    color: 'rgb(100, 106, 243)',
  },

  '& label': {
    display: 'block',
    marginBottom: 10,
    fontSize: 16,
  },

  '& .MuiFormControl-root': {
    marginBottom: 20,
  },

  '& .MuiButton-root': {
    marginTop: 20,
  },

  '& .MuiSelect-root': {
    color: 'rgb(100, 106, 243)',
  },

  '& .MuiInputBase-root': {
    color: 'rgb(100, 106, 243)',
  },

  '& .MuiOutlinedInput-root': {
    border: 'none', 
  },

  '& .MuiInputLabel-root': {
    color: 'rgb(100, 106, 243)',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    border: '0.1px solid transparent', 
    borderRadius: 'inherit',
    borderImage: 'linear-gradient(to bottom, #646bf3, #ffffff) 50', 
  },
});



export const DeleteButton = styled(Button)({
  background: 'linear-gradient(to right, #646bf3, #ffffff)',
  border: 'none',
  color: 'black',
  padding: '8px 20px',
  borderRadius: 4,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',

  '&:hover': {
    background: 'linear-gradient(to right, #ffffff, #646bf3)',
  },

  '& span': {
    fontSize: 'small',
  },
});

export const CustomButton = styled(Button)({
  width: 150,
  height: 35,
  margin: '0.5em',
  color: 'black',
  border: 'none',
  borderRadius: 5,
  fontSize: 15,
  cursor: 'pointer',
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',

  '&:hover': {
    color: 'black',
  },

  '&:after': {
    content: '""',
    background: 'white',
    position: 'absolute',
    zIndex: -1,
    left: '-20%',
    right: '-20%',
    top: 0,
    bottom: 0,
    transform: 'skewX(-45deg) scale(0, 1)',
    transition: 'all 0.5s',
  },

  '&:hover:after': {
    transform: 'skewX(-45deg) scale(1, 1)',
  },
});

export const AppContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  maxWidth: 1400,
  margin: '0 auto',
  padding: 20,
});

export const ToggleContainer = styled(Box)({
  position: 'absolute',
  top: 20,
  right: 20,
});

export const CardsWrapper = styled(Box)({
  flex: 1,
  maxHeight: '95vh',
  overflowY: 'auto',
  overflowX: 'hidden',
  display: 'flex',
  flexWrap: 'wrap',
  gap: 20,

  '&::-webkit-scrollbar': {
    width: 8,
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: 6,
  },
});

export const CardContainer = styled(MuiCard)({
  position: 'relative',
  width: 370,
  height: 250,
  borderRadius: 14,
  zIndex: 1111,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 18,
  border: 'none',
  animation: 'fadeIn 0.5s ease forwards',

  '& .bg': {
    position: 'absolute',
    top: 5,
    left: 5,
    width: 360,
    height: 240,
    zIndex: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    left: '50%',
    width: 370,
    height: 250,
    borderRadius: '50%',
    backgroundColor: 'rgb(100, 106, 243)',
    opacity: 0.2,
    animation: 'blob-bounce 5s infinite ease',
    transform: 'translate(-100%, -100%) translate3d(0, 0, 0)',
  },

  '& .card-content': {
    position: 'relative',
    zIndex: 3,
  },

  '@keyframes blob-bounce': {
    '0%': {
      transform: 'translate(-100%, -100%) translate3d(0, 0, 0)',
    },
    '25%': {
      transform: 'translate(-100%, -100%) translate3d(100%, 0, 0)',
    },
    '50%': {
      transform: 'translate(-100%, -100%) translate3d(100%, 100%, 0)',
    },
    '75%': {
      transform: 'translate(-100%, -100%) translate3d(0, 100%, 0)',
    },
    '100%': {
      transform: 'translate(-100%, -100%) translate3d(0, 0, 0)',
    },
  },

  '@keyframes fadeIn': {
    from: {
      opacity: 0,
      transform: 'translateY(-20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

