import React from 'react';
import RecipeSearchBar from '../components/RecipeSearchBarComponent';
import RecipeGrid from '../components/RecipeGridComponent';
import { useRecipeSearch } from '../hooks/useRecipeSearch';
import "../styles/HomePage.css";

const Homepage: React.FC = () => {
  const { recipes, searchQuery, setSearchQuery, loading, error } = useRecipeSearch();

  return (
    <div className="home-page-container">
      <h1 className="centered-heading" style={{ fontFamily: 'Arial, sans-serif' }}>
        Newfork
      </h1>
      <RecipeSearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <RecipeGrid recipes={recipes} />
      )}
    </div>
  );
};

export default Homepage;
