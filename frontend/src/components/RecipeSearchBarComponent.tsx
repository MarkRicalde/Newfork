import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearchBar = ({ setRecipes }: { setRecipes: React.Dispatch<React.SetStateAction<any[]>> }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Make a request to the backend API with the search query
      const response = await axios.get(`http://localhost:5000/api/recipes/search?query=${searchQuery}`);
      setRecipes(response.data); // Update the state with the search results
    } catch (error) {
      console.error("Error searching for recipes:", error);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for recipes..."
        className="search-input"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default RecipeSearchBar;
