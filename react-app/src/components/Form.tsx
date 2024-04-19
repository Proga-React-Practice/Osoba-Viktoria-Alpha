// Form.tsx
import React, { useState } from 'react';
import './Form.css'; 

interface FormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  name: string;
  age: string;
  mood: string;
  genres: string[];
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    mood: '',
    genres: [],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({ ...formData, genres: selectedGenres });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      age: '',
      mood: '',
      genres: [],
    });
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
    <form onSubmit={handleSubmit}>
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
        <select name="mood" value={formData.mood} onChange={handleInputChange} required>
          <option value="">Select mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Energetic">Energetic</option>
          <option value="Relaxing">Relaxing</option>
          <option value="Chill">Chill</option>
          <option value="Pump-up">Pump-up</option>
        </select>
      </label>
      <br />
      <label>
        Genre Preferences (select up to 3):
        <select multiple name="genres" value={formData.genres} onChange={handleGenreChange} required>
          <option value="Pop">Pop</option>
          <option value="Rock">Rock</option>
          <option value="Hip-hop/Rap">Hip-hop/Rap</option>
          <option value="Electronic/Dance">Electronic/Dance</option>
          <option value="R&B/Soul">R&B/Soul</option>
          <option value="Classical">Classical</option>
          <option value="Jazz">Jazz</option>
          <option value="Country">Country</option>
          <option value="Alternative">Alternative</option>
          <option value="Indie">Indie</option>
        </select>
      </label>
      <br />
      <button className="bn47"  type="submit">Submit</button>
      <button className="button-86"  type="button" onClick={clearForm}>Clear Form</button>
    </form>
  );
};

export default Form;