// useRecipeSearch.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Recipe } from '../types/types';

const DEBOUNCETIME = 500;

export const useRecipeSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // For loading state
  const [error, setError] = useState<string | null>(null);  // For error state

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);  // Start loading when fetching
      setError(null); // Reset error state

      const url = searchQuery
        ? `${process.env.REACT_APP_API_URL}/recipes/search?query=${searchQuery}`
        : `${process.env.REACT_APP_API_URL}/recipes/`;

      try {
        const response = await axios.get(url);
        setRecipes(response.data);
      } catch (err) {
        setError('Failed to load recipes');
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchRecipes();
    }, DEBOUNCETIME);

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery]);

  return { recipes, searchQuery, setSearchQuery, loading, error };
};
