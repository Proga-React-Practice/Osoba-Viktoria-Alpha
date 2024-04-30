import React, { useState } from 'react';
import { TextField, Typography, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { FormContainer, CustomButton } from './style'; 

enum Mood {
  Happy = "Happy",
  Sad = "Sad",
  Energetic = "Energetic",
  Relaxing = "Relaxing",
  Chill = "Chill",
  PumpUp = "Pump-up",
}

enum Genre {
  Pop = "Pop",
  Rock = "Rock",
  HipHopRap = "Hip-hop/Rap",
  ElectronicDance = "Electronic/Dance",
  RnBSoul = "R&B/Soul",
  Classical = "Classical",
  Jazz = "Jazz",
  Country = "Country",
  Alternative = "Alternative",
  Indie = "Indie",
}

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  age: string;
  mood: Mood | '';
  genres: Genre[];
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    mood: '',
    genres: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMoodChange = (e: SelectChangeEvent<Mood>) => {
    const selectedMood = e.target.value as Mood;
    setFormData({ ...formData, mood: selectedMood });
  };
  
  const handleGenreChange = (e: SelectChangeEvent<typeof formData.genres>) => {
    const selectedGenres = e.target.value as Genre[];
    setFormData({ ...formData, genres: selectedGenres });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.age || !formData.mood || formData.genres.length === 0) {
      alert('Please fill in all fields.');
      return;
    }

    if (formData.genres.length > 3) {
      alert('Please select up to 3 genres.');
      return;
    }

    onSubmit(formData);
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      name: '',
      age: '',
      mood: '',
      genres: [],
    });
  };

  return (
    <Box>
    <FormContainer> 
      <form onSubmit={handleSubmit}>
        <Typography variant="h2" gutterBottom>
          Playlist Preferences
        </Typography>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          label="Age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel>Mood</InputLabel>
          <Select
            label="Mood"
            name="mood"
            value={formData.mood}
            onChange={handleMoodChange}
            required
          >
            {Object.values(Mood).map(mood => (
              <MenuItem key={mood} value={mood}>{mood}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel>Genre Preferences (select up to 3)</InputLabel>
          <Select
            multiple
            label="Genre Preferences (select up to 3)"
            name="genres"
            value={formData.genres}
            onChange={handleGenreChange}
            required
          >
            {Object.values(Genre).map(genre => (
              <MenuItem key={genre} value={genre}>
                {genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <CustomButton type="submit" variant="contained" color="primary">
          Submit
        </CustomButton>
        <CustomButton type="button" onClick={clearForm} variant="contained" color="secondary">
          Clear Form
        </CustomButton>
      </form>
    </FormContainer>
    </Box>
  );
};

export default Form;
