import React, { useState, useEffect } from 'react';
import RecipeSearchBar from '../components/RecipeSearchBarComponent';
import RecipeGrid from '../components/RecipeGridComponent';
import { Recipe } from '../types/types'; //
import { getAllRecipes } from '../api/RecipeApi';
import "../styles/HomePage.css"

const Homepage: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getAllRecipes(); // Fetch all recipes
        setRecipes(response);
      } catch (err) {
        setError('Failed to load recipes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="home-page-container">
      <h1 className="centered-heading" style={{ fontFamily: 'Arial, sans-serif' }}>
        Newfork
      </h1>
      <RecipeSearchBar setRecipes={setRecipes}/>

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
