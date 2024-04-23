// Form.tsx
import React, { useState } from 'react';
import './Form.css'; 

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
  mood: Mood;
  genres: Genre[];
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    mood: Mood.Happy,
    genres: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value as Genre);
    setFormData({ ...formData, genres: selectedGenres });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      age: '',
      mood: Mood.Happy,
      genres: [],
    });
  };

  const clearForm = () => {
    setFormData({
      name: '',
      age: '',
      mood: Mood.Happy,
      genres: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h2>Playlist Preferences</h2>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Mood:
        <select name="mood" value={formData.mood} onChange={handleInputChange} >
          <option value="" disabled>Select mood</option>
          {Object.values(Mood).map(mood => (
            <option key={mood} value={mood}>{mood}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Genre Preferences (select up to 3):
        <select multiple name="genres" value={formData.genres} onChange={handleGenreChange} required>
          {Object.values(Genre).map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
      <button type="button" onClick={clearForm}>Clear Form</button>
    </form>
  );
};

export default Form;
