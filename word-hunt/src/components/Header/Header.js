import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material';
import React from 'react';
import './Header.css';
import categories from '../../data/category';

const Header = ({ category, setCategory, word, setWord, LightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightMode ? '#000' : '#fff',
      },
      mode: LightMode ? 'light' : 'dark',
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord('');
  };
  return (
    <div className="header">
      <span className="title">{word ? word : 'Word Hunt'}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word"
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            variant="standard"
          >
            {categories.map((item) => (
              <MenuItem key={item.label} value={item.label}>
                {item.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
