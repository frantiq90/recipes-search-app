import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { fetchRecipes } from './api';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchRecipes(query);
      setRecipes(results);
    } catch (err) {
      setError('Failed to fetch recipes');
    }
    setLoading(false);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Box display="flex" justifyContent="center" marginTop={2}>
        <CircularProgress />
        </Box>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
};

export default App;
