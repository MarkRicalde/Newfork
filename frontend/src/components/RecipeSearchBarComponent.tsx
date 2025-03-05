import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import { Recipe } from '../types/types'; // Import the Recipe type

const DEBOUNCETIME = 500;

const RecipeSearchBar: React.FC<{ setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>> }> = ({ setRecipes }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const fetchRecipes = async () => {
      const url = searchQuery
        ? `${process.env.REACT_APP_API_URL}/recipes/search?query=${searchQuery}`
        : `${process.env.REACT_APP_API_URL}/recipes/`;  // If searchQuery is empty, fetch all recipes

      try {
        const response = await axios.get(url);
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchRecipes();
    }, DEBOUNCETIME); //Fetch recipes after timing stops for 500

    return () => {
      clearTimeout(debounceTimeout); // Clear timeout if the user types again
    };
  }, [searchQuery, setRecipes]); // Effect runs whenever searchQuery changes

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // Update search query state
  };

  return (
    <TextField
      label="Search for recipes..."
      variant="outlined"
      value={searchQuery}
      onChange={handleSearchChange}
      style={{ marginBottom: '1rem', width: '40%' }}
    />
  );
};

export default RecipeSearchBar;
